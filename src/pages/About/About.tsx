import React, { useState } from 'react';
import aboutBannerImg from '../../assets/images/about_bnner_img.png';
import pattern1 from "../../assets/images/pattern_2.png";
import two_small from "../../assets/images/two_small.png";
import traffic_light from "../../assets/images/traffic_light.png";
import first_business_img from "../../assets/images/first_business_img.png";
import three_small from "../../assets/images/three_small.png";
import second_business_img from "../../assets/images/second_business_img.png";
import four_small from "../../assets/images/four_small.png";
import third_business_img from "../../assets/images/third_business_img.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface AboutProps {

}


export const About: React.FC<AboutProps> = () => {
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });


  return (
    <div className="bg-[#00021a] w-screen">

      {/* this is the section where the banner image will be displayed */}
      <div className="w-full h-[400px] overflow-hidden">
        <img 
          src={aboutBannerImg} 
          alt="About Banner" 
          className="w-full h-[400px] object-cover object-center"
        />
      </div>

     <div className='aboutPage_container' style={{width:"90%", margin:"0 auto",  marginTop:"100px"}}>
       {/* this is the section where who we are details will be displayed */}
       <div className="who-we-are-container">
        <h2 style={{textAlign:"center", fontSize:"40px", fontWeight:"400"}}>Who We Are</h2>
        <div>
          <p  style={{fontSize:"22px", fontWeight:"400", lineHeight:"34px", marginTop:"40px", fontFamily:"poppins"}}>Gupio is an India-based mobility and infrastructure platform building intelligent systems for parking, vendor management, and premium vehicle care.</p>
          <p  style={{fontSize:"22px", fontWeight:"400",fontFamily:"poppins" }}>We help modern cities function better by solving complex problems around space, service, and trust — all powered by smart tech and seamless execution.</p>
          <p style={{fontSize:"22px", fontWeight:"400", marginTop:"20px", fontFamily:"poppins"}}>From automated parking and valet services to managing third-party vendors and delivering high-quality car care, Gupio brings together convenience, control, and efficiency in a single platform designed for India’s evolving urban lifestyle  </p>
        </div>
      </div>
     </div>


  <div className="relative w-full -mt-[70px]">
  {/* Background Pattern Image */}
  <img 
    src={pattern1}
    alt="pattern design"
    className="w-full h-auto block"
    onError={(e) => {
      console.log('Pattern image failed to load:', pattern1);
      e.currentTarget.style.display = 'none';
    }}
  />

    {/* Mission and Vision Overlay */}
    <div className="absolute top-1/2 left-1/2 flex justify-between w-[90%] mx-auto " style={{transform: "translate(-50%, -50%)"}}>
      <div className="w-[48%]">
        <h2 className="text-center text-[40px] font-normal">Vision</h2>
        <p className="text-[22px] font-normal leading-[34px] mt-10 font-poppins">Gupio envisions transforming urban mobility across India by building the nation’s most trusted and intelligent platform for smart parking solutions, reliable vendor management, and premium car care — tailored for modern city life.</p>
      </div>
      <div className="w-[48%]">
        <h2 className="text-center text-[40px] font-normal">Mission</h2>
        <p className="text-[22px] font-normal leading-[44px] mt-10 font-poppins">Our mission at Gupio is to simplify life in Indian cities by offering intelligent parking services, verified vendor partnerships, and high-quality vehicle maintenance — all powered by cutting-edge technology, data-driven efficiency, and a deep commitment to trust.</p>
      </div>
    </div>
  </div>


{/* slide image when we hover the mouse */}
<div style={{display:"flex",  justifyContent:"space-between", gap:"10px", width:"80%", margin:"0 auto"}}>
      {/* Left Section - Mission Points */}
              <div className="w-full md:w-1/2 lg:w-5/12">
          <ul className="space-y-4 text-white text-lg leading-relaxed">
            <li>• Tech-enabled boom barriers & RFID access</li>
            <li>• Real-time dashboards for occupancy & billing</li>
            <li>• Automation for seamless entry/exit</li>
            <li>
              • Property-specific solutions for offices, malls, tech parks,
              hotels & residential complexes
            </li>
          </ul>
        </div>

      {/* Right Section - Slider */}
  <div style={{ width: "55%" }}>
  <div ref={sliderRef} className="flex w-full gap-4">
    {[
      { num: 1, hoverImg: traffic_light, img: two_small },
      { num: 2, hoverImg: second_business_img, img: two_small },
      { num: 3, hoverImg: third_business_img, img: three_small },
      { num: 4, hoverImg: third_business_img, img: four_small },
    ].map((slide, index) => (
      <div
        key={index}
        className={`transition-all duration-500 ease-in-out cursor-pointer 
          ${hoveredSlide === index ? "flex-[2]" : "flex-[1]"}`}
        onMouseEnter={() => setHoveredSlide(index)}
        onMouseLeave={() => setHoveredSlide(null)}
        style={{ minHeight: "450px" }}
      >
        <div
          className={`h-full w-full p-4 rounded-xl shadow flex flex-col items-center transition-all duration-500 ease-in-out
            ${hoveredSlide === index ? "bg-white" : "bg-[#ffbf00]"}`}
        >
          {/* Numbering at top */}
          <div className="w-full text-center">
  <p
    className={`transition-all duration-500 ${
      hoveredSlide === index
        ? "text-[#ffbf00]"
        : "text-black"
    } font-[500] text-[70px] font-oxanium`}
  >
    {slide.num}
  </p>
</div>

          {/* Image center */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={hoveredSlide === index ? slide.hoverImg : slide.img}
              alt="step"
              className={`transition-all duration-500 ease-in-out ${
                hoveredSlide === index ? "w-48" : "w-32"
              }`}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>




         {/* Cities We Serve */}
     <div className='cities-we-serve-container' style={{margin:"auto",marginTop: "100px", width:"90%", }}>
       <div className="text-center text-white">
                   <h2 className="text-[22px] font-bold font-poppins mb-12">
             Gupio GPS helps property owners optimize parking space usage while offering drivers a stress-free parking experience — all from a single app.
          </h2>
         
         <div className="flex justify-center gap-6 mb-8">
           <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg">
             GVM – GUPIO VENDOR MANAGEMENT
           </button>
           <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg">
             GGS – GUPIO GARAGE SERVICES
           </button>
         </div>
         
         <div>
           <h3 className="text-yellow-400 text-xl font-semibold mb-4">Cities We Serve</h3>
           <p className="text-white mb-2">We currently operate in</p>
           <p className="text-white font-bold text-lg mb-2">Mumbai, Bengaluru, Pune, Hyderabad, Delhi NCR —</p>
           <p className="text-white">with expansion plans across Tier-1 and Tier-2 Indian cities.</p>
         </div>
       </div>
      </div>

    </div>
  );
};

export default About;
