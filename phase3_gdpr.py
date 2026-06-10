"""Phase 3 — C-12: Add GDPR consent note to all newsletter forms across all HTML pages."""
import os, re

CONSENT = '        <p class="newsletter__consent" style="font-size:.78rem;opacity:.7;margin:.6rem 0 0;text-align:center">By subscribing you agree to our <a href="/privacy" style="color:inherit;text-decoration:underline">Privacy Policy</a>. We never sell your data.</p>\n      </form>'

# Match closing </form> tag that belongs to a newsletter form
# Strategy: find the form closing tag and insert consent before it,
# but only in forms that have a newsletter class or newsletter input
NL_FORM_PAT = re.compile(
    r'(<form[^>]*(?:newsletter__form|newsletter-form)[^>]*>.*?)(</form>)',
    re.DOTALL
)

pages_fixed = 0
for root, dirs, files in os.walk('.'):
    for fname in files:
        if not fname.endswith('.html'):
            continue
        path = os.path.join(root, fname)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'newsletter__form' not in content and 'newsletter-form' not in content:
            continue
        if 'newsletter__consent' in content:
            print(f'  SKIP {path} — consent already present')
            continue
        new_content = NL_FORM_PAT.sub(
            lambda m: m.group(1) + '        <p class="newsletter__consent" style="font-size:.78rem;opacity:.7;margin:.6rem 0 0;text-align:center">By subscribing you agree to our <a href="/privacy" style="color:inherit;text-decoration:underline">Privacy Policy</a>. We never sell your data.</p>\n      ' + m.group(2),
            content, count=1
        )
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'  DONE {path}')
            pages_fixed += 1
        else:
            print(f'  NO MATCH {path}')

print(f'\nC-12 complete: GDPR consent added to {pages_fixed} pages')
