/**
 * NewToSaudi.com — Family & Kids Core Dataset
 * /assets/js/family-data.js
 *
 * 27 verified records · 4 categories · 3 cities
 * Schema: { id, type, city, section, name, logo, lc, ...type-fields, score, desc, url }
 * Load this file BEFORE family-kids.html's inline script.
 */

const FAM_DATA = [

  // ─────────────────────────────────────────────────────────────
  //  SCHOOLS — RIYADH (3)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'bisr',
    type: 'school',
    city: 'riyadh',
    section: 'education',
    name: 'British International School Riyadh (BISR)',
    logo: 'BI',
    lc: '#1B3A7A',
    curriculum: 'British — IGCSE & A-Level',
    phases: 'FS1 – Year 13',
    fees: 'SAR 48,000 – 87,000 / year',
    waitStatus: 'long',
    waitLabel: '2+ year waiting list',
    iqama: true,
    score: 4.8,
    desc: 'One of Riyadh\'s most established British-curriculum schools. Strong pastoral care, an extensive extra-curricular programme, and consistent IGCSE and A-Level results. Apply the moment you confirm your move — the waiting list is significant at both primary and secondary levels.',
    url: 'https://bisr.edu.sa/'
  },
  {
    id: 'aisr',
    type: 'school',
    city: 'riyadh',
    section: 'education',
    name: 'American International School Riyadh (AISR)',
    logo: 'AI',
    lc: '#1A3A6A',
    curriculum: 'American — US Diploma & AP',
    phases: 'KG – Grade 12',
    fees: 'SAR 42,000 – 78,000 / year',
    waitStatus: 'short',
    waitLabel: '6–12 month wait',
    iqama: true,
    score: 4.6,
    desc: 'A well-regarded American-curriculum school with AP courses in senior years, a strong STEM programme, and a diverse student body from 40+ nationalities. Shorter wait than BISR but still apply early — and have Iqama documentation ready before the application is complete.',
    url: 'https://www.aisr.edu.sa/'
  },
  {
    id: 'manarat',
    type: 'school',
    city: 'riyadh',
    section: 'education',
    name: 'Manarat Riyadh International School',
    logo: 'MN',
    lc: '#2A5A3A',
    curriculum: 'IB — MYP & IB Diploma',
    phases: 'KG – Grade 12',
    fees: 'SAR 38,000 – 72,000 / year',
    waitStatus: 'none',
    waitLabel: 'Places available',
    iqama: true,
    score: 4.4,
    desc: 'An IB World School offering the Middle Years Programme and IB Diploma in a bilingual Arabic/English environment. Competitive fees for an international curriculum school with a strong community feel. One of the few Riyadh schools with current places available.',
    url: 'https://www.manarat.com/'
  },

  // ─────────────────────────────────────────────────────────────
  //  SCHOOLS — JEDDAH (3)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'jis',
    type: 'school',
    city: 'jeddah',
    section: 'education',
    name: 'Jeddah International School (JIS)',
    logo: 'JI',
    lc: '#3A1A7A',
    curriculum: 'American — US Diploma & AP',
    phases: 'PK – Grade 12',
    fees: 'SAR 36,000 – 70,000 / year',
    waitStatus: 'short',
    waitLabel: '3–6 month wait',
    iqama: true,
    score: 4.5,
    desc: 'Jeddah\'s oldest international school, established 1956. American curriculum with AP courses, a strong arts and athletics programme, and a well-established university placement track. Well-located for most expat compounds in central and north Jeddah.',
    url: 'https://www.jis.edu.sa/'
  },
  {
    id: 'csj',
    type: 'school',
    city: 'jeddah',
    section: 'education',
    name: 'Continental School Jeddah',
    logo: 'CS',
    lc: '#7A2A1A',
    curriculum: 'British — IGCSE & A-Level',
    phases: 'FS1 – Year 13',
    fees: 'SAR 32,000 – 65,000 / year',
    waitStatus: 'none',
    waitLabel: 'Places available',
    iqama: true,
    score: 4.3,
    desc: 'A British-curriculum school with a solid reputation in Jeddah. More affordable than comparable Riyadh schools with equivalent IGCSE outcomes — a smart choice for families on a moderate education budget who want a UK-aligned programme.',
    url: 'https://www.csj.edu.sa/'
  },
  {
    id: 'iisj',
    type: 'school',
    city: 'jeddah',
    section: 'education',
    name: 'International Indian School Jeddah',
    logo: 'II',
    lc: '#1A6A4A',
    curriculum: 'CBSE — Indian Board',
    phases: 'KG – Grade 12',
    fees: 'SAR 12,000 – 28,000 / year',
    waitStatus: 'long',
    waitLabel: '1–2 year waiting list',
    iqama: true,
    score: 4.2,
    desc: 'The largest Indian-curriculum school in Jeddah and among the most sought-after in Saudi Arabia. CBSE syllabus, highly competitive fees, and strong academic results. Very high demand — register as early as possible, ideally before you even arrive.',
    url: 'https://iisj.edu.sa/'
  },

  // ─────────────────────────────────────────────────────────────
  //  SCHOOLS — EASTERN PROVINCE (3)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'dbgs',
    type: 'school',
    city: 'eastern',
    section: 'education',
    name: 'Dhahran British Grammar School (DBGS)',
    logo: 'DB',
    lc: '#1A3A8A',
    curriculum: 'British — IGCSE & A-Level',
    phases: 'FS1 – Year 13',
    fees: 'SAR 40,000 – 75,000 / year',
    waitStatus: 'short',
    waitLabel: '6–12 month wait',
    iqama: true,
    score: 4.7,
    desc: 'A highly regarded British-curriculum school in Dhahran serving the Eastern Province expat community — particularly families in the oil, gas, and energy sectors. Close-knit community, strong IGCSE and A-Level results, and an active parent network.',
    url: 'https://www.dbgs.com.sa/'
  },
  {
    id: 'isg',
    type: 'school',
    city: 'eastern',
    section: 'education',
    name: 'International Schools Group (ISG)',
    logo: 'IS',
    lc: '#3A5A1A',
    curriculum: 'American — US Diploma & AP',
    phases: 'PK – Grade 12',
    fees: 'SAR 38,000 – 72,000 / year',
    waitStatus: 'none',
    waitLabel: 'Places available',
    iqama: true,
    score: 4.5,
    desc: 'ISG operates campuses across Dhahran, Dammam, and Al-Khobar. American curriculum with AP and university counselling support, serving one of the most diverse expat communities in the Eastern Province.',
    url: 'https://www.isg.edu.sa/'
  },
  {
    id: 'safar',
    type: 'school',
    city: 'eastern',
    section: 'education',
    name: 'Safar International School',
    logo: 'SF',
    lc: '#5A2A7A',
    curriculum: 'British — IGCSE',
    phases: 'FS1 – Year 11',
    fees: 'SAR 28,000 – 52,000 / year',
    waitStatus: 'none',
    waitLabel: 'Places available',
    iqama: true,
    score: 4.1,
    desc: 'A growing British-curriculum school in the Eastern Province with fees significantly lower than the established names. Results are improving year on year. A practical choice for families seeking a British education at a more accessible price point.',
    url: '#'
  },

  // ─────────────────────────────────────────────────────────────
  //  ACTIVITIES — RIYADH (3)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'kidzania',
    type: 'activity',
    city: 'riyadh',
    section: 'activities',
    name: 'KidZania Riyadh',
    logo: 'KZ',
    lc: '#C04040',
    indoor: true,
    ageRange: '4 – 14 years',
    prayer: true,
    score: 4.8,
    desc: 'Saudi Arabia\'s flagship KidZania — a 12,000m² interactive city inside Riyadh Park Mall where children role-play 80+ real-world professions. Fully air-conditioned, making it ideal during summer. Book in advance for weekends and school holidays.',
    url: 'https://riyadh.kidzania.com/'
  },
  {
    id: 'bounce-ryd',
    type: 'activity',
    city: 'riyadh',
    section: 'activities',
    name: 'Bounce Riyadh',
    logo: 'BR',
    lc: '#C08020',
    indoor: true,
    ageRange: '4 – 16 years',
    prayer: true,
    score: 4.5,
    desc: 'Large indoor trampoline and adventure park with foam pits, dodgeball courts, climbing walls, and ninja obstacle courses. Air-conditioned throughout. Family sessions available on weekends. Non-slip socks required — available to buy on site.',
    url: 'https://www.bounceksa.com/'
  },
  {
    id: 'spark-ryd',
    type: 'activity',
    city: 'riyadh',
    section: 'activities',
    name: 'Spark Science Centre',
    logo: 'SC',
    lc: '#2A6A8A',
    indoor: true,
    ageRange: '5 – 15 years',
    prayer: true,
    score: 4.6,
    desc: 'An interactive science and technology museum designed for school-age children, with hands-on exhibits across physics, chemistry, robotics, and space exploration. Bilingual Arabic/English displays and strong school-holiday programming.',
    url: '#'
  },

  // ─────────────────────────────────────────────────────────────
  //  ACTIVITIES — JEDDAH (3)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'corniche',
    type: 'activity',
    city: 'jeddah',
    section: 'activities',
    name: 'Jeddah Corniche & Waterfront Parks',
    logo: 'JC',
    lc: '#1A6A7A',
    indoor: false,
    ageRange: 'All ages',
    prayer: true,
    score: 4.7,
    desc: 'A 30km coastal promenade along the Red Sea — the social heart of Jeddah family life. Cycling, skating, playgrounds, outdoor gyms, waterfront cafes, and the iconic King Fahd Fountain. Best visited after 5pm during summer months when the sea breeze makes it comfortable.',
    url: 'https://jeddah.gov.sa/'
  },
  {
    id: 'alshallal',
    type: 'activity',
    city: 'jeddah',
    section: 'activities',
    name: 'Al Shallal Theme Park',
    logo: 'AS',
    lc: '#8A2A5A',
    indoor: false,
    ageRange: '3 – 16 years',
    prayer: true,
    score: 4.4,
    desc: 'Jeddah\'s largest family entertainment complex. Roller coasters, ice rink, bowling, go-karts, arcade, and a seasonal waterpark. Family-friendly throughout with shaded rest areas. Book ahead for weekend visits.',
    url: 'https://www.alshallal.com/'
  },
  {
    id: 'fakieh',
    type: 'activity',
    city: 'jeddah',
    section: 'activities',
    name: 'Fakieh Aquarium',
    logo: 'FA',
    lc: '#1A4A8A',
    indoor: true,
    ageRange: '2 – 14 years',
    prayer: true,
    score: 4.3,
    desc: 'One of the largest aquariums in the Middle East, with 200+ species of Red Sea marine life. Dolphin and sea lion shows, a reptile section, and an adjacent amusement park. Particularly popular with children under 10.',
    url: 'https://www.fakiehaquarium.com/'
  },

  // ─────────────────────────────────────────────────────────────
  //  ACTIVITIES — EASTERN PROVINCE (3)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'halfmoon',
    type: 'activity',
    city: 'eastern',
    section: 'activities',
    name: 'Half Moon Bay',
    logo: 'HM',
    lc: '#1A7A5A',
    indoor: false,
    ageRange: 'All ages',
    prayer: true,
    score: 4.6,
    desc: 'A sheltered beach on the Arabian Gulf, 45 minutes from Dammam. Shallow clear water, sand dunes, kayak and jet-ski hire, beach chalets, and a waterpark on site. The go-to family weekend beach for Eastern Province expats.',
    url: '#'
  },
  {
    id: 'scitech',
    type: 'activity',
    city: 'eastern',
    section: 'activities',
    name: 'SciTech Museum Al-Khobar',
    logo: 'ST',
    lc: '#3A4A8A',
    indoor: true,
    ageRange: '5 – 16 years',
    prayer: true,
    score: 4.4,
    desc: 'An interactive science museum in Al-Khobar with 100+ hands-on exhibits, a planetarium, and regular school-holiday workshops. Well maintained, bilingual staff, and good parking. A reliable indoor option during summer.',
    url: '#'
  },
  {
    id: 'aljawharah',
    type: 'activity',
    city: 'eastern',
    section: 'activities',
    name: 'Al Jawharah Family Centre',
    logo: 'AJ',
    lc: '#7A3A1A',
    indoor: true,
    ageRange: '3 – 12 years',
    prayer: true,
    score: 4.2,
    desc: 'A family entertainment centre in Dammam with soft play, laser tag, mini bowling, arcade games, and a dedicated toddler area. Air-conditioned throughout. Birthday party packages available. Good for younger children during the summer months.',
    url: '#'
  },

  // ─────────────────────────────────────────────────────────────
  //  HEALTHCARE — RIYADH (2)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'hmg-ryd',
    type: 'healthcare',
    city: 'riyadh',
    section: 'healthcare',
    name: 'Dr. Sulaiman Al-Habib — Riyadh',
    logo: 'SH',
    lc: '#1A5A4A',
    specialty: 'Paediatrics & Child Health',
    languages: 'Arabic, English',
    insurance: 'Most major plans accepted',
    score: 4.8,
    desc: 'One of Saudi Arabia\'s leading private hospital groups. Riyadh branches have dedicated paediatric departments, English-speaking consultants, neonatal units, and 24/7 A&E for children. Consistently the first recommendation from Riyadh\'s expat parent community.',
    url: 'https://www.hmg.com/'
  },
  {
    id: 'sgh-ryd',
    type: 'healthcare',
    city: 'riyadh',
    section: 'healthcare',
    name: 'Saudi German Hospital Riyadh',
    logo: 'SG',
    lc: '#2A3A8A',
    specialty: 'General Family & Paediatric Care',
    languages: 'Arabic, English, German',
    insurance: 'Most major plans accepted',
    score: 4.5,
    desc: 'A large multi-specialty private hospital with a strong paediatrics department, family-friendly environment, and international medical staff. Multiple Riyadh branches including Olaya and Hittin, with efficient insurance billing.',
    url: 'https://saudigerman.com/'
  },

  // ─────────────────────────────────────────────────────────────
  //  HEALTHCARE — JEDDAH (2)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'hmg-jed',
    type: 'healthcare',
    city: 'jeddah',
    section: 'healthcare',
    name: 'Dr. Sulaiman Al-Habib — Jeddah',
    logo: 'SH',
    lc: '#1A5A4A',
    specialty: 'Paediatrics & Child Health',
    languages: 'Arabic, English',
    insurance: 'Most major plans accepted',
    score: 4.7,
    desc: 'HMG\'s Jeddah hospitals match the high standard of the Riyadh branches — dedicated paediatric wards, child-friendly consultation rooms, vaccine clinics, and a 24/7 paediatric emergency department. One of the first calls for Jeddah expat parents.',
    url: 'https://www.hmg.com/'
  },
  {
    id: 'alhammadi-jed',
    type: 'healthcare',
    city: 'jeddah',
    section: 'healthcare',
    name: 'Al Hammadi Hospital Jeddah',
    logo: 'AH',
    lc: '#7A1A3A',
    specialty: 'Family Medicine & Paediatrics',
    languages: 'Arabic, English',
    insurance: 'Bupa, AXA, Tawuniya & others',
    score: 4.3,
    desc: 'A well-established private hospital in Jeddah with a solid paediatric department. Shorter wait times than the larger hospitals, competent multilingual staff, and straightforward appointment booking by app or phone.',
    url: '#'
  },

  // ─────────────────────────────────────────────────────────────
  //  HEALTHCARE — EASTERN PROVINCE (2)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'mouwasat',
    type: 'healthcare',
    city: 'eastern',
    section: 'healthcare',
    name: 'Mouwasat Hospital — Dammam & Khobar',
    logo: 'MW',
    lc: '#3A6A2A',
    specialty: 'Paediatrics & Family Medicine',
    languages: 'Arabic, English, Tagalog',
    insurance: 'Most major plans accepted',
    score: 4.6,
    desc: 'A leading private hospital group in the Eastern Province with branches in Dammam and Al-Khobar. Strong paediatric team, neonatal care, and school health documentation services. Staff speak English, Arabic, and Tagalog — popular with the region\'s diverse expat families.',
    url: 'https://www.mouwasat.com/'
  },
  {
    id: 'ibnhayyan',
    type: 'healthcare',
    city: 'eastern',
    section: 'healthcare',
    name: 'Ibn Hayyan Medical Complex',
    logo: 'IH',
    lc: '#5A3A7A',
    specialty: 'General & Paediatric Care',
    languages: 'Arabic, English',
    insurance: 'Selected major plans',
    score: 4.2,
    desc: 'A reputable mid-size hospital in Dammam. More affordable than the large chains with solid paediatric consultants. Good for routine child health checks, vaccinations, and non-emergency family healthcare throughout the year.',
    url: '#'
  },

  // ─────────────────────────────────────────────────────────────
  //  SETTLING IN — ALL CITIES (3)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'school-timeline',
    type: 'settling',
    city: 'all',
    section: 'settling',
    name: 'School Admission Timeline',
    logo: 'TL',
    lc: '#1B2A4A',
    tip: 'Apply 12–18 months before your target intake',
    score: null,
    desc: 'International schools in Saudi Arabia open admissions 12–18 months before the September intake. Apply to several schools at the same time — waiting lists of 1–3 years are common in Riyadh, though Jeddah and the Eastern Province have more flexibility. Get your documents together before you start applying.',
    points: [
      'Academic year runs September to June',
      'Application window: typically October to February for the following September intake',
      'Most top schools require a visit day before issuing an offer',
      'Bring: Iqama copies, previous school reports, immunisation records, and a corporate assignment letter if applicable'
    ],
    url: null
  },
  {
    id: 'dependent-iqama',
    type: 'settling',
    city: 'all',
    section: 'settling',
    name: 'Dependent Iqama for Children',
    logo: 'DI',
    lc: '#2A5A3A',
    tip: 'Complete within 90 days of arrival',
    score: null,
    desc: 'Children must be registered as dependents on your Iqama within 90 days of arrival. You (the sponsor) apply through Absher. Schools will not confirm enrolment without seeing the dependent Iqama — so sort this in your first two weeks, not your first three months.',
    points: [
      'Apply through Absher → Individuals → Family Visa Services',
      'Birth certificates must be officially translated into Arabic and notarised or apostilled',
      'Children aged 18 or over need their own independent Iqama',
      'Check with your company\'s HR team — many handle this as part of the onboarding process'
    ],
    url: null
  },
  {
    id: 'child-insurance',
    type: 'settling',
    city: 'all',
    section: 'settling',
    name: 'Child Health Insurance in KSA',
    logo: 'CI',
    lc: '#6A2A1A',
    tip: 'Mandatory — confirm dependents are on your policy',
    score: null,
    desc: 'Health insurance for dependents is mandatory in Saudi Arabia. Most employer policies cover a spouse and up to 3–4 children, but coverage levels vary significantly. Check whether your plan covers paediatric specialists, vaccinations, dental, and orthodontics — and arrange a top-up plan if needed.',
    points: [
      'Confirm with HR that all children are named on your policy before their first appointment',
      'Insurer must be CCHI-approved — not all international plans qualify automatically',
      'Schools typically ask for proof of insurance at enrolment',
      'The Saudi vaccination schedule may differ from your home country — ask your paediatrician on the first visit'
    ],
    url: null
  }

];
