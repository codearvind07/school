"use client";

import { MapPin, Phone, Mail, Users } from "lucide-react";
import Link from "../ui/Link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3b3b3b] text-white pt-12 pb-6 mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ABOUT US */}
          <div>
            <h3 className="text-orange-400 text-lg font-semibold border-b border-dotted border-gray-400 pb-2">
              ABOUT US
            </h3>
            <p className="text-gray-300 text-sm leading-6 mt-4 pr-4">
              Our school is a newly established institution dedicated to providing
              modern education with strong values. We aim to create a joyful,
              disciplined, and inspiring learning environment for every child.
            </p>
          </div>

          {/* PUBLIC DISCLOSURE */}
          <div>
            <h3 className="text-orange-400 text-lg font-semibold border-b border-dotted border-gray-400 pb-2">
              PUBLIC DISCLOSURE
            </h3>

            <ul className="text-white text-sm mt-4 space-y-2">
              <li><Link href="/documents">Mandatory Documents</Link></li>
              <li><Link href="/information">General Information</Link></li>
              <li><Link href="/academics">Academic Details</Link></li>
              <li><Link href="/infrastructure">Infrastructure</Link></li>
              <li><Link href="/staff">Staff Details</Link></li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-orange-400 text-lg font-semibold border-b border-dotted border-gray-400 pb-2">
              CONTACT US
            </h3>

            <div className="flex items-start gap-3 mt-5">
              <MapPin className="text-orange-400 w-5 h-5" />
              <p className="text-gray-300 text-sm leading-5">
              Bauliya, Captainganj • District Kushinagar, Uttar Pradesh
              </p>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <Phone className="text-orange-400 w-5 h-5" />
              <p className="text-gray-300 text-sm">+91 8173055035</p>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <Mail className="text-orange-400 w-5 h-5" />
              <p className="text-gray-300 text-sm">info@littlewonderspublicschoolcpj.com  </p>
            </div>

          </div>

         
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 bg-[#b97a21] py-3 text-center text-sm text-white">
        © Copyright {new Date().getFullYear()} Little Wonders Public School |
        <span className="ml-1">Designed with ❤️</span>
      </div>
    </footer>
  );
}
