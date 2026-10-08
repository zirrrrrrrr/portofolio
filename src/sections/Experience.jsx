import React, { useState, useEffect } from "react";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// =========================
// EXPERIENCE DATA (DATA UTAMA)
// =========================
const experiences = [
  {
    id: "Household_Affairs_Secretary",
    period: "Aug 2026 - Present",
    role: "Household Affairs Secretary & Acting Head of General Secretariat",
    company: "HIMSI UIN Jakarta - Kabinet Asteria",
    logo: "/logo/logo-himsi.jpeg",
    description: 
      "Officially appointed as the Secretary of the Household Affairs Department, I served as the strategic right-hand to the Head of Department, managing HR functions, monthly evaluations, and internal communications for 13 department members across 3 distinct divisions: Entrepreneurship, General Secretariat, and Religious Affairs. However, due to an unexpected leadership vacuum, I also stepped up as the Acting Head of the General Secretariat Division. In this dual capacity, I balanced organizational management duties while directly leading a team of 3 staff members to execute critical data initiatives, including the HIMSI Database and Inventory systems.",
    responsibilities: [
      "Department HR & Stakeholder Management: Functioned as the core operational liaison for 13 department members, including Division Heads. Designed and implemented monthly evaluation systems (Rakotin) to track team morale, resolve internal conflicts, and foster a cohesive working environment across 3 sub-divisions.",
      "Crisis Leadership & Operations: Stepped up as Acting Head of General Secretariat, directly leading and mentoring 3 staff members to ensure the continuous and successful execution of division programs despite a critical leadership absence.",
      "Data Pipeline Architecture & Dashboarding: Spearheaded the development of the HIMSI Database, designing data collection pipelines and interactive Looker Studio dashboards to monitor alumni trajectories, active students, and organizational achievements.",
      "Asset & Inventory Database: Directed the digital tracking and maintenance of HIMSI's physical and non-physical assets, ensuring streamlined borrowing procedures and maintaining an accurate, real-time inventory database."
    ],
    gallery: [
      "/experiences/experience-himsi-head/himsi-2-1.jpeg", 
      "/experiences/experience-himsi-head/himsi-2-2.jpeg", 
      "/experiences/experience-himsi-head/himsi-2-3.jpeg"
    ]
  },
  {
    id: "Data_Specialist",
    period: "November 2025 - Jul 2026",
    role: "Data Specialist Staff",
    company: "Career Center (Pusat Karier), UIN Syarif Hidayatullah Jakarta",
    logo: "/logo/logo-puskar.jpg",
    description:
      "As a Data Specialist Intern, I managed the end-to-end data lifecycle for key university initiatives, primarily the Tracer Study and the 'Ngantri' (Company Visit) program. My responsibility spanned across multiple faculties, specifically the Faculty of Science and Technology (FST) and the Graduate School (SPS). I handled everything from daily operational outreach, proactively contacting 50+ alumni daily to strategic data visualization. Ultimately, I transformed raw survey responses into tiered Looker Studio dashboards and authored comprehensive executive reports at both the faculty and study-program levels to support institutional decision-making and accreditation.",
    responsibilities: [
      "Data Consolidation & Cleansing: Managed the alumni tracking database for the Tracer Study, alongside handling event registration and satisfaction evaluation surveys for the 'Ngantri' program. Performed rigorous data cleansing using advanced Google Sheets functions to ensure data integrity across both initiatives.",
      "Tiered Data Visualization: Designed and deployed interactive Looker Studio dashboards with a two-tiered approach: creating overarching dashboards for entire faculties (FST & SPS) alongside highly specific, drill-down dashboards for individual study programs.",
      "Comprehensive Analytical Reporting: Authored and presented data-driven executive reports derived from dashboard insights. Developed a structured reporting framework consisting of comprehensive PDF documentation and presentation decks (PPT) tailored for both Faculty-level and specific Study Program-level audiences across FST and SPS.",
      "Operations & Stakeholder Management: Executed targeted daily outreach campaigns, contacting 50+ alumni per day to maximize survey participation. Compiled and presented weekly progress reports on response rates directly to executive stakeholders, including Deans and Heads of Programs."
    ],
    gallery: [
      "/experiences/experience-puskar/puskar 1.jpeg", 
      "/experiences/experience-puskar/puskar 2.jpeg", 
      "/experiences/experience-puskar/puskar 3.jpeg",
      "/experiences/experience-puskar/puskar 4.jpeg",
      "/experiences/experience-puskar/puskar 5.jpeg",
      "/about/about-puskar.jpeg",
      "/experiences/experience-puskar/puskar talent 1.jpeg",
      "/experiences/experience-puskar/puskar talent 3.jpeg",
      "/experiences/experience-puskar/puskar talent 4.jpeg",
      "/experiences/experience-puskar/puskar 6.jpg",
      "/experiences/experience-puskar/puskar 7.jpeg",
      "/experiences/experience-puskar/puskar 8.jpeg",
    ]
  },
  {
    id: "General_Secretariat_Staff",
    period: "Aug 2025 - Jun 2026",
    role: "General Secretariat Staff",
    company: "HIMSI UIN Jakarta - Kabinet Sentra Eskalasi",
    logo: "/logo/logo-himsi.jpeg",
    description:
      "My journey into data began here through the HIMSI Database program. As a General Secretariat Staff, I was involved in various data collection and database management activities, covering active students, alumni, achievements, and event satisfaction surveys. From creating forms and coordinating survey distribution to organizing and visualizing the collected data, this experience sparked my interest in how raw information can be structured and turned into something useful for the organization.",
    responsibilities: [
      "Data Collection & Database Management: Handled data collection for students, alumni, achievements, and other organizational needs. Created Google Forms, coordinated survey distribution through targeted broadcasts, and organized collected responses within the organization's database.",
      "Data Visualization & Evaluation: Processed survey data for the Event Satisfaction Index and Tracer Study, transforming collected responses into Looker Studio dashboards to support event evaluation and data monitoring.",
      "Academic Archive Management: Organized and maintained the organization's academic records, including course materials, internship reports (PKL), and thesis records, ensuring information was systematically archived and kept up to date.",
      "Data Request Handling: Managed internal and external data requests in accordance with organizational SOPs, ensuring requested data was properly documented and distributed through the appropriate process.",
    ],
    gallery: [
      "/experiences/experience-himsi-staff/himsi-1-1.jpeg", 
      "/experiences/experience-himsi-staff/himsi-1-2.jpeg", 
      "/experiences/experience-himsi-staff/himsi-1-3.jpeg",
      "/about/about-himsi.jpeg",
      "/experiences/experience-himsi-staff/himsi-1-4.jpeg",
      "/experiences/experience-himsi-staff/himsi-1-5.jpg",
      "/experiences/experience-himsi-staff/himsi talent 1.jpeg",
      "/experiences/experience-himsi-staff/himsi talent 4.jpeg",
      "/experiences/experience-himsi-staff/himsi talent 5.jpeg",
    ]
  },
];

// =========================
// DATA KEPANITIAAN
// =========================
const committees = [
  {
    id: 1,
    role: "Head of Partnership",
    event: "Company Visit 2026",
    date: "Apr 2026",
    summary: "Directed B2B outreach strategies, authored official proposals, and managed corporate tracking pipelines.",
    overview: "As the Head of Partnership for Company Visit 2026, I directed the end-to-end B2B outreach strategy to secure corporate collaborations. I engineered a comprehensive tracking database to manage external stakeholder relations, co-authored official collaboration proposals, and served as the primary liaison in executive meetings with prospective corporate partners, ensuring seamless communication and successful program execution.",
    responsibilities: [
      "B2B Prospecting & Database Management: Developed and maintained a centralized 'Company Database' in Google Sheets to track the entire outreach pipeline, monitoring approach statuses, response timelines, and negotiation notes for over 50 target corporations (including PT Indosat TBK, Telkomsigma, and Kawan Lama Group).",
      "Corporate Communication & Negotiation: Authored official outreach templates and synchronization meeting scripts to guide the partnership team. Served as the primary liaison, managing direct communications, pitching the event's value proposition, and negotiating visit logistics with corporate HR and PR representatives via WhatsApp.",
      "Proposal Development: Collaborated directly with the Chief Organizer to draft, refine, and distribute the official event proposal, tailoring the content to align with corporate partnership standards.",
      "Participant Tracking System: Designed an internal tracking system and coordinated automated WhatsApp blasting campaigns to class representatives (Ketua Kelas) to monitor student registration and confirm event attendance."
    ],
    images: [
      "/experiences/experience-himsi-staff/comvis/COMVIS.png", 
      "/experiences/experience-himsi-staff/comvis/comvis-1.jpg",
      "/experiences/experience-himsi-staff/comvis/comvis-2.jpg",
      "/experiences/experience-himsi-staff/comvis/comvis-3.JPG",
      "/experiences/experience-himsi-staff/comvis/comvis-4.jpg",
    ]
  },
  {
    id: 2,
    role: "Head of Public Relations",
    event: "RAMRIES (Ramadhan Series)",
    date: "Feb 2026",
    summary: "Directed public relations strategies, stakeholder outreach, and strategic sponsorship campaigns.",
    tools: "", 
    overview: "As the Head of Public Relations for Ramadhan Series 2026, I directed the end-to-end communication and external outreach strategies for a multi-series community event. I led a 7-person team to manage participant acquisition, secured institutional partnerships for social initiatives, and successfully executed a strategic sponsorship campaign with KitaLulus, effectively converting community engagement into direct event funding.",
    responsibilities: [
      "Strategic Sponsorship Execution: Managed and executed a partnership campaign with KitaLulus. Directed targeted community acquisition initiatives (driving user registrations for affiliated corporate brands) to successfully generate direct funding for the event.",
      "External Stakeholder Outreach: Directed the outreach pipeline with external institutions. Authored official communication templates, conducted site surveys, and secured formal collaborations with local orphanages for the charity initiative (Bakti Sosial).",
      "Mass Communication & Participant Pipeline: Designed and deployed structured broadcast campaigns via WhatsApp. Acted as the primary Contact Person (CP), managing real-time public inquiries and tracking participant registration statuses using a centralized Google Sheets database.",
      "PR Team Leadership: Led and mentored a team of 7 PR staff members, delegating communication operations to ensure synchronized public relations efforts across three distinct sub-events (Berbagi Takjil, Bakti Sosial, and BukBakSI)."
    ],
    images: [
      "/experiences/experience-himsi-staff/ramries/ramries.png",
      "/experiences/experience-himsi-staff/ramries/ramries-1.jpeg",
      "/experiences/experience-himsi-staff/ramries/ramries-2.JPG",
      "/experiences/experience-himsi-staff/ramries/ramries-3.jpg",
      "/experiences/experience-himsi-staff/ramries/ramries-4.jpg",
      "/experiences/experience-himsi-staff/ramries/ramries-5.JPG",
    ]
  },
  {
    id: 3,
    role: "Event Division - MC",
    event: "Training Camp 2025",
    date: "Nov 2025",
    summary: "Engineered participant assessment databases and served as the primary Master of Ceremonies.",
    tools: "Google Sheets, Google Forms", 
    overview: "Served as a core member of the Event Division for Training Camp 2025, balancing dual responsibilities in both front-facing execution and backend data management. While acting as the Master of Ceremonies (MC), I concurrently designed the event's comprehensive participant assessment system, engineering automated Google Sheets databases to track, weight, and evaluate the performance metrics of over 100 participants.",
    responsibilities: [
      "Assessment Framework Design: Co-led the design of the participant evaluation framework, establishing scoring rubrics and weighting formulas across multiple assessment categories, including Focus Group Discussions (LGD), Quizzes, and Attendance.",
      "Automated Database Management: Engineered and managed centralized tracking databases using advanced Google Sheets functions to seamlessly aggregate scores from over 100 participants across 10 'Houses', accurately determining final pass/fail statuses and remedial needs.",
      "Event Execution & Public Speaking: Served as the Master of Ceremonies (MC), maintaining event flow, engaging participants, and ensuring the smooth execution of all training agendas and interactive sessions."
    ],
    images: [
      "/experiences/experience-himsi-staff/tc/Training camp panitia.png", 
      "/experiences/experience-himsi-staff/tc/tc-1.JPG",
      "/experiences/experience-himsi-staff/tc/tc-2.jpg",
      "/experiences/experience-himsi-staff/tc/tc-3.JPG",
      "/experiences/experience-himsi-staff/tc/tc-4.JPG",
    ]
  },
  {
    id: 4,
    role: "Assistant Mentor & Treasurer - MC",
    event: "Sharing Center",
    date: "July 2025 - Feb 2026",
    summary: "Facilitated mentoring sessions and tracked participant progress.",
    tools: "",
    overview: "Served a dual role as an Assistant Mentor (Astor) and Core Committee Member for the Sharing Center 2026, a 4-month comprehensive onboarding and mentoring program for incoming Information Systems freshmen. I directly mentored a cohort of 12 students, successfully guiding them to win the 'Best Mentoring Group' award. Additionally, I managed the financial planning as Treasurer for the program's closing ceremony (Mentoring Akbar) and served as the Master of Ceremonies for the online debate competition.",
    responsibilities: [
      "Freshmen Mentoring & Instruction: Co-facilitated a 4-month mentoring program for a cohort of 12 freshmen ('Master Rhino' group), delivering structured presentations on Information Systems curriculum, career pathways, organizational advocacy, and HIMSI regulations.",
      "Award-Winning Group Leadership: Guided, motivated, and monitored the progress of my mentees throughout the program, culminating in our group being awarded the 'Best Mentoring of the Best' Group title at the program's conclusion.",
      "Financial Planning (Treasurer): Served as Treasurer for the program's closing ceremony (Mentoring Akbar) held at the university theater, responsible for drafting, managing, and optimizing the event's budget (RAB).",
      "Event Execution (MC): Acted as the Master of Ceremonies for the online debate competition segment of the Mentoring Akbar, ensuring smooth technical execution and engaging participant interactions.",

    ],
    images: [
      "/experiences/experience-himsi-staff/asmen/Sertifikat Best Of The Best.jpeg", 
      "/experiences/experience-himsi-staff/asmen/sertif astor.jpg",
      "/experiences/experience-himsi-staff/asmen/sertif menbar.jpg",
      "/experiences/experience-himsi-staff/asmen/asmen-mc.jpeg",
      "/experiences/experience-himsi-staff/asmen/asmen-1.jpg",
      "/experiences/experience-himsi-staff/asmen/asmen-2.jpeg",
      "/experiences/experience-himsi-staff/asmen/asmen-3.jpg",
      "/experiences/experience-himsi-staff/asmen/asmen-4.jpg",
      "/experiences/experience-himsi-staff/asmen/asmen-5.jpg",
      "/experiences/experience-himsi-staff/asmen/asmen-6.jpg",
      "/experiences/experience-himsi-staff/asmen/asmen-7.jpg",
      "/experiences/experience-himsi-staff/asmen/spj menbar.jpg",
    ]
  },
  {
    id: 5,
    role: "Public Relations",
    event: "Milad HIMSI",
    date: "Oct 2025",
    summary: "Orchestrated participant data tracking, managed registration workflows, and executed targeted stakeholder outreach.",
    tools: "",
    overview: "Served as a key member of the Public Relations team for MILAD HIMSI 2025, orchestrating participant data management, event monitoring, and stakeholder communications. I engineered the digital registration workflows, managed targeted outreach campaigns to alumni, and successfully tracked attendance metrics across four major anniversary events, ensuring seamless operational flow and robust participant engagement.",
    responsibilities: [
      "Event Registration & Data Workflows: Designed and deployed comprehensive digital registration systems using Google Forms to streamline participant enrollment across multiple sports competitions (Futsal, Chess, and Badminton).",
      "Participant Tracking & Monitoring: Spearheaded the on-site registration desk and attendance monitoring system. Successfully tracked and verified the presence of both active participants and event spectators across all four anniversary agendas, ensuring accurate attendance data collection.",
      "Targeted Stakeholder Outreach: Executed targeted communication campaigns, designing and broadcasting formal invitations to key stakeholders, including university alumni and senior students, to drive event attendance.",
      "Direct Participant Relations (PIC): Acted as the primary Point of Contact (PIC) for the Chess Tournament, managing dedicated WhatsApp communication channels to promptly resolve participant inquiries and distribute real-time event updates."
    ],
    images: [
      "/experiences/experience-himsi-staff/milad/MILAD.jpg",
      "/experiences/experience-himsi-staff/milad/milad-1.JPG",
      "/experiences/experience-himsi-staff/milad/milad-2.JPG",
      "/experiences/experience-himsi-staff/milad/milad-3.JPG",
      "/experiences/experience-himsi-staff/milad/milad-4.JPG",
      "/experiences/experience-himsi-staff/milad/milad-5.JPG",
      "/experiences/experience-himsi-staff/milad/milad-6.JPG",
      "/experiences/experience-himsi-staff/milad/milad-7.JPG",
    ]
  },
  {
    id: 6,
    role: "Event Division",
    event: "Pengabdian Masyarakat",
    date: "2025",
    summary: "Coordinated community outreach operations, managed interactive activities, and ensured precise event scheduling.",
    tools: "",
    overview: "As a member of the Event Division for Pengabdian Masyarakat 2025, I played a key operational role in orchestrating a community outreach program at SMP IT AL MATIIN. I contributed to the initial event conceptualization and was responsible for coordinating interactive student activities and educational competitions. On the day of the event, I acted as the primary Time Keeper to ensure a seamless operational flow across guest lectures and workshops, while also serving as an adjudicator for the creative competition, maximizing the social impact of the program.",
    responsibilities: [
      "Event Conceptualization & Planning: Contributed to the brainstorming and strategic planning of the community outreach concept, structuring engaging activities, participant groupings, and donation logistics for an underprivileged school.",
      "Operations & Time Management: Served as the official Time Keeper during event execution. Strictly monitored and managed the rundown to ensure guest lectures, external partner sessions, and interactive activities ran precisely on schedule.",
      "Activity Coordination & Adjudication: Organized student groupings for various educational competitions. Acted as the primary adjudicator for the creative bottle painting contest, assessing student submissions based on predefined creative criteria and awarding prizes."
    ],
    images: [
      "/experiences/experience-himsi-staff/pengmas/pengmas.png",
      "/experiences/experience-himsi-staff/pengmas/pengmas-1.JPG",
      "/experiences/experience-himsi-staff/pengmas/pengmas-2.JPG",
      "/experiences/experience-himsi-staff/pengmas/pengmas-3.JPG",
      "/experiences/experience-himsi-staff/pengmas/pengmas-4.JPG",
    ]
  },
  {
    id: 7,
    role: "Security & Operations (K3)",
    event: "Meet Up",
    date: "2025",
    summary: "Directed crowd control, mobility logistics, and safety protocols for a 3-day external program.",
    tools: "", 
    overview: "Served as a Security & Operations (K3) Officer for Meet Up 16.0, a comprehensive 3-day, 2-night external program involving 93 participants at Puri Anandita Resort. I directed end-to-end participant mobility, enforced strict safety protocols and disciplinary guidelines, and managed real-time crisis response, ensuring a highly secure and seamlessly coordinated environment throughout the event's lifecycle.",
    responsibilities: [
      "Mobility & Logistics Management: Directed the systematic mobilization of 93 participants, coordinating safe transit from the university departure point to the off-site resort and overseeing localized movements across various event agendas (FGDs, Pos to Pos, and out-of-villa activities).",
      "Protocol Enforcement & Crowd Control: Monitored participant compliance with established event regulations and schedules, ensuring structured transitions between meals, rest periods, and active sessions to maintain operational order.",
      "Health & Crisis Response: Acted as the primary first responder for health and safety incidents. Managed the First Aid kit (P3K) and provided immediate medical assistance and care coordination for participants experiencing health issues during the 3-day event."
    ],
    images: [
      "/experiences/experience-himsi-staff/meetup/Meet Up.png", 
      "/experiences/experience-himsi-staff/meetup/meetup-1.JPG",
      "/experiences/experience-himsi-staff/meetup/meetup-2.JPG",
      "/experiences/experience-himsi-staff/meetup/meetup-3.JPG",
      "/experiences/experience-himsi-staff/meetup/meetup-4.JPG",
      "/experiences/experience-himsi-staff/meetup/meetup-5.JPG",
      "/experiences/experience-himsi-staff/meetup/meetup-6.JPG",
      "/experiences/experience-himsi-staff/meetup/meetup-7.JPG"
    ]
  },
  {
    id: 8,
    role: "Event Division",
    event: "Texplorum",
    date: "2025",
    summary: "Spearheaded event conceptualization and managed Run of Show (RoS) operations for a hybrid seminar series.",
    tools: "",
    overview: "Served as a core member of the Event Division for Texplorum, a two-part seminar series executed in both offline (theater) and online (Zoom) formats. I successfully pitched and developed the overarching event theme for the offline session and contributed to the conceptualization of the online counterpart. During execution, I acted as the primary Time Keeper, strictly managing the Run of Show (RoS) to ensure seamless transitions between keynote sessions, Q&A, and interactive segments across both event formats.",
    responsibilities: [
      "Event Conceptualization: Pitched and successfully established the core theme and event concept for the offline seminar (Texplo 1), while actively contributing strategic ideas for the online session's (Texplo 2) agenda.",
      "Rundown & RoS Development: Collaborated in drafting and finalizing the detailed event rundown (Run of Show), allocating precise timeframes for briefings, registrations, keynote speeches, Q&A, and awarding sessions.",
      "Time Keeping & Execution: Served as the official Time Keeper for both offline and online seminars. Directed real-time event pacing and coordinated with the MC and technical teams to ensure strict adherence to the schedule and seamless session transitions."
    ],
    images: [
      "/experiences/experience-himsi-staff/texplorum/Texplorum panitia.png", 
      "/experiences/experience-himsi-staff/texplorum/texplo-1.JPG",
      "/experiences/experience-himsi-staff/texplorum/texplo-2.JPG",
      "/experiences/experience-himsi-staff/texplorum/texplo-3.jpg",
      "/experiences/experience-himsi-staff/texplorum/texplo-4.jpg",
    ]
  },
  {
    id: 9,
    role: "Media Talent",
    event: "TechNews",
    date: "2025",
    summary: "Served as the primary on-camera talent for a technology news video series on social media.",
    tools: "", 
    links: [
      { title: "Watch on Instagram", url: "https://www.instagram.com/reel/DWYtLjWk3eN/?stkn=MTU5bzAwOXJld3BmZQ==" },
      { title: "Watch on Instagram", url: "https://www.instagram.com/reel/DWgNrKlk74v/?stkn=enU2bnZueWVxcGlu" }
    ],
    overview: "Acted as the primary on-camera presenter for 'TechNews', an educational video series dedicated to delivering the latest technology trends and organizational updates to Information Systems students. I successfully hosted and recorded multiple short-form video episodes, translating written technical scripts into engaging visual content for HIMSI's official Instagram platform.",
    responsibilities: [
      "On-Camera Presentation: Served as the primary visual talent, delivering scripted technology news with clear articulation, appropriate pacing, and strong on-camera confidence using a teleprompter.",
      "Content Production Collaboration: Collaborated closely with scriptwriters and the post-production design division (PDD) to ensure the accurate and engaging delivery of 3 educational short-form videos (Instagram Reels).",
      "Digital Engagement: Acted as the face of the initiative, helping to drive student engagement and digital awareness of tech-related topics through social media channels."
    ],
    images: [
      "/experiences/experience-himsi-staff/technews/technews 1.jpeg", 
      "/experiences/experience-himsi-staff/technews/technews 2.jpeg"
      
    ]
  },
];

// =========================================================
// 1. KOMPONEN EXPERIENCE (UNTUK HALAMAN DEPAN)
// PENAMBAHAN: Slot logo di sebelah kiri teks informasi
// =========================================================
const Experience = () => {
  const navigate = useNavigate();

  return (
    <section
      id="experience"
      className="relative w-full min-h-[calc(100vh-64px)] scroll-mt-16 bg-[#071B2A] text-[#F2EBDD] flex items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="mb-14" data-aos="fade-down">
          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#8C7350] font-serif font-bold">
            Work & Organization Experience
          </p>
          <div className="w-16 h-px bg-[#C6A15B] mt-3 mb-8" />
          <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-medium tracking-tight text-[#F2EBDD] font-serif">
            A Journey Through Data & Leadership
          </h2>
        </div>

        <div className="relative max-w-5xl">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-[#C6A15B]/50" />

          <div className="space-y-5 md:space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} data-aos="fade-up" data-aos-delay={index * 100} className="relative pl-8 md:pl-12">
                <div className="absolute left-0 md:left-[2px] top-6 w-[15px] h-[15px] rounded-full bg-[#071B2A] border border-[#C6A15B] z-10" />

                <button
                  type="button"
                  onClick={() => navigate(`/experience/${exp.id}`)}
                  className="w-full text-left group border-b border-[#F2EBDD]/15 pb-5 md:pb-6 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                    
                    {/* BAGIAN KIRI: LOGO + TEKS (Diubah jadi flex-row) */}
                    <div className="flex items-start gap-5 min-w-0">
                      
                      {/* --- SLOT LOGO --- */}
                      <div className="flex-shrink-0 w-14 h-14 md:w-14 md:h-14 mt-4 bg-[#ffffff] border border-[#C6A15B]/20 rounded-lg flex items-center justify-center p-0.5 overflow-hidden transition-all duration-300 group-hover:border-[#C6A15B]/50 group-hover:bg-[#071B2A]/50">
                        
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                          />
                        ) : (
                          <span className="text-[#C6A15B] text-xl font-serif font-medium opacity-100">
                            {exp.company.charAt(0)}
                          </span>
                        )}
                      </div>

                      {/* --- TEKS INFORMASI --- */}
                      <div>
                        <p className="text-xs sm:text-sm tracking-[0.12em] uppercase text-[#C6A15B] mb-2 font-sans">
                          {exp.period}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-medium text-[#F2EBDD] group-hover:text-[#D8C28A] transition-colors duration-300 font-serif">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm md:text-base text-[#B8C0C8] font-sans">
                          {exp.company}
                        </p>
                      </div>

                    </div>

                    {/* BAGIAN KANAN: PANAH */}
                    <span className="hidden md:flex items-center justify-center shrink-0 w-9 h-9 rounded-full border border-[#C6A15B]/40 text-[#C6A15B] group-hover:border-[#C6A15B] group-hover:translate-x-1 transition-all duration-300 mt-2">
                      →
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =========================================================
// 2. KOMPONEN EXPERIENCE DETAIL (UNTUK HALAMAN BARU)
// =========================================================
const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. KITA TARUH INI DI ATAS: Cari datanya dulu berdasarkan ID
  const selectedExp = experiences.find((exp) => String(exp.id) === String(id));

  // 2. STATE KEPANITIAAN & FULLSCREEN
  const [selectedCommittee, setSelectedCommittee] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null); 

  // 3. STATE MAIN IMAGE: Langsung isi pakai foto pertama (index ke-0) dari gallery kalau datanya ada
  const [mainImage, setMainImage] = useState(
    selectedExp?.gallery?.length > 0 ? selectedExp.gallery[0] : null
  );

  // 4. EFEK RESET MAIN IMAGE: Biar kalau lu klik back dan buka experience lain, fotonya otomatis keriset ganti baru
  useEffect(() => {
    if (selectedExp?.gallery?.length > 0) {
      setMainImage(selectedExp.gallery[0]);
    } else {
      setMainImage(null);
    }
  }, [id, selectedExp]);

  // 5. EFEK SCROLL & AOS (Kode lu yang asli, aman)
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [id]);

  // 6. EFEK KUNCI LAYAR (Kode lu yang asli, aman)
  useEffect(() => {
    if (selectedCommittee || fullscreenImage) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedCommittee, fullscreenImage]);

  // 7. HANDLE ERROR KALAU ID NGASAL (Kode lu yang asli, aman)
  if (!selectedExp) {
    return (
      <div className="min-h-screen bg-[#071B2A] flex items-center justify-center text-[#F2EBDD]">
        <h2>Experience not found.</h2>
        <button onClick={() => navigate('/')} className="ml-4 underline">Go Back</button>
      </div>
    );
  }

  // Taruh fungsi ini di dalam komponen pop-up lu, sebelum return (
  const RenderContent = ({ data }) => {
    if (!data) return null;

    return (
      <div className="border-t border-[#F2EBDD]/15 pt-3 mt-3">
        {Array.isArray(data) ? (
          <div className="flex flex-col gap-1">
            {data.map((item, index) => (
              <div key={index} className="flex items-start gap-4 py-1">
                <span className="text-[#C6A15B] font-sans mt-0.5 text-base md:text-lg">—</span>
                <p className="text-sm md:text-sm leading-relaxed text-[#B8C0C8] font-sans font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#B8C0C8] leading-relaxed text-base md:text-sm font-sans font-light">
            {data}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen bg-[#071B2A] text-[#F2EBDD] flex flex-col overflow-hidden">
    {/* Background Texture (Di set absolute/fixed di belakang konten) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-95 mix-blend-luminosity bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/download.jpg')" }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#071B2A]/40 via-[#071B2A]/80 to-[#071B2A] pointer-events-none" />

      <div className="relative z-10 min-h-full px-6 py-10 md:py-16">
        <div className="max-w-[1100px] mx-auto"> 

          {/* Back Button */}
          <div data-aos="fade-right">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#B8C0C8] font-sans border rounded border-[#C6A15B]/40 hover:border-[#C6A15B] hover:text-[#F2EBDD] hover:bg-[#C6A15B]/10 transition-all duration-300 mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>

          {/* Header Modal Utama */}
          <div className="mb-10 lg:mb-14" data-aos="fade-down" data-aos-delay="100">
            <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#C6A15B] mb-4 font-sans">
              {selectedExp.period}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight text-[#F2EBDD] mb-4 font-serif">
              {selectedExp.role}
            </h1>
            <p className="text-base md:text-lg text-[#B8C0C8] font-sans font-light mb-6">
              {selectedExp.company}
            </p>
            <div className="w-full h-px bg-[#C6A15B]/30" />
          </div>

          {/* KONTEN UTAMA: SPLIT-PANE KIRI KANAN */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-16">
            
            {/* KOLOM KIRI */}
            <div className="flex flex-col gap-10 lg:gap-12" data-aos="fade-right" data-aos-delay="200">
              <div className="text-sm md:text-base leading-relaxed text-[#B8C0C8] font-sans font-light space-y-6">
                {selectedExp.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-medium text-[#F2EBDD] mb-6 font-serif">
                  Key Responsibilities
                </h2>
                <div className="border-t border-[#F2EBDD]/15 pt-4">
                  {selectedExp.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-4 py-1 last:border-0">
                      <span className="text-[#C6A15B] font-sans mt-0.5 text-base md:text-lg">—</span>
                      <p className="text-sm md:text-base leading-relaxed text-[#B8C0C8] font-sans font-light">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* KOLOM KANAN */}
              <div className="w-full flex flex-col h-fit" data-aos="fade-left" data-aos-delay="300">
                {/* PERUBAHAN: Tambah cursor-pointer dan onClick */}
                <div 
                  className="w-full aspect-[4/3] bg-[#04121D] border border-[#C6A15B]/20 rounded-xl mb-6 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
                  onClick={() => mainImage && setFullscreenImage(mainImage)}
                >
                  {mainImage ? (
                    <>
                      <img 
                        src={mainImage} 
                        alt="Main Preview" 
                        // PERUBAHAN: object-cover jadi object-contain
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* EFek Hover tambahan biar kece */}
                      <div className="absolute inset-0 bg-[#071B2A]/0 group-hover:bg-[#071B2A]/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-[#F2EBDD] font-sans text-xs tracking-widest uppercase bg-[#04121D]/90 px-4 py-2 rounded-full border border-[#C6A15B]/40 flex items-center gap-2">
                          <span className="text-lg mb-0.5">+</span> View Fullscreen
                        </span>
                      </div>
                    </>
                  ) : (
                    <span className="text-[#8FA4B5] text-sm font-sans tracking-widest uppercase opacity-60">Main Preview</span>
                  )}
                </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#C6A15B] font-sans font-medium">
                  Gallery Views
                </h3>
                <p className="text-[9px] sm:text-[10px] text-[#8FA1B2] font-sans tracking-[0.15em] uppercase flex items-center gap-1">
                  ↓  Click to Switch
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {/* Cek apakah data gallery-nya ada dan isi fotonya ada */}
                {selectedExp.gallery && selectedExp.gallery.length > 0 ? (
                  selectedExp.gallery.map((imgUrl, index) => (
                    <div 
                      key={index} 
                      
                      // 👇 TAMBAHIN BARIS INI 👇
                      onClick={() => setMainImage(imgUrl)}

                      className="w-full aspect-video bg-[#04121D] border border-[#C6A15B]/20 rounded-lg cursor-pointer hover:border-[#C6A15B]/100 transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Gallery ${index + 1}`} 
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-[#071B2A]/0 group-hover:bg-[#071B2A]/20 transition-colors duration-300" />
                    </div>
                  ))
                ) : (
                  /* Kalau datanya belum lu isi, balikin nampilin kotak kosong + bawaan lu */
                  [1, 2, 3, 4, 5, 6].map((item) => (
                    <div 
                      key={item} 
                      className="w-full aspect-video bg-[#04121D] border border-[#C6A15B]/20 rounded-lg cursor-not-allowed opacity-40 flex items-center justify-center relative overflow-hidden"
                    >
                       <span className="text-xl text-[#8FA4B5]">+</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* SECTION GRID KEPANITIAAN (HANYA MUNCUL DI ID: 3) */}
          {selectedExp.id === "General_Secretariat_Staff" && (
            <div className="mt-20 pt-16 border-t border-[#C6A15B]/20">
              <div className="mb-10" data-aos="fade-up">
                <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#C6A15B] mb-4 font-sans">Organizational Involvement</p>
                <h2 className="text-3xl md:text-4xl font-serif text-[#F2EBDD]">Committees & Initiatives</h2>
                <p className="text-sm md:text-lg leading-relaxed text-[#B8C0C8] font-sans font-light mt-4">A showcase of the various roles I undertook within HIMSI to develop my project management, communication, and data tracking skills.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {committees.map((item, index) => (
                  <div 
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    onClick={() => setSelectedCommittee(item)}
                    className="bg-[#04121D] border border-[#C6A15B]/20 rounded-xl p-6 md:p-8 cursor-pointer hover:border-[#C6A15B] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(198,161,91,0.05)] transition-all duration-300 group flex flex-col justify-center"
                  >
                    <h4 className="font-serif text-xl md:text-2xl text-[#F2EBDD] mb-3">{item.role}</h4>
                    <div className="w-8 h-px bg-[#C6A15B]/50 mb-5 group-hover:w-16 transition-all duration-500" />
                    <p className="text-[#C6A15B] text-[10px] uppercase tracking-widest mb-4 font-sans">{item.event} | {item.date}</p>
                    <p className="text-[#8FA4B5] text-sm leading-relaxed font-sans font-light line-clamp-3">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* MODAL KECIL (DETAIL KEPANITIAAN POP-UP) */}
      {selectedCommittee && (
        <div className="fixed inset-0 z-[150] bg-[#04121D]/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-fade-in-up"
            onClick={() => setSelectedCommittee(null)} 
        >    
          <div className="bg-[#071B2A] border border-[#C6A15B]/25 rounded-2xl w-full max-w-3xl max-h-[75vh] md:max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(198,161,91,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#071B2A]/95 backdrop-blur-md border-b border-[#C6A15B]/20 p-6 flex justify-between items-start z-10">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#F2EBDD] pr-8">{selectedCommittee.role}: {selectedCommittee.event}</h3>
              </div>
              <button 
                onClick={() => setSelectedCommittee(null)}
                className="w-10 h-10 rounded-full bg-[#04121D] border border-[#C6A15B]/30 flex items-center justify-center text-[#9FB2C3] hover:text-[#F2EBDD] hover:border-[#C6A15B] transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">

              {/* --- 1. PROJECT OVERVIEW --- */}
              <div className="mb-8">
                <h4 className="text-[#C6A15B] text-xs uppercase tracking-widest font-sans font-semibold mb-2">
                  Project Overview
                </h4>
                <RenderContent data={selectedCommittee.overview} />
              </div>

              {/* --- 2. KEY RESPONSIBILITIES --- */}
              {selectedCommittee.responsibilities && (
                <div className="mb-8">
                  <h4 className="text-[#C6A15B] text-xs uppercase tracking-widest font-sans font-semibold mb-2">
                    Key Responsibilities
                  </h4>
                  <RenderContent data={selectedCommittee.responsibilities} />
                </div>
              )}

              {/* --- 3. TOOLS --- */}
              {selectedCommittee.tools && (
                <div className="mb-8">
                  <h4 className="text-[#C6A15B] text-xs uppercase tracking-widest font-sans font-semibold mb-2">
                    Tools
                  </h4>
                  <RenderContent data={selectedCommittee.tools} />
                </div>
              )}

              {/* --- PUBLISHED CONTENT (LINKS) --- */}
              {selectedCommittee.links && selectedCommittee.links.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-[#C6A15B] text-xs uppercase tracking-widest font-sans font-semibold mb-3">
                    Published Content
                  </h4>
                  <div className="border-t border-[#F2EBDD]/15 pt-3 mt-3 flex flex-col gap-3">
                    {selectedCommittee.links.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#B8C0C8] hover:text-[#C6A15B] text-sm font-sans font-light flex items-center gap-2 w-fit transition-colors duration-300"
                      >
                        {/* Icon External Link kecil */}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* --- 4. DOCUMENTATION --- */}
              <div className="mb-2">
                {/* PERUBAHAN: Judul disamain kayak Key Responsibilities */}
                <h4 className="text-[#C6A15B] text-xs uppercase tracking-widest font-sans font-semibold mb-2">
                  Documentation
                </h4>
                
                {/* PERUBAHAN: Kasih garis batas atas (border-t) persis kayak RenderContent */}
                <div className="border-t border-[#F2EBDD]/15 pt-3 mt-3">
                
                  {/* 
                      KODE ASLI LU DI BAWAH INI (TIDAK ADA YANG BERUBAH)
                      Dari Grid Numpuk Bawah, jadi Flex Slider Menyamping.
                      Kita panggil class `no-scrollbar` yang udah dibikin sebelumnya.
                  */}
                  <div className="flex overflow-x-auto gap-4 mt-2 pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar">
                    
                    {/* Cek apakah data gambarnya ada */}
                    {selectedCommittee.images && selectedCommittee.images.length > 0 ? (
                      selectedCommittee.images.map((imgUrl, index) => (
                        <div 
                          key={index} 
                          // Lebar tetap 85% dari container biar sebelahnya ngintip dikit (enak buat swipe)
                          className="w-[85%] sm:w-[320px] flex-none snap-start aspect-[4/3] bg-[#04121D] border border-[#C6A15B]/20 rounded-lg cursor-pointer hover:border-[#C6A15B] transition-all duration-300 relative overflow-hidden group"
                          
                          // 👇 INI KUNCINYA BIAR BISA FULLSCREEN PAS DI-KLIK 👇
                          onClick={(e) => {
                            e.stopPropagation(); // Biar modal kepanitiaannya nggak ikutan ketutup
                            setFullscreenImage(imgUrl);
                          }}
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Doc ${index + 1}`} 
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Efek Hover */}
                          <div className="absolute inset-0 bg-[#071B2A]/0 group-hover:bg-[#071B2A]/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-[#F2EBDD] font-sans text-[10px] tracking-widest uppercase bg-[#04121D]/90 px-3 py-1.5 rounded-full border border-[#C6A15B]/40">
                              <span className="text-sm mr-1">+</span> Zoom
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      /* Fallback kalau foto belum diisi */
                      <div className="w-full py-8 bg-[#04121D]/50 border border-dashed border-[#C6A15B]/20 rounded-lg flex flex-col items-center justify-center text-[#8FA4B5] text-sm font-sans italic opacity-70">
                        <span>No documentation available yet.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* MODAL FULLSCREEN IMAGE */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[200] bg-[#04121D]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in-up"
          onClick={() => setFullscreenImage(null)} 
        >
          <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
            {/* Tombol Close */}
            <button 
              onClick={() => setFullscreenImage(null)}
              className="absolute top-2 right-2 md:-top-2 md:-right-2 w-12 h-12 rounded-full bg-[#071B2A] border border-[#C6A15B]/40 flex items-center justify-center text-[#9FB2C3] hover:text-[#F2EBDD] hover:border-[#C6A15B] z-10 transition-colors shadow-2xl"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Gambar Fullscreen */}
            <img 
              src={fullscreenImage} 
              alt="Fullscreen Preview" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(198,161,91,0.15)]"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
export { ExperienceDetail };