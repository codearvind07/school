"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import Link from "../ui/Link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden font-sans text-white">
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-95" />
      
      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full w-96 h-96 bg-blue-500/5 blur-3xl" />

      {/* Top Gradient Line */}
      <div className="relative z-10 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 opacity-80" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* LOGO & ABOUT */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="inline-block p-4 transition-all duration-300 border bg-gradient-to-br from-orange-400/20 to-orange-500/10 rounded-2xl border-orange-400/30 group-hover:border-orange-400/60">
                <Image
                  src="/images/logo1.png"
                  alt="Little Wonders Public School"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-300">
              Little Wonders Public School is committed to nurturing young minds
              with strong moral values, academic excellence, and a joyful learning
              environment.
            </p>
            
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="pb-3 mb-6 text-lg font-bold tracking-wide text-white border-b border-orange-400/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/academics" label="Academics" />
              <FooterLink href="/admissions" label="Admissions" />
              <FooterLink href="/contact" label="Contact Us" />
            </ul>
          </div>

          {/* PUBLIC DISCLOSURE */}
          <div>
            <h3 className="pb-3 mb-6 text-lg font-bold tracking-wide text-white border-b border-orange-400/30">
              Public Disclosure
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/documents" label="Mandatory Documents" />
              <FooterLink href="/information" label="General Information" />
              <FooterLink href="/infrastructure" label="Infrastructure" />
              <FooterLink href="/staff" label="Staff Details" />
              <FooterLink href="/academics" label="Academic Details" />
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="pb-3 mb-6 text-lg font-bold tracking-wide text-white border-b border-orange-400/30">
              Get in Touch
            </h3>
            <div className="space-y-5">
              <ContactItem icon={<MapPin size={18} />}>
                Bauliya, Captainganj <br/> District Kushinagar, U.P.
              </ContactItem>
              <ContactItem icon={<Phone size={18} />}>
                +91 8173055035
              </ContactItem>
              <ContactItem icon={<Mail size={18} />}>
                info@littlewonderspublicschoolcpj.com
              </ContactItem>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative z-10 border-t border-white/10" />

      {/* POWERED BY SECTION */}
      <div className="relative z-10 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-2">
          <span className="text-sm text-gray-400">Powered by</span>
          <a
            href="https://www.jkinfotech.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-2 py-1 font-semibold text-orange-400 transition-colors duration-300 cursor-pointer hover:text-orange-300 hover:underline underline-offset-4"
          >
            J.K. Infotech
          </a>
        </div>
      </div>

      {/* BOTTOM BAR WITH WAVE */}
      <div className="relative z-10">
        <div className="flex items-center justify-center h-16 overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 opacity-90">
          {/* Wave SVG */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z"
              fill="rgba(15,15,15,0.3)"
            />
          </svg>

          <p className="relative z-10 text-sm font-medium text-white">
            © {new Date().getFullYear()} Little Wonders Public School. All rights reserved.
          </p>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed z-50 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 rounded-full shadow-lg bottom-6 right-6 bg-gradient-to-br from-blue-500 to-blue-600 hover:shadow-xl hover:scale-110 hover:from-blue-400 hover:to-blue-500"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="flex items-center gap-2 text-gray-300 transition-all duration-300 group hover:text-orange-400">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-400 transition-colors" />
        <span className="transition-transform group-hover:translate-x-1">{label}</span>
      </Link>
    </li>
  );
}

function ContactItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex items-center justify-center w-10 h-10 text-orange-400 transition-all duration-300 border rounded-lg shrink-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white border-orange-400/20">
        {icon}
      </div>
      <div className="pt-1 text-sm leading-relaxed text-gray-300 transition-colors group-hover:text-gray-100">
        {children}
      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-full cursor-pointer bg-gradient-to-br from-white/10 to-white/5 hover:from-orange-500 hover:to-orange-600 hover:text-white hover:-translate-y-1 border-white/10 hover:border-orange-400/50">
      {icon}
    </div>
  );
}