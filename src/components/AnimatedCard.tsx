import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useParallax';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'elevated' | 'glass' | 'morph';
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  variant = 'elevated',
  delay = 0
}) => {
  const animationRef = useScrollAnimation();

  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'card-glass';
      case 'morph':
        return 'morph-card hover-glow';
      default:
        return 'card-elevated hover-lift';
    }
  };

  return (
    <div
      ref={animationRef}
      className={`${getVariantClasses()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;