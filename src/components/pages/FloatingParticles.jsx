// src/components/FloatingParticles.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FloatingParticles = ({ 
  count = 20,
  colors = ['#FFD700', '#00FFFF', '#FF69B4', '#7B68EE'],
  minSize = 3,
  maxSize = 8,
  minSpeed = 0.05,
  maxSpeed = 0.25,
  opacity = 0.7,
  disableOnMobile = true
}) => {
  useEffect(() => {
    // Check if mobile and disabled
    if (disableOnMobile && window.innerWidth <= 768) return;

    const particles = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * (maxSize - minSize) + minSize;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.position = 'fixed';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';
      particle.style.opacity = opacity;
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.transition = 'transform 0.1s ease-out';

      document.body.appendChild(particle);
      
      particles.push({
        element: particle,
        x: parseFloat(particle.style.left),
        y: parseFloat(particle.style.top),
        size: size,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        color: color
      });
    }

    // Mouse movement handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId;
    const animate = () => {
      particles.forEach(particle => {
        // Move toward cursor with lag
        particle.x += (mouseX - particle.x) * particle.speed;
        particle.y += (mouseY - particle.y) * particle.speed;
        
        // Apply movement
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
        
        // Subtle pulse effect
        const pulse = 1 + Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.1;
        particle.element.style.transform = `translate(-50%, -50%) scale(${pulse})`;
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      particles.forEach(p => p.element.remove());
    };
  }, [count, colors, minSize, maxSize, minSpeed, maxSpeed, opacity, disableOnMobile]);

  return null; 
};

FloatingParticles.propTypes = {
  count: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  minSpeed: PropTypes.number,
  maxSpeed: PropTypes.number,
  opacity: PropTypes.number,
  disableOnMobile: PropTypes.bool
};

export default FloatingParticles;