import React from "react";
import { LucideGithub, Download } from "lucide-react";
import "./Hero.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";
import LetterTyped from "./LetterTyped";
import FadeInWithSkew from "./FadeInWithSkew";

const Hero = () => {
  return (
    <FadeInWithSkew>
      <div id="hero" className="Hero container flex pl-20">
        <div className="relative flex items-center font-mono w-50% h-screen">
          <div className="sociallinks">
            <LeftSocialMediaIcons />
          </div>
          {/* description about myself */}
          <div className="m-2 w-full max-w-4xl py-6 px-4 md:py-25 md:px-10">
            <div className="intro m-2 p-2 text-gray-400 text-2xl md:text-3xl">
              <p>Hey, I'm</p>
            </div>

            <div className="name m-2 p-2 text-cyan-500 text-4xl md:text-6xl">
              <p>Suchitra Sahoo</p>
            </div>

            <div className="designation m-2 p-2 text-cyan-500 text-2xl md:text-3xl">
              <LetterTyped
                strings={[
                  "< Software Developer />",
                  "< Frontend Developer />",
                  "< Software Engineer />",
                  "< Fullstack Developer />",
                  "<UI/UX Designer />"
                ]}
                charDelay={100} // typing speed
                pause={1500} // pause between lines
              />
            </div>

            {/* <hr class="landing__hr text-cyan-500"></hr> */}
            <div className="m-2 p-2 text-gray-400 text-lg md:text-2xl">
              <p className='text-justify'>
              I’m a pre-final year B.Tech student in Information Technology with a strong passion for software development. I aspire to become a full-time software developer, with a particular interest in full-stack development. I enjoy building scalable, user-centric applications and continuously learning new technologies. I’m currently looking for opportunities where I can grow, contribute to real-world projects, and turn ideas into impactful solutions.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 m-2 p-2 ">
              {/* GitHub Button */}
              <a
                href="https://github.com/Suchitra-Sahoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-gray-800 rounded w-full sm:w-48 hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                <LucideGithub className="w-5 h-5 md:w-6 md:h-6" />
                <span>GitHub</span>
              </a>

              {/* Download Resume Button */}
              <a
                href="https://drive.google.com/file/d/1czTLUsfcJWdxY8gCweTSrjmxt3KKrWnk/view?usp=drivesdk"
                download
                className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-gray-800 rounded w-full sm:w-60 hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                <Download className="w-5 h-5 md:w-6 md:h-6" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeInWithSkew>
  );
};

export default Hero;
