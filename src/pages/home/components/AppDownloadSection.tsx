import React from "react";
import trusting_mobile from "../../../assets/images/trusting_mobile.png";

const AppDownloadSection: React.FC = () => {
  return (
    <section className="bg-[#00021a] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1200px] rounded-[24px] bg-white/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-3 sm:p-4 lg:p-6">
          <div className="relative rounded-[20px] bg-[#EAF4F7] overflow-hidden">
            <div className="hidden lg:block pointer-events-none absolute -right-10 -top-10 w-72 aspect-square rounded-full bg-[#FFBF00] z-0" />
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 h-full p-6 sm:p-8 lg:p-12">{/* Text */}
              <div className="w-full lg:w-2/3 space-y-6">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  GUPIO – India's Trusted Parking App
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700">
                  "Join the parking revolution! With 96% satisfaction and 5-star ratings, Gupio delivers secure and seamless parking in top cities like Pune, Bangalore, Delhi, Mumbai and many others."
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                <div className="relative animate-float">
                  <img
                    src={trusting_mobile}
                    alt="Gupio Mobile App"
                    className="w-3/4 sm:w-full max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;

