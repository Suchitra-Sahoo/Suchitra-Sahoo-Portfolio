// Loader.jsx
import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
    <div className="relative w-16 h-16">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
      {/* Middle ring */}
      <div className="absolute inset-3 rounded-full border-4 border-blue-400 border-b-transparent animate-spin animation-delay-200"></div>
      {/* Inner ring */}
      <div className="absolute inset-6 rounded-full border-4 border-purple-400 border-l-transparent animate-spin animation-delay-400"></div>
      {/* Center dot with pulse */}
      <div className="absolute inset-8 rounded-full bg-cyan-500 animate-pulse"></div>
    </div>
  </div>
);

export default Loader;
