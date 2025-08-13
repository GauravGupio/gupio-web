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
    question: "What does Gupio’s mobility service include?",
    answer:
      "Our mobility service includes scheduled shuttles, electric and eco-friendly vehicles, on-site coordination, and comfortable transfers for employees or guests.",
  },
  {
    question: "Can we hire transport only for one-day events?",
    answer:
      "Yes, Gupio offers flexible short-term transport solutions for events, including same-day or multi-day shuttle operations.",
  },
  {
    question: "Is the shuttle team coordinated on-site?",
    answer:
      "Absolutely. Our on-site coordinators ensure smooth boarding, timely schedules, and efficient crowd management.",
  },
  {
    question: "Where is Gupio’s mobility service available?",
    answer:
      "We currently serve major Indian cities, including Bengaluru, Pune, Hyderabad, Chennai, and Mumbai, with expanding coverage.",
  },
];

// Features from your content
const features = [
  "Scheduled shuttle services between parking lots and key locations.",
  "Electric and eco-friendly vehicle options.",
  "Comfortable and timely transfers for employees or guests.",
];

const MobilityManagementService: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dateTime, setDateTime] = useState<moment.Moment | string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Top Banner */}
      <MainBanner
        heading="Mobility Management Services"
        backgroundImage={single_service_banner}
      />

      {/* Main Content */}
      <section>
        <div className="max-w-7xl mx-auto py-12 text-center">
          {/* Headings */}
          <h3 className="text-yellow-400 text-[2.5rem] p-5 mb-1">
            Mobility Management & Shuttle Transport Services
          </h3>
          <h2 className="text-l md:text-[2.2rem] mb-2 text-white">
            Mobility & Shuttle Services for Urban Events | Gupio
          </h2>
          <p className="text-white md:text-[1.5rem] p-2 mx-auto mt-4 mb-6">
            Gupio provides scalable shuttle and mobility services for corporate campuses,
            tech parks, and events.<br/> Book transport support now.
          </p>
          <p className="text-white md:text-[1.3rem] p-2 mx-auto mt-4 mb-6">
            Managing large crowds or employees moving across campus?  
            <br/>
            Gupio offers shuttle and staff mobility services tailored to your requirements.
          </p>

          {/* Feature List */}
          <div className="mt-8 mb-8 flex flex-wrap justify-center gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="text-yellow-400 text-lg shadow-xl rounded-lg
                           flex items-center gap-3 px-8 py-6 hover:scale-105"
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

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto h-full">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-yellow-400 rounded-lg shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
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

      {/* Trusted Clients */}
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

export default MobilityManagementService;
