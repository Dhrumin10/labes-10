import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
import SocialLinks from '../shared/SocialLinks';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Think, Innovate,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Build the Future
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
          Empowering Innovation, Building the Future with AI, Robotics, and Beyond.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-slide-up">
          <Button 
            href="#projects"
            variant="primary"
            icon={ArrowRight}
            className="text-lg px-8 py-4"
          >
            Learn More
          </Button>
          <Button 
            href="#projects"
            variant="secondary"
            className="text-lg px-8 py-4"
          >
            Explore Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-12 left-0 right-0 animate-fade-in">
          <SocialLinks iconSize={28} />
          <p className="text-gray-400 mt-4 text-sm">Connect with us on social media</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white/20 to-white/0"></div>
      </div>
    </div>
  );
};

export default Hero;