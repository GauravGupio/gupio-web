import React, { useState } from "react";
import moment from "moment";

// Components
import MainBanner from "@/components/MainBanner";
import TrustedClients from "@/components/TrustedClients";
import FreeTrialModal from "@/components/FreeTrialModal";

// Images
import single_service_banner from "@/assets/images/single_service_banner.png";

// FAQs from your content
const faqs = [
  {
    question: "What are additional parking services?",
    answer:
      "These include shed installation, security surveillance, and verified space discovery for high-demand locations.",
  },
  {
    question: "Are external parking lots secure?",
    answer:
      "Yes. Gupio ensures CCTV surveillance and trained guards are provided as per your request.",
  },
  {
    question: "Do you inspect parking lots before use?",
    answer:
      "Absolutely. Every parking site is physically inspected and legally vetted before activation.",
  },
  {
    question: "Can Gupio help with parking near my office?",
    answer:
      "Yes. We locate verified parking spaces within 500 meters of your location in major cities.",
  },
];

// Features from your content
const features = [
  "Covered sheds for vehicle safety",
  "On-site vehicle inspection",
  "24/7 CCTV and guard surveillance",
  "Smart space re-design for better flow",
];

const SmartParkingService: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dateTime, setDateTime] = useState<moment.Moment | string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Top Banner */}
      <MainBanner
        heading="Additional Parking Systems"
        backgroundImage={single_service_banner}
      />

      {/* Main Content */}
      <section className=" ">
        <div className="max-w-7xl mx-auto py-12 text-center">
          {/* Headings */}
          <h3 className="text-yellow-400 text-[2.5rem] p-5 mb-1">
            Comprehensive Parking Services & Space Optimization
          </h3>
          <h2 className="text-l md:text-[2.2rem] mb-2 text-white">
            Additional Parking Services – Safety, Security & Optimization | Gupio
          </h2>
          <p className="text-white md:text-[1.5rem] p-2 mx-auto mt-4 mb-6">
            Gupio enhances your parking lot with sheds, vehicle inspection, CCTV surveillance, and guard patrols.
            Perfect for malls, societies, and municipalities.
          </p>
          <p className="text-white md:text-[1.3rem] p-2 mx-auto mt-4 mb-6">
            Gupio goes beyond parking slots with smart enhancements that boost safety, 
            security, and value for both property owners and users.
          </p>

          {/* Feature List - same style as Code 1 */}
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

          {/* CTA */}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold px-7 py-3 rounded-lg shadow-lg transition"
          >
            Take a 7-day free Trial
          </button>
        </div>
      </section>

      {/* FAQ Section - same style as Code 1 */}
      <section className=" py-12 px-4">
        <div className="max-w-6xl mx-auto h-full">
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
      <FreeTrialModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        dateTime={dateTime}
        setDateTime={setDateTime}
      />
    </>
  );
};

export default SmartParkingService;
