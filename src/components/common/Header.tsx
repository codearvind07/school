"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "../ui/Link";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* 🔶 ORANGE TOP BAR */}
      <div className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm">
        <div className="max-w-[1500px] mx-auto px-4 lg:px-6 h-10 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a
              href="tel:+918173055035"
              className="flex items-center gap-2 font-medium"
            >
              <Phone className="w-4 h-4" />
              8173055035
            </a>

            <span className="hidden sm:block opacity-60">|</span>

            <a
              href="mailto:info@littlewonderspublicschoolcpj.com"
              className="hidden sm:flex items-center gap-2 font-medium"
            >
              <Mail className="w-4 h-4" />
              info@littlewonderspublicschoolcpj.com
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-200 transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-orange-200 transition">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-orange-200 transition">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="h-[6px] bg-white/30 rounded-t-full" />
      </div>

      {/* 🔷 MAIN NAVBAR */}
      <div
        className={`transition-all duration-500 backdrop-blur-xl ${
          isScrolled ? "bg-white/90 shadow-xl" : "bg-white"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 lg:px-6 h-[90px] flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* MOBILE LOGO */}
            <Link href="/" className="lg:hidden">
              <Image
                src="/images/logo.png"
                alt="Little Wonders Public School"
                width={180}
                height={60}
                className="object-contain"
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Little Wonders Public School"
                  width={180}
                  height={60}
                  className="object-contain"
                  priority
                />
              </Link>

              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-[14px] font-semibold text-gray-900 hover:text-orange-600 transition relative group"
                >
                  {item.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <a href="/admissions">
                <Button
                  text="Apply Now"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg transition-all"
                />
              </a>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`h-[2px] w-6 bg-gray-800 rounded-full transition ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-gray-800 rounded-full transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-gray-800 rounded-full transition ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE DROPDOWN */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-2xl px-6 py-8 rounded-b-2xl">
          <ul className="flex flex-col gap-4 mb-6">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 rounded-xl font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href="/admissions" onClick={() => setMenuOpen(false)}>
            <Button
              text="Apply Now"
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
