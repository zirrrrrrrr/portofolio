import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full lg:min-h-[calc(100vh-136px)] scroll-mt-16 bg-[#071B2A] text-[#F2EBDD] flex lg:items-center overflow-hidden py-20 lg:py-0"
    >
      {/* =========================
          ELEMEN OMBAK
      ========================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0 opacity-40">
        <svg 
          viewBox="0 0 1440 320" 
          // PERUBAHAN: Hapus class "w-[1000px]" yang maksa lebar mati 1000px! Ganti pakai max-w-full
          className="w-full max-w-full h-auto relative left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -translate-y-4 md:-translate-y-32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lapis 1 (Emas Tebel) */}
          <path 
            d="M0,220 C320,300,420,120,720,220 C1020,320,1120,120,1440,220" 
            stroke="#C6A15B" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          {/* Lapis 2 (Biru Pudar) */}
          <path 
            d="M0,250 C280,320,450,150,750,230 C1050,310,1150,170,1440,250" 
            stroke="#8FA1B2" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            opacity="0.8"
          />
          {/* Lapis 3 (Emas Tipis) */}
          <path 
            d="M0,280 C240,340,480,200,780,260 C1080,320,1180,220,1440,280" 
            stroke="#C6A15B" 
            strokeWidth="1" 
            strokeLinecap="round" 
            opacity="0.5"
          />
        </svg>
      </div>

      <div
        // Tambahkan "w-full" dan "px-6" di div ini seperti pada Hero
        className="relative z-10 w-full max-w-5xl px-6 mx-auto text-center"
        data-aos="fade-up"
      >
        {/* Section Label */}
        <div className="flex flex-col items-center mb-7">
          <span className="text-[#C6A15B] text-xs font-medium tracking-[0.3em] uppercase font-sans">
            Get In Touch
          </span>

          <div className="w-16 h-px bg-[#C6A15B] mt-4" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] leading-tight tracking-tight text-[#F2EBDD] mb-6">
          Let's Connect
        </h2>

        {/* Description */}
        <p className="max-w-xl mx-auto text-[#8FA1B2] text-sm md:text-base leading-relaxed mb-10 font-sans font-light">
          Feel free to reach out if you have any questions, <br className="hidden md:block" /> opportunities, or simply want to say hello.
        </p>

        {/* Email */}
        <a
          href="mailto:zalfazahirah.work@gmail.com"
          className="
            inline-flex items-center gap-3
            bg-[#071B2A]
            border border-[#C6A15B]/40
            px-7 py-3.5
            text-[#F2EBDD]
            text-sm md:text-base font-medium font-sans
            hover:border-[#C6A15B]
            hover:text-[#C6A15B]
            hover:bg-[#C6A15B]/10
            transition-all duration-300
            mb-14
          "
        >
          <Mail className="w-5 h-5" />
          zalfazahirah.work@gmail.com
        </a>

        {/* Social Links (WhatsApp -> Instagram -> LinkedIn) */}
        <div className="flex justify-center items-start gap-8 md:gap-14">

          {/* 1. WhatsApp */}
          <div className="flex flex-col items-center gap-3 group">
            <a
              href="https://wa.me/6285714153285"
              target="_blank"
              rel="noreferrer"
              className="
                w-14 h-14 rounded-full
                bg-[#071B2A]
                border border-[#C6A15B]
                flex items-center justify-center
                text-[#C6A15B]
                group-hover:bg-[#C6A15B]
                group-hover:text-[#071B2A]
                transition-all duration-300
              "
              aria-label="WhatsApp"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133-.298-.347-.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
            <span className="text-sm text-[#8FA1B2] group-hover:text-[#F2EBDD] transition-colors font-sans font-light">
              WhatsApp
            </span>
          </div>

          {/* 2. Instagram */}
          <div className="flex flex-col items-center gap-3 group">
            <a
              href="https://instagram.com/zlfaaza"
              target="_blank"
              rel="noreferrer"
              className="
                w-14 h-14 rounded-full
                bg-[#071B2A]
                border border-[#C6A15B]
                flex items-center justify-center
                text-[#C6A15B]
                group-hover:bg-[#C6A15B]
                group-hover:text-[#071B2A]
                transition-all duration-300
              "
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <span className="text-sm text-[#8FA1B2] group-hover:text-[#F2EBDD] transition-colors font-sans font-light">
              Instagram
            </span>
          </div>

          {/* 3. LinkedIn */}
          <div className="flex flex-col items-center gap-3 group">
            <a
              href="https://www.linkedin.com/in/zalfa-zahirah/"
              target="_blank"
              rel="noreferrer"
              className="
                w-14 h-14 rounded-full
                bg-[#071B2A]
                border border-[#C6A15B]
                flex items-center justify-center
                text-[#C6A15B]
                group-hover:bg-[#C6A15B]
                group-hover:text-[#071B2A]
                transition-all duration-300
              "
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="text-sm text-[#8FA1B2] group-hover:text-[#F2EBDD] transition-colors font-sans font-light">
              LinkedIn
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;