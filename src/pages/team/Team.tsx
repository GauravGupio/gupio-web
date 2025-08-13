import React from "react";
import teamBanner from "@/assets/images/team_banner.png";
import pattern from "@/assets/images/pattern_2.png";
import ceoImage from "@/assets/images/ceo_image.png";
import clientManager from "@/assets/images/client_manager.png";
import propertyManager from "@/assets/images/property_manager.png";
import nationalHead from "@/assets/images/national_head.png";
import hrManager from "@/assets/images/hr_manager.png";
import PartnerBanner from "../review/PartnerBanner";


export const Team = () => {
  return (
    <div>
      <section
        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${teamBanner})` }}
        aria-label="Team Banner"
      >
        <div className="info flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-yellow-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Team
          </h1>
        </div>
      </section>

      <section
        className="w-full bg-cover bg-center bg-no-repeat bg-[#00021b] py-8 sm:py-12 md:py-16 lg:py-18"
        style={{ backgroundImage: `url(${pattern})` }}
        aria-label="Team Members"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-26">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="relative block z-[2] overflow-hidden max-h-[300px] sm:max-h-[350px] lg:max-h-[418px] w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none rounded-[10px] bg-[rgba(108,106,126,0.5)] group">
              <img
                src={ceoImage}
                alt="CEO"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#ffbf0061] translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-[2]"></div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden max-h-[300px] sm:max-h-[350px] lg:max-h-[418px] w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none rounded-[10px] bg-[rgba(108,106,126,0.5)] group">
              <img
                src={nationalHead}
                alt="National Sales Head"
                className="w-full h-full object-cover rounded-[10px] relative z-[1]"
              />
              <div className="absolute inset-0 bg-[#ffbf0061] translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-[2]"></div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden max-h-[300px] sm:max-h-[350px] lg:max-h-[418px] w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none rounded-[10px] bg-[rgba(108,106,126,0.5)] group">
              <img
                src={propertyManager}
                alt="Property Manager"
                className="w-full h-full object-cover rounded-[10px] relative z-[1]"
              />
              <div className="absolute inset-0 bg-[#ffbf0061] translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-[2]"></div>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden max-h-[300px] sm:max-h-[350px] lg:max-h-[418px] w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none rounded-[10px] bg-[rgba(108,106,126,0.5)] group">
              <img
                src={hrManager}
                alt="HR Manager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#ffbf0061] translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-[2]"></div>
            </div>

            {/* Card 5 */}
            <div className="relative overflow-hidden max-h-[300px] sm:max-h-[350px] lg:max-h-[418px] w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none rounded-[10px] bg-[rgba(108,106,126,0.5)] group">
              <img
                src={clientManager}
                alt="Client Success Manager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#ffbf0061] translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-[2]"></div>
            </div>
          </div>
        </div>
      </section>
      <PartnerBanner />
    </div>
  );
};
