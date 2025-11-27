import React, { useRef, useState } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5; // Max 5 degrees
    const rotateY = ((x - centerX) / centerX) * -5; // Max 5 degrees

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    divRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
    divRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (divRef.current) {
      divRef.current.style.setProperty('--rotate-x', '0deg');
      divRef.current.style.setProperty('--rotate-y', '0deg');
    }
  };

  return (
    <div 
      ref={divRef} 
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card-spotlight ${isHovered ? 'hovered' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
