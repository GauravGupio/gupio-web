import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
// Using a native button for the hamburger to allow compact styling on mobile
import { cn } from "../lib/utils";
import gupioLogo from "../assets/images/gupio-logo.svg";
import { AnnouncementBanner } from "./AnnouncementBanner";

export const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [hideTopbar, setIsHideTopbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Hysteresis thresholds to avoid rapid toggling around the boundary
    // We hide after crossing the hide threshold and only show again after going below the show threshold
    let ticking = false;

    const updateHeaderState = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 1024;
      const hideThreshold = isMobile ? 130 : 50;
      const showThreshold = isMobile ? 90 : 30; // lower than hide threshold for hysteresis

      if (scrollY > hideThreshold) {
        setIsFixed((prev) => (prev ? prev : true));
        setIsHideTopbar((prev) => (prev ? prev : true));
      } else if (scrollY < showThreshold) {
        setIsFixed((prev) => (prev ? false : prev));
        setIsHideTopbar((prev) => (prev ? false : prev));
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateHeaderState();
          ticking = false;
        });
      }
    };

    // Initialize state on mount
    updateHeaderState();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close desktop dropdown on outside click or Escape key
  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };

    document.addEventListener("click", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <section
        className={cn(
          "hidden md:block py-2 bg-[#00021b] text-white transition-all duration-300 border-b-2 border-[#ffbf0050]",
          hideTopbar && "opacity-0 h-0 p-0 m-0 overflow-hidden"
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-2">
            <div className="w-full px-2 flex justify-end">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <a
                  href="mailto:contact@mygupio.com"
                  className="flex items-center gap-2 text-white hover:text-[#646cff] transition-colors text-sm"
                >
                  <div className="w-8 h-8 bg-[#ffc100] rounded-full flex items-center justify-center shadow-[0px_-2px_12px_1px_#ffbf00]">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span>contact@mygupio.com</span>
                </a>
                <a
                  href="tel:+918884446720"
                  className="flex items-center gap-2 text-white hover:text-[#646cff] transition-colors text-sm"
                >
                  <div className="w-8 h-8 bg-[#ffc100] rounded-full flex items-center justify-center shadow-[0px_-2px_12px_1px_#ffbf00]">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="hover:text-[#646cff]">888 444 6720</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 bg-[#00021b] text-white transition-all duration-300 shadow-[0_0_5px_#1f2348]",
          isFixed && "shadow-lg bg-[#00021b]/85 backdrop-blur"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2"
              onClick={closeMobileMenu}
            >
              <img
                src={gupioLogo}
                alt="Gupio Logo"
                className="max-w-[150px] h-auto"
              />
            </NavLink>

            <div className="hidden lg:flex items-center gap-8">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  cn(
                    "text-white hover:text-yellow-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide",
                    isActive && "text-yellow-400"
                  )
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/about"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/service"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide"
              >
                SERVICE
              </NavLink>
              <NavLink
                to="/our-app"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide"
              >
                OUR APP
              </NavLink>
              <NavLink
                to="/reviews"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide"
              >
                REVIEWS
              </NavLink>

              {/* Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown();
                  }}
                  className="flex items-center gap-1 text-white hover:text-yellow-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide"
                >
                  DISCOVER GUPIO
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isDropdownOpen && "rotate-180"
                    )}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      to="/career"
                      className="block px-4 py-2 text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                      Career
                    </Link>
                    <Link
                      to="/team"
                      className="block px-4 py-2 text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                      Team
                    </Link>
                    <Link
                      to="/blogs"
                      className="block px-4 py-2 text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                      Blogs
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                to="/contact"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide"
              >
                CONTACT
              </NavLink>
            </div>

        

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Rounded phone icon only on mobile */}
              <Link
                to="tel:8884446720"
                className="w-10 h-10 rounded-full bg-[#ffc100] shadow-[0px_-2px_12px_1px_#ffbf00] flex items-center justify-center"
                aria-label="Call Gupio"
              >
                <Phone className="w-5 h-5 text-white" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-md border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col gap-4 pt-4">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    cn(
                      "text-white hover:text-yellow-400 transition-all duration-300 font-medium py-2 text-sm uppercase tracking-wide",
                      isActive && "text-yellow-400"
                    )
                  }
                  onClick={closeMobileMenu}
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-medium py-2 text-sm uppercase tracking-wide"
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  to="/service"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-medium py-2 text-sm uppercase tracking-wide"
                  onClick={closeMobileMenu}
                >
                  SERVICE
                </NavLink>
                <NavLink
                  to="/our-app"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-medium py-2 text-sm uppercase tracking-wide"
                  onClick={closeMobileMenu}
                >
                  OUR APP
                </NavLink>
                <NavLink
                  to="/reviews"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-medium py-2 text-sm uppercase tracking-wide"
                  onClick={closeMobileMenu}
                >
                  REVIEWS
                </NavLink>

                {/* Mobile Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-full text-white hover:text-yellow-400 transition-all duration-300 font-medium py-2 text-sm uppercase tracking-wide"
                  >
                    DISCOVER GUPIO
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-4 space-y-2">
                      <Link
                        to="/career"
                        className="block text-white hover:text-yellow-400 transition-all duration-300 py-1"
                        onClick={closeMobileMenu}
                      >
                        Career
                      </Link>
                      <Link
                        to="/team"
                        className="block text-white hover:text-yellow-400 transition-all duration-300 py-1"
                        onClick={closeMobileMenu}
                      >
                        Team
                      </Link>
                      <Link
                        to="/blogs"
                        className="block text-white hover:text-yellow-400 transition-all duration-300 py-1"
                        onClick={closeMobileMenu}
                      >
                        Blogs
                      </Link>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/contact"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-medium py-2 text-sm uppercase tracking-wide"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      </header>
      <AnnouncementBanner />
    </>
  );
};
