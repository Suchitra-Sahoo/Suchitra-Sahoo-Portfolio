import React from 'react';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiHtml5,
} from 'react-icons/si';
import { SiCss3,SiFlask, } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

const techIcons = {
  
  tailwind: <SiTailwindcss size={20} />,
  javascript: <SiJavascript size={20} />,
  react: <SiReact size={20} />,
  html: <SiHtml5 size={20} />,
  css: <SiCss3 size={20} />,
  flask: <SiFlask size={20} />,
  nextjs:<RiNextjsFill size={20}/>,
  shadcn:<SiShadcnui size={18}/>
  
};

const Project = ({ project }) => {
  return (
    <div className="rounded-3xl border border-gray-700 bg-[radial-gradient(190px_circle_at_50%_200px,#245770,transparent)] p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={project.image}
        alt={project.title}

        className="h-48 w-full rounded-xl object-cover mb-4"
      />
      <h3 className="text-xl font-bold text-cyan-500 mb-1">{project.title}</h3>
      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
      <div className="flex gap-3 mb-4 items-center justify-center">
        <a
          href={project.github}
          target="_blank"
          className="px-4 py-1 text-gray-300 border-2 border-cyan-500 font-medium rounded hover:bg-cyan-600 hover:text-black hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          Github
          
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="flex px-4 py-1 text-gray-300 border-2 border-cyan-500 font-medium rounded hover:bg-cyan-600 hover:text-black hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <p>Live demo</p>

           <ArrowTopRightIcon
                  height={20}
                  width={20}
                  className="opacity-75 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-yellow-300 group-hover:opacity-100"
                />
        </a>
      </div>
      <div className="flex gap-2 justify-center">
        {project.tech.map((tech, idx) => (
          <div key={idx} className="text-white">{techIcons[tech]}</div>
        ))}
      </div>
    </div>
  );
};

export default Project;
