import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[81vh] bg-gupio-dark-blue flex items-center justify-center px-6 py-8">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Icon + Number */}
        <div className="relative mb-4 flex flex-col items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gupio-yellow/10 rounded-full border border-gupio-yellow/30 mb-3 animate-pulse">
            <AlertTriangle className="text-gupio-yellow w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[7rem] font-extrabold text-gupio-yellow tracking-widest drop-shadow-lg animate-fade-in-up leading-none">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Oops! We can't find that page
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gupio-gray max-w-lg mx-auto mb-6 leading-relaxed">
          Looks like you’ve taken a wrong turn. Let’s get you back on track and help you explore our smart parking solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link to="/">
            <Button 
              variant="yellow" 
              size="lg"
              className="text-black font-bold text-sm sm:text-base px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-yellow-hover"
            >
              Go Home
            </Button>
          </Link>

          <Link to="/contact">
            <Button 
              size="lg"
              className="border-2 border-gupio-yellow bg-transparent text-gupio-yellow hover:bg-gupio-yellow hover:text-black font-bold text-sm sm:text-base px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Footer Info */}
        <p className="mt-6 text-xs text-gupio-gray/70">
          Error Code: 404 — If this persists, please contact our support team
        </p>
      </div>
    </div>
  );
};
