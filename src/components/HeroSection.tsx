import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-cricket.jpg';
import ParallaxSection from './ParallaxSection';

const HeroSection = () => {
  return (
    <ParallaxSection 
      backgroundImage={heroImage}
      speed={0.3}
      className="min-h-screen flex items-center justify-center"

    >
      {/* Content */}
      <div className="container-width text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-oswald font-bold leading-tight">
              MVP Cricket Academy
              <span className="text-gradient-accent block float">Building Future Cricket Stars</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Dedicated to developing young cricketers through professional coaching, structured programs, and a long-term athlete development approach. Located in Minnesota, providing training for all skill levels.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Link to="/registration" className="btn-hero group hover-glow">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link to="/programs" className="morph-card px-8 py-4 text-white font-medium inline-flex items-center group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              View Programs
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            {[
              { icon: Users, value: "200+", label: "Active Students" },
              { icon: Trophy, value: "50+", label: "Matches Organized" },
              { value: "8+", label: "Years Building Stars" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in hover-lift" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 float">
                  {stat.icon ? (
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">8</span>
                    </div>
                  )}
                </div>
                <div className="text-3xl font-oswald font-bold text-white shimmer">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center morph-card">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce float"></div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default HeroSection;