#!/usr/bin/env python3
"""
NewToSaudi.com — Component Injection Build Script
==================================================
Scans all HTML files in the project and injects the latest nav/footer
from _components/nav.html and _components/footer.html between the
placeholder comment tags.

Usage:
  python build.py           → dry run (shows what WOULD change, writes nothing)
  python build.py --write   → live run (writes all changes to disk)
  python build.py --file path/to/page.html --write  → single file only

Placeholders required in each HTML file:
  <!-- START GLOBAL NAV -->
  <!-- END GLOBAL NAV -->

  <!-- START GLOBAL FOOTER -->
  <!-- END GLOBAL FOOTER -->
"""

import os
import re
import sys
import argparse
from pathlib import Path

# ── Configuration ──────────────────────────────────────────────────────────────

ROOT        = Path(__file__).parent          # project root = script location
COMPONENTS  = ROOT / "_components"
NAV_FILE    = COMPONENTS / "nav.html"
FOOTER_FILE = COMPONENTS / "footer.html"

# Directories and files to skip entirely
SKIP_DIRS  = {"_components", ".git", "node_modules", "__pycache__"}
SKIP_FILES = set()  # add specific filenames here if needed

# Placeholder patterns (must be exact — case-sensitive)
NAV_START    = "<!-- START GLOBAL NAV -->"
NAV_END      = "<!-- END GLOBAL NAV -->"
FOOTER_START = "<!-- START GLOBAL FOOTER -->"
FOOTER_END   = "<!-- END GLOBAL FOOTER -->"

# ── Colours for terminal output ────────────────────────────────────────────────
GREEN  = "\033[92m"
YELLOW = "\033[93m"
RED    = "\033[91m"
CYAN   = "\033[96m"
BOLD   = "\033[1m"
RESET  = "\033[0m"

def ok(msg):    print(f"  {GREEN}✓{RESET}  {msg}")
def warn(msg):  print(f"  {YELLOW}⚠{RESET}  {msg}")
def err(msg):   print(f"  {RED}✗{RESET}  {msg}")
def info(msg):  print(f"  {CYAN}→{RESET}  {msg}")

# ── Core injection logic ───────────────────────────────────────────────────────

def inject_component(html: str, start_tag: str, end_tag: str, replacement: str) -> tuple[str, bool]:
    """
    Replace everything between start_tag and end_tag (exclusive) with
    replacement. Returns (new_html, was_changed).
    The start and end tags themselves are preserved in the output.
    """
    # Build a pattern that captures start_tag, any content, end_tag
    pattern = re.compile(
        re.escape(start_tag) + r".*?" + re.escape(end_tag),
        re.DOTALL
    )

    new_block = f"{start_tag}\n{replacement.rstrip()}\n{end_tag}"
    new_html, count = pattern.subn(new_block, html)

    if count == 0:
        return html, False  # tag pair not found — leave untouched
    return new_html, (new_html != html)


def process_file(path: Path, nav_html: str, footer_html: str, write: bool) -> str:
    """
    Process one HTML file. Returns one of:
      'updated'   — placeholders found and content changed
      'unchanged' — placeholders found but content already matches
      'missing'   — one or both placeholder pairs absent
      'error'     — file could not be read/written
    """
    try:
        original = path.read_text(encoding="utf-8")
    except Exception as e:
        err(f"{path.relative_to(ROOT)}  —  read error: {e}")
        return "error"

    has_nav    = NAV_START in original and NAV_END in original
    has_footer = FOOTER_START in original and FOOTER_END in original

    if not has_nav and not has_footer:
        warn(f"{path.relative_to(ROOT)}  —  no placeholders found (skipped)")
        return "missing"

    missing_tags = []
    if not has_nav:    missing_tags.append("NAV")
    if not has_footer: missing_tags.append("FOOTER")
    if missing_tags:
        warn(f"{path.relative_to(ROOT)}  —  missing: {', '.join(missing_tags)} placeholder(s)")

    result = original

    if has_nav:
        result, _ = inject_component(result, NAV_START, NAV_END, nav_html)

    if has_footer:
        result, _ = inject_component(result, FOOTER_START, FOOTER_END, footer_html)

    changed = result != original

    if not changed:
        ok(f"{path.relative_to(ROOT)}  —  already up-to-date")
        return "unchanged"

    if write:
        try:
            path.write_text(result, encoding="utf-8")
            ok(f"{path.relative_to(ROOT)}  —  {GREEN}UPDATED{RESET}")
        except Exception as e:
            err(f"{path.relative_to(ROOT)}  —  write error: {e}")
            return "error"
    else:
        info(f"{path.relative_to(ROOT)}  —  would be updated  {YELLOW}[dry run]{RESET}")

    return "updated"


def collect_html_files(target: Path | None) -> list[Path]:
    """Collect all .html files to process."""
    if target:
        return [target]

    files = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        # Prune skipped directories in-place so os.walk doesn't descend
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in filenames:
            if fn.endswith(".html") and fn not in SKIP_FILES:
                files.append(Path(dirpath) / fn)

    return sorted(files)


# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="NewToSaudi.com — nav/footer component injection script"
    )
    parser.add_argument(
        "--write", action="store_true",
        help="Write changes to disk. Without this flag the script is a dry run."
    )
    parser.add_argument(
        "--file", metavar="PATH",
        help="Process a single file instead of the whole project."
    )
    args = parser.parse_args()

    mode = "LIVE WRITE" if args.write else "DRY RUN (no files changed)"
    print(f"\n{BOLD}NewToSaudi.com — Component Injection Build Script{RESET}")
    print(f"Mode: {YELLOW}{mode}{RESET}")
    print("─" * 60)

    # Load components
    if not NAV_FILE.exists():
        print(f"\n{RED}ERROR:{RESET} {NAV_FILE} not found. Aborting.\n")
        sys.exit(1)
    if not FOOTER_FILE.exists():
        print(f"\n{RED}ERROR:{RESET} {FOOTER_FILE} not found. Aborting.\n")
        sys.exit(1)

    nav_html    = NAV_FILE.read_text(encoding="utf-8").strip()
    footer_html = FOOTER_FILE.read_text(encoding="utf-8").strip()
    print(f"  Nav component:    {NAV_FILE.relative_to(ROOT)}  ({len(nav_html):,} chars)")
    print(f"  Footer component: {FOOTER_FILE.relative_to(ROOT)}  ({len(footer_html):,} chars)")
    print("─" * 60)

    # Resolve target file(s)
    target = Path(args.file) if args.file else None
    if target and not target.exists():
        print(f"\n{RED}ERROR:{RESET} File not found: {target}\n")
        sys.exit(1)

    files = collect_html_files(target)
    print(f"  Scanning {len(files)} HTML file(s)...\n")

    # Process
    counts = {"updated": 0, "unchanged": 0, "missing": 0, "error": 0}
    for f in files:
        result = process_file(f, nav_html, footer_html, write=args.write)
        counts[result] += 1

    # Summary
    total = len(files)
    print("\n" + "─" * 60)
    print(f"{BOLD}Summary{RESET}")
    print(f"  Total files scanned : {total}")
    print(f"  {GREEN}Updated             : {counts['updated']}{RESET}")
    print(f"  Unchanged           : {counts['unchanged']}")
    print(f"  {YELLOW}Missing placeholders: {counts['missing']}{RESET}")
    print(f"  {RED}Errors              : {counts['error']}{RESET}")

    if not args.write and counts["updated"] > 0:
        print(f"\n  {YELLOW}→ Dry run complete. Run with --write to apply changes.{RESET}")
    elif args.write and counts["updated"] > 0:
        print(f"\n  {GREEN}✓ {counts['updated']}/{total} file(s) successfully synced.{RESET}")
    elif counts["updated"] == 0 and counts["error"] == 0:
        print(f"\n  {GREEN}✓ All files already up-to-date. Nothing to do.{RESET}")

    print()


if __name__ == "__main__":
    main()
