import React from "react";
import { LucideGithub, Download } from "lucide-react";
import "./Hero.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";
import LetterTyped from "./LetterTyped";
import FadeInWithSkew from "./FadeInWithSkew";

const Hero = () => {
  return (
    <FadeInWithSkew>
      <div id="hero" className="Hero container flex flex-wrap items-center justify-center px-4 sm:px-10 lg:px-20 py-10 md:py-20 min-h-screen">
        <div className="relative flex flex-col md:flex-row items-center w-full max-w-screen-lg">
          <div className="sociallinks md:mr-8">
            <LeftSocialMediaIcons />
          </div>

          {/* Description About Myself */}
          <div className="m-2 w-full max-w-4xl py-6 px-4 md:px-10 text-center md:text-left">
            <div className="intro m-2 p-2 text-gray-400 text-xl md:text-2xl font-mono">
              <p>Hey, I'm</p>
            </div>

            <div className="name m-2 p-2 text-cyan-500 text-3xl md:text-5xl font-mono">
              <p>Suchitra Sahoo</p>
            </div>

            <div className="designation m-2 p-2 text-cyan-500 text-xl md:text-3xl font-mono">
              <LetterTyped
                strings={[
                  "< Software Developer />",
                  "< Frontend Developer />",
                  "< Software Engineer />",
                  "< Fullstack Developer />",
                  "<UI/UX Designer />"
                ]}
                charDelay={100} 
                pause={1500} 
              />
            </div>

            <div className="m-2 p-2 text-gray-400 text-lg md:text-xl text-justify font-mono">
              <p>
                I’m a pre-final year B.Tech student in Information Technology with a strong passion for software development. I aspire to become a full-time software developer, with a particular interest in full-stack development. I enjoy building scalable, user-centric applications and continuously learning new technologies.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 m-2 p-2 items-center justify-center md:justify-start">
              {/* GitHub Button */}
              <a
                href="https://github.com/Suchitra-Sahoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-gray-800 rounded w-full sm:w-48 hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                <LucideGithub className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-mono">GitHub</span>
              </a>

              {/* Download Resume Button */}
              <a
                href="https://drive.google.com/file/d/1czTLUsfcJWdxY8gCweTSrjmxt3KKrWnk/view?usp=drivesdk"
                download
                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-gray-800 rounded w-full sm:w-60 hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                <Download className="w-5 h-5 md:w-6 md:h-6 font-mono" />
                <span className="font-mono">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeInWithSkew>
  );
};

export default Hero;
