import React, { useState, useEffect, useRef } from "react";
import { projectsData, certificatesData } from "../data";
import { Code, Boxes, ArrowLeft, Star, ArrowUpRight, X, ChevronLeft, ChevronRight} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// =========================================================
// 1. KOMPONEN PORTOFOLIO (UNTUK HALAMAN DEPAN) 
// =========================================================
const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState(null);
  const navigate = useNavigate();

  // 1. Bikin "jangkar" (ref) buat masing-masing kontainer
  const certRef = useRef(null);
  const projectsRef = useRef(null); 
  const skillsRef = useRef(null); 

  // =========================================================
  // LOGIKA BARU: STATE & FUNGSI PANTAU SCROLL PROJECTS
  // =========================================================
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (projectsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = projectsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    const scrollContainer = projectsRef.current;
    if (scrollContainer) {
      updateScrollButtons(); 
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
      }
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [activeTab]); 
  // =========================================================

  // 2. Fungsi buat ngegeser layarnya (Disatukan dengan update scroll)
  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 376; 
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      
      // Kasih delay biar smooth scroll-nya selesai dulu
      setTimeout(() => {
        if (ref === projectsRef) updateScrollButtons();
        if (ref === certRef) updateCertScrollButtons();
      }, 300);
    }
  };

  // =========================================================
  // LOGIKA BARU: STATE & FUNGSI PANTAU SCROLL CERTIFICATIONS
  // =========================================================
  const [canScrollCertLeft, setCanScrollCertLeft] = useState(false);
  const [canScrollCertRight, setCanScrollCertRight] = useState(true);

  const updateCertScrollButtons = () => {
    if (certRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = certRef.current;
      setCanScrollCertLeft(scrollLeft > 0);
      setCanScrollCertRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  // Pantau scroll container Certifications
  useEffect(() => {
    const scrollContainer = certRef.current;
    if (scrollContainer) {
      updateCertScrollButtons();
      scrollContainer.addEventListener("scroll", updateCertScrollButtons);
      window.addEventListener("resize", updateCertScrollButtons);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateCertScrollButtons);
      }
      window.removeEventListener("resize", updateCertScrollButtons);
    };
  }, [activeTab]);
  // =========================================================

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Kunci akar HTML
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedCert]);

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "techstack", label: "Skills" },
  ];

  return (
    <section
      id="portofolio"
      className="relative w-full lg:min-h-[calc(100vh-64px)] scroll-mt-16 bg-[#F2EBDD] text-[#071B2A] flex lg:items-center overflow-hidden py-10 lg:py-0"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 lg:py-20">

        <div className="mb-12 md:mb-14" data-aos="fade-down">
          <p className="text-xs sm:text-sm tracking-[0.18em] font-bold uppercase text-[#8C7350] font-serif">
            Portfolio
          </p>
          <div className="w-16 h-px bg-[#C6A15B] mt-3 mb-8" />
          <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-medium tracking-tight text-[#071B2A] font-serif">
            Where Data Meets Decision Making
          </h2>
        </div>

        <div
          className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-6 border-b border-[#071B2A]/15 font-sans"
          data-aos="fade-up"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative pb-3 text-sm font-medium tracking-wide transition-colors duration-300
                  ${isActive ? "text-[#071B2A]" : "text-[#53677A] hover:text-[#071B2A]"}
                `}
              >
                {tab.label}
                <span
                  className={`
                    absolute bottom-0 left-0 h-px bg-[#C6A15B] transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </button>
            );
          })}
        </div>

        <div className="w-full">
          
          {/* =========================
              PROJECTS TAB (SLIDE KESAMPING)
          ========================= */}
          {activeTab === "projects" && (
            <div className="relative w-full">
              
              {/* TOMBOL KIRI */}
              <button
                onClick={() => handleScroll(projectsRef, "left")}
                disabled={!canScrollLeft}
                className={`hidden lg:flex absolute -left-20 top-[40%] -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border shadow-[0_0_80px_rgba(198,161,91,0.3)] transition-all duration-300
                  ${canScrollLeft 
                    ? "bg-[#071B2A] border-[#C6A15B]/40 text-[#C6A15B] opacity-80 hover:opacity-100 hover:bg-[#C6A15B] hover:text-[#071B2A] hover:scale-110 cursor-pointer" 
                    : "bg-[#071B2A]/60 border-[#C6A15B]/80 text-[#C6A15B]/80 opacity-80 cursor-not-allowed"}
                `}
              >
                <ChevronLeft className="w-7 h-7 -ml-0.5" />
              </button>

              {/* TOMBOL KANAN */}
              <button
                onClick={() => handleScroll(projectsRef, "right")}
                disabled={!canScrollRight}
                className={`hidden lg:flex absolute -right-20 top-[40%] -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border shadow-[0_0_80px_rgba(198,161,91,0.3)] transition-all duration-300
                  ${canScrollRight 
                    ? "bg-[#071B2A] border-[#C6A15B]/40 text-[#C6A15B] opacity-80 hover:opacity-100 hover:bg-[#C6A15B] hover:text-[#071B2A] hover:scale-110 cursor-pointer" 
                    : "bg-[#071B2A]/60 border-[#C6A15B]/80 text-[#C6A15B]/80 opacity-80 cursor-not-allowed"}
                `}
              >
                <ChevronRight className="w-7 h-7 -mr-0.5" />
              </button>

              {/* KONTAINER CARD */}
              <div 
                ref={projectsRef}
                className="flex overflow-x-auto items-stretch gap-6 pt-2 pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar" 
                data-aos="fade-up"
              >
                {projectsData.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="w-[76vw] sm:w-[350px] lg:w-[352px] flex-none snap-start group cursor-pointer bg-[#071B2A] border border-[#C6A15B]/95 rounded-xl p-3 md:p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C6A15B]/100 hover:shadow-[0_12px_30px_rgba(7,27,42,0.08)] flex flex-col"
                  >
                    <div className="relative w-full aspect-video overflow-hidden bg-[#071B2A] rounded shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[#071B2A]/0 group-hover:bg-[#071B2A]/20 transition-colors duration-300" />
                    </div>

                    <div className="mt-3 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h3 className="text-xl text-[#F2EBDD] leading-tight font-serif font-medium group-hover:text-[#C6A15B] transition-colors mt-1">
                              {project.title}
                            </h3>
                            <div className="w-16 h-px bg-[#C6A15B]/50 mt-3 mb-1 group-hover:w-24 transition-all duration-500" />
                          </div>
                          <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-[#C6A15B] opacity-0 translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 mt-1" />
                        </div>
                        <p className="mt-3 text-sm text-[#9FB2C3] leading-relaxed line-clamp-2 font-sans font-light">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* =========================
              CERTIFICATIONS TAB (SLIDE KESAMPING)
          ========================= */}
          {activeTab === "certifications" && (
            <div className="relative w-full"> 
              
              {/* TOMBOL KIRI */}
              <button
                onClick={() => handleScroll(certRef, "left")}
                disabled={!canScrollCertLeft}
                className={`hidden lg:flex absolute -left-20 top-[40%] -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border shadow-[0_0_80px_rgba(198,161,91,0.3)] transition-all duration-300
                  ${canScrollCertLeft 
                    ? "bg-[#071B2A] border-[#C6A15B]/40 text-[#C6A15B] opacity-80 hover:opacity-100 hover:bg-[#C6A15B] hover:text-[#071B2A] hover:scale-110 cursor-pointer" 
                    : "bg-[#071B2A]/60 border-[#C6A15B]/80 text-[#C6A15B]/80 opacity-80 cursor-not-allowed"}
                `}
              >
                <ChevronLeft className="w-7 h-7 -ml-0.5" />
              </button>

              {/* TOMBOL KANAN */}
              <button
                onClick={() => handleScroll(certRef, "right")}
                disabled={!canScrollCertRight}
                className={`hidden lg:flex absolute -right-20 top-[40%] -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border shadow-[0_0_80px_rgba(198,161,91,0.3)] transition-all duration-300
                  ${canScrollCertRight 
                    ? "bg-[#071B2A] border-[#C6A15B]/40 text-[#C6A15B] opacity-80 hover:opacity-100 hover:bg-[#C6A15B] hover:text-[#071B2A] hover:scale-110 cursor-pointer" 
                    : "bg-[#071B2A]/60 border-[#C6A15B]/80 text-[#C6A15B]/80 opacity-80 cursor-not-allowed"}
                `}
              >
                <ChevronRight className="w-7 h-7 -mr-0.5" />
              </button>

              {/* KONTAINER CARD */}
              <div 
                ref={certRef}
                className="flex overflow-x-auto items-stretch gap-6 pt-2 pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar" 
                data-aos="fade-up"
              >
                {certificatesData.map((cert, index) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="w-[76vw] sm:w-[350px] lg:w-[352px] flex-none snap-start group cursor-pointer bg-[#071B2A] border border-[#C6A15B]/95 rounded-xl p-3 md:p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C6A15B]/100 hover:shadow-[0_12px_30px_rgba(7,27,42,0.08)] flex flex-col"
                  >
                    <div className="relative w-full aspect-video overflow-hidden bg-[#071B2A] rounded shrink-0">
                      <img
                        src={Array.isArray(cert.image) ? cert.image[0] : cert.image}
                        alt={cert.title}
                        className="w-full h-full object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[#071B2A]/0 group-hover:bg-[#071B2A]/10 transition-colors duration-300" />
                    </div>

                    <div className="mt-3 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h3 className="text-xl text-[#F2EBDD] leading-tight font-serif font-medium group-hover:text-[#C6A15B] transition-colors mt-1">
                              {cert.title}
                            </h3>
                            <div className="w-16 h-px bg-[#C6A15B]/50 mt-3 mb-1 group-hover:w-24 transition-all duration-500" />
                          </div>
                          <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-[#C6A15B] opacity-0 translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 mt-1" />
                        </div>
                        <p className="mt-3 text-sm text-[#9FB2C3] leading-relaxed line-clamp-2 font-sans font-light">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================
              SKILLS TAB (SLIDE KESAMPING)
          ========================= */}
          {activeTab === "techstack" && (
            <div 
              className="flex overflow-x-auto lg:justify-center items-stretch gap-6 pt-2 pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar" 
              data-aos="fade-up"
            >
              
              {/* --- KIRI: HARD SKILL --- */}
              {/* PERUBAHAN: Dikasih width fix w-[90vw] di HP dan separuh layar di Laptop */}
              <div className="w-[76vw] lg:w-[calc(50%-12px)] flex-none snap-start bg-[#F2EBDD] border border-[#071B2A]/15 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                {/* Header Navy */}
                <div className="bg-[#071B2A] p-4 md:px-8 border-b border-[#C6A15B]/30 flex items-center gap-3">
                  <span className="w-6 h-px bg-[#C6A15B]"></span>
                  <h3 className="text-xl text-[#C6A15B] font-serif font-bold">
                    Tech Skills
                  </h3>
                </div>
                
                {/* Body Light */}
                <div className="p-4 md:p-5">
                  <div className="grid grid-cols-4 items-center sm:grid-cols-4 gap-y-5 gap-x-4">
                    {[
                      { 
                        name: "Excel", 
                        icon: <img src="/logo/excel logo.png" alt="Excel" className="w-8 h-8 object-contain" />
                        },
                      { 
                        name: "Google Sheets", 
                        icon: <img src="/logo/gsheets logo.png" alt="Google Sheets" className="w-8 h-8 object-contain" />
                      },
                      { 
                        name: "Looker Studio", 
                        icon: <img src="/logo/looker logo.png" alt="Looker Studio" className="w-8 h-8 object-contain" /> 
                      },
                      {
                        name: "Notion", 
                        icon: <img src="/logo/notion logo.png" alt="Notion" className="w-8 h-8 object-contain" />
                      },
                      { 
                        name: "Tableau", 
                        icon: <img src="/logo/Tableau logo.png" alt="Tableau" className="w-12 h-12 object-contain" />
                      },
                      { 
                        name: "Power BI", 
                        icon: <img src="/logo/powerbi logo.png" alt="Power BI" className="w-8 h-8 object-contain" />
                      },
                      { 
                        name: "MySQL", 
                        icon: <img src="/logo/mysql logo.png" alt="MySQL" className="w-8 h-8 object-contain" /> 
                      },
                      { 
                        name: "Word", 
                        icon: <img src="/logo/word logo.png" alt="Word" className="w-8 h-8 object-contain" /> 
                      },
                      { 
                        name: "PPT", 
                        icon: <img src="/logo/ppt logo.png" alt="PPT" className="w-8 h-8 object-contain" /> 
                      },
                      { 
                        name: "Canva", 
                        icon: <img src="/logo/canva logo.png" alt="Canva" className="w-9 h-9 object-contain" /> 
                      },
                      { 
                        name: "Python", 
                        icon: <img src="/logo/python logo.png" alt="Python" className="w-8 h-8 object-contain" /> 
                      },
                      { 
                        name: "Google Forms", 
                        icon: <img src="/logo/gform logo.png" alt="Google Forms" className="w-8 h-8 object-contain" /> 
                      },
                    ].map((tool, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-3 group cursor-default">
                        {/* Kotak App Store Putih Bersih dengan Border Halus */}
                        <div className="w-[3.2rem] h-[3.2rem] bg-white rounded-[1rem] border border-[#071B2A]/10 flex items-center justify-center shadow-sm group-hover:border-[#C6A15B] group-hover:shadow-md transition-all duration-300">
                          {tool.icon}
                        </div>
                        <span className="text-[#53677A] text-[11px] font-sans font-medium tracking-wide text-center group-hover:text-[#071B2A] transition-colors">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- KANAN: SOFT SKILL --- */}
              {/* PERUBAHAN: Dikasih width fix w-[90vw] di HP dan separuh layar di Laptop */}
              <div className="w-[76vw] lg:w-[calc(50%-12px)] flex-none snap-start bg-[#F2EBDD] border border-[#071B2A]/15 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                {/* Header Navy */}
                <div className="bg-[#071B2A] p-4 md:px-8 border-b border-[#C6A15B]/30 flex items-center gap-3">
                  <span className="w-6 h-px bg-[#C6A15B]"></span>
                  <h3 className="text-xl text-[#C6A15B] font-serif font-bold">
                    Core Competencies
                  </h3>
                </div>
                
                {/* Body Light */}
                <div className="py-1 px-8 flex flex-col">
                  {[
                    "Data Analytics & Visualization",
                    "Database Management & Cleansing",
                    "Project & Operations Management",
                    "Team Leadership & Coordination",
                    "Stakeholder Communication & Public Speaking",
                    "Problem Solving & Strategic Planning"
                  ].map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="py-3.5 border-b border-[#071B2A]/10 last:border-0 flex items-center gap-4 transition-all hover:pl-2 duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] flex-shrink-0"></div>
                      <p className="text-[#071B2A] font-sans font-medium text-sm md:text-base">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* =========================================
          MODAL POP-UP CERTIFICATION (TEMA GELAP)
      ========================================= */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[150] bg-[#04121D]/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-fade-in-up" 
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-[#071B2A] border border-[#C6A15B]/25 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative shadow-[0_0_50px_rgba(198,161,91,0.1)] flex flex-col"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Tombol Close (Silang) */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#04121D] border border-[#C6A15B]/30 flex items-center justify-center text-[#9FB2C3] hover:text-[#F2EBDD] hover:border-[#C6A15B] z-10 transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Area Gambar: Latar Gelap */}
            <div className="w-full bg-[#04121D] flex flex-col items-center justify-start relative min-h-[300px] md:min-h-[460px] max-h-[60vh] overflow-y-auto border-b border-[#C6A15B]/15">
              {/* Logika Cek Array: Kalau gambarnya banyak, tampilin semua. Kalau 1, tampilin 1 */}
              {Array.isArray(selectedCert.image) ? (
                selectedCert.image.map((img, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 border-b border-[#C6A15B]/10 last:border-0">
                    <img 
                      src={img} 
                      alt={`${selectedCert.title} - Page ${idx + 1}`} 
                      className="w-full h-auto object-contain p-2 md:p-4" 
                    />
                  </div>
                ))
              ) : (
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full h-auto object-contain p-2 md:p-4" 
                />
              )}
            </div>
            
            {/* Area Teks: Sesuai Tema Portofolio */}
            <div className="p-3 md:p-4 bg-[#071B2A]">
              
              <h3 className="font-serif text-2xl md:text-3xl text-[#F2EBDD] mb-3 pr-8">
                {selectedCert.title}
              </h3>
              <p className="text-sm md:text-base text-[#9FB2C3] font-sans font-light leading-relaxed">
                Issued by: <span className="text-[#F2EBDD] font-medium">{selectedCert.issuer}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


// =========================================================
// 2. KOMPONEN PROJECT DETAIL
// FIXED: Struktur Data Analyst + Tab Logic + Styling Asli
// =========================================================
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProject = projectsData.find((p) => String(p.id) === id);

  // LOGIKA CERDAS UNTUK TAB
  const hasDashboard = !!selectedProject?.embedUrl;
  const hasReport = !!selectedProject?.reportPdf;
  
  // Set default view ke yang tersedia
  const [viewMode, setViewMode] = useState(hasDashboard ? "dashboard" : "report");

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [id, viewMode]);

  useEffect(() => {
    setViewMode(hasDashboard ? "dashboard" : "report");
  }, [selectedProject, hasDashboard]);

  if (!selectedProject) {
    return (
      <div className="min-h-screen bg-[#071B2A] flex items-center justify-center text-[#F2EBDD]">
        <h2>Project not found.</h2>
        <button onClick={() => navigate('/')} className="ml-4 underline">Go Back</button>
      </div>
    );
  }

  // FUNGSI CERDAS: Milih nampilin paragraf atau list (poin-poin) DENGAN GARIS
  const RenderContent = ({ data }) => {
    if (!data) return null;

    return (
      // Pembungkus ini yang bikin garis halus (border-t) di bawah judul 
      <div className="border-t border-[#F2EBDD]/15 pt-3 mt-3">
        {Array.isArray(data) ? (
          // Format List (Poin-poin dengan strip emas)
          <div className="flex flex-col gap-1">
            {data.map((item, index) => (
              <div key={index} className="flex items-start gap-4 py-1">
                <span className="text-[#C6A15B] font-sans mt-0.5 text-sm md:text-base">—</span>
                <p className="text-sm md:text-base leading-relaxed text-[#B8C0C8] font-sans font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Format Paragraf Biasa
          <p className="text-[#B8C0C8] leading-relaxed text-sm md:text-base font-sans font-light">
            {data}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen bg-[#071B2A] text-[#F2EBDD] flex flex-col overflow-hidden">
      
      {/* Background Texture */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-95 mix-blend-luminosity bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/download.jpg')" }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#071B2A]/40 via-[#071B2A]/80 to-[#071B2A] pointer-events-none" />
      
      <div className="relative z-10 flex-grow px-6 py-10 md:py-16">
        <div className="max-w-[1100px] mx-auto">
          
          {/* ======================================================
              1. HEADER (STYLING ASLI)
          ====================================================== */}
          <div data-aos="fade-right">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#B8C0C8] font-sans border rounded border-[#C6A15B]/40 hover:border-[#C6A15B] hover:text-[#F2EBDD] hover:bg-[#C6A15B]/10 transition-all duration-300 mb-12"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </div>

          <div className="mb-10 lg:mb-14" data-aos="fade-down">
            <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#C6A15B] mb-4 font-sans">
              Project Overview
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight text-[#F2EBDD] mb-7 font-serif">
              {selectedProject.title}
            </h1>
            <div className="w-full h-px bg-[#C6A15B]/30 mb-2" />
          </div>


          {/* ======================================================
              2. SPLIT PANE (ATAS)
          ====================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-12 mb-12 lg:mb-18">
            
            {/* KOLOM KIRI: VISUAL UTAMA */}
            <div className="w-full h-fit border border-[#F2EBDD]/15 p-2 md:p-3 rounded-xl bg-[#04121D]/40 shadow-2xl overflow-hidden" data-aos="zoom-in">
              {viewMode === "dashboard" ? (
                selectedProject.embedUrl ? (
                  // LOGIKA CERDAS: Cek apakah URL-nya Looker Studio atau bukan.
                  // Kalau bukan lookerstudio/datastudio, berarti itu PDF/Drive, maka munculin Card di HP!
                  (!selectedProject.embedUrl.includes("lookerstudio") && !selectedProject.embedUrl.includes("datastudio")) ? (
                    
                    // --- JIKA DASHBOARD BERISI PDF ---
                    <div className="w-full aspect-[16/10] md:aspect-[16/9] bg-[#04121D] rounded-lg overflow-hidden relative flex flex-col items-center justify-center border border-[#C6A15B]/20">
                      
                      {/* TAMPILAN LAPTOP (Iframe PDF) */}
                      <div className="hidden lg:block w-full h-full bg-white">
                        <iframe src={selectedProject.embedUrl} className="w-full h-full border-0" title={selectedProject.title}></iframe>
                      </div>

                      {/* TAMPILAN HP (Card Fallback) */}
                      <div className="flex lg:hidden flex-col items-center justify-center p-6 text-center w-full h-full bg-[#071B2A]">
                                                
                        <h3 className="text-[#F2EBDD] font-serif text-xl mb-4">Dashboard Document</h3>
                        <p className="text-[#8FA4B5] text-xs font-sans mb-4 px-2">
                          Mobile browsers do not support inline PDF preview. Please open or download the file.
                        </p>
                        
                        <a 
                          href={selectedProject.embedUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center w-fit gap-2 px-3 py-1 bg-[#C6A15B] text-[#071B2A] text-sm font-sans rounded-lg hover:bg-[#D8C28A] transition-colors shadow-lg active:scale-95"
                        >
                          Open PDF Dashboard
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>

                  ) : (
                    // --- JIKA DASHBOARD ADALAH LOOKER STUDIO (Bisa di-render di HP) ---
                    <div className="w-full aspect-[16/10] md:aspect-[16/9] bg-[#04121D] rounded-lg overflow-hidden relative flex items-center justify-center group">
                      <iframe 
                        src={selectedProject.embedUrl} 
                        className="w-full h-full border-0" 
                        allowFullScreen 
                        title={selectedProject.title}
                      ></iframe>
                    </div>
                  )
                ) : (
                  // --- JIKA TIDAK ADA LINK SAMA SEKALI (Hanya Gambar Preview) ---
                  <div className="w-full aspect-[16/10] md:aspect-[16/9] bg-[#04121D] rounded-lg overflow-hidden relative flex items-center justify-center group">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-90" />
                  </div>
                )
              ) : (
                // ==========================================
                // REPORT MODE (PDF Keduanya, sama kayak kemarin)
                // ==========================================
                <div className="w-full aspect-[16/10] md:aspect-[16/9] bg-[#04121D] rounded-lg overflow-hidden relative flex flex-col items-center justify-center border border-[#C6A15B]/20">
                  
                  {/* TAMPILAN LAPTOP */}
                  <div className="hidden lg:block w-full h-full bg-white">
                    <object data={selectedProject.reportPdf} type="application/pdf" className="w-full h-full">
                      <p>PDF preview is not supported.</p>
                    </object>
                  </div>

                  {/* TAMPILAN HP */}
                  <div className="flex lg:hidden flex-col items-center justify-center p-6 text-center w-full h-full bg-[#071B2A]">
                                        
                    <h3 className="text-[#F2EBDD] font-serif text-xl mb-4">Report Document</h3>
                    <p className="text-[#8FA4B5] text-xs font-sans mb-4 px-2">
                      Mobile browsers do not support inline PDF preview. Please open or download the file.
                    </p>
                    
                    <a 
                      href={selectedProject.reportPdf} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center w-fit gap-2 px-3 py-1 bg-[#C6A15B] text-[#071B2A] text-sm font-sans rounded-lg hover:bg-[#D8C28A] transition-colors shadow-lg active:scale-95"
                    >
                      Open PDF Report
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              )}
            </div> 

            {/* KOLOM KANAN: TAB BUTTONS & PROJECT INFO */}
            <div className="flex flex-col gap-6" data-aos="fade-left" data-aos-delay="100">
              
              {/* TAB BUTTONS DENGAN LOGIKA DISABLED */}
              <div className="flex bg-[#04121D]/80 p-1.5 rounded-lg border border-[#C6A15B]/20 w-full">
                <button
                  onClick={() => setViewMode("dashboard")}
                  disabled={!hasDashboard}
                  className={`flex-1 py-3 text-sm font-sans rounded-md transition-all duration-300 text-center ${
                    viewMode === "dashboard" 
                      ? "bg-[#C6A15B] text-[#071B2A] font-medium shadow-md" 
                      : !hasDashboard 
                        ? "text-[#53677A] cursor-not-allowed opacity-50" // Mode Disabled
                        : "text-[#8FA4B5] hover:text-[#F2EBDD] hover:bg-[#C6A15B]/10"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setViewMode("report")}
                  disabled={!hasReport}
                  className={`flex-1 py-3 text-sm font-sans rounded-md transition-all duration-300 text-center ${
                    viewMode === "report" 
                      ? "bg-[#C6A15B] text-[#071B2A] font-medium shadow-md" 
                      : !hasReport
                        ? "text-[#53677A] cursor-not-allowed opacity-50" // Mode Disabled
                        : "text-[#8FA4B5] hover:text-[#F2EBDD] hover:bg-[#C6A15B]/10"
                  }`}
                >
                  Report
                </button>
              </div>

              {/* PROJECT INFO CARD */}
              <div className="bg-[#04121D]/50 border border-[#F2EBDD]/10 p-6 md:p-8 rounded-xl h-fit">
            
                {/* DATASET SOURCE */}
                <div className="mb-6">
                  <p className="text-[#8FA4B5] text-xs uppercase tracking-wider mb-2 font-sans">Dataset Source</p>
                  {selectedProject.datasetLink ? (
                    <a 
                      href={selectedProject.datasetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F2EBDD] hover:text-[#C6A15B] font-sans text-sm md:text-sm flex items-center gap-2 w-fit transition-colors duration-300 group"
                    >
                      <span className="underline decoration-[#C6A15B]/30 underline-offset-4 group-hover:decoration-[#F2EBDD]/50">
                        {selectedProject.datasetSource || "View Public Dataset"}
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      
                    </a>
                  ) : (
                    <p className="text-[#F2EBDD] font-sans text-sm md:text-base">
                      {selectedProject.datasetSource || "Internal Organizational Data"}
                    </p>
                  )}
                </div>

                {/* TOOLS */}
                <div>
                  <p className="text-[#8FA4B5] text-xs uppercase tracking-wider mb-2 font-sans">Tools</p>
                  {selectedProject.techStack ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-[#C6A15B]/10 text-[#F2EBDD] border border-[#C6A15B]/20 text-xs font-sans rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#F2EBDD] font-sans text-sm">Not specified</p>
                  )}
                </div>

                {/* LIVE PROJECT & REPORT LINKS */}
                {(selectedProject.dashboardLink || selectedProject.reportLink) && (
                  <div className="mt-1 pt-6">
                    <p className="text-[#8FA4B5] text-xs uppercase tracking-wider mb-2 font-sans">Project Links</p>
                    <div className="flex flex-wrap gap-3">
                      
                      {/* Tombol Dashboard (Hanya muncul jika ada dashboardLink) */}
                      {selectedProject.dashboardLink && (
                        <a 
                          href={selectedProject.dashboardLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-wrap w-fit gap-2 px-3 py-1 bg-[#C6A15B]/10 hover:bg-[#C6A15B]/20 border border-[#C6A15B]/20 hover:border-[#C6A15B] text-[#F2EBDD] hover:text-[#C6A15B] rounded-lg transition-all duration-300 font-sans text-sm group"
                        >
                          <span className="text-xs font-sans rounded-md">View Full Dashboard</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      )}

                      {/* Tombol Report (Hanya muncul jika ada reportLink) */}
                      {selectedProject.reportLink && (
                        <a 
                          href={selectedProject.reportLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-wrap w-fit gap-2 px-3 py-1 bg-[#C6A15B]/10 hover:bg-[#C6A15B]/20 border border-[#C6A15B]/20 hover:border-[#C6A15B] text-[#F2EBDD] hover:text-[#C6A15B] rounded-lg transition-all duration-300 font-sans text-sm group"
                        >
                          <span className="text-xs font-sans rounded-md">View Full Report</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      )}

                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>


          {/* ======================================================
              3. WORKFLOW PENJELASAN (Dinamis: Text atau List)
          ====================================================== */}
          <div className="space-y-8 lg:space-y-12" data-aos="fade-up">
            
            {/* 1. Project Background */}
            <div className="w-full">
              <h2 className="text-xl md:text-2xl font-medium text-[#C6A15B] font-serif">
                Project Background
              </h2>
              <RenderContent data={selectedProject.background || selectedProject.description} />
            </div>

            {/* 2. Data Preparation & Cleaning */}
            {selectedProject.dataPrep && (
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-medium text-[#C6A15B] font-serif">
                  Data Preparation & Cleaning
                </h2>
                <RenderContent data={selectedProject.dataPrep} />
              </div>
            )}

            {/* 3. Exploratory Data Analysis */}
            {selectedProject.eda && (
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-medium text-[#C6A15B] font-serif">
                  Exploratory Data Analysis
                </h2>
                <RenderContent data={selectedProject.eda} />
              </div>
            )}

            {/* 4. Data Analysis */}
            {selectedProject.analysis && (
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-medium text-[#C6A15B] font-serif">
                  Data Analysis
                </h2>
                <RenderContent data={selectedProject.analysis} />
              </div>
            )}

            {/* 5. Insight & Recommendation */}
            {selectedProject.insights && (
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-medium text-[#C6A15B] font-serif">
                  Insight & Recommendation
                </h2>
                <RenderContent data={selectedProject.insights} />
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};


export default Portofolio;
export { ProjectDetail };