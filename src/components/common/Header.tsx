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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans
      ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
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
                className="text-[14px] font-semibold text-gray-900 transition duration-200 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
            {/* CTA Button */}
            <a href="/admissions">
              <Button
                text="Apply Now"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow"
              />
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-[2px] w-6 bg-black"></span>
            <span className="h-[2px] w-6 bg-black"></span>
            <span className="h-[2px] w-6 bg-black"></span>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md p-6">
          <ul className="flex flex-col gap-4 mb-4">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-lg font-semibold text-gray-800">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href="/admissions" className="w-full">
            <Button
              text="Apply Now"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold"
            />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
