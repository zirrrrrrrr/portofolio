import React, { useState, useEffect } from 'react';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Detik ke-2.5: Mulai memudar (fade out)
      setIsFadingOut(true);
      
      setTimeout(() => {
        // Detik ke-3.5: Layar ini dihancurkan, full masuk ke Hero
        onLoadingComplete();
      }, 1000); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      // Transisi diubah dari transform (naik) jadi opacity (memudar)
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#071B2A] transition-opacity duration-1000 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Pendar emas radial-gradient sudah dihapus total dari sini */}

      <div className="relative z-10 flex flex-col items-center animate-pulse">
        
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#C6A15B] mb-4 font-sans">
          Welcome To
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-normal text-[#F2EBDD] mb-5 tracking-tight text-center leading-none">
          ZALFA ZAHIRAH
        </h1>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-[#C6A15B]/50"></div>
          <h2 className="text-xl md:text-3xl font-serif italic font-light text-[#8FA1B2] tracking-widest text-center">
            Portfolio
          </h2>
          <div className="w-12 h-px bg-[#C6A15B]/50"></div>
        </div>

      </div>
    </div>
  );
};

export default WelcomeScreen;