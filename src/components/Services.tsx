import React from "react";
import { Link } from "react-router-dom";
import { Car, Shield, Users, Settings, MapPin, Clock } from "lucide-react";
import Button from "./ui/button";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Smart Parking",
      description: "Automated parking solutions with real-time dashboards and intelligent barrier systems.",
      icon: Car,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      link: "/service"
    },
    {
      id: 2,
      title: "Valet Services",
      description: "Professional valet parking services for premium locations and events.",
      icon: Shield,
      color: "text-green-500",
      bgColor: "bg-green-50",
      link: "/service"
    },
    {
      id: 3,
      title: "Vendor Management",
      description: "Comprehensive vendor management platform for seamless operations.",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      link: "/service"
    },
    {
      id: 4,
      title: "Vehicle Care",
      description: "Premium car care and maintenance services for your vehicle.",
      icon: Settings,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      link: "/service"
    },
    {
      id: 5,
      title: "Location Services",
      description: "Find the nearest parking spots and get real-time availability updates.",
      icon: MapPin,
      color: "text-red-500",
      bgColor: "bg-red-50",
      link: "/service"
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your parking needs.",
      icon: Clock,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      link: "/service"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive parking and mobility solutions designed for India's urban landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-8">
                <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link to={service.link}>
                  <Button 
                    variant="ghost" 
                    className="text-[#ffbf00] hover:text-[#ffbf00]/80 hover:bg-[#ffbf00]/10 font-semibold p-0"
                  >
                    Learn More →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/service">
            <Button className="bg-[#ffbf00] hover:bg-[#ffbf00]/90 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 