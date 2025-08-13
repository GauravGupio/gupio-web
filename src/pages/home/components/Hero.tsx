import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import third_slider_banner from "../../../assets/images/third_slider_banner.png";
import slide_1 from "../../../assets/images/slide_1.png";
import slide_2 from "../../../assets/images/slide_2.png";
import mobile_slide_1 from "../../../assets/images/mobile_slide_1.png";
import mobile_slide_2 from "../../../assets/images/mobile_slide_2.jpg";
import slider_new_mobile from "../../../assets/images/slider_new_mobile.png";
import leftSideArrow from "../../../assets/svg/leftSideArrow.svg";
import rightSideArrow from "../../../assets/svg/rightSideArrow.svg";
import Button from "../../../components/ui/button";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      id: 1,
      title: "Smart Parking Solutions",
      subtitle: "Tailored for Urban Needs",
      description:
        "Experience seamless parking with our intelligent systems. From automated barriers to real-time dashboards, we make parking effortless.",
      image: third_slider_banner,
      mobileImage: mobile_slide_1,
      ctaText: "Download App",
      ctaLink: "#download",
    },
    {
      id: 2,
      title: "Additional Vehicle Parking",
      subtitle:
        "Bangalore | Chennai | Hyderabad | Delhi | Pune | Ahmedabad",
      description:
        "From valet services to premium car care, we ensure your vehicle gets the best treatment with our professional services.",
      image: slide_1,
      mobileImage: mobile_slide_2,
      ctaText: "Book Service",
      ctaLink: "/service",
    },
    {
      id: 3,
      title: "Shuttle Services",
      subtitle: "Safe, Efficient & Smart Travel",
      description:
        "Manage third-party vendors efficiently with our comprehensive platform designed for India's evolving urban lifestyle.",
      image: slide_2,
      mobileImage: slider_new_mobile,
      ctaText: "Learn More",
      ctaLink: "/about",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden bg-[#00021b]">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          } transition-opacity duration-1000`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="hidden md:block w-full h-full object-cover"
          />
          <img
            src={slide.mobileImage}
            alt={slide.title}
            className="md:hidden w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="text-white space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-3xl sm:text-5xl lg:text-[73.5px] leading-tight sm:leading-[64px] lg:leading-[96px] font-light capitalize text-[#FFBF00]">
                      {slide.title}
                    </h1>
                    <div className="text-xl sm:text-3xl lg:text-[41.5px] leading-snug sm:leading-[48px] lg:leading-[96px] font-normal capitalize text-white align-middle tracking-[0px]">
                      {slide.subtitle}
                    </div>
                    <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                    <Link to={slide.ctaLink}>
                      <Button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold w-auto h-auto min-w-[160px] text-center">
                        Book Now
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button
                        variant="default"
                        className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold w-auto h-auto min-w-[160px] text-center"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 lg:p-4 rounded-full transition-all duration-300 z-10 border-2 border-transparent hover:border-[#FFBF00] hover:shadow-lg hover:shadow-[#FFBF00]/25 group"
      >
        <img
          src={leftSideArrow}
          alt="Previous"
          className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110"
        />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 lg:p-4 rounded-full transition-all duration-300 z-10 border-2 border-transparent hover:border-[#FFBF00] hover:shadow-lg hover:shadow-[#FFBF00]/25 group"
      >
        <img
          src={rightSideArrow}
          alt="Next"
          className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110"
        />
      </button>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#ffbf00] scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Follow Us - bottom right */}
      <div className="hidden sm:flex absolute bottom-4 right-4 items-center gap-3 z-20 text-white/90">
        <span className="text-xs tracking-wider uppercase">Follow Us</span>
        <div className="w-8 h-px bg-white/70" />
        <Link
          to="https://www.instagram.com/gupio.in?igsh=NWk2MW9iaW5yam4y"
          target="_blank"
          aria-label="Instagram"
          className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
        >
          <Instagram className="w-4 h-4" />
        </Link>
        <Link
          to="https://www.linkedin.com/company/gupio-services-private-limited/"
          target="_blank"
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;

