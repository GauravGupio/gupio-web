import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import service_1 from "../assets/images/service_1.png";
import service_2 from "../assets/images/service_2.png";
import service_3 from "../assets/images/service_3.png";
import pattern_2 from "../assets/images/pattern_2.png";
import leftSideArrow from "../assets/svg/leftSideArrow.svg";
import rightSideArrow from "../assets/svg/rightSideArrow.svg";

import Typography from "./ui/typography";

const ServicesCarousel: React.FC = () => {
  const [currentServicesSlide, setCurrentServicesSlide] = useState(0);

  useEffect(() => {
    const servicesInterval = setInterval(() => {
      setCurrentServicesSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(servicesInterval);
  }, []);

  return (
    <section
      className="relative bg-[#0A0A1A] text-white py-16 sm:py-18 lg:py-20 services-carousel"
      style={{
        backgroundImage: `url(${pattern_2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "160%",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Custom Services Carousel */}
          <div className="relative w-full">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentServicesSlide * 100}%)` }}
              >
                {/* Slide 1 */}
                <div className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                      <div className="relative floating">
                        <img
                          src={service_1}
                          alt="Service 1"
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                      <Typography
                        variant="h3"
                        className="text-3xl sm:text-4xl lg:text-[44.8px] lg:leading-[57.6px] capitalize"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          letterSpacing: "0px",
                          verticalAlign: "middle",
                          color: "#FFFFFF",
                        }}
                      >
                        Additional Parking Solutions
                      </Typography>
                      <ul className="text-lg text-gray-300 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Implement Smart Space Solutions
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Parking Lots Covered With Sheds For Safety Of Vehicles
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Vehicle Inspection To Ensure Safety
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          24/7 CCTV Surveillance
                        </li>
                      </ul>
                      <Link to="/services">
                        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                      <div className="relative floating">
                        <img
                          src={service_2}
                          alt="Service 2"
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                      <Typography
                        variant="h3"
                        className="text-3xl sm:text-4xl lg:text-[44.8px] lg:leading-[57.6px] capitalize"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          letterSpacing: "0px",
                          verticalAlign: "middle",
                          color: "#FFFFFF",
                        }}
                      >
                        Smart Parking Systems
                      </Typography>
                      <ul className="text-lg text-gray-300 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Valet Application
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Live Tracker
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Parking Usages
                        </li>
                      </ul>
                      <Link to="/services">
                        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                      <div className="relative floating">
                        <img
                          src={service_3}
                          alt="Service 3"
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                      <Typography
                        variant="h3"
                        className="text-3xl sm:text-4xl lg:text-[44.8px] lg:leading-[57.6px] capitalize"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          letterSpacing: "0px",
                          verticalAlign: "middle",
                          color: "#FFFFFF",
                        }}
                      >
                        Valet Parking Services
                      </Typography>
                      <ul className="text-lg text-gray-300 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Corporates
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Techparks
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Offices
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Malls
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Hotel
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Smooth Entry/Exit Operations
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          Co Working
                        </li>
                      </ul>
                      <Link to="/services">
                        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Previous Button */}
            <button
              className="hidden md:block absolute left-2 md:-left-8 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full hover:bg-[#FFBF00]/20 transition-colors duration-300"
              onClick={() => {
                const prevSlide = currentServicesSlide === 0 ? 2 : currentServicesSlide - 1;
                setCurrentServicesSlide(prevSlide);
              }}
            >
              <img src={leftSideArrow} alt="Previous" className="w-6 h-8" />
            </button>

            {/* Custom Next Button */}
            <button
              className="hidden md:block absolute right-2 md:-right-8 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full hover:bg-[#FFBF00]/20 transition-colors duration-300"
              onClick={() => {
                const nextSlide = currentServicesSlide === 2 ? 0 : currentServicesSlide + 1;
                setCurrentServicesSlide(nextSlide);
              }}
            >
              <img src={rightSideArrow} alt="Next" className="w-6 h-8" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentServicesSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentServicesSlide === index ? "bg-[#FFBF00] scale-125" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;

