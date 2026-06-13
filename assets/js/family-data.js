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
    id: 'academic-timeline', type: 'settling', city: 'all', section: 'settling', subcat: 'admin',
    name: '2030 International Academic Intake & Attestation Master Timeline', logo: 'TL', lc: '#0F1C33',
    tip: 'Critical Action: Initiate home-country document legalizations 6–9 months before arrival.',
    desc: 'The school seat market across premium British, American, and IB tracks in the Kingdom is highly competitive due to massive expat inflows. Navigating the modern Ministry of Education portal requires absolute document compliance before a permanent seat can be unlocked.',
    points: [
      'The formal Saudi academic year for international tracks kicks off in late August or early September.',
      'You must have all past school reports formally stamped and legalised by the Saudi Embassy in your home country.',
      'Most tier-1 academies require an in-person or remote cognitive entry evaluation test (such as CAT4 testing).',
      'Schools utilize the centralized Ministry portal to approve bridging placements if your relocation happens mid-term.'
    ]
  },
  {
    id: 'iqama-insurance', type: 'settling', city: 'all', section: 'settling', subcat: 'admin',
    name: 'Dependent Iqama & Premium Residency Health Insurance Sync', logo: 'IQ', lc: '#1B5E20',
    tip: 'Legal Mandate: Complete dependent tracking steps within 90 days of arriving.',
    desc: 'Your children cannot legally be registered in any local school database, and cannot access permanent private medical insurance networks, until they are formally issued dependent residency cards under your main corporate sponsorship footprint.',
    points: [
      'The entire registration sequence is monitored directly through your company sponsor HR and the Absher portal.',
      'Attested birth certificates with certified official Arabic translations are strictly mandatory for file submission.',
      'Children under 6 do not require local medical center tests; older kids must visit an authorized medical city clinic.',
      'Once the Iqama is active, your HR must instantly upload the numbers to the Council of Cooperative Health Insurance.'
    ]
  },
  {
    id: 'arabic-grid', type: 'settling', city: 'all', section: 'settling', subcat: 'admin',
    name: 'The 2030 Learning Arabic Pathways Grid (Age-Phased Framework)', logo: 'AR', lc: '#E65100',
    tip: 'Pro Tip: Focus initial kids training on conversational Levant or local Gulf dialects for daily social ease.',
    desc: 'Helping your children acquire basic Arabic builds incredible cultural affinity and unlocks a deeply rewarding experience living in the Kingdom. Our editorial team structures the language journey into three distinct developmental stages:',
    points: [
      'AGES 0–5 (Early Exposure): Focus entirely on immersive playgroups and interactive visual apps like Kamkoum for natural phonetics.',
      'AGES 6–12 (Structural Foundation): Deploy private native-speaking home tutors focusing heavily on functional, daily social phrases.',
      'AGES 13–18 (Academic Integration): Enroll teens in structured online language academies or introductory school cultural clubs.',
      'FOR PARENTS: Use the standardized Madinah Arabic textbook series to stay aligned with what your children are picking up.'
    ]
  },

  // ─────────────────────────────────────────────────────────────
  //  OUTDOOR & ADVENTURE (10 Records)
  // ─────────────────────────────────────────────────────────────

  // ── OUTDOORS · RIYADH ──
  {
    id: 'edge-world', type: 'outdoors', city: 'riyadh', section: 'outdoors', subcat: 'desert',
    name: 'Edge of the World (Jebel Fihrayn)', logo: 'EW', lc: '#7B3F00',
    terrain: 'Desert Cliffs', bestSeason: 'Oct – Apr', driveTime: '45–60 min from Riyadh',
    difficulty: 'Moderate Family Hike', admission: 'Free · No Booking Required', score: 4.9,
    desc: 'The single most jaw-dropping natural landmark accessible from Riyadh. A dramatic escarpment edge dropping 300 metres into the ancient Tuwaiq Valley — looks like the planet simply ends. The plateau walk is wide, flat, and manageable for kids aged 7+. Bring three times the water you think you need, sun hats, and absolutely do not attempt May–September.',
    url: 'https://maps.app.goo.gl/edgeofworld'
  },
  {
    id: 'wadi-hanifah', type: 'outdoors', city: 'riyadh', section: 'outdoors', subcat: 'urban',
    name: 'Wadi Hanifah Greenway & Bike Trails', logo: 'WH', lc: '#2E7D32',
    terrain: 'Urban Riverside Trail', bestSeason: 'Oct – Apr', driveTime: 'Within Riyadh',
    difficulty: 'Easy — Fully Paved', admission: 'Free · Gear Rental On-Site', score: 4.6,
    desc: 'A beautifully landscaped 85km urban wadi cutting through central Riyadh, transformed under Vision 2030 into a premier family cycling and jogging corridor. Wide shaded paths, family picnic zones, and bike rental kiosks. Completely flat and fully paved — perfect for kids on balance bikes and young cyclists learning on open terrain.',
    url: 'https://www.arriyadh.com/'
  },
  {
    id: 'diriyah-walk', type: 'outdoors', city: 'riyadh', section: 'outdoors', subcat: 'heritage',
    name: 'Diriyah Al-Turaif UNESCO Heritage Walk', logo: 'DW', lc: '#A0522D',
    terrain: 'Heritage Mudbrick Village', bestSeason: 'Year-Round (Evenings)', driveTime: '20 min from central Riyadh',
    difficulty: 'Easy — Flat Paved Circuit', admission: 'SAR 95 Adults · SAR 50 Kids', score: 4.8,
    desc: 'A UNESCO World Heritage site that opened its full visitor experience in 2024. Walk through the restored 15th-century mudbrick capital of the first Saudi state at golden hour when the lighting is extraordinary. Evening programming includes curated historical storytelling and open-air arts installations. Children genuinely connect with the fortress scale.',
    url: 'https://www.diriyah.sa/'
  },

  // ── OUTDOORS · JEDDAH ──
  {
    id: 'obhur-creek', type: 'outdoors', city: 'jeddah', section: 'outdoors', subcat: 'beach',
    name: 'Obhur Creek Beach Resorts Strip (North Jeddah)', logo: 'OC', lc: '#0277BD',
    terrain: 'Red Sea Inlet · Beach Clubs', bestSeason: 'Oct – May', driveTime: '30 min north of Jeddah',
    difficulty: 'Easy — Resort Day Access', admission: 'SAR 100–350 per family (varies by club)', score: 4.7,
    desc: 'The premium beach club corridor for Jeddah\'s expat families. A 12km creek inlet lined with private beach resorts offering calm, wave-free Red Sea swimming, kayaking, and jet-ski hire. Entry fees typically include sunbed access and F&B credit. Water visibility is exceptional October through April. Multiple family-only sessions and ladies\' days weekly.',
    url: '#'
  },
  {
    id: 'taif-escape', type: 'outdoors', city: 'jeddah', section: 'outdoors', subcat: 'mountain',
    name: 'Al Hada & Shafa Mountain Escape (Taif Highlands)', logo: 'TF', lc: '#4CAF50',
    terrain: 'Mountain · Cable Car · Rose Fields', bestSeason: 'Mar – Nov', driveTime: '1.5 hr from Jeddah',
    difficulty: 'Easy — Cable Car Accessible', admission: 'Free entry · Cable car SAR 40–60', score: 4.8,
    desc: 'The premier family escape from Jeddah\'s coastal heat. The Al Hada cable car lifts you 2,500 metres up the Hejaz Mountains with staggering valley views. Shafa\'s rose farms bloom March–April producing the famous Taif rose oil. Cool temperatures year-round make this a genuine relief. Kids absolutely love the cable car crossing and mountain fruit markets.',
    url: '#'
  },
  {
    id: 'corniche-south', type: 'outdoors', city: 'jeddah', section: 'outdoors', subcat: 'urban',
    name: 'Jeddah South Corniche Family Beach & Lagoons', logo: 'JC', lc: '#00838F',
    terrain: 'Urban Waterfront · Public Beach', bestSeason: 'Oct – Apr', driveTime: 'In-City',
    difficulty: 'Easy — Flat Promenade', admission: 'Free · Paid Parking Available', score: 4.5,
    desc: 'The southern end of Jeddah\'s famous 30km Corniche hosts quieter family beach coves, children\'s playground clusters, and the iconic Floating Mosque viewpoint. Newly expanded beach access areas have been cleaned and reinforced under the city\'s Vision 2030 coastal masterplan. Best visited on weekday evenings when the famous King Fahd Fountain is lit.',
    url: 'https://www.jeddah.gov.sa/'
  },

  // ── OUTDOORS · EASTERN PROVINCE ──
  {
    id: 'half-moon-bay', type: 'outdoors', city: 'eastern', section: 'outdoors', subcat: 'beach',
    name: 'Half Moon Bay Beach (Al Khobar)', logo: 'HM', lc: '#0288D1',
    terrain: 'Gulf Coastline · Sandy Beach', bestSeason: 'Oct – May', driveTime: '30 min from Khobar',
    difficulty: 'Easy — Flat Beach Access', admission: 'Free public access · Resort entry separate', score: 4.8,
    desc: 'The most iconic family beach destination in the Eastern Province and one of the finest in the Kingdom. A 5km crescent of white sand with gentle, shallow Gulf waters ideal for young children. Multiple beach resort clubs line the bay offering jet-ski hire, banana boats, and beachside dining. The calm, warm water makes this a genuine swimming beach — not just a viewpoint.',
    url: '#'
  },
  {
    id: 'uqair-coast', type: 'outdoors', city: 'eastern', section: 'outdoors', subcat: 'desert',
    name: 'Uqair Historic Fort & Gulf Coastline', logo: 'UQ', lc: '#795548',
    terrain: 'Remote Gulf Coast · Heritage Fort', bestSeason: 'Nov – Mar', driveTime: '1.5 hr from Khobar',
    difficulty: 'Easy — Flat Ground', admission: 'Free · Self-Drive Required', score: 4.4,
    desc: 'An extraordinary off-the-radar family day trip combining the Gulf\'s cleanest remote beach with a well-preserved Ottoman-era coastal fort. The shallow, crystal-clear waters here allow kids to wade hundreds of metres offshore safely. No facilities, no crowds — pack a full family picnic. The fort\'s coastal watch towers offer dramatic photography backdrops at low tide.',
    url: '#'
  },
  {
    id: 'khobar-corniche', type: 'outdoors', city: 'eastern', section: 'outdoors', subcat: 'urban',
    name: 'Khobar Corniche & Al Aqrabiyah Island Park', logo: 'KC', lc: '#00695C',
    terrain: 'Urban Gulf Waterfront', bestSeason: 'Oct – Apr (Evenings)', driveTime: 'In-City',
    difficulty: 'Easy — Flat Paved Path', admission: 'Free', score: 4.6,
    desc: 'Khobar\'s beautifully maintained 6km Corniche is one of the cleanest and most family-friendly urban waterfronts in the Gulf. Features a dedicated cycling and running track separated from foot traffic, children\'s themed play zones, fishing piers, and direct views across to Bahrain on clear evenings. The connected Al Aqrabiyah island park adds a bonus green space loop.',
    url: '#'
  },

  // ── OUTDOORS · KINGDOM-WIDE ──
  {
    id: 'alula-discovery', type: 'outdoors', city: 'all', section: 'outdoors', subcat: 'desert',
    name: 'AlUla Canyon Discovery & Hegra UNESCO Site', logo: 'AU', lc: '#BF360C',
    terrain: 'Ancient Desert Canyons · UNESCO', bestSeason: 'Nov – Mar', driveTime: 'Flight or 10hr drive from Riyadh',
    difficulty: 'Moderate — Canyon Walking Required', admission: 'SAR 95–195 per site · Book via Experience AlUla', score: 4.9,
    desc: 'The single most spectacular family holiday destination inside the Kingdom. AlUla\'s rose-red sandstone canyons contain Hegra — Saudi Arabia\'s first UNESCO World Heritage site — alongside the breathtaking Elephant Rock and the Maraya concert mirror building. The Winter at Tantora festival (Dec–Mar) adds world-class family programming. Children are routinely awestruck. Book everything 4–6 weeks in advance.',
    url: 'https://www.experiencealula.com/'
  },

  // ─────────────────────────────────────────────────────────────
  //  VISION 2030 MEGA PROJECTS (10 Records)
  // ─────────────────────────────────────────────────────────────

  { id: 'qiddiya', type: 'v2030', city: 'riyadh', section: 'vision2030', subcat: 'mega',
    name: 'Qiddiya — Six Flags & Speed Park Gigaproject', logo: 'QD', lc: '#8B0000',
    status: 'coming-2026', scale: '334 km² Entertainment Capital', openDate: 'Phased from 2026',
    desc: 'The most anticipated family entertainment destination in the Arab world. A dedicated 334km² entertainment city southwest of Riyadh anchored by the world\'s fastest roller coaster, a Six Flags theme park, a motorsport circuit, aqua park, and an extreme sports hub. Everything is being designed with families at its core. Begin tracking the Webook app and official Qiddiya channels for early access booking updates.',
    url: 'https://www.qiddiya.com/' },

  { id: 'king-salman-park', type: 'v2030', city: 'riyadh', section: 'vision2030', subcat: 'arts',
    name: 'King Salman Park — World\'s Largest Urban Park', logo: 'KS', lc: '#2E7D32',
    status: 'partial', scale: '16 km² Urban Green Oasis', openDate: 'Rolling Openings 2024–2027',
    desc: 'Planned as the largest urban park on Earth — larger than New York\'s Central Park and London\'s Hyde Park combined. Riyadh\'s entire central green and cultural corridor is being built here. Early landscape sections, walking trails, and play areas are already accessible. A Royal Opera House, museums, and an international mall open in stages through 2027.',
    url: 'https://www.kingsalmanpark.sa/' },

  { id: 'diriyah-bujairi', type: 'v2030', city: 'riyadh', section: 'vision2030', subcat: 'arts',
    name: 'Diriyah Al-Bujairi Quarter — Heritage Dining & Culture', logo: 'BQ', lc: '#8D6E63',
    status: 'open', scale: 'UNESCO World Heritage Dining Zone', openDate: 'Open Now — Expanding 2025',
    desc: 'The most accessible Vision 2030 experience you can enjoy right now. Al-Bujairi is the beautifully restored dining and cultural quarter directly opposite the UNESCO-listed Al-Turaif mudbrick fortress. World-class restaurants, artisan boutiques, and curated heritage experiences set within extraordinary mud-brick architecture. Evening visits with children are magical — the lighting and atmosphere are unlike anything else in the Kingdom.',
    url: 'https://www.diriyah.sa/' },

  { id: 'the-rig', type: 'v2030', city: 'eastern', section: 'vision2030', subcat: 'resort',
    name: 'The Rig — Offshore Theme Resort (Arabian Gulf)', logo: 'RG', lc: '#1A237E',
    status: 'coming-2025', scale: 'Offshore Oil Platform Resort', openDate: 'Expected 2025',
    desc: 'One of the most conceptually extraordinary hospitality projects in the world — a luxury theme park and hotel built on a decommissioned oil rig anchored in the Arabian Gulf off the Eastern Province coast. Plans include thrill rides, a helipad, underwater viewing corridors, and family resort suites. A genuine once-in-a-generation attraction positioned off the Khobar coastline.',
    url: 'https://www.therig.sa/' },

  { id: 'red-sea-project', type: 'v2030', city: 'all', section: 'vision2030', subcat: 'resort',
    name: 'The Red Sea — Luxury Eco Family Island Resorts', logo: 'RR', lc: '#006064',
    status: 'partial', scale: '28,000 km² Protected Conservation Zone', openDate: 'Phased — Open from 2024',
    desc: 'Saudi Arabia\'s ultra-luxury, zero-impact tourism destination along a pristine 200km Red Sea coastline. Several island eco-resort properties opened in 2024 under the Six Senses and Shebara brands. Designed entirely around protecting 90 coral islands and pristine marine ecosystems. Exceptional for older children and families who value nature-immersive travel over theme park experiences.',
    url: 'https://www.theredsea.sa/' },

  { id: 'neom-sindalah', type: 'v2030', city: 'all', section: 'vision2030', subcat: 'resort',
    name: 'NEOM Sindalah Island — Red Sea Yacht & Marina', logo: 'NM', lc: '#01579B',
    status: 'partial', scale: 'NEOM Red Sea Island Development', openDate: 'Partially Open 2024',
    desc: 'The first NEOM development to receive public visitors. Sindalah is a luxury island marina with a world-class yacht club, beach club, family coastal resort, and direct access to exceptional Red Sea snorkeling and diving waters. While still expanding, the island is already hosting domestic and international family guests and offers an extraordinarily unique experience for nautically inclined families.',
    url: 'https://www.neom.com/' },

  { id: 'soudah-peaks', type: 'v2030', city: 'all', section: 'vision2030', subcat: 'resort',
    name: 'Soudah Peaks Mountain Resort (Aseer Highlands)', logo: 'SD', lc: '#33691E',
    status: 'coming-2026', scale: '2,982m — Saudi Arabia\'s Highest Peak', openDate: 'Expected 2026',
    desc: 'A dramatic mountain resort being developed at the summit of Saudi Arabia\'s highest accessible peak near Abha. Plans include cable car systems, mountain-edge glamping pods, adventure trails, and a cloud-level hotel. At 2,982 metres with year-round cool temperatures, this will become a completely unique domestic escape for families from all three cities who need relief from the summer heat.',
    url: 'https://www.soudahpeaks.com/' },

  { id: 'alula-rcua', type: 'v2030', city: 'all', section: 'vision2030', subcat: 'arts',
    name: 'AlUla — Royal Commission Full Experience Hub', logo: 'AU', lc: '#BF360C',
    status: 'open', scale: 'UNESCO — 200,000 Years of Human History', openDate: 'Open — Expanding 2025',
    desc: 'The Royal Commission for AlUla has transformed this extraordinary ancient city into one of the world\'s premier cultural tourism destinations. Hegra, Elephant Rock, Maraya concert hall, and stunning canyon landscapes are all visitable now. The Winter at Tantora festival (December–March) brings world-class family programming. Direct flight connections operate from Riyadh, Jeddah, and Dammam — book accommodation 8 weeks ahead.',
    url: 'https://www.experiencealula.com/' },

  { id: 'expo-2030', type: 'v2030', city: 'riyadh', section: 'vision2030', subcat: 'mega',
    name: 'Expo 2030 Riyadh — World Exposition', logo: 'EX', lc: '#6A1B9A',
    status: 'coming-2030', scale: 'Global Exposition — 182 Nations Participating', openDate: 'October 2030',
    desc: 'Riyadh won the right to host the World Expo 2030 under the theme "The Era of Change" — only the third time a non-Western nation has hosted since Japan in 1970. A six-month event bringing 182 national pavilions, cultural performances, and educational exhibitions to a purpose-built site in Riyadh. If your children will be school-age in 2030, this is a once-in-their-lifetime event happening in their own city.',
    url: '#' },

  { id: 'riyadh-season-hub', type: 'v2030', city: 'riyadh', section: 'vision2030', subcat: 'mega',
    name: 'Riyadh Season — Annual Entertainment Megafestival', logo: 'SE', lc: '#C62828',
    status: 'seasonal', scale: 'Oct – Mar · 14 Entertainment Zones', openDate: 'Annual — Oct through March',
    desc: 'The world\'s largest city entertainment festival by attendance, running every year October through March across 14 dedicated zones in Riyadh. International concerts, world-class circus and theatrical performances, international food festivals, family comedy shows, massive sports events, and spectacular pop-up markets. Download the Webook app within your first week of arriving — it is the essential gateway to everything Riyadh Season offers.',
    url: 'https://www.riyadhseason.sa/' },

  // ─────────────────────────────────────────────────────────────
  //  LEISURE & ENTERTAINMENT (10 Records)
  // ─────────────────────────────────────────────────────────────

  { id: 'vox-ryd', type: 'leisure', city: 'riyadh', section: 'leisure', subcat: 'cinema',
    name: 'VOX Cinemas Riyadh Park (Dolby Atmos)', logo: 'VO', lc: '#E53935',
    venueType: 'Premium Multiplex Cinema', ageMin: 'All Ages', score: 4.7,
    desc: 'The premier cinema experience in Riyadh, anchored at Riyadh Park Mall with a spectacular Dolby Atmos hall and a dedicated KIDS+E screen. The THEATRE by VOX delivers the highest quality in-screen dining experience in the Kingdom. Family ticket bundles are exceptional value. Book via the VOX app — family-friendly screenings fill up fast on Thursday and Friday afternoons.',
    url: 'https://voxcinemas.com/' },

  { id: 'amc-jed', type: 'leisure', city: 'jeddah', section: 'leisure', subcat: 'cinema',
    name: 'AMC Cinemas Mall of Arabia (PRIME at AMC)', logo: 'AM', lc: '#1565C0',
    venueType: 'Premium Multiplex Cinema', ageMin: 'All Ages', score: 4.6,
    desc: 'AMC\'s flagship Western Saudi Arabia location features Saudi Arabia\'s first PRIME laser projection hall. Excellent for families seeking reliable international blockbuster programming with Arabic and English subtitle options. Highly accessible from central Jeddah and northern compounds with extensive adjacent parking and a complete family food court directly connected.',
    url: 'https://www.amccinemas.com.sa/' },

  { id: 'muvi-khobar', type: 'leisure', city: 'eastern', section: 'leisure', subcat: 'cinema',
    name: 'Muvi Cinemas — Al Rashid Mall (Al Khobar)', logo: 'MV', lc: '#AD1457',
    venueType: 'Saudi-Founded Premium Cinema', ageMin: 'All Ages', score: 4.5,
    desc: 'The only fully Saudi-founded premium cinema chain — making Muvi an important cultural experience in itself. The Al Rashid Mall location features excellent family seating, a Saudi-curated film program that includes Arabic-language productions alongside international releases, and highly competitive family bundle pricing. An important local cultural institution to support.',
    url: 'https://muvi.com/' },

  { id: 'blvd-events', type: 'leisure', city: 'riyadh', section: 'leisure', subcat: 'events',
    name: 'Boulevard City Live Events & Concert Strip', logo: 'BC', lc: '#4A148C',
    venueType: 'Multi-Venue Entertainment District', ageMin: '5+', score: 4.8,
    desc: 'The most concentrated live events corridor in the Gulf. Boulevard City hosts international headline concerts, comedy festivals, WWE events, esports championships, and family circus shows across multiple stages simultaneously. The pedestrianized district design makes navigating between shows with children genuinely manageable. All bookings via the Webook platform — download it before you arrive in the Kingdom.',
    url: 'https://webook.com/' },

  { id: 'jed-season', type: 'leisure', city: 'jeddah', section: 'leisure', subcat: 'events',
    name: 'Jeddah Season — Red Sea Live Events Program', logo: 'JS', lc: '#00695C',
    venueType: 'Seasonal City Entertainment Festival', ageMin: 'All Ages', score: 4.7,
    desc: 'Jeddah\'s answer to Riyadh Season, running simultaneously across the winter months with a distinctly Hejazi and Red Sea coastal character. International concerts along the Corniche, traditional heritage markets, family water festivals, and spectacular fireworks displays over the water. The open sea breeze and relaxed pace make Jeddah Season events uniquely atmospheric for children and parents alike.',
    url: 'https://webook.com/' },

  { id: 'kasc-jeddah', type: 'leisure', city: 'jeddah', section: 'leisure', subcat: 'sports',
    name: 'King Abdullah Sports City — The Jewel (Jeddah)', logo: 'KA', lc: '#1B5E20',
    venueType: 'Premier League Football Stadium', ageMin: 'All Ages', score: 4.7,
    desc: 'Known locally as "The Jewel" — an architecturally stunning 62,000-seat stadium hosting Al Ittihad and Al-Ahli Saudi FC in the Saudi Pro League. Attending a match is an extraordinary cultural experience. Family and female-section seating is properly designated and safe, tickets are genuinely affordable, and the level of football has dramatically improved with world-class talent acquisitions across the league.',
    url: 'https://www.spl.com.sa/' },

  { id: 'spl-matchday', type: 'leisure', city: 'all', section: 'leisure', subcat: 'sports',
    name: 'Saudi Pro League Family Matchday Experience', logo: 'SL', lc: '#006400',
    venueType: 'Professional Football — Family Sections', ageMin: 'All Ages', score: 4.7,
    desc: 'Post-2023 investment has transformed the Saudi Pro League into one of the world\'s most entertaining football competitions. Al Nassr and Al Hilal (Riyadh), Al Ittihad and Al Ahli (Jeddah), and Al Qadsiah (Eastern Province) all feature global football names. Family stands are designated, safe, and energetic. Children who attend a Saudi Pro League match typically become lifelong fans — it is genuinely that compelling.',
    url: 'https://www.spl.com.sa/' },

  { id: 'mrsool-park', type: 'leisure', city: 'riyadh', section: 'leisure', subcat: 'sports',
    name: 'Kingdom Arena & Mrsool Park (Riyadh Football)', logo: 'KR', lc: '#003087',
    venueType: 'Premier Football Stadiums', ageMin: 'All Ages', score: 4.8,
    desc: 'The twin crown jewels of Riyadh football — Kingdom Arena (Al Hilal) and Mrsool Park (Al Nassr) host the Saudi Pro League\'s most anticipated fixtures in front of sold-out crowds. The calibre of football is world-class. Family and female-section seating is well-managed. A Riyadh Derby matchday is one of the finest sporting experiences available to a family living in the Gulf.',
    url: 'https://webook.com/' },

  { id: 'ithra-forum', type: 'leisure', city: 'eastern', section: 'leisure', subcat: 'events',
    name: 'Ithra Cultural Forum & Performing Arts Theater', logo: 'IF', lc: '#37474F',
    venueType: 'World-Class Cultural Center', ageMin: '5+', score: 4.8,
    desc: 'The Ithra center in Dhahran houses one of the Gulf\'s finest purpose-built performing arts theaters. World-class dance companies, orchestral performances, and children\'s theater productions are programmed year-round at genuinely subsidized ticket prices. The Snøhetta-designed building itself is an architectural marvel worth visiting independently. Check the Ithra events calendar monthly for family-appropriate cultural programming.',
    url: 'https://ithra.com/' },

  { id: 'nrg-bowl', type: 'leisure', city: 'riyadh', section: 'leisure', subcat: 'family',
    name: 'NRG Bowl — Premium Bowling & Family Entertainment', logo: 'NR', lc: '#F57F17',
    venueType: 'Bowling & Family Entertainment Hub', ageMin: '4+', score: 4.5,
    desc: 'Riyadh\'s most premium boutique bowling experience with glow lanes, a well-stocked gaming arcade, private lane suite rental for family parties, and food service directly to your lane. A reliable option during summer months. They run excellent weekend birthday party packages that are well structured for larger groups of children and genuinely deliver on the premium positioning.',
    url: '#' },

  // ─────────────────────────────────────────────────────────────
  //  CULTURAL & EDUCATIONAL (10 Records)
  // ─────────────────────────────────────────────────────────────

  { id: 'natmus-ryd', type: 'cultural', city: 'riyadh', section: 'cultural', subcat: 'museum',
    name: 'National Museum of Saudi Arabia (Riyadh)', logo: 'NM', lc: '#4E342E',
    ageRange: '6 – Adult', admission: 'Free Entry', duration: '2 – 3 Hours', score: 4.6,
    desc: 'The premier museum experience in the Kingdom — eight themed galleries tracing 14 billion years of history from the formation of the universe to modern Saudi Arabia. The Man and the Universe hall captivates children with its meteorite collection and scale model of the solar system. Completely free entry, fully bilingual, and meticulously curated. A foundational visit for any expat family in Riyadh — do this in your first month.',
    url: 'https://www.nationalmuseum.org.sa/' },

  { id: 'ithra-museum', type: 'cultural', city: 'eastern', section: 'cultural', subcat: 'museum',
    name: 'Ithra — King Abdulaziz Center for World Culture', logo: 'IT', lc: '#37474F',
    ageRange: '4 – Adult', admission: 'SAR 35 – 75 per exhibition', duration: 'Half Day', score: 4.9,
    desc: 'The most architecturally extraordinary cultural institution in the Arab world, built over the original oil discovery well in Dhahran. Inside: a world-class library, children\'s museum, exhibition center hosting major international traveling shows, a cinema, a makerspace, and a performing arts theater. Ithra\'s programming for children rivals dedicated children\'s cultural centers in London and New York — it is that good.',
    url: 'https://ithra.com/' },

  { id: 'albalad-jed', type: 'cultural', city: 'jeddah', section: 'cultural', subcat: 'heritage',
    name: 'Al-Balad — Jeddah Historic District (UNESCO)', logo: 'AB', lc: '#5D4037',
    ageRange: 'All Ages', admission: 'Free · Guided Tours SAR 80 – 120', duration: '2 – 4 Hours', score: 4.7,
    desc: 'Jeddah\'s UNESCO-listed ancient city of coral-stone architecture and intricately carved Rawasheen wooden balconies. A fascinating cultural geography lesson for children — this district served as a major pilgrimage gateway for Hajj travelers for over 1,400 years. Hire a certified local guide for the most engaging children\'s experience. Visit during cool morning hours October through April for the most comfortable exploration.',
    url: 'https://www.jeddah.gov.sa/' },

  { id: 'misk-art', type: 'cultural', city: 'riyadh', section: 'cultural', subcat: 'workshop',
    name: 'Misk Art Institute — Youth Creative Programs', logo: 'MA', lc: '#880E4F',
    ageRange: '10 – 25 Years', admission: 'Subsidized — Registration Required', duration: 'Semester Programs', score: 4.7,
    desc: 'The premier arts and creative education institution in Saudi Arabia, established under the Misk Foundation. Programs covering visual arts, digital media, photography, and design are available to young people aged 10 to 25 at heavily subsidized rates. An extraordinary opportunity for artistically inclined teenagers to access world-class creative mentorship. Applications are competitive — apply as soon as your child is settled in school.',
    url: 'https://misk.art/' },

  { id: 'tantora-festival', type: 'cultural', city: 'all', section: 'cultural', subcat: 'festival',
    name: 'Winter at Tantora — AlUla International Arts Festival', logo: 'WT', lc: '#BF360C',
    ageRange: 'All Ages', admission: 'SAR 150 – 450 per event', duration: 'December – March (Annual)', score: 4.9,
    desc: 'The crown jewel of Saudi Arabia\'s cultural festival calendar — a spectacular winter arts and music festival set against AlUla\'s ancient rose-red canyon landscape. World-class classical musicians, Arab heritage performers, and international headliners perform in open-air venues at sunrise and sunset. Family-friendly daytime programming includes heritage walks, children\'s craft workshops, and camel experiences. Book accommodation and shows 8–12 weeks ahead.',
    url: 'https://www.experiencealula.com/' },

  { id: 'national-day-exp', type: 'cultural', city: 'all', section: 'cultural', subcat: 'festival',
    name: 'Saudi National Day Celebrations (23 September)', logo: 'ND', lc: '#006400',
    ageRange: 'All Ages', admission: 'Free — City-Wide', duration: '23–24 September (Annual)', score: 4.8,
    desc: 'One of the most exhilarating cultural experiences available to a newly arrived expat family. The entire Kingdom transforms for 48 hours — massive public fireworks, drone light shows, car parades, traditional folk music and dance, and every public space decorated in green and white. Your children will remember their first Saudi National Day for life. Wear green — the national dress code is embraced enthusiastically by families from every nationality.',
    url: '#' },

  { id: 'book-fair-ryd', type: 'cultural', city: 'riyadh', section: 'cultural', subcat: 'festival',
    name: 'Riyadh International Book Fair (Annual — March)', logo: 'BF', lc: '#1A237E',
    ageRange: '4 – Adult', admission: 'SAR 20 Adults · Free Under 12', duration: '10 Days — Annual', score: 4.6,
    desc: 'One of the Arab world\'s largest and most prestigious book fairs, held annually at the Riyadh International Convention Center. Hundreds of international and Arabic publishers, dedicated children\'s reading pavilions, storytelling sessions, author events, and STEM education zones. A brilliant cultural anchor for instilling a love of reading in children during relocation transition — a familiar, comforting activity in a new country.',
    url: '#' },

  { id: 'ithra-kids', type: 'cultural', city: 'eastern', section: 'cultural', subcat: 'workshop',
    name: 'Ithra Children\'s Museum & Makerspace Sessions', logo: 'IK', lc: '#00695C',
    ageRange: '3 – 14 Years', admission: 'SAR 25 – 55 per session', duration: 'Drop-In & Booked Sessions', score: 4.8,
    desc: 'The Children\'s Museum inside the Ithra complex is the finest dedicated children\'s learning space in Saudi Arabia. Interactive science, arts, and engineering exhibits designed for curious young minds, with dedicated maker programs running weekly through the academic year. The robotics and STEM workshop sessions for ages 8–12 are consistently excellent and hugely over-subscribed — book at least 2 weeks ahead.',
    url: 'https://ithra.com/' },

  { id: 'heritage-village', type: 'cultural', city: 'all', section: 'cultural', subcat: 'heritage',
    name: 'Saudi Heritage Villages — National Festival Circuit', logo: 'HV', lc: '#795548',
    ageRange: 'All Ages', admission: 'Free · Festival Ticketing Varies', duration: 'Festival Seasons', score: 4.5,
    desc: 'Saudi Arabia\'s rich regional heritage comes alive through curated Heritage Villages hosted at Riyadh Season, Jeddah Season, and the Abha Summer Festival. Traditional crafts, regional food, folk music, camel racing, and falconry demonstrations — all set in beautifully recreated Arabian village environments. An invaluable cultural context for children who are growing up in the Kingdom and want to understand the traditions around them.',
    url: '#' },

  { id: 'dtvs-museum', type: 'cultural', city: 'eastern', section: 'cultural', subcat: 'museum',
    name: 'Dhahran Science & Technology Discovery Museum', logo: 'DT', lc: '#01579B',
    ageRange: '5 – Adult', admission: 'Minimal Entry Fee', duration: '1.5 – 2.5 Hours', score: 4.4,
    desc: 'A practical, hands-on science and technology museum in the Dhahran area with a particular focus on the Arabian Gulf petroleum and energy discovery story — highly relevant context for families in the Eastern Province wanting to understand the region\'s industrial heritage. Features interactive engineering exhibits, a historical timeline of the Kingdom\'s energy development, and rotating educational exhibitions year-round.',
    url: '#' },

  // ─────────────────────────────────────────────────────────────
  //  CAMPS & CLASSES (10 Records)
  // ─────────────────────────────────────────────────────────────

  { id: 'icode-sa', type: 'camps', city: 'all', section: 'camps', subcat: 'stem',
    name: 'iCode Saudi Arabia — STEM & Coding Academies', logo: 'IC', lc: '#1565C0',
    season: 'Year-Round', ageRange: '5 – 18 Years', duration: 'Semester Courses & Holiday Camps', regStatus: 'Enrolling Now',
    desc: 'The leading structured STEM and coding education provider for children in the Kingdom, with campuses in Riyadh, Jeddah, and Al Khobar. Courses covering Python, Minecraft engineering, Roblox game design, robotics, and AI fundamentals are structured into age-appropriate tracks. Summer intensives are particularly popular — 2-week coding camps for ages 8–16 that routinely produce functional apps and games by the final day.',
    url: 'https://icode.sa/' },

  { id: 'yamaha-ksa', type: 'camps', city: 'all', section: 'camps', subcat: 'arts',
    name: 'Yamaha Music Schools (Riyadh · Jeddah · Khobar)', logo: 'YM', lc: '#C62828',
    season: 'Year-Round', ageRange: '3 – 18 Years', duration: 'Monthly Terms — Weekly Lessons', regStatus: 'Enrolling Now',
    desc: 'The gold standard for structured children\'s music education in the Kingdom. The Junior Music Course begins at age 3 and uses the globally proven Yamaha curriculum of ear training, keyboard technique, and ensemble play. Branches across all three major cities. Places fill quickly at September and January intakes — contact your nearest branch 6–8 weeks before your intended start. An invaluable creative constant for children during the relocation adjustment period.',
    url: 'https://yamahamusic.sa/' },

  { id: 'sipa-camps', type: 'camps', city: 'riyadh', section: 'camps', subcat: 'sports',
    name: 'SIPA Athletic Development Camps (Riyadh)', logo: 'SI', lc: '#2E7D32',
    season: 'Summer & School Holidays', ageRange: '6 – 16 Years', duration: '1–3 Week Day Camps', regStatus: 'Seasonal Registration',
    desc: 'The Saudi Institute for Physical Activity runs Kingdom-certified athletic development camps across football, basketball, swimming, and athletics during school holiday periods. Strong coaching credentials, certified first aid on-site, and well-structured daily schedules make these the most trusted holiday sports camps in Riyadh. Excellent bilingual delivery — comfortable for children whose Arabic is minimal.',
    url: '#' },

  { id: 'bounce-academy', type: 'camps', city: 'jeddah', section: 'camps', subcat: 'sports',
    name: 'Bounce Freestyle Trampoline Academy (Jeddah)', logo: 'BA', lc: '#F4511E',
    season: 'Year-Round', ageRange: '4 – 17 Years', duration: 'Weekly Classes · Holiday Intensives', regStatus: 'Enrolling Now',
    desc: 'Bounce\'s structured freestyle academy program runs properly graded coaching tracks — developing aerial skills, trampoline technique, and physical confidence from beginner through to competition level. Holiday intensive weeks (3 full days) are exceptional for productive energy-burning and genuine skill development. A brilliant social option for kids building friendships post-relocation in a structured, safe, and energetic environment.',
    url: 'https://bounceksa.com/' },

  { id: 'goethe-riyadh', type: 'camps', city: 'riyadh', section: 'camps', subcat: 'language',
    name: 'International Language Centers — Riyadh & All Cities', logo: 'GI', lc: '#1A237E',
    season: 'Year-Round', ageRange: '8 – Adult', duration: 'Term Courses · Summer Programs', regStatus: 'Enrolling Now',
    desc: 'International language centers affiliated with the Goethe-Institut, Institut Français, and Berlitz operate across all three cities offering structured German, French, Mandarin, and Arabic courses for children and families. Particularly valuable for families maintaining a heritage language from their home country alongside adapting to a new school environment. Arabic immersion programs for expat children combine cultural activity with structured language acquisition.',
    url: '#' },

  { id: 'fakieh-camp', type: 'camps', city: 'jeddah', section: 'camps', subcat: 'summer',
    name: 'Fakieh Aquarium Educational Holiday Camps', logo: 'FC', lc: '#0D47A1',
    season: 'Summer · Winter · Ramadan', ageRange: '4 – 14 Years', duration: '1–2 Week Day Camps', regStatus: 'Seasonal Registration',
    desc: 'The most unique themed holiday camp experience in Jeddah — structured inside the Fakieh Aquarium complex with hands-on marine biology education, dolphin interaction sessions, Red Sea ecosystem workshops, and planetarium visits built into the daily schedule. Supervised by qualified marine science educators. Camp size is kept intentionally small to maximize quality. Fills within 48 hours of registration opening — set a calendar reminder.',
    url: 'https://www.fakiehaquarium.com/' },

  { id: 'stem-village', type: 'camps', city: 'riyadh', section: 'camps', subcat: 'stem',
    name: 'STEM Village Riyadh — Innovation Holiday Camps', logo: 'SV', lc: '#00695C',
    season: 'School Holidays', ageRange: '7 – 15 Years', duration: 'Week-Long Immersive Programs', regStatus: 'Seasonal Registration',
    desc: 'STEM Village runs the most well-resourced innovation and maker camps in Riyadh, with dedicated equipment budgets allowing children to build functioning drones, water filtration systems, and basic circuit boards. The curriculum is aligned to international NGSS science standards — useful for maintaining academic pacing with home-country school programs. Fully bilingual delivery with specialist educators in every science discipline.',
    url: '#' },

  { id: 'safwa-swim', type: 'camps', city: 'all', section: 'camps', subcat: 'sports',
    name: 'Al Safwa & Elite Swimming Academies (All Cities)', logo: 'SW', lc: '#0277BD',
    season: 'Year-Round', ageRange: '6 Months – 18 Years', duration: 'Weekly 30–45 Min Lessons', regStatus: 'Enrolling Now',
    desc: 'Structured swimming lessons are a fundamental quality-of-life investment for families in the Kingdom where pool access is essentially year-round. Al Safwa and ISG-affiliated swimming programs across all three cities offer RSSA-aligned progressive curricula from baby water familiarization (6 months+) through to competitive squad development for teenagers. Non-negotiable for Eastern Province families given the beach access and water sports culture that defines life there.',
    url: '#' },

  { id: 'arabic-kids-tutor', type: 'camps', city: 'all', section: 'camps', subcat: 'language',
    name: 'Arabic for Kids — Private Tutor & Online Academy Network', logo: 'AK', lc: '#E65100',
    season: 'Year-Round', ageRange: '4 – 18 Years', duration: 'Flexible — 1:1 & Group Sessions', regStatus: 'Enrolling Now',
    desc: 'A curated network of certified Arabic language educators offering private 1:1 tuition and structured group sessions for expat children across all three cities. The most effective approach for children arriving with zero Arabic is two 45-minute conversational sessions weekly for the first year, focused exclusively on social vocabulary — school, friends, shopping, food. Coordination with school Arabic teachers dramatically accelerates the pace of results.',
    url: '#' },

  { id: 'riyadh-art-studio', type: 'camps', city: 'riyadh', section: 'camps', subcat: 'arts',
    name: 'Riyadh Children\'s Art Studios & Creative Ateliers', logo: 'RA', lc: '#880E4F',
    season: 'Year-Round', ageRange: '3 – 16 Years', duration: 'Weekly Classes & Holiday Intensives', regStatus: 'Enrolling Now',
    desc: 'A growing ecosystem of premium children\'s art studios across north and west Riyadh offering structured drawing, painting, sculpting, and mixed-media classes in deliberately small group settings. Increasingly popular among expat communities as a social anchor — children build consistent friendships with peers from across the international school network. Look for studios affiliated with trained fine arts graduates for the highest quality creative instruction.',
    url: '#' },

  // ─────────────────────────────────────────────────────────────
  //  DINING & FAMILY SHOPPING (10 Records)
  // ─────────────────────────────────────────────────────────────

  { id: 'nakheel-mall-ryd', type: 'dining', city: 'riyadh', section: 'dining', subcat: 'mall',
    name: 'Nakheel Mall — Premium Family Hub (North Riyadh)', logo: 'NK', lc: '#1B5E20',
    cuisine: 'Mixed International', kidsMenu: true, playArea: true, priceRange: '££–£££', score: 4.7,
    desc: 'Riyadh\'s most refined family-friendly retail and dining destination in the upscale Al Nakheel district. Features a curated selection of international restaurant brands, an exceptional children\'s play center on the dedicated family floor, a premium supermarket, and outstanding modern architecture. Significantly less crowded than the Riyadh mega-malls — genuinely enjoyable with children under 6. Excellent covered parking directly connected to the building.',
    url: '#' },

  { id: 'riyadh-park-mall', type: 'dining', city: 'riyadh', section: 'dining', subcat: 'mall',
    name: 'Riyadh Park Mall — Complete Family Day Circuit', logo: 'RP', lc: '#283593',
    cuisine: 'Mixed International', kidsMenu: true, playArea: true, priceRange: '££', score: 4.6,
    desc: 'Home to VOX Cinemas, KidZania, and an extensive family dining and retail circuit — Riyadh Park is the most comprehensive single-destination family mall in the capital. Its internal temperature-controlled design means children can move freely between experiences without returning to the car. The international food court represents one of the most diverse dining selections in Riyadh, with genuine options from over 15 cuisines in one connected space.',
    url: '#' },

  { id: 'moa-jeddah', type: 'dining', city: 'jeddah', section: 'dining', subcat: 'mall',
    name: 'Mall of Arabia Jeddah — Mega Family Destination', logo: 'MJ', lc: '#0D47A1',
    cuisine: 'Mixed International', kidsMenu: true, playArea: true, priceRange: '£–£££', score: 4.7,
    desc: 'Jeddah\'s largest and most visited retail and family entertainment complex, featuring over 400 stores, AMC Cinemas, dedicated family entertainment zones, an ice rink, and a remarkable restaurant collection spanning premium Saudi dining to accessible family options. The parking infrastructure is excellent and the mall\'s layout is more navigable than many competitors. A complete family day out without needing to go anywhere else.',
    url: '#' },

  { id: 'al-rashid-east', type: 'dining', city: 'eastern', section: 'dining', subcat: 'mall',
    name: 'Al Rashid Mall — Eastern Province Family Anchor', logo: 'AR', lc: '#4A148C',
    cuisine: 'Mixed International', kidsMenu: true, playArea: true, priceRange: '£–££', score: 4.5,
    desc: 'The dominant family mall of the Eastern Province, housing Tekzone, Muvi Cinemas, an extensive international food court, and a well-equipped children\'s entertainment zone. Highly accessible from Khobar, Dhahran, and Dammam. The food court quality has substantially improved — solid Lebanese, Indian, American, and Saudi options at family-appropriate price points. Validated parking is reliable and free for the first two hours.',
    url: '#' },

  { id: 'alchemy-ryd', type: 'dining', city: 'riyadh', section: 'dining', subcat: 'restaurant',
    name: 'Alchemy Restaurant & Social Kitchen (Riyadh)', logo: 'AL', lc: '#BF360C',
    cuisine: 'Contemporary International', kidsMenu: true, playArea: false, priceRange: '£££', score: 4.8,
    desc: 'The most celebrated family-friendly fine dining destination in Riyadh among the expat community. Alchemy strikes a genuinely rare balance between excellent cuisine and a child-welcoming atmosphere. A dedicated children\'s menu that goes far beyond standard options — actual flavour-forward dishes designed by the kitchen. Weekend brunch is the definitive social event for international families in Riyadh. Book at least 5 days ahead for Thursday and Friday morning reservations.',
    url: '#' },

  { id: 'corniche-seafood', type: 'dining', city: 'jeddah', section: 'dining', subcat: 'restaurant',
    name: 'Jeddah Corniche Seafood Restaurants Strip', logo: 'CS', lc: '#006064',
    cuisine: 'Fresh Red Sea Seafood', kidsMenu: true, playArea: false, priceRange: '££–£££', score: 4.6,
    desc: 'The most culturally authentic dining experience Jeddah offers a newly arriving family — a stretch of excellent seafood restaurants along the Corniche serving genuinely fresh Red Sea catch. Many operate on a choose-your-fish model where children can point to their selection before it is cooked to order. The evening Corniche breeze, Fountain views, and informal outdoor seating create a uniquely Saudi dining atmosphere that money cannot replicate elsewhere.',
    url: '#' },

  { id: 'the-zone-dining', type: 'dining', city: 'riyadh', section: 'dining', subcat: 'restaurant',
    name: 'The Zone — Kids Play & Family Dining Complex', logo: 'TZ', lc: '#F57F17',
    cuisine: 'American & International', kidsMenu: true, playArea: true, priceRange: '££', score: 4.5,
    desc: 'Riyadh\'s most practical family dining-and-play combination — parents eat a proper meal at a comfortable table while children are in a fully supervised, enclosed indoor play zone within line of sight. A format that barely exists well anywhere else in the city. The food quality sits above typical play-center dining — actual thoughtful menu options with nutritional consideration. Weekday afternoon sessions are significantly less crowded than weekends.',
    url: '#' },

  { id: 'friday-market-ryd', type: 'dining', city: 'riyadh', section: 'dining', subcat: 'market',
    name: 'Riyadh Community Farmer\'s & Artisan Weekend Markets', logo: 'FM', lc: '#2E7D32',
    cuisine: 'Artisan · Local Produce · International Street Food', kidsMenu: false, playArea: false, priceRange: '£', score: 4.6,
    desc: 'A growing ecosystem of weekend farmer\'s and artisan markets across Riyadh\'s north (Al Nakheel, Al Yasmin) running October through March during the cool season. Fresh produce, Saudi artisan crafts, international street food stalls, plants, and community pop-up brands. An excellent social anchor for newly arrived families — these markets are where the expat community genuinely gathers informally. Follow Al Diriyah Farmer\'s Market on Instagram for weekly dates.',
    url: '#' },

  { id: 'tahlia-cafe', type: 'dining', city: 'riyadh', section: 'dining', subcat: 'brunch',
    name: 'Tahlia & Urubah Street Brunch & Cafe Circuit', logo: 'TC', lc: '#8D6E63',
    cuisine: 'Specialty Coffee · Premium Brunch · International', kidsMenu: true, playArea: false, priceRange: '££', score: 4.7,
    desc: 'Riyadh\'s most celebrated dining corridor — Tahlia Street and the adjacent Urubah Street strip house the Kingdom\'s finest concentration of independent specialty cafes, premium brunch spots, and boutique restaurant concepts. The Saturday morning brunch circuit is a Riyadh expat institution. Strollers are broadly welcome, children are catered for without condescension, and the specialty coffee from Saudi roasters is genuinely world class.',
    url: '#' },

  { id: 'al-hamra-jed', type: 'dining', city: 'jeddah', section: 'dining', subcat: 'brunch',
    name: 'Al Hamra Waterfront — Jeddah Weekend Brunch Scene', logo: 'AH', lc: '#0277BD',
    cuisine: 'International · Waterfront Dining', kidsMenu: true, playArea: false, priceRange: '££–£££', score: 4.6,
    desc: 'Jeddah\'s premium residential and dining district concentrated around the Al Hamra waterfront offers the most relaxed and sophisticated weekend family dining experience in the Western Province. A cluster of excellent cafe and restaurant options within walking distance — Lebanese, Italian, Persian, and Saudi concepts sit side by side. The proximity to the Corniche means post-brunch walks and Red Sea views become a natural part of the rhythm.',
    url: '#' }

];
