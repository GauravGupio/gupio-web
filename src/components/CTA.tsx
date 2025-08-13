import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Download, Phone, Mail } from "lucide-react";
import playstore_img from "../assets/images/playstore_img.png";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#00021b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#ffbf00] rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffbf00] rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Experience Smart Parking?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of users who trust Gupio for their parking needs. Download our app today and experience seamless parking like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link to="#download">
              <div className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img src={playstore_img} alt="Download on Play Store" className="h-12" />
                <div className="text-left">
                  <div className="text-sm text-gray-600">Download on</div>
                  <div className="text-lg font-bold text-gray-900">Google Play</div>
                </div>
              </div>
            </Link>
            
            <Button 
              className="bg-[#ffbf00] hover:bg-[#ffbf00]/90 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#ffbf00] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Call Us</h3>
                  <p className="text-gray-300">24/7 Support Available</p>
                </div>
              </div>
              <Link 
                to="tel:8884446720"
                className="text-2xl font-bold text-[#ffbf00] hover:text-[#ffbf00]/80 transition-colors"
              >
                888 444 6720
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#ffbf00] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Email Us</h3>
                  <p className="text-gray-300">Get in Touch</p>
                </div>
              </div>
              <Link 
                to="mailto:contact@mygupio.com"
                className="text-xl font-bold text-[#ffbf00] hover:text-[#ffbf00]/80 transition-colors"
              >
                contact@mygupio.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 