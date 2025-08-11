import React, { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
  speed = 0.5,
  className = '',
  overlay = true
}) => {
  const parallaxRef = useParallax(speed);

  return (
    <div className={`parallax-container relative ${className}`}>
      {backgroundImage && (
        <>
          <div
            ref={parallaxRef}
            className="parallax-bg"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          {overlay && <div className="parallax-overlay" />}
        </>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;