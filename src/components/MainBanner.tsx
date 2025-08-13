import React from "react";

interface MainBannerProps {
  heading: string;
  backgroundImage: string;
}

const MainBanner: React.FC<MainBannerProps> = ({ heading, backgroundImage }) => {
  return (
    <section
      className="relative w-full h-48 md:h-72 flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4">
        {heading}
      </h1>
    </section>
  );
};

export default MainBanner;
