"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Link from "../ui/Link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2f2f2f] text-white mt-20">
      {/* TOP SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ABOUT US */}
        <div>
          <h3 className="text-orange-400 text-lg font-semibold tracking-wide border-b border-gray-500 pb-2">
            ABOUT US
          </h3>
          <p className="text-gray-300 text-sm leading-6 mt-4 max-w-[380px]">
            Our school is a modern educational institution focused on strong values, joyful learning,
            and a disciplined environment for every child to grow confidently and creatively.
          </p>
        </div>

        {/* PUBLIC DISCLOSURE */}
        <div>
          <h3 className="text-orange-400 text-lg font-semibold tracking-wide border-b border-gray-500 pb-2">
            PUBLIC DISCLOSURE
          </h3>
          <ul className="text-white text-sm mt-4 space-y-2">
            {[
              { label: "Mandatory Documents", href: "/documents" },
              { label: "General Information", href: "/information" },
              { label: "Academic Details", href: "/academics" },
              { label: "Infrastructure", href: "/infrastructure" },
              { label: "Staff Details", href: "/staff" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="text-white !text-white hover:text-blue-300 hover:underline underline-offset-4 transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="text-orange-400 text-lg font-semibold tracking-wide border-b border-gray-500 pb-2">
            CONTACT US
          </h3>
          <div className="mt-6 space-y-4 text-sm text-gray-300">

            <div className="flex items-start gap-3">
              <IconWrapper>
                <MapPin className="w-5 h-5" />
              </IconWrapper>
              <p>Bauliya, Captainganj • District Kushinagar, Uttar Pradesh</p>
            </div>

            <div className="flex items-center gap-3">
              <IconWrapper>
                <Phone className="w-5 h-5" />
              </IconWrapper>
              <p>+91 8173055035</p>
            </div>

            <div className="flex items-center gap-3">
              <IconWrapper>
                <Mail className="w-5 h-5" />
              </IconWrapper>
              <p className="break-all">info@littlewonderspublicschoolcpj.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#b97a21] py-3 text-center text-sm">
        <p className="tracking-wide">
          © {new Date().getFullYear()} Little Wonders Public School | Designed with ❤️
        </p>
      </div>
    </footer>
  );
}

/* ICON COMPONENT FOR CLEAN CODE */
function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
      {children}
    </div>
  );
}
