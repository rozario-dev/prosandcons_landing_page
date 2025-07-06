import React from 'react';
import { FiArrowRight, FiZap } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-dark-bg dark:via-gray-900 dark:to-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 animate-gradient"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-neon-pink/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full">
            <FiZap className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI-Powered Debate Assistant</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-neon-blue to-neon-purple dark:from-white dark:via-neon-blue dark:to-neon-purple bg-clip-text text-transparent">
              Pros And Cons
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
              by AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your AI-powered debate assistant that helps you make better decisions by analyzing both sides of any argument.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://app.prosandcons.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="text-lg">Try for Free</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              No credit card required
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-dark-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue">10K+</div>
              <div className="text-gray-600 dark:text-gray-400">Debates Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple">95%</div>
              <div className="text-gray-600 dark:text-gray-400">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">AI Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;