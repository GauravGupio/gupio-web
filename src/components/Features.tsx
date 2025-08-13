import React from "react";
import { CheckCircle, Zap, Shield, Smartphone, TrendingUp, Users } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Smart Technology",
      description: "AI-powered parking solutions with real-time analytics and predictive insights.",
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      id: 2,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime and data protection.",
      icon: Shield,
      color: "text-green-500"
    },
    {
      id: 3,
      title: "Mobile App",
      description: "User-friendly mobile application for seamless parking experience.",
      icon: Smartphone,
      color: "text-blue-500"
    },
    {
      id: 4,
      title: "Real-time Updates",
      description: "Live parking availability and instant notifications.",
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      id: 5,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs.",
      icon: Users,
      color: "text-orange-500"
    },
    {
      id: 6,
      title: "Easy Integration",
      description: "Seamless integration with existing infrastructure and systems.",
      icon: CheckCircle,
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Gupio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of parking with our innovative solutions designed for modern cities
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffbf00] mb-2">
                  96%
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Customer Satisfaction
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffbf00] mb-2">
                  10+
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Cities Covered
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffbf00] mb-2">
                  24/7
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 