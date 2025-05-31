import React from 'react';
import { Download } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import FadeInFromLeft from './FadeInFromLeft';
import suchitra from '../assets/suchitra.jpg';
import opentowork from '../assets/opentowork.png';
import './Hero.css';

const About = () => {
  return (
    <div id="About" className="w-full min-h-screen md:h-[900px] font-mono py-10 px-4 md:px-10">
      <div className="text-cyan-500 text-3xl md:text-4xl text-center mb-4">
        <p>About Me</p>
        <hr className="w-24 border-cyan-500 mx-auto mt-2" />
      </div>

      <FadeInFromLeft>
        <div className="flex justify-center max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full md:w-[90%] flex flex-col md:flex-row gap-10 p-6 md:p-10 text-neutral-400"
            spotlightColor="rgba(0, 229, 255, 0.6)"
          >
            {/* Left - Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <img
                  src={suchitra}
                  alt="Suchitra Sahoo"
                  className="border-8 border-cyan-600 rounded-full w-full h-full object-cover shadow-[0_0_50px_10px_rgba(255,255,255,0.2)]"
                />
                <div className="absolute bottom-2 left-2 z-10">
                  <img
                    src={opentowork}
                    alt="Open to work badge"
                    className="rounded-lg w-16 sm:w-20 md:w-24"
                  />
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="w-full md:w-1/2 space-y-4">
              {/* Icon + Text Block 1 */}
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 17l10 5 10-5" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12l10 5 10-5" />
                </svg>
                <p className="text-sm md:text-base">
                  👋 Hello! I'm Suchitra Sahoo, a pre-final year student at GTBIT (GGSIPU), New Delhi, passionate about building scalable and efficient software solutions.
                </p>
              </div>

              {/* Icon + Text Block 2 */}
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 1 1-8 0" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18h6" />
                </svg>
                <p className="text-sm md:text-base">
                  I specialize in Java programming and have hands-on experience developing full-stack web apps using the MERN stack.
                </p>
              </div>

              {/* Icon + Text Block 3 */}
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                <p className="text-sm md:text-base">
                  I’ve developed robust apps showing strong skills in frontend/backend dev, API integration & responsive UI design.
                </p>
              </div>

              {/* Icon + Text Block 4 */}
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
                <p className="text-sm md:text-base">
                  Beyond coding, I love learning new tools & best practices to sharpen my workflow and collaborate effectively.
                </p>
              </div>

              {/* Resume Download */}
              <a
                href="https://drive.google.com/file/d/116Z6CfC3ZNo8Fhy4GWtZgEvlXH1D1Eda/view?usp=drivesdk"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-500 hover:bg-gray-800 rounded w-full sm:w-60 transition"
              >
                <Download className="w-5 h-5 md:w-6 md:h-6" />
                <span>Download Resume</span>
              </a>
            </div>
          </SpotlightCard>
        </div>
      </FadeInFromLeft>
    </div>
  );
};

export default About;
