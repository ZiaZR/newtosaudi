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
    id: 'kings-ryd', type: 'school', city: 'riyadh', section: 'education', subcat: 'british',
    name: 'King\'s College Riyadh (RCRC Elite Partner)', logo: 'KC', lc: '#0A2540',
    curriculum: 'British Curriculum / IGCSE & A-Level', phases: 'Pre-Prep to Senior School', fees: 'SAR 55,000 – 95,000 / yr',
    waitStatus: 'long', waitLabel: 'High Demand · Multi-Term Waitlist', iqama: true, score: 4.9,
    desc: 'Established as part of the Royal Commission for Riyadh City (RCRC) International Schools Program, bringing the historic British heritage school directly to the capital. High-end facilities with an exceptional focus on character development and academic rigor. Apply instantly upon corporate relocation confirmation.',
    url: 'https://www.kingscollegeriyadh.com/'
  },
  {
    id: 'bisr', type: 'school', city: 'riyadh', section: 'education', subcat: 'british',
    name: 'British International School Riyadh (BISR)', logo: 'BI', lc: '#1B3A7A',
    curriculum: 'British — IGCSE & A-Level / IB Option', phases: 'FS1 – Year 13', fees: 'SAR 48,000 – 87,000 / yr',
    waitStatus: 'long', waitLabel: '2+ Year Waiting List', iqama: true, score: 4.8,
    desc: 'An absolute staple for the Riyadh expat community operating multiple premium campuses (including Al Hamra and Diplomatic Quarter). Exceptionally deep community network and top-tier academic results. Waiting slots are highly competitive—ensure your company sponsor submits file transfers early.',
    url: 'https://bisr.edu.sa/'
  },
  {
    id: 'aisr', type: 'school', city: 'riyadh', section: 'education', subcat: 'american',
    name: 'American International School Riyadh (AISR)', logo: 'AI', lc: '#1A3A6A',
    curriculum: 'American — US High School Diploma & IB', phases: 'KG – Grade 12', fees: 'SAR 42,000 – 78,000 / yr',
    waitStatus: 'short', waitLabel: '6–12 Month Wait', iqama: true, score: 4.7,
    desc: 'A spectacular, state-of-the-art campus in the northern sector featuring collegiate-grade arts centers, sports complexes, and advanced STEM labs. Highly popular with North American and multinational corporate families. Outstanding transition support programs for newly arriving students.',
    url: 'https://www.aisr.edu.sa/'
  },
  {
    id: 'sek-ryd', type: 'school', city: 'riyadh', section: 'education', subcat: 'ib',
    name: 'SEK International School Riyadh', logo: 'SK', lc: '#004B49',
    curriculum: 'IB World School — PYP, MYP, DP', phases: 'Pre-School to Grade 12', fees: 'SAR 45,000 – 82,000 / yr',
    waitStatus: 'short', waitLabel: 'Limited Seat Openings', iqama: true, score: 4.6,
    desc: 'Another prestigious anchor of the RCRC International Schools initiative. A multilingual learning environment offering a pure, rigorous International Baccalaureate continuum track. Excellent for global families seeking cross-border educational continuity.',
    url: 'https://www.sekriyadh.org/'
  },

  // ── SCHOOLS · JEDDAH ──
  {
    id: 'bisj', type: 'school', city: 'jeddah', section: 'education', subcat: 'ib',
    name: 'British International School of Jeddah (BISJ)', logo: 'BJ', lc: '#1A5A5A',
    curriculum: 'IB World School Continuum', phases: 'Pre-K – Grade 12', fees: 'SAR 40,000 – 78,000 / yr',
    waitStatus: 'long', waitLabel: '1+ Year Waiting List', iqama: true, score: 4.8,
    desc: 'A beautifully designed, premium campus environment favored heavily by European and Western corporate executives in Jeddah. Combines global IB academic tracks with remarkable outdoor facilities, aquatic sports, and active parent-teacher integration modules.',
    url: 'https://www.bisj.com/'
  },
  {
    id: 'csj', type: 'school', city: 'jeddah', section: 'education', subcat: 'british',
    name: 'Continental School Jeddah (The Conti)', logo: 'CS', lc: '#7A2A1A',
    curriculum: 'British — IGCSE & A-Level', phases: 'FS1 – Year 13', fees: 'SAR 32,000 – 65,000 / yr',
    waitStatus: 'none', waitLabel: 'Places Available', iqama: true, score: 4.5,
    desc: 'Affectionately known across the Western region as "The Conti," this historic institution balances traditional British curriculum execution with a vibrant extracurricular framework. Well-situated for families living across northern coastal compounds.',
    url: 'https://www.csj.edu.sa/'
  },
  {
    id: 'jis', type: 'school', city: 'jeddah', section: 'education', subcat: 'american',
    name: 'Jeddah International School (JIS)', logo: 'JI', lc: '#3A1A7A',
    curriculum: 'American — US Diploma & AP Track', phases: 'PK – Grade 12', fees: 'SAR 36,000 – 70,000 / yr',
    waitStatus: 'short', waitLabel: '3–6 Month Wait', iqama: true, score: 4.4,
    desc: 'A reliable, highly structured American track school featuring robust Advanced Placement (AP) coursework choices. Highly practical location makes daily school runs from central Jeddah residential zones exceptionally manageable.',
    url: 'https://www.jis.edu.sa/'
  },

  // ── SCHOOLS · EASTERN PROVINCE ──
  {
    id: 'dbgs', type: 'school', city: 'eastern', section: 'education', subcat: 'british',
    name: 'Dhahran British Grammar School (DBGS)', logo: 'DB', lc: '#1A3A8A',
    curriculum: 'British — IGCSE & A-Level', phases: 'FS1 – Year 13', fees: 'SAR 40,000 – 75,000 / yr',
    waitStatus: 'short', waitLabel: '6–12 Month Wait', iqama: true, score: 4.7,
    desc: 'A premier component of the respected International Schools Group (ISG) network. Serving the Eastern Province industrial and energy sector communities for decades. Known for world-class facilities, fields, and strong collegiate results.',
    url: 'https://www.isg.edu.sa/'
  },
  {
    id: 'da', type: 'school', city: 'eastern', section: 'education', subcat: 'american',
    name: 'Dhahran Academy (ISG American)', logo: 'DA', lc: '#2A4A8A',
    curriculum: 'American Framework & AP Modules', phases: 'KG – Grade 12', fees: 'SAR 45,000 – 80,000 / yr',
    waitStatus: 'short', waitLabel: '3–6 Month Wait', iqama: true, score: 4.6,
    desc: 'Sharing a spectacular, ultra-modern campus footprint in the Khobar/Dhahran zone. Mirrored after premium US preparatory academies with elite robotics spaces, advanced science hubs, and highly organized university counseling teams.',
    url: 'https://www.isg.edu.sa/'
  },

  // ─────────────────────────────────────────────────────────────
  //  ACTIVITIES, SPORTS, TEENS & CAMPS (9 Records)
  // ─────────────────────────────────────────────────────────────

  // ── ACTIVITIES · RIYADH ──
  {
    id: 'blvd-world', type: 'activity', city: 'riyadh', section: 'activities', subcat: 'fun',
    name: 'Boulevard World (Riyadh Season Zone)', logo: 'BW', lc: '#8E24AA',
    indoor: false, ageRange: 'All Ages', prayer: true, score: 4.9,
    crowd: 'Extreme Peak Post-8PM', stroller: true, parking: 'Massive Multi-Tier Lots', dining: 'Global Pavilions & Cafes',
    desc: 'The absolute pinnacle of Riyadh Season entertainment. A massive global village featuring theme-park rides, replica monuments, and the world\'s largest indoor spherical theater. Extremely stroller friendly but requires extensive walking. Book premier tier parking via the Webook app well in advance.',
    url: 'https://webook.com/'
  },
  {
    id: 'doos-kart', type: 'activity', city: 'riyadh', section: 'activities', subcat: 'sports',
    name: 'Doos Karting (Hittin & Boulevard)', logo: 'DK', lc: '#E53935',
    indoor: true, ageRange: '8 – 18 Years', prayer: true, score: 4.7,
    crowd: 'High Peak Thursday-Saturday', stroller: false, parking: 'Boulevard Shared Parking', dining: 'In-Facility Snack Bar',
    desc: 'The premier multi-level indoor electric go-karting track in the Kingdom. Features rapid 250-meter tracks with advanced digital safety telemetry. They run exceptional junior karting academies for kids. Safety helmets and race suits are fully provided on site.',
    url: 'https://dooskarting.com/'
  },
  {
    id: 'hub-zero-ryd', type: 'activity', city: 'riyadh', section: 'activities', subcat: 'teen',
    name: 'The Hub (Boulevard City Gaming Cluster)', logo: 'TH', lc: '#00ACC1',
    indoor: true, ageRange: '10 – 18 Years', prayer: true, score: 4.8,
    crowd: 'Very Busy Friday Nights', stroller: true, parking: 'Boulevard City Zone Lot', dining: 'Premium Cafes Inside',
    desc: 'The ultimate futuristic entertainment cluster inside Boulevard City, featuring Warner Bros. Discovery experiences, hyper-realistic VR escape rooms, and top-tier e-sports arenas. A massive magnet for teenagers and older kids looking for high-tech digital challenges.',
    url: 'https://webook.com/'
  },

  // ── ACTIVITIES · JEDDAH ──
  {
    id: 'cyan-water', type: 'activity', city: 'jeddah', section: 'activities', subcat: 'camp',
    name: 'Cyan Waterpark (Jeddah North)', logo: 'CW', lc: '#1E88E5',
    indoor: false, ageRange: 'All Ages', prayer: true, score: 4.8,
    crowd: 'Severe Weekend Midday Peak', stroller: true, parking: 'Large Dedicated Lot', dining: 'Multiple Canteens & Cafes',
    desc: 'Jeddah\'s most modern, world-class waterpark featuring massive wave pools, high-thrill drop slides, and sprawling, dedicated splash zones built specifically for toddlers and younger children. Premium cabanas are available to rent for families looking to secure shade.',
    url: 'https://cyanwaterpark.com/'
  },
  {
    id: 'fakieh-planet', type: 'activity', city: 'jeddah', section: 'activities', subcat: 'fun',
    name: 'Fakieh Aquarium & Planetarium Cluster', logo: 'FA', lc: '#0D47A1',
    indoor: true, ageRange: '2 – 16 Years', prayer: true, score: 4.6,
    crowd: 'Moderate Weekend Afternoons', stroller: true, parking: 'On-Site Lot & Valet', dining: 'Al-Wadav Restaurant On-Site',
    desc: 'Located right on the scenic Corniche. Combines the Kingdom\'s primary living marine aquarium displaying Red Sea sharks with a brand-new, ultra-advanced digital planetarium dome. They run exceptional, fully supervised indoor educational camps during school breaks.',
    url: 'https://www.fakiehaquarium.com/'
  },
  {
    id: 'bounce-jed', type: 'activity', city: 'jeddah', section: 'activities', subcat: 'sports',
    name: 'Bounce Freestyle Academy (Jeddah)', logo: 'BJ', lc: '#F4511E',
    indoor: true, ageRange: '3 – 17 Years', prayer: true, score: 4.7,
    crowd: 'High Peak 4PM – 8PM', stroller: true, parking: 'Ample Dedicated Facility Lot', dining: 'Elevated Parent View Cafe',
    desc: 'A massive indoor trampoline park and freestyle trick academy. Features a dedicated, fully enclosed arena reserved exclusively for girls and women, alongside main mixed family zones. Features great trampoline coaching programs to build kid motor skills.',
    url: 'https://bounceksa.com/'
  },

  // ── ACTIVITIES · EASTERN PROVINCE ──
  {
    id: 'tekzone-khobar', type: 'activity', city: 'eastern', section: 'activities', subcat: 'teen',
    name: 'Tekzone Futuristic Park (Al Rashid Mall)', logo: 'TZ', lc: '#5E35B1',
    indoor: true, ageRange: '6 – 18 Years', prayer: true, score: 4.7,
    crowd: 'Very High Evening Crowds', stroller: true, parking: 'Al Rashid Mall Basement', dining: 'Direct Food Court Connection',
    desc: 'A state-of-the-art indoor theme park built inside Al Rashid Mall. Blends physical rides with advanced digital layers, including custom augmented reality climbing walls, VR rollercoasters, and high-stakes interactive redemption games built for tech-savvy kids.',
    url: 'https://alkhobar.tekzone.club/'
  },
  {
    id: 'snow-forest', type: 'activity', city: 'eastern', section: 'activities', subcat: 'fun',
    name: 'Snow Forest Indoor Park (Dammam)', logo: 'SF', lc: '#039BE5',
    indoor: true, ageRange: '3 – 14 Years', prayer: true, score: 4.5,
    crowd: 'Busy Weekend Afternoons', stroller: true, parking: 'Mall Surface Parking', dining: 'In-Mall Dining Access',
    desc: 'A beautiful, fully climate-insulated indoor winter-themed park featuring actual sub-zero real snow play zones, ice slides, and toddler-safe snow tube racing tracks. A perfect, high-value visual escape for families during peak summer months.',
    url: '#'
  },
  {
    id: 'scitech-khobar', type: 'activity', city: 'eastern', section: 'activities', subcat: 'sports',
    name: 'SciTech Interactive Science Center', logo: 'ST', lc: '#43A047',
    indoor: true, ageRange: '4 – 15 Years', prayer: true, score: 4.6,
    crowd: 'School Group Peaks Morning', stroller: true, parking: 'Massive Free Front Lot', dining: 'Snack Shops & Vending',
    desc: 'A stellar interactive scientific discovery center featuring 7 diverse exhibits covering space, marine biology, and robotics. Houses a beautiful IMAX 3D dome theater screening educational films. Highly practical for weekend learning and completely air-conditioned.',
    url: 'https://scitech.sa/'
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
