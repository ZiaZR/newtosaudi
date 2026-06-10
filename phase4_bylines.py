"""Phase 4 — C-13: Add 'NewToSaudi Editorial Team' author byline to all content pages."""
import os, re

# Content page directories — skip utility pages
CONTENT_DIRS = {'work', 'business', 'life', 'relocate', 'cities', 'resources', 'services', '.'}
SKIP_FILES = {
    'contact.html', 'terms.html', 'privacy.html', '404.html',
    'apps.html',  # root orphan
}

BYLINE = (
    '\n      <p class="article-byline" '
    'style="font-size:.76rem;color:rgba(255,255,255,.45);margin:.55rem 0 0;'
    'letter-spacing:.02em;font-weight:500">'
    'By <strong style="color:rgba(255,255,255,.65)">NewToSaudi Editorial Team</strong>'
    '</p>'
)

# Match the first </h1> in the document body
H1_CLOSE = re.compile(r'(</h1>)', re.IGNORECASE)

pages_fixed = 0
for root, dirs, files in os.walk('.'):
    # Normalise root to just the top-level folder name
    folder = os.path.normpath(root).split(os.sep)[0] if root != '.' else '.'
    # Only process content dirs
    rel = os.path.relpath(root, '.')
    top = rel.split(os.sep)[0]
    if top not in CONTENT_DIRS and rel != '.':
        continue

    for fname in files:
        if not fname.endswith('.html'):
            continue
        if fname in SKIP_FILES:
            continue
        path = os.path.join(root, fname)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'article-byline' in content:
            print(f'  SKIP {path} — byline already present')
            continue
        if '<h1' not in content.lower():
            continue
        # Insert byline after first </h1>
        new_content, n = H1_CLOSE.subn(r'\1' + BYLINE, content, count=1)
        if n and new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'  DONE {path}')
            pages_fixed += 1

print(f'\nC-13 complete: author bylines added to {pages_fixed} pages')
