import React, { useState } from "react";
import { Link } from "react-router";
import "../review/PartnerBanner";
import pattern2 from "../../assets/images/pattern_2.png";
import "./SmartParkingService"
import "./AdditionalParkingService"
import "./ValetParkingService";
import "./MobilityManagementService"

// Image imports
import service_banner_img from "../../assets/images/service_banner_img.png";
import smart_parking_Service from "../../assets/images/smart_parking_Service.png";
import first_Service from "../../assets/images/first_Service.png";
import second_Service from "../../assets/images/second_Service.png";
import third_Service from "../../assets/images/third_Service.png";
import fourth_service from "../../assets/images/fourth_service.png";
import corporate_image from "../../assets/images/corporate.png";
import tech_image from "../../assets/images/techpark.png";
import office_image from "../../assets/images/office.png";
import mall_image from "../../assets/images/mall_image.png";
import hotel_image from "../../assets/images/hotel_image.png";
import entry_exit from "../../assets/images/entry_exit.png";
import ride from "../../assets/images/ride.png";

// External components
import MainBanner from "../../components/MainBanner";
import PartnerBanner from "../review/PartnerBanner";

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Corporates");

  const tabData = [
    { id: "Corporates", image: corporate_image, label: "Corporates" },
    { id: "Techparks", image: tech_image, label: "Techparks" },
    { id: "Offices", image: office_image, label: "Offices" },
    { id: "Malls", image: mall_image, label: "Malls" },
    { id: "Hotel", image: hotel_image, label: "Hotels" },
    { id: "entry", image: entry_exit, label: "Smooth Entry/Exit" },
  ];

  const getActiveImage = () =>
    tabData.find((t) => t.id === activeTab)?.image ?? corporate_image;

  return (
    <div className="bg-[#00021a] min-h-screen">
      {/* Main Banner */}
      <MainBanner
        heading="Our Services "
        backgroundImage={service_banner_img}
      />

      {/* Smart Parking Systems */}
      <section className="py-12">
        <div className="info side_info text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-3">
            Our Services
          </h3>
          <p className="text-xl text-white mb-8 mr-3 p-2">
            Smart Parking, Valet Operations & Consulting — Tailored for India’s Urban Infrastructure
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <img
            src={smart_parking_Service}
            alt="Smart Parking"
            className="w-full max-w-lg rounded-2xl shadow-xl mx-auto"
          />
          <div>
            <h2 className="text-[2rem] md:text-3xl text-white mb-4 tracking-tight">
              Smart Parking Systems
            </h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-5 mb-6 text-2xl">
              <li>Valet application</li>
              <li>Live tracker</li>
              <li>Parking usages</li>
              <li>App based Service</li>
            </ul>
            <Link to="/smart-parking-service">
              <button className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-md px-6 py-3 transition">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Parking Services */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4" style={{ backgroundImage: `url(${pattern2})`, backgroundSize: 'cover' , backgroundPosition: 'center' }}>
          <h2 className="text-[2rem] md:text-3xl text-white mb-4 text-left">
            Additional Parking Services
          </h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-5 mb-6 pb-6 text-2xl">
            <li>Implement smart space solutions</li>
            <li>Parking lots covered with shades for safety of vehicles</li>
            <li>Vehicle inspection to ensure safety</li>
            <li>24/7 surveillance with CCTV</li>
          </ul>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10">
          {[first_Service, second_Service, third_Service, fourth_service].map((img, idx) => (
            <div key={idx} className="flex justify-center hover:scale-105 transition-transform">
              <img
                src={img}
                className="w-full rounded-lg shadow-lg object-cover"
                alt={`Service image ${idx + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/additional-parking-service">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-md px-6 py-3 transition">
              Know More
            </button>
          </Link>
        </div>
      </section>

      {/* Valet Parking Services with vertical yellow line and interactive bullets */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center" style={{ backgroundImage: `url(${pattern2})`, backgroundSize: 'cover' }}>
          <img
            src={getActiveImage()}
            alt="Valet Parking"
            className="w-full max-w-lg rounded-2xl shadow-xl mx-auto"
          />
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Valet Parking Services
            </h2>
            <div className="flex mt-8">
              {/* Yellow vertical line */}
              <div className="w-0.5 bg-yellow-500 rounded-lg mr-6"></div>
              {/* Bullet point interactive list */}
              <div className="flex flex-col space-y-3">
                {tabData.map((tab) => (
                  <button
                    key={tab.id}
                    onMouseEnter={() => setActiveTab(tab.id)}
                    className={`text-left pl-6 text-2xl text-white relative before:content-['•'] before:absolute before:left-0 before:text-white ${
                      activeTab === tab.id
                        ? "text-yellow-300 font-semibold"
                        : "hover:text-yellow-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <br />
            {/* Request button centered */}
            <div className="flex justify-center mt-8">
              <Link to="/valet-parking-service">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-md px-6 py-3 transition">
                  Request Valet Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shuttle Services */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
              Shuttle Services
            </h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-5 mb-6 text-2xl">
              <li>Women's safety prioritized</li>
              <li>Trained, courteous staff</li>
              <li>Verified drivers for peace of mind</li>
              <li>Well-maintained vehicles</li>
              <li>Prompt resolutions</li>
            </ul>
          </div>
          <img
            src={ride}
            alt="Shuttle Services"
            className="w-full max-w-lg rounded-2xl shadow-xl mx-auto"
          />
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/mobility-management-service">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-md px-6 py-3 transition">
              Shuttle Services
            </button>
          </Link>
        </div>
      </section>

      {/* Partner Section */}
      <div>
        <PartnerBanner />
      </div>
    </div>
  );
};

export default Services;
