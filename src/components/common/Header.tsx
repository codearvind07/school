"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "../ui/Link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans backdrop-blur-xl
      ${isScrolled ? "bg-white/90 shadow-xl" : "bg-transparent"} `}
    >
      <div className="max-w-[1500px] mx-auto px-4 lg:px-6 h-[90px] flex items-center justify-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo for mobile */}
          <Image
            src="/images/logo.png"
            alt="Little Wonders Public School"
            width={180}
            height={60}
            className="object-contain transition-all duration-300 lg:hidden"
            priority
          />
 
          {/* Combined Navigation for Desktop */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {/* Logo */}
            <Image
              src="/images/logo.png"
              alt="Little Wonders Public School"
              width={180}
              height={60}
              className="object-contain transition-all duration-300"
              priority
            />
            {/* Nav Links */}
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[14px] font-semibold text-gray-900 transition duration-300 hover:text-blue-600 relative group"
              >
                {item.label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {/* CTA Button */}
            <a href="/admissions">
              <Button
                text="Apply Now"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              />
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] w-6 bg-gray-800 rounded-full transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-[2px] w-6 bg-gray-800 rounded-full transition-all duration-500 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[2px] w-6 bg-gray-800 rounded-full transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN with animation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl pt-6 pb-8 px-6 rounded-b-2xl">
          <ul className="flex flex-col gap-4 mb-6">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href} 
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-50/50 block"
                  onClick={() => setMenuOpen(false)} // Close menu when clicking a link
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href="/admissions" className="w-full" onClick={() => setMenuOpen(false)}>
            <Button
              text="Apply Now"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;