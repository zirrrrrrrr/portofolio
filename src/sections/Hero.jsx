import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const roles = [
    "Information Systems Student",
    "Data Analyst",
    "Data Visualization Enthusiast",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Efek Ngetik (Typewriter)
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <>
      

      {/* =========================================================
          2. MAIN HERO SECTION
      ========================================================= */}
      <section
        id="home"
        className="relative w-full lg:min-h-[calc(100vh-64px)] flex lg:items-center justify-center overflow-hidden bg-[#071B2A] pt-20 pb-20 lg:py-0"
      >
        {/* Background Ombak Elegan */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 opacity-60">
          <svg
            className="relative block w-full h-[300px] lg:h-[450px]"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,192 C288,64 480,256 960,224 C1200,208 1344,128 1440,96" stroke="#C6A15B" strokeWidth="2" strokeOpacity="0.6" />
            <path d="M0,128 C288,256 576,0 960,128 C1248,213 1344,160 1440,128" stroke="#8FA1B2" strokeWidth="1.5" strokeOpacity="0.3" />
            <path d="M0,256 C288,192 480,320 960,256 C1248,213 1440,288 1440,288" stroke="#C6A15B" strokeWidth="1" strokeOpacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          
          {/* --- KIRI: TEXT KONTEN --- */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              // Animasi baru mulai di detik 2.8 (nunggu layar loading ke-slide ke atas)
              transition={{ duration: 0.8, delay: 2.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#C6A15B]"></div>
              <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C6A15B] font-sans font-medium">
                WELCOME TO THE PORTFOLIO OF
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F2EBDD] mb-6 leading-[1.15] font-serif"
            >
              Zalfa Zahirah
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="h-8 mb-6 w-full"
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl text-[#D8C28A] font-serif flex items-center justify-center lg:justify-start whitespace-nowrap">
                {currentText}
                <span className="animate-pulse ml-1 text-[#C6A15B]">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.4 }}
              className="max-w-[480px] text-[#B8C0C8] text-sm md:text-base leading-relaxed font-sans font-light"
            >
              Transforming complex datasets into actionable insights with thoughtful analysis and clean visualization. Focused on bridging the gap between raw numbers and strategic decisions.
            </motion.p>

          </div>

          {/* --- KANAN: FOTO --- */}
          <div className="flex justify-center lg:justify-center order-1 lg:order-2 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 3.2, ease: "easeOut" }}
              className="relative w-full max-w-[260px] md:max-w-[300px] mt-4 lg:mt-0"
            >
              {/* Frame Minimalis */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#C6A15B]/40 rounded-xl z-0 transition-transform duration-500 hover:translate-x-1 hover:-translate-y-1"></div>
              <div className="absolute -bottom-4 -left-4 w-1/2 h-1/2 border-b border-l border-[#C6A15B]/20 rounded-bl-xl z-0"></div>

              {/* Foto Utama */}
              <div className="relative aspect-square w-full z-10 rounded-xl overflow-hidden bg-[#04121D] shadow-2xl border border-white/5">
                <img
                  src="/hero/foto zira.jpeg"
                  alt="Zalfa Zahirah"
                  className="w-full h-full object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;