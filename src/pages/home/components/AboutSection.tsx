import React from "react";
import { Link } from "react-router-dom";
import car_image from "../../../assets/images/car.png";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#0A0A1A] text-white py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:pr-0">
          <div className="w-full lg:w-2/3 space-y-6 animate-slide-in-left">
            <div className="text-2xl sm:text-3xl lg:text-[35.8px] leading-tight sm:leading-[44px] lg:leading-[57.6px] font-medium capitalize align-middle tracking-[0px]">
              WHAT IS <span className="text-[#FFBF00]">GUPIO</span>?
            </div>
            <div className="space-y-4">
              <div className="text-base sm:text-lg lg:text-[25px] lg:leading-[39px] font-normal align-middle tracking-[0px]">
                <span className="text-[#FFBF00] text-2xl sm:text-3xl lg:text-[35px]">G</span>upio is an India-based mobility and infrastructure platform building intelligent systems for parking, vendor management, and premium vehicle care.
              </div>
              <div className="text-base sm:text-lg lg:text-[25px] lg:leading-[39px] font-normal align-middle tracking-[0px]">
                We help modern cities function better by solving complex problems around space, service, and trust — all powered by smart tech and seamless execution.
              </div>
              <div className="text-base sm:text-lg lg:text-[25px] lg:leading-[39px] font-normal align-middle tracking-[0px]">
                From automated parking and valet services to managing third-party vendors and delivering high-quality car care, Gupio brings together convenience, control, and efficiency in a single platform designed for India's evolving urban lifestyle.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/about">
                <button className="w-[127px] h-[37px] rounded-[5px] border-2 border-[#FFBF00] bg-[#FFBF00] text-black font-medium hover:bg-[#FFBF00]/90 transition-all duration-300">
                  Know More
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right lg:static lg:inset-auto lg:right-auto lg:w-[40%] lg:items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img src={car_image} alt="About Gupio" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

