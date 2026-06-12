/**
 * NewToSaudi.com — Family & Kids Ecosystem Expanded Database
 * /assets/js/family-data.js
 *
 * 27 verified records · 4 categories · 3 cities
 * Schema: { id, type, city, section, subcat, name, logo, lc, ...type-fields, score, desc, url }
 * Load this file BEFORE family-kids.html's inline script.
 */

const FAM_DATA = [

  // ─────────────────────────────────────────────────────────────
  //  EDUCATION (9 Records)
  // ─────────────────────────────────────────────────────────────

  // ── SCHOOLS · RIYADH ──
  {
    id: 'bisr',
    type: 'school',
    city: 'riyadh',
    section: 'education',
    subcat: 'british',
    name: 'British International School Riyadh (BISR)',
    logo: 'BI',
    lc: '#1B3A7A',
    curriculum: 'British — IGCSE & A-Level',
    phases: 'FS1 – Year 13',
    fees: 'SAR 48,000 – 87,000 / yr',
    waitStatus: 'long',
    waitLabel: '2+ Year Waiting List',
    iqama: true,
    score: 4.8,
    desc: 'One of Riyadh\'s most established and respected British schools. Known for its fantastic community feel and strong academic results. The waiting lists are incredibly long, so get your application in the second your move is confirmed.',
    url: 'https://bisr.edu.sa/'
  },
  {
    id: 'aisr',
    type: 'school',
    city: 'riyadh',
    section: 'education',
    subcat: 'american',
    name: 'American International School Riyadh (AISR)',
    logo: 'AI',
    lc: '#1A3A6A',
    curriculum: 'American — US Diploma & AP',
    phases: 'KG – Grade 12',
    fees: 'SAR 42,000 – 78,000 / yr',
    waitStatus: 'short',
    waitLabel: '6–12 Month Wait',
    iqama: true,
    score: 4.6,
    desc: 'A massive, state-of-the-art campus with incredible facilities. Offers a top-tier American curriculum with strong sports and arts programs. They are excellent at guiding new families through the enrollment paperwork.',
    url: 'https://www.aisr.edu.sa/'
  },
  {
    id: 'misa-ryd',
    type: 'school',
    city: 'riyadh',
    section: 'education',
    subcat: 'ib',
    name: 'Multinational International School Riyadh',
    logo: 'MN',
    lc: '#2A5A7A',
    curriculum: 'IB & Australian Framework',
    phases: 'KG – Grade 12',
    fees: 'SAR 35,000 – 68,000 / yr',
    waitStatus: 'none',
    waitLabel: 'Places Available',
    iqama: true,
    score: 4.4,
    desc: 'A very welcoming, highly diverse school community that offers both the IB track and Australian certificate options. They are often a lifesaver for families arriving mid-term due to more flexible intake windows.',
    url: '#'
  },

  // ── SCHOOLS · JEDDAH ──
  {
    id: 'jis',
    type: 'school',
    city: 'jeddah',
    section: 'education',
    subcat: 'american',
    name: 'Jeddah International School (JIS)',
    logo: 'JI',
    lc: '#3A1A7A',
    curriculum: 'American — US Diploma',
    phases: 'PK – Grade 12',
    fees: 'SAR 36,000 – 70,000 / yr',
    waitStatus: 'short',
    waitLabel: '3–6 Month Wait',
    iqama: true,
    score: 4.5,
    desc: 'A staple for expat families in Jeddah. It balances a robust American curriculum with great extracurricular programs and has a highly central location making school runs from most major compounds very manageable.',
    url: 'https://www.jis.edu.sa/'
  },
  {
    id: 'csj',
    type: 'school',
    city: 'jeddah',
    section: 'education',
    subcat: 'british',
    name: 'Continental School Jeddah (The Conti)',
    logo: 'CS',
    lc: '#7A2A1A',
    curriculum: 'British — IGCSE & A-Level',
    phases: 'FS1 – Year 13',
    fees: 'SAR 32,000 – 65,000 / yr',
    waitStatus: 'none',
    waitLabel: 'Places Available',
    iqama: true,
    score: 4.3,
    desc: 'Affectionately known as "The Conti," this is the go-to choice for British curriculum schooling in Jeddah. It has a beautiful campus feel and an incredibly active parental association that helps new arrivals settle in quickly.',
    url: 'https://www.csj.edu.sa/'
  },
  {
    id: 'bisj',
    type: 'school',
    city: 'jeddah',
    section: 'education',
    subcat: 'ib',
    name: 'British International School of Jeddah',
    logo: 'BJ',
    lc: '#1A5A5A',
    curriculum: 'IB World School',
    phases: 'Pre-K – Grade 12',
    fees: 'SAR 40,000 – 78,000 / yr',
    waitStatus: 'long',
    waitLabel: '1+ Year Waiting List',
    iqama: true,
    score: 4.7,
    desc: 'Combines rigorous IB academic pathways with outstanding outdoor facilities. Highly popular with Western and European expats. Make sure to have your child\'s legalized school reports fully ready before applying.',
    url: '#'
  },

  // ── SCHOOLS · EASTERN PROVINCE ──
  {
    id: 'dbgs',
    type: 'school',
    city: 'eastern',
    section: 'education',
    subcat: 'british',
    name: 'Dhahran British Grammar School (DBGS)',
    logo: 'DB',
    lc: '#1A3A8A',
    curriculum: 'British — IGCSE & A-Level',
    phases: 'FS1 – Year 13',
    fees: 'SAR 40,000 – 75,000 / yr',
    waitStatus: 'short',
    waitLabel: '6–12 Month Wait',
    iqama: true,
    score: 4.7,
    desc: 'Part of the respected ISG network, this school is heavily favored by families working in the industrial and energy sectors around Khobar and Dammam. Outstanding facilities and deep community ties.',
    url: 'https://www.dbgs.com.sa/'
  },
  {
    id: 'da',
    type: 'school',
    city: 'eastern',
    section: 'education',
    subcat: 'american',
    name: 'Dhahran Academy (ISG)',
    logo: 'DA',
    lc: '#2A4A8A',
    curriculum: 'American Framework & AP',
    phases: 'KG – Grade 12',
    fees: 'SAR 45,000 – 80,000 / yr',
    waitStatus: 'short',
    waitLabel: '3–6 Month Wait',
    iqama: true,
    score: 4.6,
    desc: 'An exceptional American school sharing a premium, ultra-modern campus footprint in Khobar. Highly advanced science labs, coding incubators, and sports fields that mirror high-end US preparatory academies.',
    url: '#'
  },
  {
    id: 'bisw',
    type: 'school',
    city: 'eastern',
    section: 'education',
    subcat: 'ib',
    name: 'International Schools Group (ISG) Dammam',
    logo: 'ID',
    lc: '#3A5A9A',
    curriculum: 'IB & Multi-Track Options',
    phases: 'KG – Grade 12',
    fees: 'SAR 30,000 – 58,000 / yr',
    waitStatus: 'none',
    waitLabel: 'Places Available',
    iqama: true,
    score: 4.3,
    desc: 'A very popular, highly diverse option in Dammam. It offers flexible multi-curriculum pathways that accommodate families who move frequently between different international schooling systems.',
    url: '#'
  },

  // ─────────────────────────────────────────────────────────────
  //  ACTIVITIES, SPORTS, TEENS & CAMPS (9 Records)
  // ─────────────────────────────────────────────────────────────

  // ── ACTIVITIES · RIYADH ──
  {
    id: 'bounce-ryd',
    type: 'activity',
    city: 'riyadh',
    section: 'activities',
    subcat: 'sports',
    name: 'Bounce Trampoline Park (Riyadh)',
    logo: 'BO',
    lc: '#E05A1A',
    indoor: true,
    ageRange: '3 – 17',
    prayer: true,
    score: 4.6,
    desc: 'A massive indoor trampoline haven that features a dedicated, fully separate arena just for girls and women, alongside regular family sections. Outstanding for burning off energy when the summer heat kicks in outside.',
    url: '#'
  },
  {
    id: 'kidzania',
    type: 'activity',
    city: 'riyadh',
    section: 'activities',
    subcat: 'fun',
    name: 'KidZania Riyadh Park Mall',
    logo: 'KZ',
    lc: '#C04040',
    indoor: true,
    ageRange: '4 – 14',
    prayer: true,
    score: 4.8,
    desc: 'Located inside Riyadh Park Mall, this is an indoor mini-city where kids roleplay real world jobs to earn currency. Fully air-conditioned and highly educational — perfect for an entire weekend afternoon setup.',
    url: 'https://riyadh.kidzania.com/'
  },
  {
    id: 'sparky-ryd',
    type: 'activity',
    city: 'riyadh',
    section: 'activities',
    subcat: 'teen',
    name: 'Sparky\'s Teen & Family Zone',
    logo: 'SP',
    lc: '#1A7A8A',
    indoor: true,
    ageRange: '8 – 18',
    prayer: true,
    score: 4.3,
    desc: 'A high-octane indoor arcade hub featuring massive thrill rides, virtual reality setups, and bowling alleys designed specifically to keep hard-to-please pre-teens and teenagers thoroughly engaged.',
    url: '#'
  },

  // ── ACTIVITIES · JEDDAH ──
  {
    id: 'shallal',
    type: 'activity',
    city: 'jeddah',
    section: 'activities',
    subcat: 'fun',
    name: 'Al Shallal Theme Park',
    logo: 'AS',
    lc: '#1A5A9A',
    indoor: false,
    ageRange: 'All Ages',
    prayer: true,
    score: 4.5,
    desc: 'Jeddah\'s iconic theme park right on the Corniche. It features an indoor ice rink and arcade games, alongside massive outdoor rollercoasters. Pro tip: Go after 5:00 PM when the ocean breeze cools things down.',
    url: '#'
  },
  {
    id: 'corniche',
    type: 'activity',
    city: 'jeddah',
    section: 'activities',
    subcat: 'sports',
    name: 'Jeddah Waterfront Promenade',
    logo: 'JW',
    lc: '#1A6A7A',
    indoor: false,
    ageRange: 'All Ages',
    prayer: true,
    score: 4.7,
    desc: 'A stunning 30km open promenade offering dedicated safe bike rental tracks, ocean-facing playgrounds, and family picnic lawns. Completely free and highly popular for winter evening family strolls.',
    url: 'https://jeddah.gov.sa/'
  },
  {
    id: 'fakieh-aqua',
    type: 'activity',
    city: 'jeddah',
    section: 'activities',
    subcat: 'camp',
    name: 'Fakieh Aquarium & Summer Camp Sessions',
    logo: 'FA',
    lc: '#1A4A7A',
    indoor: true,
    ageRange: '2 – 16',
    prayer: true,
    score: 4.6,
    desc: 'The only public aquarium in the Kingdom, displaying beautiful Red Sea marine wildlife. They run fantastic, structured indoor educational camps for children during school holiday breaks.',
    url: '#'
  },

  // ── ACTIVITIES · EASTERN PROVINCE ──
  {
    id: 'tekzone-ep',
    type: 'activity',
    city: 'eastern',
    section: 'activities',
    subcat: 'teen',
    name: 'Tekzone Al Khobar',
    logo: 'TZ',
    lc: '#5A1A7A',
    indoor: true,
    ageRange: '6 – 18',
    prayer: true,
    score: 4.7,
    desc: 'An advanced, futuristic indoor park inside Al Rashid Mall. Packed with state-of-the-art VR mazes, augmented reality climbing walls, and high-tech escape rooms built to captivate older kids and teenagers.',
    url: '#'
  },
  {
    id: 'loop-ep',
    type: 'activity',
    city: 'eastern',
    section: 'activities',
    subcat: 'sports',
    name: 'Loop Karting Tracks (Khobar)',
    logo: 'LK',
    lc: '#A02020',
    indoor: true,
    ageRange: '8 – 17',
    prayer: true,
    score: 4.5,
    desc: 'An indoor multi-level electric go-karting track running youth racing academies and safe corporate-style time trials. Great coaching staff and entirely air-conditioned.',
    url: '#'
  },
  {
    id: 'scitech-ep',
    type: 'activity',
    city: 'eastern',
    section: 'activities',
    subcat: 'fun',
    name: 'SciTech Science Center (Khobar)',
    logo: 'ST',
    lc: '#2A7A5A',
    indoor: true,
    ageRange: '4 – 15',
    prayer: true,
    score: 4.6,
    desc: 'An amazing, completely interactive hands-on science museum featuring an IMAX dome theatre. It is a brilliant, budget-friendly educational refuge for families during peak summer months.',
    url: '#'
  },

  // ─────────────────────────────────────────────────────────────
  //  HEALTHCARE & SPECIAL NEEDS (6 Records)
  // ─────────────────────────────────────────────────────────────

  // ── HEALTHCARE · RIYADH ──
  {
    id: 'hmg-ryd',
    type: 'healthcare',
    city: 'riyadh',
    section: 'healthcare',
    subcat: 'paed',
    name: 'Dr. Sulaiman Al-Habib Medical Group',
    logo: 'SH',
    lc: '#1A5A4A',
    specialty: 'Dedicated 24/7 Paediatric ER Wing',
    languages: 'English, Arabic, French',
    insurance: 'Accepts Class-A Premium Insurance',
    score: 4.8,
    desc: 'The gold standard for medical emergencies in Riyadh. They have an entirely separate emergency room just for children, staffing highly professional, English-fluent western-trained specialists.',
    url: 'https://www.hmg.com/'
  },
  {
    id: 'hammadi-ryd',
    type: 'healthcare',
    city: 'riyadh',
    section: 'healthcare',
    subcat: 'special',
    name: 'Al Hammadi Specialized Development Center',
    logo: 'AH',
    lc: '#2A6A5A',
    specialty: 'Speech Therapy & Autism Support Services',
    languages: 'English, Arabic, Urdu',
    insurance: 'Pre-Approval Required for Therapy',
    score: 4.5,
    desc: 'A premium hospital clinic specializing in child psychology, speech delay tracking, and ADHD behavioral therapy modules. They provide highly supportive, structured parental feedback paths throughout the entire treatment journey.',
    url: '#'
  },

  // ── HEALTHCARE · JEDDAH ──
  {
    id: 'hmg-jed',
    type: 'healthcare',
    city: 'jeddah',
    section: 'healthcare',
    subcat: 'paed',
    name: 'Dr. Sulaiman Al-Habib Hospital — Jeddah',
    logo: 'SH',
    lc: '#1A5A4A',
    specialty: 'Dedicated Paediatric & Child Health Wing',
    languages: 'English, Arabic',
    insurance: 'Accepts Class-A Premium Insurance',
    score: 4.7,
    desc: 'HMG Jeddah matches the outstanding standard set by its Riyadh branches. Fully separate paediatric wards, child-friendly consultation rooms, dedicated vaccine clinics, and a 24/7 children\'s emergency department staffed by English-speaking consultants.',
    url: 'https://www.hmg.com/'
  },
  {
    id: 'alhammadi-jed',
    type: 'healthcare',
    city: 'jeddah',
    section: 'healthcare',
    subcat: 'paed',
    name: 'Al Hammadi Hospital Jeddah',
    logo: 'AJ',
    lc: '#7A1A3A',
    specialty: 'Family Medicine & Paediatric Clinics',
    languages: 'English, Arabic',
    insurance: 'Bupa Arabia, AXA, Tawuniya accepted',
    score: 4.3,
    desc: 'A well-established private hospital with notably shorter appointment wait times than the larger groups. Friendly, multilingual staff make the experience smooth for new arrivals. Straightforward booking via their app and solid paediatric consultants.',
    url: '#'
  },

  // ── HEALTHCARE · EASTERN PROVINCE ──
  {
    id: 'mouwasat',
    type: 'healthcare',
    city: 'eastern',
    section: 'healthcare',
    subcat: 'paed',
    name: 'Mouwasat Hospital — Dammam & Khobar',
    logo: 'MW',
    lc: '#3A6A2A',
    specialty: 'Full Paediatric & Neonatal Care',
    languages: 'English, Arabic, Tagalog',
    insurance: 'Most major plans accepted',
    score: 4.6,
    desc: 'The Eastern Province\'s most trusted private hospital group. Branches in both Dammam and Al-Khobar carry strong paediatric teams, neonatal support, and staff who speak English, Arabic, and Tagalog — a real comfort for the region\'s incredibly diverse expat community.',
    url: 'https://www.mouwasat.com/'
  },
  {
    id: 'ibnhayyan',
    type: 'healthcare',
    city: 'eastern',
    section: 'healthcare',
    subcat: 'special',
    name: 'Ibn Hayyan Medical Complex',
    logo: 'IH',
    lc: '#5A3A7A',
    specialty: 'General Paediatrics & Therapy Referrals',
    languages: 'English, Arabic',
    insurance: 'Selected major plans accepted',
    score: 4.2,
    desc: 'A reputable mid-size hospital in Dammam. Solid paediatric consultants at more accessible price points than the large chains. Also provides introductory therapy referrals for developmental concerns — useful if your child needs an early assessment before specialist services are arranged.',
    url: '#'
  },

  // ─────────────────────────────────────────────────────────────
  //  SETTLING IN (3 Records)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'school-timeline',
    type: 'settling',
    city: 'all',
    section: 'settling',
    subcat: 'admin',
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
    subcat: 'admin',
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
    subcat: 'admin',
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
