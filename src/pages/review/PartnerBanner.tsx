import React from 'react';
import { Button } from '@/components/ui/button';
import Partner_Banner from "@/assets/images/partner.png";
import { Link } from 'react-router-dom';

const PartnerBanner: React.FC = () => {
  return (
    <div
      className="relative w-[90%] mx-auto bg-[#00021b] rounded-2xl overflow-hidden 
                 min-h-[360px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[600px] mt-10 mb-10 border border-blue-500/75 "
    >
      {/* Background Image */}
      <img
        src={Partner_Banner}
        alt="Partner Banner Background"
        className="absolute inset-0 w-full h-full object-cover p-5 rounded-2xl"
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-[#00021b]/30" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center h-full py-10 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="max-w-xl md:max-w-2xl pl-10 mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Want to Partner With Gupio?
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 leading-relaxed">
              Let's upgrade your facility's parking, vendors, and vehicle care — intelligently.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
              <Link to="/contact">
              <Button
                variant="yellow"
                size="lg"
                className="text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#e6ac00] transition-colors duration-300"
              >
                Contact us
              </Button>
              </Link>
              <Button
                variant="yellow"
                size="lg"
                className="text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#e6ac00] transition-colors duration-300"
              >
                Take 7 Days Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBanner;