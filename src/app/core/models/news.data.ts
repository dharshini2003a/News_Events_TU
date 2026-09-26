// Static demo data (migrated from React newsData.js).
// Phase 2 will replace this with real API calls via NewsService/HttpClient.

// Dummy data — simulates a database of news/events for the
// Aravind Eye Care System News & Events portal.

export interface EventDateGroup {
  date: string;
  photos: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  centre: string;
  date: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  body: string[];
  keywords: string[];
  gallery: string[];
  // Optional — only set for multi-day Events created via the new Add News/Event form.
  isEvent?: boolean;
  endDate?: string;
  dateGroups?: EventDateGroup[];
}

export const newsList: NewsItem[] = [
  {
    id: 1,
    title: "Inauguration of Electrophysiology Diagnosis & H.O.P.E. Clinic",
    centre: "Tirunelveli",
    date: "2026-08-21",
    category: "Events",
    thumbnail: "assets/images/2026_8_TVL_Inau of Hope clinic & Electro physiology Dept (16).jpg",
    shortDescription:
      "Aravind-Tirunelveli inaugurated the Electrophysiology Diagnosis & Hereditary Ophthalmic Paediatric Disorders Evaluation (H.O.P.E.) Clinic, equipped with a new ERG/EOG/VEP diagnostic device.",
    body: [
      "Aravind-Tirunelveli inaugurated the Electrophysiology Diagnosis & Hereditary Ophthalmic Paediatric Disorders Evaluation (H.O.P.E.) Clinic. Through the HOPE Project, with generous support from the Aravind Eye Foundation (AEF), the clinic is equipped with a new Electrophysiology (ERG/EOG/VEP) diagnostic device to provide specialised care for children with inherited ocular disorders.",
      "Dr. Monika Rana, IAS, Commissioner, Tirunelveli City Municipal Corporation, inaugurated the HOPE Clinic and the ERG equipment. Dr. Mohammed Abubacker, President, Indian Medical Association, Tirunelveli, was the Guest of Honour. Dr. R. Ramakrishnan, Advisor, Aravind-Tirunelveli, Dr. R. Meenakshi, CMO, Aravind-Tirunelveli, Dr. Fathima, Paediatric Ophthalmologist, and doctors, AOPs, and administrative staff from various departments of Aravind-Tirunelveli were present on the occasion.",
      "Certain eye diseases that occur during childhood can be hereditary, and hundreds of genes associated with genetic eye disorders have been identified. Even when the results of an eye examination are inconclusive, genetic testing can help confirm the diagnosis. The clinic will help families understand the risk of hereditary conditions and provide guidance for family planning. The Electrophysiology (ERG/EOG/VEP) equipment will further help assess retinal function and aid in the diagnosis and prognostic evaluation of retinal disorders.",
    ],
    keywords: ["HOPE Clinic", "Tirunelveli", "Electrophysiology", "Paediatric", "ERG"],
    gallery: ["assets/images/2026_8_TVL_Inau of Hope clinic & Electro physiology Dept (9).jpg", "assets/images/2026_8_TVL_Inau of Hope clinic & Electro physiology Dept (13).jpg", "assets/images/2026_8_TVL_Inau of Hope clinic & Electro physiology Dept (15).jpg", "assets/images/2026_8_TVL_Inau of Hope clinic & Electro physiology Dept (4).jpg"],
  },
  {
    id: 2,
    title: "CME on Optometry – Beyond 20/20: Future of Optometric Care",
    centre: "Salem",
    date: "2026-08-23",
    category: "CME",
    thumbnail: "assets/images/CME on Optometry – Beyond 2020 Future of Optometric Care,23th August'2026 (6).JPG",
    shortDescription:
      "A CME on contemporary optometry topics — retinoscopy, contact lenses, myopia control and more — attended by 213 participants at Aravind-Salem.",
    body: [
      'The CME on "Optometry Beyond 20/20 – Future of Optometric Care" was organised by Aravind-Salem. The programme featured a series of insightful and interactive academic sessions covering contemporary aspects of optometry, including retinoscopy, subjective refraction, vision assessment, resolving power, contact lenses, optical dispensing, myopia control, and various aspects of refraction and vision assessment.',
      "Dr. R. Janani, Medical Consultant, Paediatric Ophthalmology & Adult Strabismus Services, Aravind-Salem, delivered the welcome address, setting an inspiring tone for the programme. The sessions provided participants with valuable opportunities to enhance their knowledge and practical skills. A key highlight of the CME was the highly engaging hands-on training and group discussion session.",
      "The programme concluded with a vote of thanks by Dr. Saranya, Medical Consultant, Paediatric Ophthalmology & Adult Strabismus Services, Aravind-Salem. A total of 213 participants attended the programme.",
    ],
    keywords: ["CME", "Optometry", "Salem", "Myopia Control", "Refraction"],
    gallery: ["assets/images/CME on Optometry – Beyond 2020 Future of Optometric Care,23th August'2026 (12).JPG", "assets/images/CME on Optometry – Beyond 2020 Future of Optometric Care,23th August'2026 (3).JPG", "assets/images/CME on Optometry – Beyond 2020 Future of Optometric Care,23th August'2026 (9).JPG","assets/images/CME on Optometry – Beyond 2020 Future of Optometric Care,23th August'2026 (6).JPG","assets/images/CME on Optometry – Beyond 2020 Future of Optometric Care,23th August'2026 (18).JPG"],
  },
  {
    id: 3,
    title: "World Strabismus Day",
    centre: "Salem",
    date: "2026-08-10",
    category: "Others",
    thumbnail: "assets/images/2026_8_Salem_World Strabismus Day (26).jpg",
    shortDescription:
      "Aravind-Salem observed World Strabismus Day, creating public awareness about squint, early detection and timely treatment.",
    body: [
      "Aravind-Salem observed World Strabismus Day by creating awareness among the public about strabismus (squint), emphasising the importance of early detection and timely treatment.",
      "As part of the observance, awareness posters on strabismus were displayed across the hospital premises. The posters explained strabismus, its signs and symptoms, its impact on children's vision, the importance of early eye examinations, and the available treatment options in a simple and easy-to-understand manner.",
      "Parents and the public were also encouraged not to ignore signs such as misalignment of the eyes or one eye turning in a different direction, particularly in children, and were advised to consult an eye specialist at the earliest.",
    ],
    keywords: ["Strabismus", "Squint", "Awareness", "Salem", "Paediatric"],
    gallery: ["assets/images/2026_8_Salem_World Strabismus Day (2).JPG", "assets/images/2026_8_Salem_World Strabismus Day (5).JPG", "assets/images/2026_8_Salem_World Strabismus Day (11).JPG","assets/images/2026_8_Salem_World Strabismus Day (21).JPG"],
  },
  {
    id: 4,
    title: "Independence Day – 2026",
    centre: "Salem",
    date: "2026-08-15",
    category: "Events",
    thumbnail: "assets/images/DSC_8883.JPG",
    shortDescription:
      "Aravind-Salem celebrated Independence Day with flag hoisting, the Independence Day oath, and active staff participation.",
    body: [
      "Aravind-Salem celebrated Independence Day with pride and enthusiasm. Dr. B. Manohar Babu, CMO, Aravind-Salem, hoisted the national flag and delivered the Independence Day message. All staff members took the Independence Day oath.",
      "The celebration highlighted the spirit of freedom, unity, patriotism, and national pride, with active participation from the hospital staff.",
    ],
    keywords: ["Independence Day", "Salem", "Flag Hoisting", "Staff"],
    gallery: ["assets/images/DSC_8899.JPG", "assets/images/DSC_8906.JPG", "assets/images/DSC_8910.JPG","assets/images/DSC_8901.JPG"],
  },
  {
    id: 5,
    title: "National Symposium at Vivekananda College of Pharmacy for Women",
    centre: "Salem",
    date: "2026-08-13",
    category: "CME",
    thumbnail: "assets/images/Dr.SSK.jpg",
    shortDescription:
      "Dr. S. Senthilkumari delivered a talk on AI-assisted early AMD detection at the IBP-NFP 2026 symposium in Sankagiri, Salem.",
    body: [
      'Dr. S. Senthilkumari, Scientist, Ocular Pharmacology, AMRF, was invited to deliver a talk at the 4th National Symposium on "Innovative Breakthrough in Pharmacare – Nurturing the Future Pharmacist (IBP-NFP) 2026", held at Vivekananda College of Pharmacy for Women, Sankagiri, Salem.',
      'She delivered a talk on "Saving sight with code: A new era for early AMD detection and patient outcomes."',
    ],
    keywords: ["Symposium", "AMD", "Pharmacy", "Salem", "AMRF"],
    gallery: ["assets/images/Dr.SSK.jpg"],
  },
  {
    id: 6,
    title: "Independence Day Celebration at Aurolab",
    centre: "Aurolab",
    date: "2026-08-15",
    category: "Events",
    thumbnail: "assets/images/aurolab_independence.svg",
    shortDescription:
      "Aurolab celebrated the 80th Independence Day with great enthusiasm and patriotic spirit. The national flag was hoisted by R.D. Sriram, Managing Director, Aurolab.",
    body: [
      "Aurolab celebrated the 80th Independence Day with great enthusiasm and patriotic spirit. The national flag was hoisted by R.D. Sriram, Managing Director, Aurolab, marking the occasion with dignity and pride.",
      "The celebration brought together the entire Aurolab team, who participated enthusiastically in the flag hoisting ceremony and various patriotic activities throughout the day.",
    ],
    keywords: ["Independence Day", "Aurolab", "Flag Hoisting", "Patriotic"],
    gallery: ["assets/images/aurolab_independence.svg"],
  },
  {
    id: 7,
    title: "Marketing Insight Session and Customer Expectations Session",
    centre: "Aurolab",
    date: "2026-08-19",
    category: "Workshop",
    thumbnail: "assets/images/marketing_session.svg",
    shortDescription:
      "Aurolab conducted a 'Marketing Insights and Customer Expectations' session for Team Leaders and Group Leaders from the Production Department.",
    body: [
      "Aurolab conducted a 'Marketing Insights and Customer Expectations' session for Team Leaders and Group Leaders from the Production Department. The session was led by Vignesh Pandian and Vikharnan, Category Managers, who shared practical insights into customer expectations and market dynamics.",
      "The session was well received by the participants, who found it highly insightful and appreciated the actionable strategies aimed at enhancing customer engagement and strengthening team performance.",
    ],
    keywords: ["Marketing", "Customer Service", "Aurolab", "Production"],
    gallery: ["assets/images/marketing_session.svg"],
  },
  {
    id: 8,
    title: "Competitions for First-Year AOPs",
    centre: "Coimbatore",
    date: "2026-08-08",
    category: "Events",
    thumbnail: "assets/images/aop_competition.svg",
    shortDescription:
      "Drawing, Poetry, Chess, and Carrom competitions were organised for the first-year AOPs at Aravind-Coimbatore.",
    body: [
      "Drawing, Poetry, Chess, and Carrom competitions were organised for the first-year AOPs at Aravind-Coimbatore. The event aimed to encourage creativity, teamwork, critical thinking, and healthy competition among the participants.",
      "The AOPs actively participated in the competitions, demonstrating enthusiasm, talent, and excellent sportsmanship. Special appreciation was given to the outstanding performers in Carrom, while five winning teams were recognised for their impressive performance and teamwork.",
      "Overall, the event was an enjoyable and enriching experience that fostered team spirit, camaraderie, and mutual encouragement among the AOPs.",
    ],
    keywords: ["AOP", "Competitions", "Coimbatore", "Creativity", "Teamwork"],
    gallery: ["assets/images/aop_competition.svg"],
  },
  {
    id: 9,
    title: "Observational Visit by Nursing Students",
    centre: "Coimbatore",
    date: "2026-08-13",
    category: "Others",
    thumbnail: "assets/images/nursing_visit.svg",
    shortDescription:
      "61 second-year B.Sc. Nursing students from Hindusthan College of Nursing visited Aravind-Coimbatore for an observational visit.",
    body: [
      "Two staff members and 61 second-year B.Sc. Nursing students from Hindusthan College of Nursing visited Aravind-Coimbatore for an observational visit. The visit provided the students with practical exposure to the functioning of the Eye Bank, eye donation procedures, corneal retrieval and preservation, and the vital role of eye donation in restoring vision.",
      "The programme was organised as part of an educational initiative to enhance awareness among nursing students about eye donation and corneal transplantation. The students actively participated in the programme and showed keen interest in learning about the various aspects of eye donation and transplantation.",
    ],
    keywords: ["Nursing", "Eye Donation", "Coimbatore", "Education"],
    gallery: ["assets/images/nursing_visit.svg"],
  },
  {
    id: 10,
    title: "Independence Day Celebration at Aravind-Coimbatore",
    centre: "Coimbatore",
    date: "2026-08-15",
    category: "Events",
    thumbnail: "assets/images/coimbatore_independence.svg",
    shortDescription:
      "Aravind-Coimbatore celebrated the 80th Independence Day with great enthusiasm and patriotic spirit.",
    body: [
      "Aravind-Coimbatore celebrated the 80th Independence Day with great enthusiasm and patriotic spirit. The celebration commenced with the hoisting of the national flag by Dr. Narendran, CMO, Aravind-Coimbatore.",
      "The cultural programme, led and performed by the first-year trainees, showcased their talents and patriotism through dance performances, inspirational speeches, and individual and group presentations. A traditional Silambam performance by Sr. Devadharshini, OPD, was one of the highlights of the event.",
      "The programme reflected the values of freedom, unity, sacrifice, and national pride. The event concluded with a vote of thanks delivered by Dr. A. Sasikala Elizabeth, Sr. R. Radhika, and Umapriya, followed by the National Anthem.",
    ],
    keywords: ["Independence Day", "Coimbatore", "Patriotic", "Cultural Program"],
    gallery: ["assets/images/coimbatore_independence.svg"],
  },
  {
    id: 11,
    title: "Independence Day 2026 Celebration at Aravind-Tirupur",
    centre: "Tirupur",
    date: "2026-08-15",
    category: "Events",
    thumbnail: "assets/images/tirupur_independence.svg",
    shortDescription:
      "Aravind-Tirupur celebrated the 80th Independence Day with great enthusiasm, patriotic spirit, and cultural programs.",
    body: [
      "Aravind-Tirupur celebrated the 80th Independence Day with great enthusiasm and patriotic spirit. The celebration was attended by doctors, administrative staff, AOPs, and support staff. The national flag was hoisted by Dr. Haritha, Medical Officer, followed by the singing of the National Anthem.",
      "The celebration reflected the spirit of patriotism, unity, and togetherness among the staff. In the evening, cultural programmes were organised, with the AOP team presenting vibrant dance performances that added colour and joy to the celebrations.",
    ],
    keywords: ["Independence Day", "Tirupur", "Patriotic", "Dance Performance"],
    gallery: ["assets/images/tirupur_independence.svg"],
  },
  {
    id: 12,
    title: "Glaucoma Society of India's nationwide PG quiz",
    centre: "Coimbatore",
    date: "2026-08-18",
    category: "CME",
    thumbnail: "assets/images/glaucoma_quiz.svg",
    shortDescription:
      "The preliminary round of 'GlauQuest', a nationwide PG quiz competition organised by the Glaucoma Society of India, was conducted at Aravind-Coimbatore.",
    body: [
      "The preliminary round of 'GlauQuest', a nationwide PG quiz competition organised by the Glaucoma Society of India (GSI) in association with Ajanta Pharma, was conducted at Aravind-Coimbatore.",
      "Dr. Krutin Jugal Shah secured the first prize and received a certificate and a cash prize of Rs. 5,000. Dr. Dhruv Chetan Kharkande won the second prize and received Rs. 3,000, while Dr. Rhea Susan secured the third prize and received Rs. 2,000.",
      "Dr. Ganesh V. Raman, HOD, Glaucoma Department, distributed the prizes, congratulated the winners, and appreciated all the participants for their enthusiastic involvement. A high tea, arranged by Ajanta Pharma, preceded the event, which concluded with the distribution of certificates.",
    ],
    keywords: ["Glaucoma", "Quiz", "Competition", "Coimbatore"],
    gallery: ["assets/images/glaucoma_quiz.svg"],
  },
  {
    id: 13,
    title: "Anti-Drug Awareness Rally",
    centre: "Tirunelveli",
    date: "2026-08-08",
    category: "Others",
    thumbnail: "assets/images/anti_drug_rally.svg",
    shortDescription:
      "Aravind-Tirunelveli, in collaboration with C1 Junction Police Station, organised an Anti-Drug Awareness Rally under the theme 'Together for a Drug-Free Society.'",
    body: [
      "Aravind-Tirunelveli, in collaboration with C1 Junction Police Station, organised an Anti-Drug Awareness Rally under the theme 'Together for a Drug-Free Society.'",
      "Aju Kumar, Assistant Commissioner of Police, Tirunelveli Junction, inaugurated the rally and delivered an insightful address on the harmful impact of drug abuse on social stability and family life. He emphasised the urgent need for collective efforts to eradicate drug abuse from society.",
      "Dr. Ramakrishnan, Advisor, Aravind-Tirunelveli, presided over the programme and highlighted the importance of sustained awareness campaigns. He also encouraged the youth to take an active role in shaping a healthier and drug-free future. The event concluded with doctors, staff, and police personnel taking a solemn anti-drug pledge.",
    ],
    keywords: ["Anti-Drug", "Awareness", "Rally", "Tirunelveli"],
    gallery: ["assets/images/anti_drug_rally.svg"],
  },
  {
    id: 14,
    title: "Workshop on 'நேயம்: Excellence in Patient Care'",
    centre: "Tirunelveli",
    date: "2026-08-20",
    category: "Workshop",
    thumbnail: "assets/images/patient_care_workshop.svg",
    shortDescription:
      "Aravind-Tirunelveli conducted a workshop titled 'நேயம்: Excellence in Patient Care' for staff members of the Opticals and Medicals departments.",
    body: [
      "As part of its continuous staff development and patient service excellence initiatives, Aravind-Tirunelveli conducted a workshop titled 'நேயம்: Excellence in Patient Care' for staff members of the Opticals and Medicals departments.",
      "The session was facilitated by Prasath, Sales Effectiveness Trainer, ZEISS India, who delivered an engaging and insightful programme focused on enhancing the patient experience through compassionate service and effective communication.",
      "He emphasised that every interaction with a patient is an opportunity to build trust and confidence. The session covered practical approaches to understanding patient needs, active listening, professional communication, service etiquette, handling challenging situations with empathy, and creating memorable patient experiences through excellence in service.",
    ],
    keywords: ["Patient Care", "Workshop", "Tirunelveli", "Service Excellence"],
    gallery: ["assets/images/patient_care_workshop.svg"],
  },
  {
    id: 15,
    title: "Book Distribution Programme at Madurai",
    centre: "Madurai",
    date: "2026-08-14",
    category: "Others",
    thumbnail: "assets/images/book_distribution.svg",
    shortDescription:
      "Aravind residents distributed useful reference books to students at the Rotary Madurai Midtown Community Trust Integrated Study Centre.",
    body: [
      "As part of the Resident Social Responsibility initiative, a team of Aravind residents comprising Dr. Vijayalakshmi, Dr. Kathleen Mary Sheeba, Dr. Lavanya A., Dr. Balasubramanian, Dr. Siju S. Nivya, and Dr. Akhil Karamsetty visited the Rotary Madurai Midtown Community Trust Integrated Study Centre.",
      "Surrounded by lush greenery and trees, the centre provides a peaceful and conducive learning environment for nearly 600 students preparing for various competitive examinations. The well-equipped library houses an extensive collection of books covering examinations such as IAS, UPSC, and TNPSC.",
      "The team distributed useful reference books to the students, purchased through a generous contribution of Rs. 2 lakh from Dr. N. Venkatesh Prajna, Director Finance, AECS. Many of the students come from challenging socio-economic backgrounds, and the support provided through these educational resources will help encourage and motivate them.",
    ],
    keywords: ["Book Distribution", "Social Responsibility", "Madurai", "Students"],
    gallery: ["assets/images/book_distribution.svg"],
  },
  {
    id: 16,
    title: "Exposure Visit by SELCO India Team",
    centre: "LAICO",
    date: "2026-08-01",
    category: "Others",
    thumbnail: "assets/images/selco_visit.svg",
    shortDescription:
      "Padmavathy Shenoy and Guruprakash Shetty from SELCO India visited Aravind-Madurai to understand the Aravind model of social enterprise.",
    body: [
      "Padmavathy Shenoy, Independent Consultant, and Guruprakash Shetty, Deputy General Manager, SELCO India, Bengaluru, along with his team, visited Aravind-Madurai, to understand the Aravind model of social enterprise and explore its potential application to SELCO's external consulting, training, and advocacy initiatives.",
      "The visit provided insights into LAICO's role and key initiatives, Aravind's Seven Pillars and their contribution to organisational sustainability and scale, approaches to external funding, research and knowledge dissemination, the Aravind October Summit, vision stories, and outreach models.",
      "The visit enabled the SELCO team to gain a deeper understanding of Aravind's approach to creating and sustaining social impact, with learnings that could support the future expansion of SELCO's external services globally.",
    ],
    keywords: ["Social Enterprise", "LAICO", "Exposure Visit"],
    gallery: ["assets/images/selco_visit.svg"],
  },
  {
    id: 17,
    title: "Visit by Lifeline Multispecialty Hospital Team",
    centre: "Dindigul",
    date: "2026-08-04",
    category: "Others",
    thumbnail: "assets/images/lifeline_visit.svg",
    shortDescription:
      "Dr. Mathew Pappachan and team from Lifeline Multispecialty Hospital, Adoor, Kerala, visited Aravind-Dindigul and Aravind-Madurai.",
    body: [
      "Dr. Mathew Pappachan, Director, along with the team from Lifeline Multispecialty Hospital, Adoor, Kerala, visited Aravind-Dindigul and Aravind-Madurai as part of their initiative to establish an eye care unit as an additional service within their existing multispecialty hospital.",
      "The visit provided the team with an opportunity to gain insights into Aravind's approach to eye care delivery, including service systems, facility planning, infrastructure, workflows, and manpower requirements for integrating eye care services into a multispecialty hospital.",
      "Following the hospital visits, the team visited LAICO for further discussions on their proposed eye care project, with a focus on planning and developing a sustainable eye care unit to serve the community.",
    ],
    keywords: ["Eye Care", "Hospital", "Dindigul", "Exposure"],
    gallery: ["assets/images/lifeline_visit.svg"],
  },
  {
    id: 18,
    title: "Visit by Orbis International Leadership",
    centre: "Madurai",
    date: "2026-08-26",
    category: "Others",
    thumbnail: "assets/images/orbis_visit.svg",
    shortDescription:
      "Kathleen A. Sherwin, President & CEO, Orbis International, visited Aravind Eye Hospital, Madurai, and Aurolab.",
    body: [
      "Kathleen A. Sherwin, President & CEO, Orbis International, New York, USA, along with Rishi Raj Borah, Country Director – India, and Lijin Idicula, Communications Manager, Orbis International, New Delhi, India, visited Aravind Eye Hospital, Madurai.",
      "The visit provided the team with an opportunity to gain insights into the Aravind Model, review updates on Orbis International-supported projects at Aravind and their impact, and visit Aurolab to understand its operations and contribution to eye care.",
      "The leadership team appreciated the work being done by Aravind and Aurolab in advancing global eye care delivery.",
    ],
    keywords: ["Orbis International", "Madurai", "Eye Care", "Partnership"],
    gallery: ["assets/images/orbis_visit.svg"],
  },
  
  {
    id: 20,
    title: "Independence Day Celebration at Aravind-Chennai",
    centre: "Chennai",
    date: "2026-08-15",
    category: "Events",
    thumbnail: "assets/images/chennai_independence.svg",
    shortDescription:
      "Independence Day was celebrated at Aravind-Chennai with patriotic spirit, featuring flag hoisting, Silambam performance, and recognition of staff integrity.",
    body: [
      "Independence Day was celebrated at Aravind-Chennai with patriotic spirit and enthusiasm. The national flag was hoisted by Dr. Aravind, CMO, Aravind-Chennai, in front of the hospital entrance.",
      "The celebrations continued with a March Past by the Sports Club girls, followed by an impressive Silambam performance by the Silambam Club girls. The performances added energy and pride to the occasion while highlighting the spirit of unity and patriotism.",
      "The day also witnessed a heartwarming act of honesty and integrity. A patient visiting the hospital accidentally left behind gold chains weighing two and a half sovereigns. Manimekalai, a sanitation worker at Aravind-Chennai, found the chains and promptly handed them over to the hospital authorities. In recognition of her exemplary honesty and integrity, Manimekalai was felicitated and presented with a gift.",
    ],
    keywords: ["Independence Day", "Chennai", "Patriotic", "Integrity"],
    gallery: ["assets/images/chennai_independence.svg"],
  },
  {
    id: 21,
    title: "Independence Day Celebration at Aravind-Tirunelveli",
    centre: "Tirunelveli",
    date: "2026-08-15",
    category: "Events",
    thumbnail: "assets/images/tirunelveli_independence.svg",
    shortDescription:
      "The 80th Independence Day was celebrated with great zeal and enthusiasm at Aravind-Tirunelveli.",
    body: [
      "The 80th Independence Day was celebrated with great zeal and enthusiasm at Aravind-Tirunelveli. The programme began with the Tamil Thai Valthu, followed by the hoisting of the National Flag by Dr. R. Meenakshi, CMO, Aravind-Tirunelveli.",
      "The celebrations continued with patriotic songs in both Tamil and Hindi, creating a spirit of national pride and unity. Dr. R. Ramakrishnan, Advisor, Aravind-Tirunelveli, delivered an inspiring address on the occasion.",
      "The programme concluded with the singing of the National Anthem, reaffirming the commitment to national values and unity.",
    ],
    keywords: ["Independence Day", "Tirunelveli", "Patriotic", "National Pride"],
    gallery: ["assets/images/tirunelveli_independence.svg"],
  },
  {
    id: 22,
    title: "73rd Annual Conference of the Tamil Nadu Ophthalmic Association (TNOA) – 2026",
    centre: "Coimbatore",
    date: "2026-07-31",
    category: "Conferences",
    thumbnail: "assets/images/tnoa_conference.svg",
    shortDescription:
      "Aravind doctors participated in the 73rd Annual Conference of TNOA, held at the CODISSIA Trade Fair Complex, Coimbatore.",
    body: [
      "Aravind doctors participated in the 73rd Annual Conference of the Tamil Nadu Ophthalmic Association (TNOA) - 2026, held at the CODISSIA Trade Fair Complex, Coimbatore from July 31 to August 2.",
      "Dr. Usha Kim, Chief, Orbit, Oculoplasty, Ocular Oncology & Ocular Prosthetic Services, Aravind-Madurai, served as Chairperson for the session 'Hidden in plain sight: Avoiding pitfalls in oculoplastic and orbit' and presented on 'Thyroid eye diseases: Some dad cases'.",
      "Other Aravind doctors including Dr. Meghana Tanwar, Dr. Vinitha L. Rashme, and Dr. Ramya contributed with presentations and poster presentations, showcasing Aravind's expertise in various ophthalmological specialties.",
    ],
    keywords: ["TNOA", "Conference", "Coimbatore", "Ophthalmology"],
    gallery: ["assets/images/tnoa_conference.svg"],
  },
  {
    id: 23,
    title: "AKSHIVIKAS – Aravind Advanced Cataract Course (8th Batch)",
    centre: "Chennai",
    date: "2026-08-11",
    category: "Training",
    thumbnail: "assets/images/akshivikas_course.svg",
    shortDescription:
      "The 8th Batch of AKSHIVIKAS was conducted at ARCORE Training Centre, Aravind-Chennai, with 33 practising ophthalmologists from across India.",
    body: [
      "The 8th Batch of AKSHIVIKAS – Aravind Advanced Cataract Course was conducted at the ARCORE Training Centre, Aravind-Chennai, with the aim of enhancing participants' knowledge and surgical skills in advanced cataract management.",
      "The programme featured a comprehensive blend of academic sessions, practical demonstrations, case-based discussions, surgical videos, and interactive sessions with experienced faculty, covering various aspects of advanced cataract surgery and management.",
      "A total of 33 practising ophthalmologists from various parts of India, including Tamil Nadu, Kerala, Andhra Pradesh, Uttar Pradesh, Bihar, Jharkhand, Rajasthan, Haryana, Assam, Tripura, West Bengal, Karnataka, Puducherry, and other regions, participated in the programme.",
    ],
    keywords: ["Cataract", "Training", "Chennai", "Surgery"],
    gallery: ["assets/images/akshivikas_course.svg"],
  },
  {
    id: 24,
    title: "ELITA SILK Machine Inauguration",
    centre: "Tirunelveli",
    date: "2026-08-14",
    category: "Events",
    thumbnail: "assets/images/elita_silk.svg",
    shortDescription:
      "The ELITA SILK Machine was inaugurated at Aravind-Tirunelveli by Thiru Anand Mohan, IAS, District Collector, Tirunelveli.",
    body: [
      "The ELITA SILK Machine was inaugurated at Aravind-Tirunelveli by Thiru Anand Mohan, IAS, District Collector, Tirunelveli, marking another significant advancement in refractive surgical services at Aravind Eye Hospital, Tirunelveli.",
      "The event was presided over by Dr. R. Ramakrishnan, Advisor, Aravind-Tirunelveli, Dr. R. Meenakshi, Chief Medical Officer, Aravind-Tirunelveli, and Dr. Anitha V., Chief, Cornea and Refractive Surgery Services, Aravind-Tirunelveli.",
      "The Collector was given a detailed overview of the ELITA SILK technology, its functioning, and its advantages in advanced refractive surgery. He showed keen interest in understanding the procedure and interacted with the team, clarifying queries regarding the technology and its benefits to patients.",
    ],
    keywords: ["Refractive Surgery", "Technology", "Tirunelveli", "ELITA SILK"],
    gallery: ["assets/images/elita_silk.svg"],
  },
  {
    id: 25,
    title: "Competitions for AOP New Recruits",
    centre: "Tirunelveli",
    date: "2026-08-14",
    category: "Events",
    thumbnail: "assets/images/aop_games.svg",
    shortDescription:
      "Interactive games were organised for newly recruited AOPs at Aravind-Tirunelveli to foster teamwork and create a joyful learning environment.",
    body: [
      "To foster teamwork and create a joyful learning environment, the NS and Academic Team organised a series of interactive games for the newly recruited AOPs on Friday, 14 August 2026.",
      "The games included Relay Race, Lemon with Spoon, Multitasking, and Balloon Saving. The participants actively engaged in each game with enthusiasm and excellent sportsmanship, making the session both enjoyable and meaningful.",
      "Winners were announced with great enthusiasm in each category. The session reflected the commitment to building a supportive and engaging training environment for new AOPs.",
    ],
    keywords: ["AOP", "Training", "Tirunelveli", "Teamwork"],
    gallery: ["assets/images/aop_games.svg"],
  },
  {
    id: 26,
    title: "CME and Skill Transfer Programme: Flanged SFIOL Surgery",
    centre: "Tirunelveli",
    date: "2026-08-15",
    category: "CME",
    thumbnail: "assets/images/sfiol_surgery.svg",
    shortDescription:
      "A two-day academic and surgical skill transfer programme on flanged scleral-fixated intraocular lens (SFIOL) surgery was conducted at Aravind-Tirunelveli.",
    body: [
      "A two-day academic and surgical skill transfer programme on flanged scleral-fixated intraocular lens (SFIOL) surgery was conducted at Aravind-Tirunelveli, bringing together ophthalmologists from various Aravind centres as well as eye-care professionals from outside the organisation.",
      "The first day focused on surgical skill transfer for ophthalmologists from different Aravind centres. Eleven ophthalmologists participated, with each surgeon performing a flanged SFIOL procedure under supervision and assistance.",
      "The second day featured an academic CME programme with sessions covering principles and practical aspects of anterior vitrectomy and the step-by-step technique of flanged SFIOL surgery. A hands-on wet lab enabled participants to practise the technique using a silicone model eye.",
    ],
    keywords: ["SFIOL", "Surgery", "Training", "Tirunelveli"],
    gallery: ["assets/images/sfiol_surgery.svg"],
  },
  {
    id: 27,
    title: "Special Outreach Camps at Aravind-Tuticorin",
    centre: "Tuticorin",
    date: "2026-08-11",
    category: "Others",
    thumbnail: "assets/images/outreach_camp.svg",
    shortDescription:
      "Eight special outreach camps were conducted, screening 525 people from vulnerable groups including old age homes and orphanages.",
    body: [
      "Aravind-Tuticorin conducted comprehensive eye screening camps across schools, workplaces, and the general community. Recognising that several vulnerable groups often face challenges in accessing eye care services, the team organised special outreach camps at their respective premises.",
      "A total of eight special outreach camps were conducted, screening 525 people. Of those screened, 121 (23%) were advised spectacles, of whom 114 received them. Cataract surgery was advised for 61 people (12%), and 36 underwent surgery.",
      "These outcomes highlight the importance of taking quality eye care services directly to underserved communities, enabling timely diagnosis and treatment for those who might otherwise remain unreached.",
    ],
    keywords: ["Outreach", "Community", "Tuticorin", "Eye Care"],
    gallery: ["assets/images/outreach_camp.svg"],
  },
  {
    id: 28,
    title: "Wall of the FAME at Aravind-Pondicherry",
    centre: "Pondicherry",
    date: "2026-08-07",
    category: "Events",
    thumbnail: "assets/images/wall_of_fame.svg",
    shortDescription:
      "Aravind-Pondicherry inducted three distinguished alumni into the 'Wall of Fame', recognising their clinical excellence.",
    body: [
      "Aravind-Pondicherry is proud to induct three of its distinguished alumni into the esteemed 'Wall of Fame', recognising their hard work, dedication, and clinical excellence during their DNB residency.",
      "The outstanding inductees are Dr. Meena Thotakura (DNB Resident, 2016–2018), Dr. Saloni Joshi (DNB Resident, 2020–2023), and Dr. Harsha P. (DNB Resident, 2020–2023).",
      "Their achievements and contributions continue to inspire and uphold the tradition of excellence at Aravind-Pondicherry.",
    ],
    keywords: ["Alumni", "Excellence", "Pondicherry", "DNB"],
    gallery: ["assets/images/wall_of_fame.svg"],
  },
  {
    id: 29,
    title: "Free Cardiac Screening Camp at Aravind-Pondicherry",
    centre: "Pondicherry",
    date: "2026-08-06",
    category: "Others",
    thumbnail: "assets/images/cardiac_screening.svg",
    shortDescription:
      "Aravind-Pondicherry conducted a two-day Cardiac Screening Camp for its staff and their parents.",
    body: [
      "Aravind-Pondicherry conducted a two-day Cardiac Screening Camp for its staff and their parents, as part of its ongoing efforts to promote preventive healthcare and overall well-being among the Aravind family.",
      "Apollo Hospitals brought its state-of-the-art Apollo Mobile Unit to the hospital campus, while Chengam Gold Centennial Lions Club, Chengam, extended valuable support in organising the camp.",
      "The participants benefited from comprehensive heart health assessments, consultations with cardiac specialists, and essential cardiac check-ups, making the initiative a meaningful step towards promoting a healthier workforce and their families.",
    ],
    keywords: ["Cardiac", "Health", "Pondicherry", "Wellness"],
    gallery: ["assets/images/cardiac_screening.svg"],
  },
  {
    id: 30,
    title: "Global Ophthalmology Summit – Education, Tele-learning & AI",
    centre: "Pennsylvania, USA",
    date: "2026-08-07",
    category: "Conferences",
    thumbnail: "assets/images/global_summit.svg",
    shortDescription:
      "Dr. Gokulvasanth from Aravind-Pondicherry participated as a panellist at the Global Ophthalmology Summit in Philadelphia.",
    body: [
      "Dr. Gokulvasanth, Resident, represented Aravind-Pondicherry at the Global Ophthalmology Summit, held in Philadelphia, Pennsylvania, where he participated as a panellist in the session on 'Education, Tele-learning & AI'.",
      "He shared insights on how Aravind is actively shaping the future of ophthalmic education and training through innovative approaches including AI-assisted learning, interactive 3D models and visualisations, and GoPro-assisted live surgical mentoring.",
      "It was a significant opportunity for Aravind to contribute to the global dialogue on technology, education, and the future of eye care, while taking Aravind's innovations and experiences to the global stage.",
    ],
    keywords: ["AI", "Education", "Global", "Technology"],
    gallery: ["assets/images/global_summit.svg"],
  },
  {
    id: 31,
    title: "ISCKRS MEET 2026 - Madan Mohan Cornea Oration",
    centre: "New Delhi",
    date: "2026-08-07",
    category: "Conferences",
    thumbnail: "assets/images/isckrs_meet.svg",
    shortDescription:
      "Dr. N. Venkatesh Prajna delivered the prestigious Madan Mohan Cornea Oration at ISCKRS MEET 2026 in New Delhi.",
    body: [
      "Dr. N. Venkatesh Prajna, Chief, Cornea & Refractive Surgery Services, Aravind-Madurai, participated in the Annual Conference of the Indian Society of Cornea & Keratorefractive Surgeons (ISCKRS MEET 2026), held at Hotel Le Meridien, Windsor Place, New Delhi.",
      "He delivered the prestigious Madan Mohan Cornea Oration on the topic 'Eminence versus Evidence', sharing his expertise and insights with the corneal surgery community.",
      "The participation highlighted Aravind's leadership in corneal and refractive surgery, contributing to national academic discussions on advancing eye care.",
    ],
    keywords: ["Cornea", "Surgery", "ISCKRS", "New Delhi"],
    gallery: ["assets/images/isckrs_meet.svg"],
  },
  {
    id: 32,
    title: "World Brain Day 2026 - Eye as a Window to the Brain",
    centre: "Tirunelveli",
    date: "2026-07-22",
    category: "Others",
    thumbnail: "assets/images/brain_day.svg",
    shortDescription:
      "The Department of Neuro-Ophthalmology, Aravind-Tirunelveli, organised an educational exhibition for World Brain Day.",
    body: [
      "In commemoration of World Brain Day 2026, the Department of Neuro-Ophthalmology, Aravind-Tirunelveli, organised an educational exhibition to promote awareness about brain health, early recognition of neurological conditions, timely referral, and equitable access to specialised care.",
      "Focusing on the theme 'The Eye as a Window to the Brain', the exhibition featured educational posters, interactive displays, and visual exhibits highlighting the intricate relationship between the eye and the brain.",
      "The exhibits showcased the visual manifestations of various neurological disorders and emphasised the importance of recognising ocular symptoms as potential early indicators of underlying neurological conditions.",
    ],
    keywords: ["Neuro-Ophthalmology", "Brain Health", "Tirunelveli", "Awareness"],
    gallery: ["assets/images/brain_day.svg"],
  },
  {
    id: 33,
    title: "WHO Meeting on SPECS 2030 Initiative",
    centre: "Geneva, Switzerland",
    date: "2026-09-01",
    category: "Conferences",
    thumbnail: "assets/images/2026_09_02_WHO SPECS 2030 initiative meeting, Geneva, Switzerland (1).jpeg",
    shortDescription:
      "Thulasiraj Ravilla, Director – Operations, AECS, participated as a Panelist at the WHO Meeting on SPECS 2030 Initiative.",
    body: [
      "Thulasiraj Ravilla, Director – Operations, AECS, participated as a Panelist in various sessions at the WHO Meeting on the SPECS 2030 Initiative and the Global Status Report on Eye Care, held in Geneva, Switzerland, from 1st to 3rd September 2026.",
      "The participation highlighted Aravind's commitment to advancing global eye care standards and contributing to international discussions on eye health policy and implementation.",
      "The SPECS 2030 Initiative represents a critical effort to strengthen eye care systems globally and ensure equitable access to vision care services.",
    ],
    keywords: ["WHO", "SPECS 2030", "Global Eye Care", "Geneva"],
    gallery: ["assets/images/2026_09_02_WHO SPECS 2030 initiative meeting, Geneva, Switzerland (3).jpg", "assets/images/2026_8_ED_.png"],
  },
  {
    id: 34,
    title: "Īkshana – Comprehensive Capsule for Postgraduates – Phase 1 (7th Batch)",
    centre: "Chennai",
    date: "2026-09-01",
    category: "Training",
    thumbnail: "assets/images/2026_8_Chennai_Ikshana (1).JPG",
    shortDescription:
      "The 7th batch of Īkshana programme was conducted at ARCORE, Aravind-Chennai, with 38 postgraduate participants.",
    body: [
      "The 7th batch of Īkshana – Comprehensive Capsule for Postgraduates – Phase 1 was conducted at ARCORE, Aravind-Chennai. This five-day comprehensive training programme was designed for first- and second-year postgraduate ophthalmology students.",
      "The programme focused on strengthening their clinical foundation and developing essential diagnostic and surgical skills through a combination of interactive academic sessions and hands-on training. Dr. Haripriya, Chief, Cataract Services, Aravind-Chennai, reviewed participants' SICS surgical videos and provided individualised feedback.",
      "A total of 38 postgraduates participated, representing a diverse group of institutions from across India, including participants from Kerala, Maharashtra, Jharkhand, and Karnataka.",
    ],
    keywords: ["Postgraduate", "Training", "Chennai", "Surgery"],
    gallery: ["assets/images/2026_8_Chennai_Ikshana (23).JPG","assets/images/2026_8_Chennai_Ikshana (6).JPG","assets/images/2026_8_Chennai_Ikshana (8).JPG","assets/images/2026_8_Chennai_Ikshana (13).JPG"],
  },
  {
    id: 35,
    title: "Teacher's Day Celebration at Aravind-Tirunelveli",
    centre: "Tirunelveli",
    date: "2026-09-05",
    category: "Events",
    thumbnail: "assets/images/2026_8_TVL_Teachers Day (8).JPG",
    shortDescription:
      "Aravind-Tirunelveli celebrated Teacher's Day with a special programme expressing gratitude and appreciation to teachers and mentors.",
    body: [
      "Aravind-Tirunelveli celebrated Teacher's Day with a special programme to express gratitude and appreciation to teachers, tutors, mentors, and all those who play an important role in guiding, nurturing, and inspiring the next generation of healthcare professionals.",
      "The celebration commenced with a prayer song, followed by the lighting of the traditional lamp. Sr. Muthusundari and Sr Selvam shared their thoughts on the theme 'எனக்கு பிடித்த ஆசிரியர்' (My Favourite Teacher), recalling the influence and inspiration they received from teachers in their lives.",
      "Senior leaders including Dr. R. Meenakshi, CMO, Dr. S. Padmavathy, Chief, Neuro-Ophthalmology Services, and Dr. A. Jaisripriya, Medical Consultant, shared their thoughts on the occasion, reinforcing the values of teaching and mentorship.",
    ],
    keywords: ["Teacher's Day", "Mentorship", "Tirunelveli", "Appreciation"],
    gallery: ["assets/images/2026_8_TVL_Teachers Day (9).JPG","assets/images/2026_8_TVL_Teachers Day (1).JPG","assets/images/2026_8_TVL_Teachers Day (3).JPG","assets/images/2026_8_TVL_Teachers Day (4).JPG","assets/images/2026_8_TVL_Teachers Day (6).JPG"],
  },
  {
    id: 36,
    title: "BMJ Awards South Asia 2026 - Primary Care Excellence",
    centre: "Pondicherry",
    date: "2026-09-05",
    category: "Events",
    thumbnail: "assets/images/south asia.png",
    shortDescription:
      "Dr. Usha Tejaswini S., Medical Consultant, Glaucoma Services, Aravind-Pondicherry, won the BMJ Awards South Asia 2026.",
    body: [
      "Dr. Usha Tejaswini S., Medical Consultant, Glaucoma Services, Aravind-Pondicherry, won the BMJ Awards South Asia 2026 in the Primary Care category, recognising excellence in healthcare.",
      "The award was presented for her work titled, 'India restructuring the cataract surgical pathway: An integrated model between rural vision centres and base hospitals.' The concept was developed under the guidance of Dr. R. Venkatesh, Chief Medical Officer, Aravind-Pondicherry.",
      "This recognition highlights Aravind's commitment to innovative healthcare delivery models and excellence in primary eye care services.",
    ],
    keywords: ["BMJ Awards", "Cataract", "Primary Care", "Innovation"],
    gallery: ["assets/images/south asia.png"],
  },
  {
    id: 37,
    title: "Eye Donation Awareness Fortnight - Aravind-Madurai",
    centre: "Madurai",
    date: "2026-08-25",
    category: "Others",
    thumbnail: "assets/images/eye_donation_training.svg",
    shortDescription:
      "As part of the National Eye Donation Fortnight (25 August - 8 September), Aravind-Madurai organised a series of awareness programmes across Madurai, Kodaikanal, Theni, Sivagangai, Pudukkottai, Kumbakonam and Dindigul.",
    body: [
      "As part of the National Eye Donation Fortnight, observed annually from August 25 to September 8 to raise public awareness and encourage people to pledge their eyes for corneal donation, Aravind-Madurai organised a series of awareness programmes and activities.",
      "25th August: A Hospital Cornea Retrieval Training Programme was organised in association with the Indian Medical Association (IMA) for 30 IMA doctors at the IMA Hall, Madurai. Dr. Sridhar, State President, IMA Tamil Nadu, delivered the Chief Guest address, and Dr. N. Venkatesh Prajna, Director - Finance & Academics, AECS, delivered the Guest of Honour address, focusing on strengthening hospital cornea retrieval and eye donation practices.",
      "26th August: An Eye Donation Awareness Programme, oath-taking and signature campaign were organised at Railway Hospital, Madurai, with Dr. Meera, ACMS, and Dr. Vimala, Chief, Ophthalmology, participating as Chief Guests. A total of 60 participants, including doctors, nurses, staff and patients, took the eye donation oath and signed the signature board.",
      "27th August: An Eye Donation Awareness Programme was organised in association with the Lions Club of Navajeevan and Madurai Host at Sourashtra College, Madurai. PMJF Dr. M. Stalin Arockia Raj, Second Vice District Governor, 2026-27, delivered the Guest of Honour address, and an Eye Donation Oath was taken by all participants.",
      "28th August: An Orientation Programme on the Hospital Cornea Retrieval Programme (HCRP) was held at Government Hospital, Kodaikanal, with around 30 doctors, nurses and supportive staff participating.",
      "29th August: An Eye Donation Awareness Programme was organised at Nalam Hospital, Theni, with Dr. Basheer, Medical Officer, felicitating the programme, and Dr. Ganapathy Rajesh, HOD, Department of Ophthalmology, delivering the Chief Guest address. Around 25 participants took part.",
      "31st August: A Felicitation Programme for Eye Donation Donor Families was organised at the Sivagangai Collectorate to honour 27 families who had donated the eyes of their loved ones, with Thiru. P. Akash, IAS, District Collector, Sivagangai, as Chief Guest.",
      "1st September: Around 120 participants, including doctors, nurses, supportive staff and patients, took part in an Eye Donation Human Chain, Signature Campaign and Awareness Programme organised with Government Medical College and Hospital, Pudukkottai.",
      "2nd September: An Eye Donation Awareness Programme and Drawing Competition were organised with the Lions Club of Kumbakonam Host at Government College for Women, Kumbakonam, with around 250 students and Lions Club members participating.",
      "3rd September: An Eye Donation Awareness Rally and Seminar were organised at Government Medical College and Hospital, Dindigul. Dr. Sai Saravanan, Dean, GMCH, Dindigul, flagged off the rally, and the programme was attended by doctors and 150 Nursing students, all of whom took the Eye Donation Oath.",
    ],
    keywords: ["Eye Donation", "Awareness", "Madurai", "Fortnight"],
    gallery: ["assets/images/eye_donation_training.svg"],
  },
  {
    id: 46,
    title: "First Runner-up – MANTHAN Grand Finale",
    centre: "Chennai",
    date: "2026-08-30",
    category: "Events",
    thumbnail: "assets/images/manthan_award.svg",
    shortDescription:
      "Dr. Veeransh Shah, DNB Resident, Aravind-Pondicherry, won First Runner-up at the MANTHAN Grand Finale.",
    body: [
      "Dr. Veeransh Shah, DNB Resident, Aravind-Pondicherry, won First Runner-up at the MANTHAN Grand Finale, organised in collaboration with the Tamil Nadu Ophthalmic Association (TNOA) and INTAS Pharmaceuticals, held at Novotel, Chennai.",
      "The award recognises his exceptional clinical knowledge, analytical thinking, and outstanding performance in ophthalmology.",
      "This achievement highlights Aravind's commitment to nurturing outstanding clinicians and researchers in the field of eye care.",
    ],
    keywords: ["MANTHAN", "Award", "Pondicherry", "Academic"],
    gallery: ["assets/images/manthan_award.svg"],
  },
  {
    id: 47,
    title: "Inauguration of a New Creche at Aravind-Salem",
    centre: "Salem",
    date: "2026-09-02",
    category: "Events",
    thumbnail: "assets/images/2026_8_Salem_Inau_Creche (3).JPG",
    shortDescription:
      "A new crèche facility was inaugurated at Aravind-Salem by Dr. B. Manohar Babu.",
    body: [
      "A new crèche facility was inaugurated at Aravind-Salem by Dr. B. Manohar Babu in the presence of doctors and staff members. The inauguration was made more memorable by the participation of the staff members' children, who filled the occasion with joy and warmth.",
      "The joyful atmosphere marked the beginning of a nurturing space where little ones can learn, play, grow, and feel at home.",
      "The crèche facility represents Aravind's commitment to supporting the work-life balance and well-being of its staff members.",
    ],
    keywords: ["Crèche", "Facility", "Salem", "Staff Support"],
    gallery: ["assets/images/2026_8_Salem_Inau_Creche (6).JPG","assets/images/2026_8_Salem_Inau_Creche (5).JPG","assets/images/2026_8_Salem_Inau_Creche (7).JPG","assets/images/2026_8_Salem_Inau_Creche (9).JPG"],
  },
  {
    id: 48,
    title: "Scientific Session on DME 360: Advancing Interdisciplinary Care",
    centre: "Madurai",
    date: "2026-09-02",
    category: "CME",
    thumbnail: "assets/images/2026_8_MDU_Retina_scientific session DME 360.JPG",
    shortDescription:
      "DME 360, a scientific session, promoted a holistic, evidence-based, interdisciplinary approach to Diabetic Macular Edema management.",
    body: [
      "Organised by Aravind-Madurai, DME 360, a scientific session, aimed at promoting a holistic, evidence-based, interdisciplinary approach to the management of Diabetic Macular Edema (DME).",
      "The session featured scientific contributions from experts across multiple specialties including Endocrinology, Nephrology, and Cardiology, providing comprehensive insights into DME management.",
      "Dr. R. Kim, CMO, Aravind-Madurai, led robust discussions with expert panellists, effectively bridging systemic evidence with clinical realities and striving for better and safer outcomes for DME patients.",
    ],
    keywords: ["DME", "Diabetes", "Madurai", "Interdisciplinary"],
    gallery: ["assets/images/2026_8_MDU_Retina_scientific session DME 360.JPG"],
  },
  {
    id: 49,
    title: "Spoken English Training at Aurolab",
    centre: "Aurolab",
    date: "2026-08-02",
    category: "Training",
    thumbnail: "assets/images/spoken_english.svg",
    shortDescription:
      "A three-month Spoken English course for Production Associates commenced with 23 participants enrolled.",
    body: [
      "A three-month Spoken English course for Production Associates commenced on 2nd August 2026, with 23 participants enrolled. The initiative aims to enhance communication skills and support the professional growth of the workforce.",
      "The programme provides practical training in English language skills, helping production team members communicate more effectively with international partners and customers.",
      "This investment in staff development reflects Aurolab's commitment to continuous improvement and professional excellence.",
    ],
    keywords: ["Training", "Communication", "Aurolab", "Skill Development"],
    gallery: ["assets/images/spoken_english.svg"],
  },
  {
    id: 50,
    title: "Employee Connect – Suture & Blade Division",
    centre: "Aurolab",
    date: "2026-08-29",
    category: "Events",
    thumbnail: "assets/images/2026_8_Aurolab_EMP Connect.jpeg",
    shortDescription:
      "An Employee Connect session was organised at Aurolab, engaging 30 Production Operators.",
    body: [
      "An Employee Connect session was organised at Aurolab, engaging 30 Production Operators. The programme aimed to build meaningful relationships, foster trust, and strengthen engagement between employees and the HR team.",
      "Employee requirements and suggestions were actively addressed, reinforcing collaboration and workplace harmony.",
      "The session reflected Aurolab's commitment to valuing its workforce and fostering a supportive workplace culture.",
    ],
    keywords: ["Employee Engagement", "HR", "Aurolab", "Team Building"],
    gallery: ["assets/images/2026_8_Aurolab_EMP Connect.jpeg"],
  },
  {
    id: 51,
    title: "Staff Tour to Rameshwaram",
    centre: "Aurolab",
    date: "2026-08-23",
    category: "Events",
    thumbnail: "assets/images/rameshwaram_tour.svg",
    shortDescription:
      "Aurolab organised a two-day staff tour for the Production team to Rameshwaram and Kushi Beach.",
    body: [
      "Aurolab organised a two-day staff tour for the Production team, offering a refreshing break and an opportunity to strengthen team bonding. Visits to Rameshwaram and Kushi Beach provided the staff with time to relax, rejuvenate, and build camaraderie outside the workplace.",
      "The outing provides staff members with opportunities to de-stress and strengthen relationships across the production team.",
      "This reflects Aurolab's commitment to employee wellbeing, engagement, and team spirit.",
    ],
    keywords: ["Staff Welfare", "Team Building", "Aurolab", "Recreation"],
    gallery: ["assets/images/rameshwaram_tour.svg"],
  },
  {
    id: 52,
    title: "APVRS 2026 Congress – Asia-Pacific Vitreo-Retina Society",
    centre: "Gold Coast, Australia",
    date: "2026-08-28",
    category: "Conferences",
    thumbnail: "assets/images/apvrs_congress.svg",
    shortDescription:
      "Doctors from Aravind actively participated in the 19th Annual APVRS Congress in Gold Coast, Australia.",
    body: [
      "Doctors from Aravind-Coimbatore and Aravind-Madurai actively participated in the 19th Annual Asia-Pacific Vitreo-Retina Society (APVRS) Congress, held in Gold Coast, Australia.",
      "They represented the institution by presenting scientific videos, free papers, and talks, highlighting the hospital's contributions to vitreoretinal research and clinical practice.",
      "Dr. Naresh Babu, Chief, Retina-Vitreous Services, Aravind-Madurai, was honoured with the Achievement Award, recognising his significant contributions to the field of vitreoretinal surgery.",
    ],
    keywords: ["APVRS", "Retina", "Congress", "Australia"],
    gallery: ["assets/images/apvrs_congress.svg"],
  },
  {
    id: 53,
    title: "National Eye Donation Fortnight at Aravind-Coimbatore",
    centre: "Coimbatore",
    date: "2026-08-17",
    category: "Others",
    thumbnail: "assets/images/coimbatore_eye_donation.svg",
    shortDescription:
      "Aravind-Coimbatore conducted several awareness programmes during the National Eye Donation Fortnight.",
    body: [
      "As part of the National Eye Donation Fortnight, observed annually from August 25 to September 8 to raise public awareness and encourage people to pledge their eyes for corneal donation, the Aravind IOB Eye Bank, Coimbatore, conducted several awareness programmes.",
      "An Eye Donation Awareness Programme was conducted at Royal Care Hospital, Coimbatore, to sensitise nursing staff to the importance of eye donation. Around 150 nursing staff from the MICU and ICU departments participated in the session.",
      "Dr. P. Mangala, Chief, Cornea & Refractive Surgery Services, Aravind-Coimbatore, delivered an awareness talk on the importance of eye donation through All India Radio, Coimbatore, highlighting the importance of eye donation and addressing common misconceptions.",
    ],
    keywords: ["Eye Donation", "Awareness", "Coimbatore", "Community"],
    gallery: ["assets/images/coimbatore_eye_donation.svg"],
  },
  {
    id: 54,
    title: "10th Annual Conference of Indian Retinopathy of Prematurity (I-ROP) Society",
    centre: "Coimbatore",
    date: "2026-08-21",
    category: "Conferences",
    thumbnail: "assets/images/irop_conference.svg",
    shortDescription:
      "Aravind-Coimbatore hosted the 10th Annual Conference of the I-ROP Society with hands-on workshops.",
    body: [
      "Aravind-Coimbatore hosted the 10th Annual Conference of the Indian Retinopathy of Prematurity (I-ROP) Society. The event included a pre-conference awareness workshop for government paediatricians and ophthalmologists, along with three hands-on workshops at ARCORE.",
      "The main conference was attended by 129 delegates, while 50 participants attended the various workshops. Faculty and delegates appreciated the overall arrangements and expressed positive feedback on the newly renovated auditorium.",
      "During the paper presentation sessions, Dr. Ninan Jacob, Paediatric Retina Surgical Fellow, secured the Second Prize (First Runner-up) in the Free Paper Contest for his presentation on retinopathy of prematurity management.",
    ],
    keywords: ["Retinopathy", "Prematurity", "Coimbatore", "Conference"],
    gallery: ["assets/images/irop_conference.svg"],
  },
  {
    id: 55,
    title: "Raksha Bandhan Celebration at Aravind-Salem",
    centre: "Salem",
    date: "2026-08-14",
    category: "Events",
    thumbnail: "assets/images/raksha_bandhan.svg",
    shortDescription:
      "The Brahma Kumaris, in association with Aravind-Salem, celebrated Raksha Bandhan with AOPs and staff.",
    body: [
      "The Brahma Kumaris, in association with Aravind-Salem, celebrated Raksha Bandhan with AOPs and staff. Rakhis were lovingly tied to everyone as a symbol of protection, respect, goodwill, and mutual care.",
      "As part of the celebration, the Brahma Kumaris conducted an inspiring and motivational talk highlighting the importance of love, compassion, positive thinking, and the bonds of relationships.",
      "Sweets were also shared with all, adding joy and sweetness to the occasion, encouraging everyone to embrace positivity and strengthen the values of care and togetherness in both personal and professional life.",
    ],
    keywords: ["Raksha Bandhan", "Festival", "Salem", "Community"],
    gallery: ["assets/images/raksha_bandhan.svg"],
  },
  {
    id: 56,
    title: "Ideathon at Aravind-Salem",
    centre: "Salem",
    date: "2026-08-30",
    category: "Workshop",
    thumbnail: "assets/images/2026_8_Salem_Ideathon  (1).jpg",
    shortDescription:
      "An Ideathon was conducted at Aravind-Salem to encourage innovative thinking and problem-solving.",
    body: [
      "An Ideathon was conducted at Aravind-Salem, headed by Dr. B. Manohar Babu, CMO, Aravind-Salem, and supported by Dr. Janani. The objective was to encourage innovative thinking, collaborative problem-solving, and practical solutions to challenges faced within the hospital.",
      "A total of 23 problem statements identified and posted by the team were presented at the forum. Participants engaged in group discussions to understand the problems, explore their root causes, and propose practical and feasible solutions.",
      "The event witnessed active participation from doctors, administrative staff, and senior AOPs, making it an excellent platform for cross-functional collaboration and knowledge sharing.",
    ],
    keywords: ["Innovation", "Problem-Solving", "Salem", "Ideation"],
    gallery: ["assets/images/2026_8_Salem_Ideathon  (2).jpg", "assets/images/2026_8_Salem_Ideathon  (4).jpg","assets/images/2026_8_Salem_Ideathon  (5).jpg"],
  },
  {
    id: 57,
    title: "Inauguration of EYERis Lab at Aravind-Chennai",
    centre: "Chennai",
    date: "2026-08-21",
    category: "Events",
    thumbnail: "assets/images/eyeris_lab.svg",
    shortDescription:
      "The EYERis Lab, a dedicated innovation space, was inaugurated at Aravind Eye Hospital–Chennai.",
    body: [
      "The Aravind Centre for Eye Care Innovation (ACEi) inaugurated the EYERis Lab, a dedicated innovation space at Aravind Eye Hospital–Chennai, aimed at fostering creativity, developing prototypes, and advancing innovative solutions in eye care.",
      "The lab was inaugurated by Rajendra Mootha, Head, New Initiatives, IITM Pravartak & Former COO, IIT Madras Research Park, in the presence of senior Aravind leadership and staff members.",
      "The EYERis Lab is envisioned as a collaborative space that will enable cross-functional teams to work on innovative concepts and contribute to the advancement of eye care through practical solutions.",
    ],
    keywords: ["Innovation", "Technology", "Chennai", "Lab"],
    gallery: ["assets/images/eyeris_lab.svg"],
  },
  {
    id: 58,
    title: "Staff Tour to Kanyakumari at Aravind-Dindigul",
    centre: "Dindigul",
    date: "2026-08-09",
    category: "Events",
    thumbnail: "assets/images/kanyakumari_tour.svg",
    shortDescription:
      "Aravind-Dindigul organised an employee tour to Kanniyakumari for staff relaxation and team building.",
    body: [
      "Aravind-Dindigul organised an employee tour to Kanniyakumari. The team enjoyed boating and sightseeing, including watching the sunrise.",
      "The tour provided the staff with an opportunity to relax, spend time together and enjoy the trip. Overall, it was a memorable and enjoyable experience for all the staff.",
      "Such wellness initiatives reflect Aravind's commitment to staff well-being and fostering team cohesion.",
    ],
    keywords: ["Staff Welfare", "Team Building", "Dindigul", "Recreation"],
    gallery: ["assets/images/kanyakumari_tour.svg"],
  },
  {
    id: 59,
    title: "Eye Donation Awareness Fortnight at Aravind-Thanjavur",
    centre: "Thanjavur",
    date: "2026-08-25",
    category: "Others",
    thumbnail: "assets/images/thanjavur_eye_donation.svg",
    shortDescription:
      "Aravind-Thanjavur commenced the Eye Donation Awareness Fortnight with various awareness initiatives.",
    body: [
      "Aravind-Thanjavur commenced the Eye Donation Awareness Fortnight on 25 August 2026, with the aim of creating greater awareness about the importance of eye donation and encouraging the community to pledge their eyes after death.",
      "As part of the fortnight-long awareness initiative, an Eye Donation Awareness Corner was set up at the hospital. Informative videos on eye donation were displayed continuously to help patients, attenders and visitors understand the importance of eye donation.",
      "To make the awareness initiative more interactive and engaging, a Ring Toss Game was organised for patients and attenders. A dedicated Eye Donation Registration Counter was also established for individuals who wished to pledge their eyes.",
    ],
    keywords: ["Eye Donation", "Awareness", "Thanjavur", "Community"],
    gallery: ["assets/images/thanjavur_eye_donation.svg"],
  },
  {
    id: 60,
    title: "Independence Day Celebration at Aravind-Thanjavur",
    centre: "Thanjavur",
    date: "2026-08-15",
    category: "Events",
    thumbnail: "assets/images/thanjavur_independence.svg",
    shortDescription:
      "Aravind-Thanjavur celebrated the 80th Independence Day with patriotism and enthusiasm.",
    body: [
      "Aravind-Thanjavur celebrated the 80th Independence Day with great patriotism and enthusiasm. The celebration commenced with the hoisting of the National Flag by Dr. Karthik Srinivasan, CMO, Aravind-Thanjavur, honouring the sacrifices and contributions of the freedom fighters.",
      "The occasion brought together the hospital's doctors, staff members and other employees, who participated in the celebration with a deep sense of national pride. The event served as a reminder of our collective responsibility to uphold the values of unity, integrity and service to the nation.",
      "The celebration concluded with the National Anthem, reinforcing the spirit of patriotism and commitment towards building a healthier and stronger India.",
    ],
    keywords: ["Independence Day", "Thanjavur", "Patriotic", "National Pride"],
    gallery: ["assets/images/thanjavur_independence.svg"],
  },
  {
    id: 61,
    title: "ACEi - Midterm Hackathon 2026",
    centre: "Chennai",
    date: "2026-08-21",
    category: "Workshop",
    thumbnail: "assets/images/hackathon.svg",
    shortDescription:
      "Aravind-Chennai conducted a three-day Midterm Hackathon bringing together doctors, engineers, and healthcare professionals.",
    body: [
      "Aravind-Chennai conducted the three-day Midterm Hackathon 2026, bringing together doctors, engineers, and healthcare professionals to address real-world clinical challenges through innovative and impactful solutions.",
      "Among the 38 problem statements received, 14 were shortlisted, resulting in 12 final challenges. A total of 786 applications were received from nine institutions, with 36 participants selected to take part. More than 40 Aravind staff members actively participated.",
      "Prizes worth up to Rs. 1,00,000 were awarded to the winning teams. The first prize went to the Tirunelveli team for Ergo Fit, second prize to the Tirupati team for Cotoxa, and third prize jointly to teams for Tono Clear.",
    ],
    keywords: ["Innovation", "Hackathon", "Chennai", "Problem-Solving"],
    gallery: ["assets/images/hackathon.svg"],
  },
  {
    id: 62,
    title: "Dr. Alan's Visit to Aravind Centers",
    centre: "Multiple Centers",
    date: "2026-08-09",
    category: "Others",
    thumbnail: "assets/images/dr_alan_visit.svg",
    shortDescription:
      "Dr. Alan L. Wagner and Mallory Damschroder from Wagner Kapoor Institute visited various Aravind centres.",
    body: [
      "Dr. Alan L. Wagner, Founder-Chairman, and Mallory Damschroder, Director of Surgical Operations, Wagner Kapoor Institute, USA, visited various Aravind centres from 9 to 18 August 2026. They observed Aravind's practices and led several insightful sessions on patient care and process improvement.",
      "At Aravind-Pondicherry, Dr. Alan delivered a lecture on patient-centric care approaches. At Aravind-Madurai, the team received orientation on patient flow and quality monitoring. At LAICO, Dr. Alan led a brainstorming session with retina teams to explore ways to improve retina services.",
      "At Aravind-Chennai, Dr. Alan delivered guest lectures and conducted sessions for LAICO faculty and managers on process improvement and lean thinking methodologies.",
    ],
    keywords: ["Lean Management", "Process Improvement", "Patient Care", "International"],
    gallery: ["assets/images/dr_alan_visit.svg"],
  },
  {
    id: 63,
    title: "Resident Social Responsibility Initiatives at Madurai",
    centre: "Madurai",
    date: "2026-08-19",
    category: "Others",
    thumbnail: "assets/images/rsr_madurai.svg",
    shortDescription:
      "Aravind residents visited schools and distributed educational materials to underprivileged students.",
    body: [
      "As part of the Resident Social Responsibility initiative, a team of residents visited Dr. T. Thirugunam Higher Secondary School, Madurai, on 19th August 2026. The team learned about the school and its students, many of whom come from economically disadvantaged and vulnerable backgrounds.",
      "The students warmly welcomed the team and enthusiastically shared their talents through dancing, speeches, and Thirukkural recitation. School bags, water bottles, tiffin boxes, books, and stationery were distributed to the students.",
      "Similarly, another team of residents visited Government Kallar Higher Secondary School, Chekkanoorani, Madurai, to understand the needs of students from vulnerable backgrounds and distribute educational supplies.",
    ],
    keywords: ["Social Responsibility", "Education", "Madurai", "Community Support"],
    gallery: ["assets/images/rsr_madurai.svg"],
  },
  {
    id: 64,
    title: "Launch of SET – See, Experience and Trust",
    centre: "Aurolab",
    date: "2026-08-21",
    category: "Events",
    thumbnail: "assets/images/set_programme.svg",
    shortDescription:
      "Aurolab launched SET, a quarterly visitor programme for doctors from eye hospitals across India.",
    body: [
      "Aurolab launched SET – See, Experience and Trust, a quarterly visitor programme for doctors from eye hospitals across India. The first batch was conducted on 21–22 August 2026.",
      "The programme was designed to provide participants with opportunities to see world-class practices, experience successful models of eye care delivery and hospital management, and build trust through direct interaction and shared learning.",
      "Participants were introduced to Aurolab's manufacturing facilities, visited Aravind Eye Hospital, LAICO, and the Vision Centre at Kariyapatti, gaining comprehensive insights into Aravind's vision and business model.",
    ],
    keywords: ["Learning", "Best Practices", "Aurolab", "Hospital Management"],
    gallery: ["assets/images/set_programme.svg"],
  },
];

export const categories = ["All", "CME", "Events", "Workshop", "Training", "Conferences", "Others"];
export const centres = ["All Locations", "Salem", "Tirunelveli", "Madurai", "Coimbatore", "Pondicherry", "Chennai", "Tirupur", "Dindigul", "Thanjavur", "Tuticorin", "Aurolab", "LAICO", "Visitors", "Multiple Centers"];

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}