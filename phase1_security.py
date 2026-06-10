"""Phase 1 — C-02: Remove obfuscated JS injection from index.html"""
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the entire obfuscated script block that injects fake browser plugins
# It starts with <script type='text/javascript' nonce= and ends with </script>
# before the GA4 comment
pattern = r"<script type='text/javascript' nonce=\"[^\"]+\">.*?</script>"
cleaned = re.sub(pattern, '', content, count=1, flags=re.DOTALL)

if cleaned == content:
    print("WARNING: Pattern not found — check manually")
else:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(cleaned)
    print("C-02 DONE: Removed obfuscated JS injection from index.html")
    removed_chars = len(content) - len(cleaned)
    print(f"  Removed {removed_chars} chars of obfuscated script")
