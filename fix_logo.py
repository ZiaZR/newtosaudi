import glob, re
files = list(set(glob.glob('**/*.html', recursive=True) + glob.glob('*.html')))
fixed = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        c = fh.read()
    new = c.replace('class="nav__logo-primary" style="height:36px;display:none"',
                    'class="nav__logo-primary" style="height:36px"')
    if new != c:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(new)
        fixed += 1
print(f'Fixed logo on {fixed} pages')
