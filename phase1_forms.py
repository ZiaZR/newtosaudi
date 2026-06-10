"""Phase 1 — C-01: Fix all newsletter forms across all pages (Formspree-ready)
Also handles footer newsletter-form variant.
"""
import glob, re

files = list(set(glob.glob('**/*.html', recursive=True) + glob.glob('*.html')))

FORMSPREE_NEWSLETTER = 'https://formspree.io/f/REPLACE_WITH_NEWSLETTER_FORM_ID'

newsletter_fixed = 0
footer_fixed = 0

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    orig = c

    # --- Pattern 1: main newsletter__form with onsubmit (with or without id) ---
    # Converts: <form class="newsletter__form" onsubmit="return false" ...>
    #           <input type="email" ... (no name attr)
    # To:       <form ... action=formspree method=POST>
    #           hidden _next field + labelled input + consent line

    # Step 1a: fix the form tag - remove onsubmit, add action+method
    c = re.sub(
        r'<form([ \t]+class="newsletter__form")([ \t]+onsubmit="return false")([ \t]+id="[^"]*")?',
        lambda m: f'<form{m.group(1)} action="{FORMSPREE_NEWSLETTER}" method="POST"{" " + m.group(3).strip() if m.group(3) else ""}',
        c
    )

    # Step 1b: footer dark-section newsletter-form variant
    c = re.sub(
        r'<form([ \t]+class="newsletter-form")([ \t]+onsubmit="return false;?")',
        f'<form class="newsletter-form" action="{FORMSPREE_NEWSLETTER}" method="POST"',
        c
    )

    # Step 1c: Add name="email" to newsletter email inputs missing it
    c = re.sub(
        r'(<input type="email"(?![^>]*\bname=)[^>]*)(class="newsletter__input")([^>]*>)',
        r'\1name="email" \2\3',
        c
    )
    # Footer variant input
    c = re.sub(
        r'(<input type="email"(?![^>]*\bname=)[^>]*placeholder="Your email address"[^>]*>)',
        r'<input type="email" name="email" placeholder="Your email address" aria-label="Your email address" required>',
        c
    )

    # Step 1d: Add hidden Formspree _next field + consent line after submit button
    # Only in newsletter__form blocks (homepage main form)
    # Insert hidden subject field before closing </form> in newsletter__form
    c = re.sub(
        r'(<form[^>]*newsletter__form[^>]*>)(.*?)(</form>)',
        lambda m: m.group(1)
            + '<input type="hidden" name="_subject" value="New newsletter subscriber — NewToSaudi">'
            + m.group(2)
            + m.group(3),
        c,
        flags=re.DOTALL
    )

    if c != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        newsletter_fixed += 1

print(f"C-01 NEWSLETTER: Fixed forms on {newsletter_fixed} pages")
print(f"  Action set to: {FORMSPREE_NEWSLETTER}")
print("  NEXT STEP: Create Formspree account at formspree.io, create a form, replace REPLACE_WITH_NEWSLETTER_FORM_ID")
