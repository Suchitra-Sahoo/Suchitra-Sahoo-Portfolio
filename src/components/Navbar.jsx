import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const scrollToTargetWorks = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance =
      targetPosition -
      startPosition -
      window.innerHeight / 2 +
      target.offsetHeight / 2;
    const duration = 800;
    let start = null;

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md font-mono bg-black bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl text-gray-400">
          <div className="Name sm:text-4xl md:text-3xl lg:text-4xl font-mono">
            <a href="/">
              <span>&lt;Suchitra Sahoo/&gt;</span>
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-medium text-white">
          <button
            onClick={() => scrollToTargetWorks("About")}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToTargetWorks("skills")}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToTargetWorks("projects")}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToTargetWorks("contact")}
            className="bg-transparent border-2 border-cyan-500 hover:bg-cyan-600 hover:text-white text-cyan-500 px-4 py-2 rounded-full transition duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 text-sm font-medium text-white flex flex-col space-y-2">
          <button
            onClick={() => {
              scrollToTargetWorks("About");
              setMenuOpen(false);
            }}
            className="block w-full text-center p-2 hover:text-cyan-400"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToTargetWorks("skills");
              setMenuOpen(false);
            }}
            className="block w-full text-center p-2 hover:text-cyan-400"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToTargetWorks("projects");
              setMenuOpen(false);
            }}
            className="block w-full text-center p-2 hover:text-cyan-400"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToTargetWorks("contact");
              setMenuOpen(false);
            }}
            className="block w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full transition duration-300"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
