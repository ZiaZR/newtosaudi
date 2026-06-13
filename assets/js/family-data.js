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
  }

];
