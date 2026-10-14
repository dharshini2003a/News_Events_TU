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

// Images must live in src/assets/images/ (or public/assets/images/ on Angular 17+).
// Always use forward slashes and NO "src/" prefix.
// TODO: Replace PLACEHOLDER in each news item with its real image path.
const IMG = "assets/images/";
const PLACEHOLDER = IMG + "placeholder.jpg";

/**
 * Encodes spaces, brackets etc. so file names like
 * "Freshers Day (8).jpeg" load correctly in the browser.
 * Use in templates:  <img [src]="imgUrl(news.thumbnail)" />
 */
export function imgUrl(path: string): string {
  return encodeURI(path);
}

export const newsList: NewsItem[] = [
  {
    id: 1,
    title: "Award at the GLAUCOPAT 2026",
    centre: "Patna",
    date: "2026-10-02",
    category: "Conferences",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Dr. R. Sharmila won the Second prize in the Photo Talk Competition at the 35th Annual Conference of the Glaucoma Society of India.",
    body: [
      "Dr. R. Sharmila was the Second prize winner in the Photo Talk Competition at the 35th Annual Conference of the Glaucoma Society of India (GLAUCOPAT 2026), held in Patna from 2-4 October 2026, for her photo presentation titled, “Radial Reverie: The Signature of Pseudoexfoliation.”",
    ],
    keywords: ["GLAUCOPAT", "Glaucoma", "Award", "Patna"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 2,
    title: "Distinguished Alumni Award 2025",
    centre: "Chennai",
    date: "2026-09-18",
    category: "Others",
    thumbnail: IMG + "2026_9_Chennai_Distinguished Alumni Award (1).jpeg",
    shortDescription:
      "Dr. Haripriya Aravind was honoured with the Distinguished Alumni Award 2025 by Sri Ramachandra Institute of Higher Education and Research.",
    body: [
      "Dr. Haripriya Aravind, Chief, Cataract & IOL Services, Aravind-Chennai, was honoured with the Distinguished Alumni Award 2025 by Sri Ramachandra Institute of Higher Education and Research during its Founder’s Day and University Day celebrations in Chennai on 18 September 2026.",
    ],
    keywords: ["Award", "Alumni", "Chennai", "Cataract"],
    gallery: [
      IMG + "2026_9_Chennai_Distinguished Alumni Award (1).jpeg",
      IMG + "2026_9_Chennai_Distinguished Alumni Award (2).jpeg",
    ],
  },
  {
    id: 3,
    title: "Award at the 13th Conference of the Asian Neuro-Ophthalmology Society (ASNOS)",
    centre: "New Delhi",
    date: "2026-10-02",
    category: "Conferences",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Dr. Madhumita Gopal won the Walsh in Asia Session at the 13th Conference of ASNOS held at AIIMS, New Delhi.",
    body: [
      "Dr. Madhumita Gopal, Medical Consultant, Neuro-Ophthalmology Services, Aravind-Chennai, was the Winner of the Walsh in Asia Session at the 13th Conference of the Asian Neuro-Ophthalmology Society (ASNOS), held from 2-4 October 2026 in association with the 8th Annual Conference of the Indian Neuro-Ophthalmology Society (INOS) at AIIMS, New Delhi.",
    ],
    keywords: ["ASNOS", "Neuro-Ophthalmology", "Award", "New Delhi"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 4,
    title: "Meditation at Vision Day",
    centre: "Multiple Centers",
    date: "2026-10-01",
    category: "Events",
    thumbnail: IMG + "2026_10_PDY_Founders day special meditation (2).JPG",
    shortDescription:
      "Vision Day was observed across most Aravind centres through an Open-Eye Meditation Programme at 7:30 a.m.",
    body: [
      "As in previous years, Vision Day was observed across most Aravind centres through an Open-Eye Meditation Programme at 7:30 a.m.",
      "An audio-visual offering titled “Vast Surrender”, created by Arnab of “Know Your Rhythm”, was screened, drawing participants into a reflection on Sri Aurobindo’s poem, “Savitri.”",
      "A pamphlet containing lines from Book Three, Canto 2, “The Adoration of the Divine Mother”, in English and Tamil was given.",
    ],
    keywords: ["Vision Day", "Meditation", "Sri Aurobindo", "Savitri"],
    gallery: [
      IMG + "2026_10_PDY_Founders day special meditation (3).JPG",
      IMG + "2026_10_PDY_Founders day special meditation (5).JPG",
    ],
  },
  {
    id: 5,
    title: "Freshers’ Day at Aravind-Tirupati",
    centre: "Tirupati",
    date: "2026-10-03",
    category: "Events",
    thumbnail: IMG + "2026_9_TPT_Freshers Day (8).jpeg",
    shortDescription:
      "Aravind-Tirupati organised Freshers’ Day for the newly joined AOPs with a welcome dance, skit and many cultural performances.",
    body: [
      "Organised by Aravind-Tirupati, Freshers’ Day for the newly joined AOPs started with a prayer song and welcome dance. An AOP presented a speech about Dr. V. The new joiners performed a beautiful skit showing the journey of Aravind from its beginning to its growth across different locations. There were many dance programmes, filled with talent, fun, and togetherness.",
      "Dr. Ashok Vardhan, CMO, Aravind-Tirupati, highlighted that the new joinees were a special batch as they had joined in the 50th year, while Kesav Kumar, Manager Administration & Finance, Aravind-Tirupati, spoke a few inspiring words to encourage the freshers.",
      "The programme concluded with a photo shoot and a demonstration of different claps they had learnt during the orientation.",
    ],
    keywords: ["Freshers’ Day", "AOP", "Tirupati", "Celebration"],
    gallery: [
      IMG + "2026_9_TPT_Freshers Day (1).jpeg",
      IMG + "2026_9_TPT_Freshers Day (6).jpeg",
      IMG + "2026_9_TPT_Freshers Day (7).jpeg",
      IMG + "2026_9_TPT_Freshers Day (4).jpeg",
    ],
  },
  {
    id: 6,
    title: "Naan Nee Naam (நான், நீ, நாம்) - A journey of reflection, connection, and growth",
    centre: "Chennai",
    date: "2026-09-07",
    category: "Training",
    thumbnail: IMG + "2026_9_Chennai_Reflective Leadership Journey (3).jpg",
    shortDescription:
      "Aravind-Chennai launched Naan Nee Naam, a nine-month reflective leadership journey for mid-level and support team leaders.",
    body: [
      "Aravind-Chennai launched Naan Nee Naam (நான், நீ, நாம்), a nine-month reflective leadership journey for mid-level and support team leaders. The cohort brings together leaders from 11 clinical and 13 administrative and support departments, representing diverse roles, experiences, and responsibilities.",
      "The programme goes beyond conventional training by creating a space for participants to pause and reflect, understand themselves and others better, strengthen relationships, and reconnect with Aravind’s larger purpose.",
      "The journey is built around three core ideas: Naan (நான்): Understanding Self; Nee (நீ): Understanding Others; and Naam (நாம்): Building Together. Two sessions have been successfully completed so far, providing participants with opportunities for reflection, meaningful conversations, and shared learning.",
      "Through this ongoing journey, the initiative aims to nurture leadership, strengthen collaboration, and foster a sense of collective ownership across teams.",
    ],
    keywords: ["Leadership", "Training", "Chennai", "Naan Nee Naam"],
    gallery: [
      IMG + "2026_9_Chennai_Reflective Leadership Journey (3).jpg",
      IMG + "2026_9_Chennai_Reflective Leadership Journey (5).jpg",
      IMG + "2026_9_Chennai_Reflective Leadership Journey (4).jpg",
      IMG + "2026_9_Chennai_Reflective Leadership Journey (7).jpg",
    ],
  },
  {
    id: 7,
    title: "SET – See, Experience and Trust: Second Batch",
    centre: "Aurolab",
    date: "2026-09-25",
    category: "Events",
    // NOTE: "20269_9_" looks like a typo, but it must match the real file name exactly.
    thumbnail: IMG + "20269_9_Aurolab_Set_Visitor program (1).JPG",
    shortDescription:
      "The second batch of Aurolab’s SET programme was held on 25-26 September 2026 with eight ophthalmologists participating.",
    body: [
      "Aurolab’s SET – See, Experience, and Trust is a quarterly visitor programme for doctors from eye hospitals across India. The programme provides an opportunity for them to see and experience Aurolab’s world-class manufacturing facility and gain a deeper understanding of its products and processes. The second batch was held on 25-26 September 2026, with eight ophthalmologists participating from different parts of the country.",
      "The programme began with a visit to Aurolab, where participants gained insights into its operations, manufacturing practices, and commitment to quality. On the second day, the group visited Aravind-Madurai and LAICO, gaining first-hand exposure to Aravind’s vision, values, business model, and patient-centred approach to eye care delivery.",
      "The visit included an introduction to Aravind’s genesis, followed by a tour of the hospital. A visit to the Vision Centre at Thiruppuvanam further helped participants understand how telemedicine-based centres enhance access to eye care. A special interaction with Thulasiraj Ravilla, Advisor – LAICO & Director – Operations, AECS, provided participants with an opportunity for direct engagement and shared learning with senior leadership.",
      "Interactive sessions with other members of the Aravind team also provided opportunities to understand the principles and practices underlying Aravind’s approach to eye care.",
    ],
    keywords: ["SET", "Aurolab", "Visitor Programme", "Manufacturing"],
    gallery: [IMG + "20269_9_Aurolab_Set_Visitor program (1).JPG"],
  },
  {
    id: 8,
    title: "Customised Training Programme",
    centre: "LAICO",
    date: "2026-09-21",
    category: "Training",
    thumbnail:
      IMG + "2026_9_Course_Customised Training Management for Ophthalmic Subspecialty (4).jpg",
    shortDescription:
      "LAICO conducted a four-day customised training programme for 10 Cure Blindness Programme Managers from India, Nepal, Ethiopia, Ghana, and the USA.",
    body: [
      "LAICO conducted a four-day customised training programme (21-24 September 2026) for 10 Cure Blindness Programme Managers from India, Nepal, Ethiopia, Ghana, and the USA.",
      "The programme provided practical exposure to major ophthalmic subspecialties, including Cataract, Glaucoma, Cornea, Retina, and Paediatric services. Participants gained insights into clinical services, equipment, performance indicators, and the management of specialised eye-care programmes.",
      "The training also highlighted the importance of integrating primary and community eye care with tertiary services.",
    ],
    keywords: ["LAICO", "Training", "Cure Blindness", "International"],
    gallery: [
      IMG + "2026_9_Course_Customised Training Management for Ophthalmic Subspecialty (2).jpg",
      IMG + "2026_9_Course_Customised Training Management for Ophthalmic Subspecialty (9).jpg",
    ],
  },
  {
    id: 9,
    title: "11th Andhra Pradesh Ophthalmic Society Annual Conference (APOS) – Vision Waves 2026",
    centre: "Kakinada",
    date: "2026-09-18",
    category: "Conferences",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Aravind-Tirupati doctors participated in APOS Vision Waves 2026 at Rangaraya Medical College, Kakinada, with talks, videos, posters and award wins.",
    body: [
      "Aravind doctors participated in the 11th Annual Conference of the Andhra Pradesh Ophthalmic Society (APOS), Vision Waves 2026, held from 18–20 September 2026 at Rangaraya Medical College, Kakinada, Andhra Pradesh.",
      "Dr. Ashok Vardhan, CMO, Aravind-Tirupati – JOCR – AOPS State Journal Session (IC – Chairperson).",
      "Dr. Sreenath K., Medical Consultant, Glaucoma Services – MIGS (IC – Speaker); Nanophthalmos (IC – Speaker).",
      "Dr. Keerthi Gayam, Medical Consultant, Glaucoma Services – Mastering Glaucoma Surgeries from Trab to MIGS (IC); Secondary Glaucomas (IC); MIGS – The Evolving Bridge in Glaucoma Care (IC); Cataract Surgery in Angle Closure Glaucoma (Video); MIGS (Teaching Video).",
      "Dr. Venkata Sudheer Kumar K., Medical Consultant, Glaucoma Services – Trabeculectomy (IC – Speaker); Secondary Open-Angle Glaucomas (IC – Speaker).",
      "Dr. Sheesham Singh, Medical Consultant, Glaucoma – SICS Complications – Prevention and Management (IC).",
      "Dr. Navaneetha D.V., MO, Glaucoma – Classification of MIGS; Lens-Induced Glaucoma (IC – Speaker).",
      "Dr. Modepalli Preethy, Medical Consultant, Glaucoma – Neovascular Glaucoma & Inflammatory Glaucoma; MIGS – How to Get into the Angle (IC).",
      "Dr. Venugopal Reddy, Medical Consultant, Retina – Vitreoschisis in Other Retinal Cases (IC).",
      "Dr. Arun R., Medical Consultant, Retina – Macular Vitreoschisis – ERM (IC).",
      "Dr. Roopa K.S., Medical Consultant, Retina – Macular Vitreoschisis – Macular Hole (IC).",
      "Dr. Aayesha Khanum, Medical Consultant, Retina – Anomalous PVD and Vitreoschisis – Hidden Architects of Retinal Traction (IC).",
      "Dr. Joshmitha M.S., Medical Consultant, Retina – Harnessing the Macular Hole (FP); Scleral Buckling – Beginner’s Guide (Video).",
      "Dr. Harika Reddy Mavuram, Fellow, Retina – Seeing Red – Bilateral VH in a Case of ITP – 2 Min to Win – 1st Place; Tiny Eyes – Unexpected Guest Behind Lens (Exudative RD in Nanophthalmos) – Posterior Segment Image Competition – 2nd Place.",
      "Dr. Preeti Mohanty, Medical Consultant, Cataract & IOL – Nuclear Management in Phaco (IC).",
      "Dr. Gogineni Sahitya, Medical Consultant, Cataract & IOL – Phacoemulsification – Stop & Chop (IC).",
      "Dr. Viveknandini Reddy Chinnangolla, Medical Consultant, Cataract & IOL – SICS Complications – Prevention and Management: Cortex Aspiration & IOL Implantation (IC).",
      "Dr. Srirama Raviteja, Medical Consultant, IOL – Nucleus Management Techniques in Phacoemulsification: Basics to Expertise (IC).",
      "Dr. Bharadwaj L., Medical Consultant, Orbit – Acute-Onset Visual Disturbance Due to Bilateral Macular Edema in a Chronic Myeloid Leukemia Patient Receiving Tyrosine Kinase Inhibitor Therapy (Poster).",
      "Dr. B.K. Jayanth Reddy, DNB PG, Orbit – Caruncular Sebaceous Carcinoma Masquerading as a Post-Traumatic Lesion (Poster).",
      "Dr. Shaik Sameena, Medical Consultant, General OPD – SICS – Capsulorhexis & Hydroprocedures (IC – Speaker).",
      "Dr. Saklani Akanksha Benichand, DNB, General OPD – Ocular Caruncle Pemphigus Vulgaris Mimicking Pyogenic Granuloma (2 Min to Win).",
      "Dr. Cheedella Pravallika, DNB, General OPD, also participated.",
      "Dr. Gowthami Priya Thota, Medical Consultant, Cornea – DMD – Prevention, Management and Diagnosis During SICS (IC).",
    ],
    keywords: ["APOS", "Conference", "Kakinada", "Tirupati"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 10,
    title: "Attur Rasi Seeds Camp Set a Record",
    centre: "Salem",
    date: "2026-09-27",
    category: "Others",
    thumbnail: IMG + "2026_9_Salem_Mega Camp (7).jpg",
    shortDescription:
      "The Mega Free Eye Camp by Aravind-Salem and Rasi Foundation witnessed a record 617 surgeries in a single day.",
    body: [
      "The Mega Free Eye Camp, organised by Aravind-Salem in association with Rasi Foundation, witnessed a remarkable record of 617 surgeries performed in a single day.",
      "The camp received an excellent response from the community, with a total of 1,512 outpatients screened by the Aravind medical team. Of these, 627 patients were selected for cataract surgery, and nearly 250 patients were provided with spectacles as per their requirements. Twenty-seven patients were referred to Aravind-Salem for comprehensive evaluation and further management.",
      "The event was particularly significant as two surgeons from Aravind-Salem’s Paediatric Ophthalmology & Adult Strabismus Services, Dr. R. Janani and Dr. Saranya, individually performed more than 100 surgeries during the camp. This camp marked a significant achievement for Aravind-Salem and the Rasi Foundation, Attur.",
    ],
    keywords: ["Eye Camp", "Salem", "Rasi Foundation", "Cataract"],
    gallery: [
      IMG + "2026_9_Salem_Mega Camp (2).jpg",
      IMG + "2026_9_Salem_Mega Camp (5).jpg",
    ],
  },
    {
    id: 11,
    title: "Freshers’ Day at Aravind-Chennai",
    centre: "Chennai",
    date: "2026-09-29",
    category: "Events",
    thumbnail: "assets\\images\\2026_9_Chennai_Freshers Day (1).jpeg",
    shortDescription:
      "A special celebration welcomed the first-year AOPs to the Aravind family at Aravind-Chennai.",
    body: [
      "A special celebration welcoming the first-year AOPs to the Aravind family was organised at Aravind-Chennai, marking the beginning of their learning journey and professional growth. The programme featured prayer, a welcome address, classical dance, inspiring talks, academic orientation, cultural performances, memorable videos, and talent recognition.",
      "The highlight was the Prize Distribution Ceremony, recognising achievements in academics, seminars, quizzes, rangoli, drawing, memory games, and other activities.",
    ],
    keywords: ["Freshers’ Day", "AOP", "Chennai", "Celebration"],
    gallery: ["assets\\images\\2026_9_Chennai_Freshers Day (4).jpeg","assets\\images\\2026_9_Chennai_Freshers Day (5).jpeg"],
  },
  {
    id: 12,
    title: "Graduation Day at Aravind-Chennai",
    centre: "Chennai",
    date: "2026-09-27",
    category: "Events",
    thumbnail: "assets\\images\\2026_9_Chennai_Graduation Day (1).JPG",
    shortDescription:
      "128 second-year AOP trainees graduated into employees at the Graduation Day ceremony at Aravind-Chennai.",
    body: [
      "A Graduation Day ceremony was conducted by Aravind-Chennai for the second-year AOP trainees as they successfully graduated into their first year as employees. A total of 128 trainees graduated into employees.",
      "The top-performing trainees were recognised with cash prizes for securing the highest marks, as a token of appreciation for their outstanding academic performance. In addition, a special trophy was presented to every graduating AOP.",
      "The celebration concluded with a Vote of Thanks. A total of 237 parents attended the Graduation Day celebration.",
    ],
    keywords: ["Graduation Day", "AOP", "Chennai", "Celebration"],
    gallery: ["assets\\images\\2026_9_Chennai_Graduation Day (2).JPG","assets\\images\\2026_9_Chennai_Graduation Day (6).JPG"],
  },
  {
    id: 13,
    title: "Sight First & Diabetic Retinopathy Seminar",
    centre: "Coimbatore",
    date: "2026-09-27",
    category: "Others",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "The Lions District 3242 C Sight First & Diabetic Retinopathy Seminar 2026 was held at Aravind-Coimbatore with around 120 Lions members.",
    body: [
      "The Lions District 3242 C Sight First & Diabetic Retinopathy Seminar 2026 was held at Aravind-Coimbatore. Around 120 Lions members from various clubs across the district, along with the cabinet secretariat, participated in the programme.",
      "Selvaraj, District Governor, Lions District 3242 C, Dr. V. Narendran, Chief Medical Officer, Aravind-Coimbatore, and Dr. Rodney Morris, Camp Medical Officer, Aravind-Coimbatore, presided over the meeting.",
      "The seminar focused on creating awareness about diabetic retinopathy, diabetes management, and the importance of regular eye screening. Informative sessions were delivered by Dr. Jebinth Brayan, Medical Consultant, IOL & Cataract Services, Dr. P. Mangala, Chief, Cornea & Refractive Surgery Services, Dr. S. Prema, Medical Consultant, Paediatric Retina & Ocular Oncology Services, and Dr. Amrutha Sindhu, Medical Consultant, Paediatric Ophthalmology & Adult Strabismus Services, who shared valuable insights from their respective specialties. Dr. Rajendran from Rajendran’s Diabetic Centre delivered a special talk on lifestyle modifications and their role in the effective management of diabetes.",
      "The interactive sessions were well received by the participants. The programme concluded with a Vote of Thanks, followed by lunch.",
    ],
    keywords: ["Lions Club", "Diabetic Retinopathy", "Coimbatore", "Awareness"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 14,
    title: "Inauguration of the New Insurance Department at Aravind-Coimbatore",
    centre: "Coimbatore",
    date: "2026-09-21",
    category: "Events",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "The new Insurance Department was inaugurated at Aravind-Coimbatore to provide better insurance support and services to patients.",
    body: [
      "The Insurance Department at Aravind-Coimbatore was inaugurated by Dr. V. Narendran and Dr. Kalpana Narendran, Chief, IOL & Cataract Services, Aravind-Coimbatore, in the presence of the Insurance Department staff.",
      "The function began with the traditional lighting of the lamp. The department was started to provide better insurance support and services to patients.",
    ],
    keywords: ["Inauguration", "Insurance", "Coimbatore", "Patient Services"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 15,
    title: "Best Poster Award at the 3rd International Conference on Indian Rural Public Health and Non-Communicable Diseases",
    centre: "Coimbatore",
    date: "2026-09-19",
    category: "Conferences",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Niraja Anu of PNRRC, Aravind-Coimbatore, won the Best Poster Award for a study on diabetic retinopathy from the Gudalur Diabetic Retinopathy Study.",
    body: [
      "Niraja Anu, Project Assistant at PNRRC, Aravind-Coimbatore, won the Best Poster Award at the 3rd International Conference on Indian Rural Public Health and Non-Communicable Diseases, held on 19–20 September 2026 at KMCH Institute of Health Sciences and Research, Coimbatore.",
      "Her poster, titled “Ethnolinguistic differences in diabetic retinopathy within a shared geographic setting in South India: The Gudalur Diabetic Retinopathy Study,” showed that among people with diabetes living in the same region, Malayalam speakers had nearly twice the odds of diabetic retinopathy as Tamil speakers, despite similar glycaemic control. The findings point to lifestyle differences, particularly diet, as a possible contributing factor.",
    ], 
    keywords: ["Award", "Diabetic Retinopathy", "Coimbatore", "Research"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 16,
    title: "Session on Contact Lens Practice",
    centre: "Coimbatore",
    date: "2026-09-15",
    category: "CME",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "A session on Contact Lens Practice was organised at Aravind-Coimbatore in association with the Bausch + Lomb team.",
    body: [
      "An insightful session on Contact Lens Practice was organised at Aravind-Coimbatore in association with the Bausch + Lomb team. The session was attended by postgraduates, fellows, consultants, and the Contact Lens team of Aravind-Coimbatore.",
      "The presentations focused on the practical aspects of soft contact lens fitting, contact lens materials, contact lens-related complications, and emerging drug-delivery systems using contact lenses. The interactive session with the Bausch + Lomb team was highly informative and provided valuable insights into the latest developments in contact lens practice and ocular care.",
    ],
    keywords: ["Contact Lens", "CME", "Coimbatore", "Bausch + Lomb"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 17,
    title: "Staff Tour to Black Thunder",
    centre: "Coimbatore",
    date: "2026-09-13",
    category: "Events",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "The male AOP staff of Aravind-Coimbatore enjoyed a one-day tour to Black Thunder organised by the HR Department.",
    body: [
      "The male AOP staff of Aravind-Coimbatore enjoyed a one-day tour to Black Thunder. The tour was organised by the HR Department to provide relaxation and encourage team bonding among the staff.",
      "The participants enjoyed the various attractions and activities at the park and spent quality time together. The tour was a refreshing experience and helped strengthen teamwork and friendship among the staff.",
    ],
    keywords: ["Staff Welfare", "Team Building", "Coimbatore", "Recreation"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 18,
    title: "Distinguished Alumnus Award 2026",
    centre: "Coimbatore",
    date: "2026-09-30",
    category: "Others",
    thumbnail: "assets\\images\\2026_9_CBE_Distinguished Alumnus Award 2026 (1).jpg",
    shortDescription:
      "Dr. Manju R. Pillai was honoured with the Distinguished Alumnus Award 2026 by PSG Institute of Medical Sciences and Research.",
    body: [
      "Dr. Manju R. Pillai, Medical Consultant, Glaucoma Services, Aravind-Madurai, was honoured with the Distinguished Alumnus Award 2026 at the Foundation Day 2026 celebration of the PSG Institute of Medical Sciences and Research, Coimbatore, in recognition of distinguished alumni.",
    ],  
    keywords: ["Award", "Alumni", "Coimbatore", "Glaucoma"],
    gallery: ["assets\\images\\2026_9_CBE_Distinguished Alumnus Award 2026 (2).jpg"],
  },
  {
    id: 19,
    title: "WSPOS Subspecialty Day 2026",
    centre: "London",
    date: "2026-09-11",
    category: "Conferences",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Dr. Sathya T. Ravilla presented posters and videos at the WSPOS Subspecialty Day 2026 in London.",
    body: [
      "Dr. Sathya T. Ravilla participated in the WSPOS Subspecialty Day 2026 organised by the World Society of Paediatric Ophthalmology and Strabismus (WSPOS) at London, where she presented posters and videos.",
      "Prevalence of Refractive Error & Other Ocular Condition among Siblings (Poster)",
      "Prevalence of Ocular condition among children under 3 years (Poster)",
      "Shared Medical Appnt in Pediatric Ophthalmology (Poster)",
      "Innovations that can make an eye exam a Disney experience (Video)",
    ],
    keywords: ["WSPOS", "Paediatric", "London", "Conference"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 20,
    title: "Dr. G. Venkataswamy Memorial Oration Award – 2026",
    centre: "Madurai",
    date: "2026-10-01",
    category: "Events",
    thumbnail: "assets\\images\\2026_10_Oration Award_Dr. Paul Courtright (37).jpg",
    shortDescription:
      "The Dr. G. Venkataswamy Memorial Oration Award 2026 was conferred on Dr. Paul Courtright and Dr. Susan Lewallen at Aravind-Madurai.",
    body: [
      "In commemoration of Dr. G. Venkataswamy, Founder of Aravind Eye Care System (AECS), and his contributions to ophthalmic care, the Dr. G. Venkataswamy Memorial Oration Award is presented to individuals who have made significant contributions towards preventing avoidable blindness in the community. Dr. V envisioned eliminating needless blindness, which has enabled millions of people in India and other developing countries to access high-quality eye care at an affordable cost.",
      "This year, the award was conferred on Dr. Paul Courtright, an epidemiologist, and Dr. Susan Lewallen, an ophthalmologist, who have worked together for several decades in the field of global eye health. For nearly four decades, they have collaborated to develop effective eye care services in low- and middle-income countries.",
      "A major focus of their work has been translating evidence generated through research into policies and eye care services. The research undertaken by Dr. Paul Courtright has played an important role in developing programmes to prevent blindness. A study published jointly with Dr. Susan Lewallen in 2001 contributed to the planning of blindness prevention programmes in Africa. Dr. Susan Lewallen has made significant contributions to both clinical care and research and has conducted several important studies in Malawi.",
      "In 2001, in Moshi, Tanzania, they jointly established the Kilimanjaro Centre for Community Ophthalmology (KCCO). The Centre works to develop sustainable eye care services that respond to the needs of communities. Under their leadership, KCCO has trained more than 300 eye care personnel, supported more than 70 hospitals, and collaborated with organisations in more than 40 countries. In recognition of their outstanding contributions, Aravind Eye Care System honoured them with the Dr. G. Venkataswamy Memorial Oration Award 2026.",
      "During the Oration Ceremony at Aravind-Madurai, Dr. R. Kim, President, GOVEL Trust, welcomed the gathering and introduced the Oration Award. Thulasiraj Ravilla, Director – Operations, AECS, introduced Dr. Paul Courtright and Dr. Susan Lewallen. Dhivya Ramasamy, Executive Director, LAICO, read the citation.",
      "Dr. Paul Courtright delivered the oration on the topic, “Reducing vision loss in Sub-Saharan Africa: Research to generate evidence and inform programmes & policies.” The award was presented by G. Natchiyar, Director Emeritus, AECS. The citation was presented by Dr. M. Srinivasan, Director Emeritus, AECS. The Vote of Thanks was delivered by Dr. Venkatesh Prajna, Director – Residency Training & Director – Finance, AECS.",
    ],
    keywords: ["Oration", "Dr. G. Venkataswamy", "Madurai", "Award"],
    gallery: ["assets\\images\\2026_10_Oration Award_Dr. Paul Courtright (2).jpg", "assets\\images\\2026_10_Oration Award_Dr. Paul Courtright (23).jpg", "assets\\images\\2026_10_Oration Award_Dr. Paul Courtright (25).jpg","assets\\images\\2026_10_Oration Award_Dr. Paul Courtright (50).jpg"],
  },
  {
    id: 21,
    title: "Madurai Ophthalmologists Association (MOA) Meet 2026",
    centre: "Madurai",
    date: "2026-09-22",
    category: "CME",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Aravind-Madurai and MOA conducted MOA Meet 2026 at LAICO on “Deciphering Diplopia and Defining Biosimilars” with 105 doctors participating.",
    body: [
      "Aravind-Madurai, in collaboration with the Madurai Ophthalmologists Association (MOA), conducted MOA Meet 2026, an academic programme held at LAICO, focusing on “Deciphering Diplopia and Defining Biosimilars.”",
      "The meeting featured two academic sessions. Dr. V. R. Vijayaraghavan spoke on “Diplopia and Hess Chart – Made Easy,” while Dr. Konduru Rishitha spoke on “Anti-VEGF in Retinal Diseases – Evolving Paradigms.” The sessions were moderated by Dr. V. Muthukrishnan. The panel discussion featured Dr. S. Mahesh Kumar, Dr. Mohan, and Dr. B. Antony Arokiadass.",
      "The programme was organised under the leadership of Dr. R. Krishnadas, President, MOA; Dr. Naresh Babu, Secretary, MOA; and Dr. S. Srinivasan, Treasurer, MOA.",
      "A total of 105 doctors participated in the meeting. The programme provided a valuable platform for academic interaction, knowledge sharing, and professional exchange among ophthalmologists. The meeting was sponsored by Sun Pharma.",
    ],
    keywords: ["MOA", "CME", "Madurai", "Diplopia"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 22,
    title: "8th edition of the Paediatric Ophthalmology and Strabismology Network (POSN) Conference",
    centre: "Bhubaneswar",
    date: "2026-09-19",
    category: "Conferences",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Aravind doctors participated in the 8th POSN conference organised by LVPEI’s MTC Campus at KIIT, Bhubaneswar.",
    body: [
      "Aravind doctors participated in the 8th edition of the Paediatric Ophthalmology and Strabismus Network (POSN), held on 19-20 September 2026 and organised by the L V Prasad Eye Institute’s (LVPEI) Mithu Tulsi Chanrai (MTC) Campus at the Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, Odisha.",
      "Dr. Elackiya Manimaran – Association of body mass index and demographic differences with simple myopia in south indian children (E poster presentation).",
      "Dr. Sakshi Meshram – Three nerves, two eyes, multiple stages: Transposition-based surgical rehabilitation of bilateral sixth with unilateral third nerve palsy - two mirror image cases (Case presentation); Hidden in plain sight: Non-strabismic binocular vision dysfunction among practicing ophthalmologists (Free Paper).",
      "Dr. Neediya Mohamed – Anterior segment and paediatric cataract: Seeing the break before you make it: preoperative b-scan for posterior capsule integrity in paediatric developmental cataract A Case Series (E-case presentation).",
      "Dr. Pankhudi Verma – Neuro-ophthalmology: Two distinct aetiologies, one shared clinical presentation: Upbeat Nystagmus (E-case presentation).",
    ],
    keywords: ["POSN", "Paediatric", "Strabismus", "Bhubaneswar"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 23,
    title: "Eye Health Awareness Programme at Aravind-Thanjavur",
    centre: "Thanjavur",
    date: "2026-09-29",
    category: "Others",
    thumbnail: "assets\\images\\2026_9_Thanjavur_Outreach camp  (2) - Copy.jpg",
    shortDescription:
      "Aravind-Thanjavur conducted an awareness programme on Eye Donation, Preventive Eye Care and Common Eye Diseases at Kudavai Natchiyar Government Arts and Science College.",
    body: [
      "Aravind-Thanjavur conducted an awareness programme on Eye Donation, Preventive Eye Care, and Common Eye Diseases in Adults at Kudavai Natchiyar Government Arts and Science College, Thanjavur. Dr. Divya Karthik, HOD – Cataract, Cornea & Refractive Surgeries, delivered an informative session highlighting the importance of preventive eye care, early identification of eye diseases, and the significance of eye donation.",
      "The programme was attended by students and faculty members. The interactive session provided an opportunity for participants to clarify their doubts and gain a better understanding of various aspects of eye health and eye donation.",
    ],
    keywords: ["Awareness", "Eye Donation", "Thanjavur", "Preventive Eye Care"],
    gallery: ["assets\\images\\2026_9_Thanjavur_Outreach camp  (5).jpg","assets\\images\\2026_9_Thanjavur_Outreach camp  (6).jpg"],
  },
  {
    id: 24,
    title: "CME Programme on Complex Cataract Unplugged",
    centre: "Chengalpattu",
    date: "2026-09-27",
    category: "CME",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Aravind–Chengalpattu conducted a CME on complex cataract management with a wet-lab session for phaco surgeons.",
    body: [
      "Aravind–Chengalpattu conducted a CME programme titled “Complex Cataract Unplugged – Where Surgical Mastery Meets the Pursuit of Visual Excellence” for phaco surgeons from Chengalpattu and surrounding areas. The programme aimed to build greater confidence in managing complex cataract cases and intraoperative complications, while reinforcing the hospital’s commitment to advancing ophthalmic education and surgical expertise.",
      "The scientific programme covered a wide range of challenging cataract scenarios, including day-1 clear cornea outcomes, small-pupil cataract surgery, intraoperative complications and anterior vitrectomy, mature cataracts, hard and soft cataracts, astigmatism management, and scleral-fixated IOL techniques. Experienced faculty shared practical surgical insights and contemporary approaches to managing these complex cases.",
      "A dedicated wet-lab session provided participants with hands-on exposure to surgical techniques, enabling them to translate the concepts discussed during the scientific sessions into practical skills. Participants who attended the complete scientific programme were eligible for TNMC credit points.",
    ],
    keywords: ["CME", "Cataract", "Chengalpattu", "Wet Lab"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 25,
    title: "Exposure Visit by Goutami Eye Hospital Team",
    centre: "Madurai",
    date: "2026-09-07",
    category: "Others",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "A team from Goutami Eye Hospital, Rajahmundry, visited Aravind-Madurai on 7-8 September 2026 for an exposure programme.",
    body: [
      "A team from Goutami Eye Hospital, Rajahmundry, Andhra Pradesh, including Dr. P.R.K. Raju, Managing Director, and Dr. Prashanth Kumar, Director, Glaucoma & Cataract Services, visited Aravind-Madurai on 7-8 September 2026 for an exposure programme to understand the processes, best practices, and systems that support effective and quality eye care delivery.",
      "The team visited key areas such as operational management, organisational practices, and financial discipline to understand the practices that could be adopted and implemented at Goutami Eye Hospital. As part of the programme, the team also visited Aravind’s Secondary Eye Care Centre at Dindigul and Primary Eye Care Centre at Gandhigram.",
    ],
    keywords: ["Exposure Visit", "Madurai", "Best Practices", "Eye Care"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 26,
    title: "Exposure Visit by IIM Udaipur",
    centre: "Madurai",
    date: "2026-09-09",
    category: "Others",
    thumbnail: PLACEHOLDER,
    shortDescription:
      "Krishnakumar Sankaranarayanan, Head of the Centre for Healthcare at IIM Udaipur, visited Aravind-Madurai on 9-10 September 2026.",
    body: [
      "Krishnakumar Sankaranarayanan, Head of the Centre for Healthcare at the Indian Institute of Management Udaipur, visited Aravind-Madurai on an exposure visit on 9-10 September 2026. In line with his focus areas, including Primary Care, Health Financing, Medical Technology, Health Systems Strengthening, and Public Health Supply Chains, the visit provided an opportunity to gain insights into Aravind’s systems and practices, with specific orientation and discussions on the operations and management of Primary Eye Care Centres. He also interacted with the LAICO faculty team to gain insights into systems and management practices.",
      "As part of the visit, he visited the Primary Eye Care Centre at Alanganallur to understand its functioning and role in delivering accessible eye care services at the community level.",
    ],
    keywords: ["Exposure Visit", "Madurai", "IIM Udaipur", "Primary Eye Care"],
    gallery: [PLACEHOLDER],
  },
  {
    id: 27,
    title: "AOP Freshers’ Day Celebration – 2026",
    centre: "Tirunelveli",
    date: "2026-09-28",
    category: "Events",
    thumbnail: "assets\\images\\2026_9_TVL_AOP Freshers Day (4).JPG",
    shortDescription:
      "Aravind-Tirunelveli warmly welcomed the new batch of AOPs with a Freshers’ Day celebration of cultural performances and addresses.",
    body: [
      "The AOP Freshers’ Day Celebration – 2026 at Aravind-Tirunelveli was organised to warmly welcome the new batch of AOPs and provide them with an opportunity to understand the values, vision, and legacy of Aravind, while fostering a sense of belonging and togetherness.",
      "The celebration commenced with a prayer song, “Mannathi Bootham,” rendered by Sr. Kavya and Sr. Anushya Devi, followed by the welcome address by Sr. Mahalakshmi. Sr. Bibisha spoke about the life and contributions of the Founder, Dr. G. Venkataswamy, while Sr. Selvadharsini spoke about the contributions of the founding member, G. Srinivasan. Sr. Thanga Selvi highlighted the contributions of Dr. P. Namperumalsamy and Dr. G. Natchiyar.",
      "Dr. R. Ramakrishnan, Advisor, Aravind-Tirunelveli, and Dr. R. Meenakshi, CMO, Aravind-Tirunelveli, delivered special addresses, offering words of guidance and encouragement to the new AOPs.",
      "The celebration featured a variety of cultural performances, including a dance by Sr. Aathira and team, a song by Sr. Kavya and team, Grammiya Nadanam by Sr. Anushula Ghuyana and team, a drama performance by Inba Muthu Sri and team, and a group dance by Jeya Kumari and team.",
      "An important part of the celebration was the sharing of experiences by Sr. Sangarammal and Selvi, the Coordinators. The programme concluded with the Vote of Thanks proposed by Sr. Prathicsha.",
    ],
    keywords: ["Freshers’ Day", "AOP", "Tirunelveli", "Celebration"],
    gallery: ["assets\\images\\2026_9_TVL_AOP Freshers Day (5).JPG","assets\\images\\2026_9_TVL_AOP Freshers Day (8).JPG"],
  },
  {
    id: 28,
    title: "7th Hospital Day – Aravind-Kovilpatti",
    centre: "Kovilpatti",
    date: "2026-09-25",
    category: "Events",
    thumbnail: "assets\\images\\2026_9_Kovilpatti_Hospital day (12).jpg",
    shortDescription:
      "The 7th Hospital Day of Aravind-Kovilpatti was celebrated with cultural performances and felicitations.",
    body: [
      "The 7th Hospital Day of Aravind-Kovilpatti was celebrated with great enthusiasm, commemorating the hospital’s journey, acknowledging the contributions of its team members, and providing an opportunity for everyone to come together and celebrate its milestones and achievements.",
      "The programme commenced with a prayer song, followed by the Welcome Address by Dr. Suganya G.J., who also presented the annual report. Sr. Anthony Jeba Mary presented a Bharatanatyam performance, while the formal proceedings were interspersed with several cultural performances.",
      "Dr. R. Ramakrishnan, Advisor, Aravind-Tirunelveli, delivered a special address. Dr. Subhashini, Diabetologist and Physician, and Dr. R. Meenakshi, CMO, Aravind-Tirunelveli, were felicitated as part of the programme.",
      "The cultural segment continued with an energetic Karakattam performance by Sr. Sakthi and Sr. Malathi, followed by a melodious song by Sr. Kavina. The AOP Sisters then presented a lively group dance, showcasing their enthusiasm, creativity, and team spirit. The formal programme concluded with the Vote of Thanks delivered by Rajaram Mohanroy, Manager.",
    ],
    keywords: ["Hospital Day", "Kovilpatti", "Celebration", "Cultural Programme"],
    gallery: ["assets\\images\\2026_9_Kovilpatti_Hospital day (17).jpg","assets\\images\\2026_9_Kovilpatti_Hospital day (6).jpg","assets\\images\\2026_9_Kovilpatti_Hospital day (9).jpg"],
  },
  {
    id: 29,
    title: "Employee Engagement Activity - Building Bonds, Strengthening Teams",
    centre: "Aurolab",
    date: "2026-09-12",
    category: "Events",
    thumbnail: "assets\\images\\2026_9_Aurolab_Building Bonds, Strengthening Teams.png",
    shortDescription:
      "Aurolab conducted an employee engagement activity for newly joined staff of the Warehouse Department.",
    body: [
      "Aurolab conducted an employee engagement activity for newly joined staff of the Warehouse Department, aimed at fostering unity and strengthening teamwork among team members.",
      "The initiative provided an opportunity for new employees to connect, collaborate, and build stronger working relationships as they settled into the Aurolab family.",
    ],
    keywords: ["Employee Engagement", "Aurolab", "Team Building", "Warehouse"],
    gallery: ["assets\\images\\2026_9_Aurolab_Building Bonds, Strengthening Teams (1).png"],
  },
];

export const categories = ["All", "CME", "Events", "Workshop", "Training", "Conferences", "Others"];
export const centres = ["All Locations", "Salem", "Tirunelveli", "Madurai", "Coimbatore", "Pondicherry", "Chennai", "Tirupur", "Tirupati", "Dindigul", "Thanjavur", "Tuticorin", "Chengalpattu", "Kovilpatti", "Aurolab", "LAICO", "Visitors", "Multiple Centers"];

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ---------- Fixed keyword list (drop-down in Add News) ----------
export interface KeywordGroup {
  group: string;
  items: string[];
}

export const keywordGroups: KeywordGroup[] = [
  {
    group: 'Eye Hospitals',
    items: [
      'Salem', 'Chennai', 'Madurai', 'Pondicherry', 'Dindigul', 'Coimbatore',
      'Tirunelveli', 'Tirupur', 'Tuticorin', 'Thanjavur', 'Tirupati', 'Chengalpattu', 'Kovilpatti',
    ],
  },
  { group: 'Eyecare Service', items: ['Vision Centres', 'Managed Hospitals', 'Special Products'] },
  { group: 'Aurolab', items: ['Aurolab', 'IOL'] },
  {
    group: 'Others',
    items: [
      'LAICO',
      'Aravind Medical Research Foundation',
      'Aravind Tele-Ophthalmology Network',
      'IT Services',
      'Nithyatha',
      'CME',
      'Workshop',
      'Training',
      'Conference',
      'Awareness',
    ],
  },
];