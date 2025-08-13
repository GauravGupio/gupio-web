import React, { useState } from "react";
import moment from "moment";
import MainBanner from "@/components/MainBanner";
import TrustedClients from "@/components/TrustedClients";
import FreeTrialModal from "@/components/FreeTrialModal";
import single_service_banner from "@/assets/images/single_service_banner.png";

const features = [
  "Valet-trained staff with uniforms & app-based allocation",
  "Real-time vehicle status updates",
  "Entry/exit management and traffic flow optimization",
  "Instant deployment for event-based operations",
];

const locations = [
  "Hotels in Bengaluru, Pune",
  "Malls and Shopping Centres in Chennai, Hyderabad",
  "Corporate and Tech Parks",
  "Weddings, Expos, and High-footfall Events",
];

const cities = "Bengaluru, Pune, Hyderabad, Chennai, Kochi";

const ValetParkingService: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dateTime, setDateTime] = useState<moment.Moment | string>("");

  return (
    <div className="bg-[#00021a] min-h-screen">
      {/* Top Banner */}
      <MainBanner
        heading="Valet Parking Systems"
        backgroundImage={single_service_banner}
      />

      {/* Main Content */}
      <section className="bg-[#00021a]">
        <div className="max-w-8xl mx-auto py-16 px-4 text-center">
          {/* Headings + Intro */}
          <h3 className="text-yellow-400 text-[2.4rem] font-bold mb-6">
            Valet Parking Services Page
          </h3>
          <h2 className="text-white text-[1.7rem] md:text-[2rem] mb-4 font-bold">
            Valet Parking Services for Malls, Offices, Hotels & Events&nbsp;|&nbsp;Gupio
          </h2>
          <p className="text-white text-[1.15rem] max-w-8xl mx-auto mb-8 ">
            Professional valet parking for commercial & event venues in Mumbai, Bengaluru, Pune & more.<br />
            Trained staff, real-time tracking, seamless vehicle flow.
          </p>
          <br/>
          <h3 className="text-white text-[1.7rem] font-semibold mt-9 mb-2">
            Valet Parking Services in India – Events, Malls, Hotels & IT Tech Parks
          </h3>
          <p className="text-white text-[1.3rem] max-w-6xl mx-auto mb-6 text-left">
            Gupio offers premium valet parking services across India for malls, hospitals, IT parks, corporate campuses, weddings, concerts, and more.
            Our trained, uniformed valet staff ensure a secure, organized, and seamless experience from arrival to departure.
          </p>
          <p className="text-white font-bold text-[1.3rem] mt-1 max-w-6xl mx-auto mb-6 text-left">Cities served: {cities}</p>
            <br/>
            <br/>
          {/* Where Our Valet Services Operate - Transparent bullet cards */}
<div className="mb-10">
  <h3 className="text-white text-[1.7rem] font-semibold mb-6">
    Where Our Valet Services Operate We are active in:
  </h3>

  {/* Grid layout - 2 items per row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-6xl mx-auto">
    {locations.map((loc, idx) => (
      <div
        key={idx}
        className="text-yellow-400 text-[1.1rem]  shadow-xl rounded-lg
                   flex items-center gap-3 min-h-[65px] px-7 py-5
                   hover:scale-[1.07] transition-transform duration-200 cursor-pointer
                   bg-transparent border border-yellow-600/10"
        style={{ textAlign: "left" }}
      >
        {/* Bullet Point */}
        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mt-1"></span>
        {/* Location Text */}
        <span>{loc}</span>
      </div>
    ))}
  </div>
</div>


{/* What's Included - Transparent bullet cards */}
{/* What's Included - Grid layout */}
<div className="mb-10">
  <h3 className="text-white text-[1.7rem] font-semibold mb-6">What’s Included</h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-6xl mx-auto">
    {features.map((item, idx) => (
      <div
        key={idx}
        className="text-yellow-400 text-[1.1rem]  shadow-xl rounded-lg
                   flex items-center gap-3 min-h-[65px] px-7 py-5
                   hover:scale-[1.07] transition-transform duration-200 cursor-pointer
                   bg-transparent border border-yellow-600/10"
        style={{ textAlign: "left" }}
      >
        {/* Bullet Point */}
        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mt-1"></span>
        {/* Feature Text */}
        <span>{item}</span>
      </div>
    ))}
  </div>
</div>



          {/* CTA Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg shadow-lg transition"
          >
            Take a 7-day free Trial
          </button>
        </div>
      </section>

      {/* Trusted Clients */}
      <TrustedClients />

      {/* Free Trial Modal */}
      <FreeTrialModal />
    </div>
  );
};

export default ValetParkingService;
