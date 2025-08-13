import React from "react";
import TrustedClients2 from "../../components/TrustedClients2";
import Testimonials from "../../components/Testimonials";
import ServicesCarousel from "../../components/ServicesCarousel";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import StatsWithMap from "./components/StatsWithMap";
import AppDownloadSection from "./components/AppDownloadSection";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

const Home: React.FC = () => {
  return (
    <>
      <AnimatedOnScroll>
        <Hero />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <AboutSection />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <ServicesCarousel />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <StatsWithMap />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <AppDownloadSection />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <Testimonials />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <TrustedClients2 />
      </AnimatedOnScroll>
    </>
  );
};

export default Home;