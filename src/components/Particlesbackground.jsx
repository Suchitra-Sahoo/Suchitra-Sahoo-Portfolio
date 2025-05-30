import React from 'react';
import Particles from './Particles'; // your local copy from react-bits

export default function Particlesbackground() {
  return (
      <div className=" fixed inset-0 z-10 bg-black">
      <Particles
    particleColors={['#42bff5', '#42bff5']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
    </div>
  );
}