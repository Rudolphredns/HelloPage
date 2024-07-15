import React from 'react';
import Navbar from "./components/Navbar";
import Herosection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import ProjectSection from "./components/ProjectSection";
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-r from-[#231246] to-[#290329] overflow-hidden">
      
      <Navbar />
      
      
      <div className="absolute top-[200px] left-[200px] transform -translate-x-1/2 bg-[#3E196D] w-[1200px] h-[600px] rounded-full backdrop-filter blur-[100px] bg-opacity-60"></div>
      <div className="absolute top-[1000px] right-[400px] bg-[#3E196D] w-[900px] h-[600px] rounded-full backdrop-filter blur-[100px] bg-opacity-40"></div>
      <div className="absolute top-[1000px] left-[1200px] transform -translate-x-1/2 bg-[#3E196D] w-[1200px] h-[600px] rounded-full backdrop-filter blur-[100px] bg-opacity-60"></div>

      
      <Herosection />
      
      <div id="about" className='self-center'>
        <AboutSection />
      </div>

      <div id="experience" >
        <Experience />
      </div>
      

      <div >
        <ProjectSection />
      </div>
      <div>
        <Contact/>
      </div>
    </main>
  );
}
