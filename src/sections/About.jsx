import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// =========================================================
// 1. KOMPONEN ABOUT (UNTUK HALAMAN DEPAN)
// =========================================================
const About = () => {
  return (
    <section
      id="about"
      className="relative w-full lg:min-h-[calc(100vh-64px)] scroll-mt-16 bg-[#F2EBDD] text-[#071B2A] flex lg:items-center overflow-hidden py-10 lg:py-0"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 lg:py-20">

        <div className="mb-4" data-aos="fade-down">
          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#8C7350] font-serif font-bold">
            About Me
          </p>
          <div className="w-16 h-px bg-[#C6A15B] mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10 items-center">
          
          {/* KOLOM KIRI: FOTO TUMPUK */}
          <div className="w-full max-w-[480px] mx-auto lg:ml-0 lg:mr-auto flex flex-col justify-center" data-aos="fade-right">
            
            {/* PERBAIKAN: Pakai aspect-[4/3] biar kotaknya solid, nggak melar ke bawah */}
            <div className="relative w-full aspect-[4/3] mb-10 lg:mb-0 mt-4">
              
              {/* Garis Bingkai Emas (Ditarik naik) */}
              <div className="absolute top-[3%] left-0 w-[80%] h-[75%] border border-[#C6A15B]/100 z-0 rounded-sm" />
              
              {/* Foto Utama HIMSI (Mentok atas top-0) */}
              <div className="absolute top-0 right-[12%] w-[85%] h-[75%] z-10 bg-[#071B2A] overflow-hidden shadow-2xl rounded-sm">
                <img
                  src="/about/about-himsi.jpeg"
                  alt="HIMSI Activity"
                  className="w-full h-full object-top opacity-90 transition-transform duration-700 hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/about-himsi.jpeg"; }}
                />
              </div>
              
              {/* Foto Kecil Bawah Puskar (Masuk ke dalam kotak, mentok bawah bottom-0) */}
              <div className="absolute bottom-0 right-1 w-[55%] h-[45%] z-20 bg-[#071B2A] p-1.5 shadow-2xl rounded-sm">
                <div className="overflow-hidden rounded-sm h-full bg-[#071B2A]">
                  <img
                    src="/about/about-puskar.jpeg"
                    alt="Pusat Karier UIN"
                    className="w-full h-full object-top opacity-90 transition-transform duration-700 hover:scale-105"
                    onError={(e) => { e.currentTarget.src = "/about-puskar.jpeg"; }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* KOLOM KANAN: PENJELASAN & ACADEMIC BACKGROUND */}
          <div className="flex flex-col justify-center" data-aos="fade-left">
            
            {/* Langsung To the point soal passion lu (tanpa perkenalan berulang) */}
            <div className="space-y-4 text-[#486078] font-serif text-sm md:text-base font-light">
              <p>
                Hi, I'm Zalfa Zahirah, though my friends and peers usually call me Zira. I am an Information Systems student at UIN Syarif Hidayatullah Jakarta, currently building my path toward a career in Data Analytics. 
              </p>
              <p>
                While my technical foundation lies in analytics and dashboard creation, I believe that the true value of data is only realized when it is understood by others. That's why I am equally passionate about the human side of technology, whether it's leading a team, managing organizational projects, or translating technical findings into clear, everyday language for stakeholders.
              </p>
            </div>

            {/* Bagian Academic Background */}
            <div className="mt-6 pt-6 border-t border-[#8C7350]/20">
              <h3 className="text-xl font-serif font-medium text-[#071B2A] mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-[#C6A15B]"></span>
                Academic Background
              </h3>
              
              {/* Card Education Berdasarkan Referensi */}
              <div className="flex items-center gap-5 p-4 rounded-xl bg-[#071B2A] border border-[#C6A15B]/30 shadow-lg group hover:border-[#C6A15B] transition-colors duration-300">
                
                {/* Logo Kampus*/}
                <div className="w-14 h-14 shrink-0 rounded-lg bg-[#FFFFFF] flex items-center justify-center p-2 border border-[#C6A15B]/20 overflow-hidden">
                  <img 
                    src="logo/logo-uin.png" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Detail Edukasi */}
                <div className="flex flex-col">
                  <p className="text-[#8C7350] font-sans text-sm sm:text-sm tracking-widest uppercase font-semibold mb-1">
                    Faculty of Science and Technology
                  </p>
                  
                  <h4 className="text-base sm:text-lg lg:text-lg font-serif font-medium text-[#F2EBDD] leading-tight mb-3 group-hover:text-[#C6A15B] transition-colors">
                    Information Systems, UIN Syarif Hidayatullah Jakarta
                  </h4>
                  
                  {/* Badge Semester/Tahun */}
                  <div className="inline-flex w-fit px-3 py-1 bg-[#F2EBDD] text-[#071B2A] rounded-md text-xs sm:text-sm font-sans font-semibold">
                    Semester 5 (Aug 2024 - Present)
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


export default About;