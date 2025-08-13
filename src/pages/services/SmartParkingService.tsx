import React, { useState } from "react";

// Components (update alias if not configured)
import MainBanner from "@/components/MainBanner";
import TrustedClients from "@/components/TrustedClients";
import FreeTrialModal from "@/components/FreeTrialModal";

// Images
import single_service_banner from "@/assets/images/single_service_banner.png";

// FAQs Data
const faqs = [
  {
    question: "What is a smart parking system?",
    answer:
      "Gupio’s smart parking system uses real-time occupancy tracking, valet integration, and mobile-based access to optimize parking across Indian cities.",
  },
  {
    question: "Is the Gupio parking system app-based?",
    answer:
      "Absolutely. Both staff and users access key features through the Gupio mobile app, including valet handovers, tracking, and alerts.",
  },
  {
    question: "Where is this system available?",
    answer:
      "Gupio’s smart parking systems live in Bengaluru, Hyderabad, Pune, and are expanding to other metro cities.",
  },
];

// Features Data
const features = [
  "Valet application for managing staff",
  "Live tracker for vehicles",
  "App-based customer access & feedback",
  "Real-time parking usage and availability",
];

const SmartParkingService: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Top Banner */}
      <MainBanner
        heading="Smart Parking Systems"
        backgroundImage={single_service_banner}
      />

      {/* Main Content */}
      <section className=" ">
        <div className="max-w-7xl mx-auto py-12 text-center">
          <h3 className="text-yellow-400 text-[2.5rem] p-5 mb-1">
            Smart Parking Systems with App-Based Services & Live Tracking
          </h3>
          <h2 className="text-l md:text-[2.2rem]  mb-2 text-white">
            Smart Parking Systems & Valet App | Gupio India
          </h2>
          <p className="text-white md:text-[1.5rem] p-2 mx-auto mt-4 mb-6">
            Digitize your parking with Gupio’s smart parking systems. Includes
            valet app, live tracker, usage data, and app-based operations. Book
            a demo today.
          </p>

          {/* Subheading */}
          <div className="mb-15 mt-20 p-5">
            <h2 className="text-[1.7rem] text-white mb-1">
             Gupio’s smart parking solutions use advanced technology to
             </h2>
             <h2 className="text-[1.7rem]  text-white mb-1">
              simplify parking operations across commercial spaces, tech parks,
              and residential complexes.
            </h2>
          </div>

  {/* Feature List */}
<div className="mt-8 mb-8 flex flex-wrap justify-center gap-8">
  {features.map((item, idx) => (
    <div
      key={idx}
      className="text-yellow-400 text-lg shadow-xl rounded-lg
                 flex items-center gap-3
                 px-8 py-6
                 hover:scale-105"
      style={{ textAlign: "center" }}
    >
      {/* Bullet Point */}
      <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
      {/* Feature Text */}
      <span>{item}</span>
    </div>
  ))}
</div>




          {/* Call to Action */}
          <button
            className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold px-7 py-3 rounded-lg shadow-lg transition"
          >
            TAKE A 7-DAY FREE TRIAL
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=" py-12 px-4">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-yellow-400 rounded-lg shadow">
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center px-5 py-4 font-semibold text-black"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl font-bold">
                    {openFaq === idx ? "↑" : "↓"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-slate-700 font-medium transition-all duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <TrustedClients />

      {/* Free Trial Modal */}
      <FreeTrialModal />
    </>
  );
};

export default SmartParkingService;
