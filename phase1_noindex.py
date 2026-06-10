"""Phase 1 — C-11 + H-16: Add noindex to consultant-profile.html and blog/index.html"""

pages = [
    'services/consultant-profile.html',
    'blog/index.html',
]

NOINDEX = '<meta name="robots" content="noindex, nofollow">'

for path in pages:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    if NOINDEX in c:
        print(f"  SKIP {path} — noindex already present")
        continue
    # Insert after <meta charset="UTF-8"> line
    c = c.replace('<meta charset="UTF-8">', f'<meta charset="UTF-8">\n  {NOINDEX}', 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"  DONE {path} — noindex added")

print("C-11 + H-16: noindex applied to consultant-profile.html and blog/index.html")
