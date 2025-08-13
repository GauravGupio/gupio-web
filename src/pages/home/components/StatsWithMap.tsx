import React from "react";
import Statistics2 from "../../../components/Statistics2";
import map_image from "../../../assets/images/map_image.png";

const StatsWithMap: React.FC = () => {
  return (
    <section className="bg-[#0A0A1A] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Statistics2 />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative flex justify-center items-center my-6 sm:my-8 p-4 sm:p-8">
              <img
                src={map_image}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto mx-auto drop-shadow-2xl"
                alt="India Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsWithMap;

