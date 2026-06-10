"""Fix broken <section id="main-content" tags caused by phase3_a11y.py regex bug.
The script stripped the original class and closing > from the first <section> on each page.
This restores the correct opening tag by reading the original from git history (HEAD~2).
"""
import subprocess, re, os

# Files that need fixing (already fixed index.html manually)
BROKEN = re.compile(r'<section id="main-content"\s*\n')

files_to_fix = []
for root, dirs, files in os.walk('.'):
    for fname in files:
        if not fname.endswith('.html'):
            continue
        path = os.path.join(root, fname).replace('\\', '/')
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        if BROKEN.search(content):
            files_to_fix.append((path, content))

print(f'Found {len(files_to_fix)} files to fix\n')

fixed = 0
for path, content in files_to_fix:
    # Get the original file from git at HEAD~2 (before our audit commits)
    git_path = path.lstrip('./')
    try:
        original = subprocess.check_output(
            ['git', 'show', f'HEAD~2:{git_path}'],
            stderr=subprocess.DEVNULL
        ).decode('utf-8', errors='replace')
    except subprocess.CalledProcessError:
        print(f'  SKIP {path} — not in git history at HEAD~2')
        continue

    # Find the original first <section> tag (without an id) — what the script replaced
    orig_match = re.search(r'<section\b(?![^>]*\bid=)[^>]*>', original)
    if not orig_match:
        print(f'  SKIP {path} — no matching section in original')
        continue

    orig_tag = orig_match.group(0)  # e.g. <section class="page-hero">

    # Build the correct replacement: original tag + id="main-content"
    # Insert id="main-content" before the closing >
    fixed_tag = orig_tag[:-1] + ' id="main-content">'

    # Replace the broken tag in current content
    new_content = BROKEN.sub(fixed_tag + '\n', content, count=1)

    if new_content == content:
        print(f'  NO CHANGE {path}')
        continue

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'  FIXED {path}')
    print(f'         {orig_tag}  ->  {fixed_tag}')
    fixed += 1

print(f'\nDone: {fixed} files restored')
