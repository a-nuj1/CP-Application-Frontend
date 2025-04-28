import React, { useEffect } from 'react';
import "../../App.css"
import Section1 from './HomeSections/Section1'
import Section2 from './HomeSections/Section2'
import Section4 from './HomeSections/Section4'
import Section5 from './HomeSections/Section5'

function Home() {
  // useEffect(() => {
  //   // Create floating particles
  //   const particles = [];
  //   const colors = ['#FFD700', '#00FFFF', '#FF69B4', '#7B68EE']; // Gold, Cyan, Pink, Purple
    
  //   for (let i = 0; i < 20; i++) {
  //     const particle = document.createElement('div');
  //     particle.style.position = 'fixed';
  //     particle.style.width = '8px';
  //     particle.style.height = '8px';
  //     particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  //     particle.style.borderRadius = '50%';
  //     particle.style.pointerEvents = 'none';
  //     particle.style.zIndex = '9999';
  //     particle.style.opacity = '0.7';
  //     particle.style.transform = 'translate(-50%, -50%)';
      
  //     // Random initial position
  //     particle.style.left = `${Math.random() * 100}vw`;
  //     particle.style.top = `${Math.random() * 100}vh`;
      
  //     document.body.appendChild(particle);
  //     particles.push({
  //       element: particle,
  //       x: parseFloat(particle.style.left),
  //       y: parseFloat(particle.style.top),
  //       size: Math.random() * 5 + 3,
  //       speed: Math.random() * 0.2 + 0.05
  //     });
  //   }

  //   let mouseX = 0;
  //   let mouseY = 0;
    
  //   // Track mouse position
  //   const handleMouseMove = (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //   };
    
  //   window.addEventListener('mousemove', handleMouseMove);

  //   // Animation loop
  //   let animationId;
  //   const animate = () => {
  //     particles.forEach(particle => {
  //       // Move toward cursor with lag
  //       particle.x += (mouseX - particle.x) * particle.speed;
  //       particle.y += (mouseY - particle.y) * particle.speed;
        
  //       // Apply movement
  //       particle.element.style.left = `${particle.x}px`;
  //       particle.element.style.top = `${particle.y}px`;
        
  //       // Size pulse effect
  //       const scale = 1 + Math.sin(Date.now() * 0.001) * 0.2;
  //       particle.element.style.transform = `translate(-50%, -50%) scale(${scale})`;
  //     });
      
  //     animationId = requestAnimationFrame(animate);
  //   };
    
  //   animate();

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     cancelAnimationFrame(animationId);
  //     particles.forEach(p => p.element.remove());
  //   };
  // }, []);

  return (
    <>
      <Section1/>
      <Section2/>
      <Section4/>
      <Section5/>
    </>
  );
}

export default Home;