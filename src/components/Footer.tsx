import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Calendar, Instagram, Linkedin } from "lucide-react";

import logo from "../assets/images/gupio-logo.svg";
// play_store removed; not used in footer

export const Footer: React.FC = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-[#00021b] text-white border-t-2 border-b-2 border-[#ffbf0050]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Logo and Contact Section */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <Link to="/" className="inline-block">
                  <img src={logo} alt="Gupio Logo" className="h-12" />
                </Link>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0px_-2px_12px_1px_#ffbf00]">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <Link 
                    to="tel:8884446720" 
                    className="text-white hover:text-[#646cff] transition-colors font-bold text-xl"
                  >
                    888 444 6720
                  </Link>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center flex-wrap gap-3">
                  <span className="text-sm font-medium">Follow Us</span>
                  <div className="w-8 h-px bg-white shrink-0"></div>
                  <Link
                    to="https://www.instagram.com/gupio.in?igsh=NWk2MW9iaW5yam4y"
                    className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/gupio-services-private-limited/"
                    className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links 1 */}
            <div className="lg:col-span-2">
              <h5 className="text-lg font-semibold mb-6 text-white">Quick Links</h5>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/about" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/service" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/our-app" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    Our App
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/reviews" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div className="lg:col-span-2">
              <h5 className="text-lg font-semibold mb-6 text-white">Quick Links</h5>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/career" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blogs" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    Blog/News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Location & Contact */}
            <div className="lg:col-span-4">
              <h5 className="text-lg font-semibold mb-6 text-white">Location & Contact</h5>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p className="text-white text-sm leading-relaxed">
                    No.3B 1st floor, # 358, 25th Main Road, 22nd Cross Rd,
                    Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka
                    560102
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <Link 
                    to="mailto:contact@mygupio.com" 
                    className="text-white hover:text-[#646cff] transition-colors"
                  >
                    contact@mygupio.com
                  </Link>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="text-white text-sm">
                    Mon - Sat: 9:30AM - 6:30PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-[#00021b] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-white text-sm">
              ©Copyright 2025 Gupio | All rights reserved.
            </p>
            <ul className="flex items-center gap-6">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-white hover:text-yellow-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-and-conditions" 
                  className="text-white hover:text-yellow-400 transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

