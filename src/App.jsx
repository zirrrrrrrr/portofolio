import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import WelcomeScreen from './components/WelcomeScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Portofolio, { ProjectDetail } from './sections/Portofolio';
import Experience, { ExperienceDetail } from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 1. Navbar sekarang dimasukkan eksklusif ke dalam Home
const Home = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <Hero />
      <About />
      <Experience />
      <Portofolio />
      <Contact />
    </main>
  </>
);

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <Router>
      <div className="w-full max-w-[100vw] bg-[#1E293B] min-h-screen text-white font-sans selection:bg-[#38BDF8]/30 relative overflow-x-hidden">

        {showWelcome && (
          <WelcomeScreen
            onLoadingComplete={() => setShowWelcome(false)}
          />
        )}

        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C6A15B] rounded-full blur-[120px] opacity-10 pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F2EBDD] rounded-full blur-[120px] opacity-5 pointer-events-none z-0"></div>

        <div className="relative z-10">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
            {/* Tambahan untuk Portofolio */}
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>

          {/* Footer tetap di luar Routes biar muncul di semua halaman */}
          <Footer />
        </div>

      </div>
      <Analytics />
    </Router>
  );
};

export default App;