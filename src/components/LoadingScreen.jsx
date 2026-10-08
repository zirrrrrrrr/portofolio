import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Memulai efek pudar (fade out) di detik ke-2
    // Biar sinkron sama animasi Hero yang nunggu di belakang
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 2000); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      // bg murni, tanpa efek blur atau pendar sama sekali
      className="fixed inset-0 z-[9999] bg-[#071B2A] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
    >
      <div className="flex flex-col items-center text-center">
        
        {/* Teks "WELCOME TO" */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#C6A15B] text-[10px] md:text-xs tracking-[0.3em] font-sans uppercase mb-4"
        >
          Welcome To
        </motion.p>
        
        {/* Teks Nama */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-5xl font-serif text-[#F2EBDD] mb-5 tracking-wide uppercase"
        >
          ZALFA ZAHIRAH
        </motion.h1>
        
        {/* Teks "Portfolio" dengan garis apit */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 md:w-16 h-[1px] bg-[#8FA1B2]/30"></div>
          <p className="text-[#8FA1B2] font-serif italic text-lg md:text-xl tracking-wider">
            Portfolio
          </p>
          <div className="w-12 md:w-16 h-[1px] bg-[#8FA1B2]/30"></div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;