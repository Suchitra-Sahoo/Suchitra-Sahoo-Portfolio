import React from 'react';
import Project from './Project';
import coffeandcanva from '../assets/coffeandcanva.png';
import healthyfi from '../assets/healthyfi.png';
import weatherwiz from '../assets/weatherwiz.png';
import influencer from '../assets/influencer.png';
import FadeInWithPerspective from './FadeInWithPerspective';
import hr from '../assets/hr.png';
import amazon from '../assets/amazon.png';
import startupnexus from '../assets/startupnexus.png';

const projects = [
  {
    title: 'Coffee and Canvas',
    description: 'Coffee and Canvas is a full-stack collaborative design platform inspired by Canva, enabling users to create, edit, and share canvas-based designs in real-time. Built with Next.js and React for the frontend, Convex DB for serverless backend functionality, and Clerk for authentication, the app allows seamless drag-and-drop design collaboration. It integrates ImageKit for optimized image uploads and uses ShadCN UI with Tailwind CSS to provide a responsive and engaging user experience.',
    github: 'https://github.com/Suchitra-Sahoo/Canva-Clone',
    demo: 'https://canva-clone-amber.vercel.app/',
    image: coffeandcanva,
    tech: ['nextjs', 'react', 'tailwind', 'typescript', 'shadcn'],
  },
  {
    title: 'TEN Marketing',
    description: 'I worked as a freelance frontend developer in collaboration with two other freelancers to develop the official website of a company using React and Tailwind CSS. Our goal was to support their marketing efforts by building a responsive, visually appealing, and performance-optimized interface. I focused on translating the marketing team vision into an interactive user experience while ensuring smooth integration with the overall branding and design strategy.',
    github: 'https://github.com/Suchitra-Sahoo/Influencer-Marketing-Agency',
    demo: 'https://influencer-marketing-kappa.vercel.app/',
    image: influencer,
    tech: ['react', 'tailwind','javascript'],
  },
  {
    title: 'WeatherWiz',
    description: 'Weather Wiz is a sleek and responsive weather forecast web app that allows users to search for real-time weather information by city name. It displays key data such as temperature, weather condition, humidity, and wind speed using clean UI components and live data fetched from the OpenWeatherMap API. Built with simplicity and speed in mind, the app is fully responsive and deployed on Vercel for fast, global access.',
    github: 'https://github.com/Suchitra-Sahoo/WeatherWiz',
    demo: 'https://weather-wiz-umber.vercel.app/',
    image: weatherwiz,
    tech: ['html', 'javascript', 'css'],
  },
  {
    title: 'TEN HR Consulting',
    description: 'I collaborated as a freelance frontend developer with a team of two members to create the official landing page for an HR consulting company. Our goal was to design a professional, user-friendly, and responsive website that effectively communicated the company’s services and brand identity. Using React and Tailwind CSS, we built a modern interface optimized for performance and accessibility, ensuring a seamless user experience across devices. I contributed by translating the client’s vision into clean, functional UI components while coordinating with teammates to deliver the project on time.',
    github: 'https://github.com/Suchitra-Sahoo/HealthyFi',
    demo: '#',
    image: hr,
    tech: ['react', 'tailwind', 'javascript'],
  },
  {
    title: 'Landing Page of Amazon',
    description: 'I created a fully responsive landing page for Amazon using HTML, CSS, and JavaScript. The project involved replicating Amazon’s homepage layout with key features such as a navigation bar, search functionality, promotional banners, product showcase sections, and a footer. I focused on achieving pixel-perfect design accuracy, smooth user interactions, and responsive behavior across different screen sizes. The project helped me strengthen my skills in front-end web development, including semantic HTML structure, CSS flexbox/grid layouts, and JavaScript for interactivity.',
    github: '#',
    demo: '#',
    image: amazon,
    tech: ['javascript', 'css', 'html'],
  },
  {
    title: 'Startup Nexus',
    description: 'I created a sleek and modern landing page for a startup named Startup Nexus using React, Tailwind CSS, and GSAP for smooth animations. The project focuses on delivering a clean, responsive design with engaging visual effects to enhance user experience. Leveraging React’s component-based architecture, I built reusable UI elements, while Tailwind CSS ensured fast and consistent styling. GSAP was used to implement smooth, performant animations that bring the page to life and improve user engagement.',
    github: 'https://github.com/Suchitra-Sahoo/StartupNexus',
    demo: 'https://startupnexus.azurewebsites.net/',
    image: startupnexus,
    tech: ['react', 'tailwind'],
  },
];

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="projects w-full my-10 py-10 text-white font-mono"
      style={{ background: 'none' }}
    >
      <div className="text-center mb-10">
        <p className="text-gray-400">Explore</p>
        <h2 className="text-4xl font-bold text-cyan-500">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {projects.map((proj, idx) => (
          <FadeInWithPerspective key={idx}>
            <div className="h-full min-h-[450px] flex flex-col">
              {/* Pass className to Project only if it accepts it */}
              <Project project={proj} />
            </div>
          </FadeInWithPerspective>
        ))}
      </div>
    </div>
  );
}
