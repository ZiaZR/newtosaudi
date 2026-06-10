"""Phase 3 — M-01: Add skip-to-content link to all HTML pages."""
import os, re

SKIP_LINK = '<a class="skip-link" href="#main-content">Skip to main content</a>\n'

# Pattern: insert skip link right after <body> opening tag
BODY_PAT = re.compile(r'(<body[^>]*>)', re.IGNORECASE)

pages_fixed = 0
for root, dirs, files in os.walk('.'):
    for fname in files:
        if not fname.endswith('.html'):
            continue
        path = os.path.join(root, fname)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'skip-link' in content:
            print(f'  SKIP {path} — skip link already present')
            continue
        if '<body' not in content.lower():
            continue
        # Insert skip link after <body> tag
        new_content = BODY_PAT.sub(r'\1\n' + SKIP_LINK, content, count=1)
        # Add id="main-content" to first <main> or first <section> after nav
        if 'id="main-content"' not in new_content:
            # Try to add to <main> tag
            new_content = re.sub(r'<main\b(?![^>]*id=)', '<main id="main-content"', new_content, count=1)
            # If no <main>, add to first <section> that doesn't have an id already but comes after nav
            if 'id="main-content"' not in new_content:
                new_content = re.sub(r'(<section\b(?![^>]*id=)[^>]*>)', r'<section id="main-content"', new_content, count=1)
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'  DONE {path}')
            pages_fixed += 1

print(f'\nM-01 complete: skip-to-content added to {pages_fixed} pages')
