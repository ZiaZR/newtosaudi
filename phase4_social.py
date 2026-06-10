"""Phase 4 — C-15: Fix dead href="#" social footer links.
Until real profile URLs are set, make links aria-disabled so they don't mislead users or crawlers.
TO ACTIVATE: replace href="#social-placeholder" with the real URL and remove aria-disabled/tabindex.
"""
import os, re

# Match footer social links with href="#"
# Replace href="#" with href="#social-placeholder" and add aria-disabled + tabindex
SOCIAL_PAT = re.compile(
    r'(<a\s+href="#"\s+class="footer__social-link")',
    re.DOTALL
)
REPLACEMENT = '<a href="#social-placeholder" class="footer__social-link" aria-disabled="true" tabindex="-1" rel="nofollow"'

pages_fixed = 0
for root, dirs, files in os.walk('.'):
    for fname in files:
        if not fname.endswith('.html'):
            continue
        path = os.path.join(root, fname)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'footer__social-link' not in content:
            continue
        if 'aria-disabled="true"' in content and 'footer__social-link' in content:
            print(f'  SKIP {path} — already fixed')
            continue
        new_content = SOCIAL_PAT.sub(REPLACEMENT, content)
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'  DONE {path}')
            pages_fixed += 1

print(f'\nC-15 complete: social links disabled on {pages_fixed} pages')
