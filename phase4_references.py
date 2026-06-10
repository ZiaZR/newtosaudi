"""Phase 4 — Inject page-specific References & Official Sources sections above footer."""
import re

FOOTER_ANCHOR = '<footer class="footer">'

def make_block(refs):
    """Build the references-section HTML from a list of (num, name, claim, url) tuples."""
    items = ""
    for i, (name, claim, url) in enumerate(refs, 1):
        display = url.replace("https://", "")
        items += f"""        <li class="references__item">
          <span class="references__num">{i}.</span>
          <strong class="references__body-name">{name}</strong>
          <span class="references__separator">&mdash;</span>
          <span class="references__claim">{claim}</span>
          <a class="references__link" href="{url}" target="_blank" rel="noopener noreferrer">{display} &#8599;</a>
        </li>\n"""
    return f"""
<!-- ── REFERENCES & OFFICIAL SOURCES ── -->
<section class="references-section">
  <div class="container">
    <div class="references__inner">
      <h2 class="references__heading">References &amp; Official Sources</h2>
      <p class="references__intro">The information on this page is drawn from official Saudi government bodies and regulatory authorities. Regulations change frequently &mdash; verify current requirements directly with the relevant authority before making any legal, financial, or business decisions.</p>
      <ol class="references__list">
{items}      </ol>
      <p class="references__footer">
        <span>Last reviewed: June 2026</span>
        <a href="/about">About NewToSaudi</a>
        <a href="/contact">Report an inaccuracy</a>
      </p>
    </div>
  </div>
</section>

"""

PAGES = {
    "business/start-a-company.html": [
        ("Ministry of Investment (MISA)",
         "Foreign investment licensing, MISA license requirements and approved sector activity codes.",
         "https://misa.gov.sa"),
        ("Invest Saudi — MISA Licensing Portal",
         "Online portal for submitting foreign investment license applications.",
         "https://invest.gov.sa"),
        ("Ministry of Commerce (MC)",
         "Commercial Registration (CR) issuance and company name reservation.",
         "https://mc.gov.sa"),
        ("ZATCA — Zakat, Tax and Customs Authority",
         "Tax registration; 20% corporate income tax (Royal Decree M/1 of 1425H) for foreign-owned companies; 15% VAT.",
         "https://zatca.gov.sa"),
        ("Qiwa Platform",
         "Employer registration, work permit management, and Nitaqat (Saudization) compliance.",
         "https://qiwa.sa"),
        ("Saudi Chambers Federation",
         "Chamber of Commerce membership registration required for commercial entities.",
         "https://chambers.org.sa"),
        ("GOSI — General Organization for Social Insurance",
         "Employer registration and social insurance contribution rates for Saudi and expatriate employees.",
         "https://gosi.gov.sa"),
        ("MHRSD — Ministry of Human Resources and Social Development",
         "Saudi Labour Law (Royal Decree M/51), Saudization requirements, and employment regulations.",
         "https://hrsd.gov.sa"),
    ],

    "business/tax-guide.html": [
        ("ZATCA — Zakat, Tax and Customs Authority",
         "Corporate income tax (Royal Decree M/1 of 1425H); VAT at 15% (Royal Decree M/113); 2.5% Zakat; withholding tax schedules; ZATCA online filing portal.",
         "https://zatca.gov.sa"),
        ("Ministry of Investment (MISA)",
         "Double taxation treaty information and foreign investor tax guidance.",
         "https://misa.gov.sa"),
        ("Saudi Central Bank (SAMA)",
         "Transfer pricing regulations and financial sector oversight for banking and insurance entities.",
         "https://sama.gov.sa"),
        ("MHRSD — Ministry of Human Resources and Social Development",
         "Wage Protection System (WPS) compliance and payroll obligations for employers.",
         "https://hrsd.gov.sa"),
    ],

    "business/free-zones.html": [
        ("Special Economic Zones Authority (SEZA)",
         "SEZ Law (Royal Decree M/87, 2022); 5% corporate income tax for qualifying SEZ entities; zone-specific investment frameworks.",
         "https://seza.gov.sa"),
        ("Ministry of Investment (MISA)",
         "Free zone investment licensing, zone eligibility, and investor services portal.",
         "https://misa.gov.sa"),
        ("ZATCA — Zakat, Tax and Customs Authority",
         "Customs duty exemption frameworks and tax incentive structures applicable in SEZs.",
         "https://zatca.gov.sa"),
        ("Invest Saudi — MISA Licensing Portal",
         "Entry point for submitting investment license applications for SEZ and mainland setups.",
         "https://invest.gov.sa"),
    ],

    "business/investment-guide.html": [
        ("Ministry of Investment (MISA)",
         "Investor services portal, Vision 2030 sector opportunity guides, and investment licensing.",
         "https://misa.gov.sa"),
        ("Invest Saudi — MISA Licensing Portal",
         "Online investment license submission and sector-specific entry requirements.",
         "https://invest.gov.sa"),
        ("ZATCA — Zakat, Tax and Customs Authority",
         "Tax incentive structures, withholding tax rates for foreign investors, and VAT registration.",
         "https://zatca.gov.sa"),
        ("MHRSD — Ministry of Human Resources and Social Development",
         "Labour law framework governing employment of Saudi and expatriate staff.",
         "https://hrsd.gov.sa"),
        ("Qiwa Platform",
         "Employer-side labour compliance, work permit issuance, and Nitaqat monitoring.",
         "https://qiwa.sa"),
    ],

    "business/hiring-guide.html": [
        ("MHRSD — Ministry of Human Resources and Social Development",
         "Saudi Labour Law (Royal Decree M/51); end-of-service gratuity formula (Article 84); annual leave entitlements (Article 109); WPS enforcement.",
         "https://hrsd.gov.sa"),
        ("Qiwa Platform",
         "Employment contract registration, work permit applications, Nitaqat compliance dashboard, and Wage Protection System.",
         "https://qiwa.sa"),
        ("GOSI — General Organization for Social Insurance",
         "Mandatory social insurance contributions for Saudi nationals and occupational hazard coverage for expatriate employees.",
         "https://gosi.gov.sa"),
        ("Ministry of Investment (MISA)",
         "Expatriate work permit quotas and foreign workforce employment regulations.",
         "https://misa.gov.sa"),
    ],

    "work/iqama-guide.html": [
        ("Jawazat — General Directorate of Passports",
         "Iqama issuance, renewal, and transfer procedures; exit/re-entry visa regulations; fine payment for overstay (SAR 100/day — verify current caps at jawazat.gov.sa).",
         "https://jawazat.gov.sa"),
        ("Absher — National Government Portal",
         "Official platform for Iqama status checks, expiry date lookup, exit/re-entry visa activation, and outstanding fine settlement.",
         "https://absher.sa"),
        ("Qiwa Platform",
         "Employer-to-employer Iqama transfer requests and 2021 Labour Reform Initiative grace period processing.",
         "https://qiwa.sa"),
        ("MHRSD — Ministry of Human Resources and Social Development",
         "Labour complaints portal, passport confiscation reporting, and 90-day post-termination residency grace period (2021 Labour Reform Initiative).",
         "https://hrsd.gov.sa"),
        ("Musaned",
         "MHRSD-operated platform for domestic worker contract management and labour complaint submission.",
         "https://musaned.com.sa"),
        ("Premium Residency Center",
         "Official portal for the Saudi Premium Residency (Green Card) programme — permanent and temporary categories.",
         "https://premiumresidency.gov.sa"),
    ],

    "work/work-visa.html": [
        ("Jawazat — General Directorate of Passports",
         "Entry visa requirements, residency regulations, and visa status verification.",
         "https://jawazat.gov.sa"),
        ("Absher — National Government Portal",
         "Visa status checks, government e-services, and document management for residents and visitors.",
         "https://absher.sa"),
        ("MHRSD — Ministry of Human Resources and Social Development",
         "Work permit regulations, employment contract requirements, and labour law for expatriate workers.",
         "https://hrsd.gov.sa"),
        ("Qiwa Platform",
         "Work permit applications, employer sponsorship management, and labour compliance.",
         "https://qiwa.sa"),
    ],

    "relocate/before-you-arrive.html": [
        ("Jawazat — General Directorate of Passports",
         "Entry visa requirements, travel document validity rules, and residency entry conditions.",
         "https://jawazat.gov.sa"),
        ("ZATCA — Saudi Customs",
         "Prohibited and restricted items list, personal effects customs declarations, and duty-free allowances.",
         "https://zatca.gov.sa"),
        ("SFDA — Saudi Food and Drug Authority",
         "Prescription and controlled medication import rules; Naba&#39;h system for personal drug import approval. Pre-approval is mandatory for controlled substances before arrival.",
         "https://sfda.gov.sa"),
        ("Absher — National Government Portal",
         "Pre-arrival government services setup, document pre-registration, and Iqama preparation.",
         "https://absher.sa"),
    ],

    "life/banking.html": [
        ("Saudi Central Bank (SAMA)",
         "Banking sector regulation, KYC/AML account-opening requirements for expatriate residents, and consumer protection standards.",
         "https://sama.gov.sa"),
        ("MHRSD — Ministry of Human Resources and Social Development",
         "Wage Protection System (WPS) — employer obligations for salary disbursement to bank accounts.",
         "https://hrsd.gov.sa"),
        ("Qiwa Platform",
         "WPS compliance monitoring and employer salary disbursement verification.",
         "https://qiwa.sa"),
    ],

    "life/healthcare.html": [
        ("CCHI — Council of Cooperative Health Insurance",
         "Mandatory employer-provided health insurance law; approved insurance provider registry; minimum policy standards for all private sector employees.",
         "https://cchi.gov.sa"),
        ("Saudi Central Bank (SAMA)",
         "Insurance sector regulation, licensed insurer oversight, and consumer complaint handling for health insurance disputes.",
         "https://sama.gov.sa"),
        ("MHRSD — Ministry of Human Resources and Social Development",
         "Employer obligations to provide health insurance within 30 days of Iqama issuance; reportable labour violation framework.",
         "https://hrsd.gov.sa"),
    ],
}


def inject(path, block):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'references-section' in content:
        print(f"  SKIP {path} — references block already present")
        return False
    if FOOTER_ANCHOR not in content:
        print(f"  ERROR {path} — footer anchor not found")
        return False
    new_content = content.replace(FOOTER_ANCHOR, block + FOOTER_ANCHOR, 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"  DONE {path}")
    return True


injected = 0
for page_path, refs in PAGES.items():
    block = make_block(refs)
    if inject(page_path, block):
        injected += 1

print(f"\nPhase 4 complete: references sections injected into {injected}/10 pages")
