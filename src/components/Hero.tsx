import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";

// Import hero images
import slide1 from "../assets/images/slide_1.png";
import slide2 from "../assets/images/slide_2.png";
import mobileSlide1 from "../assets/images/mobile_slide_1.png";
import mobileSlide2 from "../assets/images/mobile_slide_2.jpg";
import sliderNewMobile from "../assets/images/slider_new_mobile.png";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Smart Parking Solutions",
      subtitle: "India's Trusted Parking Platform",
      description: "Experience seamless parking with our intelligent systems. From automated barriers to real-time dashboards, we make parking effortless.",
      image: slide1,
      mobileImage: mobileSlide1,
      ctaText: "Download App",
      ctaLink: "#download"
    },
    {
      id: 2,
      title: "Premium Vehicle Care",
      subtitle: "Complete Car Care Services",
      description: "From valet services to premium car care, we ensure your vehicle gets the best treatment with our professional services.",
      image: slide2,
      mobileImage: mobileSlide2,
      ctaText: "Book Service",
      ctaLink: "/service"
    },
    {
      id: 3,
      title: "Vendor Management",
      subtitle: "Streamlined Operations",
      description: "Manage third-party vendors efficiently with our comprehensive platform designed for India's evolving urban lifestyle.",
      image: slide1, // Using slide1 as fallback since slide3 doesn't exist
      mobileImage: sliderNewMobile,
      ctaText: "Learn More",
      ctaLink: "/about"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-[#00021b]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Desktop Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile Image */}
          <img
            src={slide.mobileImage}
            alt={slide.title}
            className="md:hidden w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="text-white space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#ffbf00]">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to={slide.ctaLink}>
                      <Button className="bg-[#ffbf00] hover:bg-[#ffbf00]/90 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                        {slide.ctaText}
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#ffbf00] scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 