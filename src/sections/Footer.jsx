import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#071B2A] pt-8 pb-10 overflow-hidden">
      
      {/* Divider & Scroll to Top */}
      <div className="flex items-center justify-center w-full max-w-5xl mx-auto px-6 relative z-10">
        <div className="h-px bg-[#C6A15B]/20 w-full"></div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-10 h-10
            bg-[#071B2A]
            border border-[#C6A15B]/40
            rounded-full
            flex items-center justify-center
            hover:bg-[#F2EBDD]
            hover:border-[#C6A15B]
            transition-all duration-300
            cursor-pointer
            group
          "
          aria-label="Scroll to top"
        >
          {/* Ikon Panah kembali seperti semula! */}
          <svg
            className="w-4 h-4 text-[#C6A15B] group-hover:text-[#071B2A] group-hover:-translate-y-1 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>

    </footer>
  );
};

export default Footer;