"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import ContactForm from "../../components/contact/ContactForm";
import ContactCard from "../../components/contact/ContactCard";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

export default function ContactPage() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();  
    window.addEventListener("resize", checkMobile);
    
    // Load map after initial render for better performance
    const timer = setTimeout(() => setIsMapLoaded(true), 500);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
           {/*                OPTIMIZED HERO SECTION            */}
        {/* ================================================= */}
        <section className="relative w-full h-[65vh] sm:h-[70vh] md:h-[85vh] overflow-hidden rounded-b-2xl md:rounded-b-[40px] shadow-lg">
          {/* Optimized Hero Image with sizes prop */}
          <Image
            src="/images/slider2.jpg"
            alt="Little Wonders Campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={isMobile ? 75 : 90}
          />

          {/* Gradient Overlay with performance optimization */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"
            aria-hidden="true"
          />

          {/* Hero Content with better mobile spacing */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
            <span className="px-4 py-1.5 sm:px-6 sm:py-2 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full border border-white/30 mb-4">
              📞 Need Assistance?
            </span>

            <h1 className="mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-snug sm:leading-tight px-2">
              Contact <br /> Little Wonders Public School
            </h1>

            <p className="mt-3 sm:mt-4 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed px-2">
              We're here to support you with admissions, queries, guidance and more.
            </p>

            <div className="mt-6 sm:mt-8 bg-amber-400 h-1 w-16 sm:w-20 md:w-24 lg:w-32 rounded-full"></div>
          </div>
        </section>

        {/*            OPTIMIZED CONTACT SECTION              */}
        {/* ================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Contact Cards & Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20 md:mb-24">
            {/* CONTACT FORM - Improved mobile padding */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg sm:shadow-xl md:shadow-2xl border border-gray-100 md:border-gray-200 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Send Us a Message
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Fill out the form and our team will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>

            {/* CONTACT CARDS - Mobile optimized spacing */}
            <div className="space-y-4 sm:space-y-6">
              <ContactCard
                icon={
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Visit Our Campus"
                description="Bauliya, Captainganj, District Kushinagar, Uttar Pradesh, India"
                color="blue"
              />

              <ContactCard
                icon={
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                title="Call Us"
                description="+91 8173055035"
                color="green"
                action={{ label: "Call Now", href: "tel:+918173055035" }}
              />

              <ContactCard
                icon={
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Email Us"
                description={<span className="whitespace-nowrap text-[10px] sm:text-xs">info@littlewonderspublicschoolcpj.com</span> as any}
                color="purple"
                action={{ label: "Send Email", href: "mailto:info@littlewonderspublicschoolcpj.com" }}
              />

              <ContactCard
                icon={
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Office Hours"
                description="Mon–Sat: 8 AM – 4 PM  | Sun: Closed"
                color="yellow"
              />
            </div>
          </div>

         
          {/*            OPTIMIZED MAP SECTION                 */}
          
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="text-center mb-8 sm:mb-12 md:mb-14">
              <span className="text-blue-600 text-xs sm:text-sm tracking-wider font-semibold">
                FIND US
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                Visit Our Campus
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4">
                Come visit our beautiful campus located in Bauliya, Captainganj • District Kushinagar, Uttar Pradesh.
              </p>
            </div>

            {/* Map Container with Loading State */}
            <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border border-gray-200 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px]">
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <LoadingSpinner size="lg" />
                </div>
              )}
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.1782136742324!2d83.7078019!3d26.9095122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTQnMzQuMiJOIDgzwrQyJzI4LjEiRQ!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin"
                className={`w-full h-full ${isMapLoaded ? 'grayscale hover:grayscale-0' : 'opacity-0'} transition-all duration-500`}
                loading="lazy"
                allowFullScreen
                title="Little Wonders Public School Location"
                onLoad={() => setIsMapLoaded(true)}
              />
            </div>
          </div>

         
          {/*        OPTIMIZED SUPPORT CARDS SECTION           */}
          
          <div>
            <div className="text-center mb-8 sm:mb-12 md:mb-14">
              <span className="text-blue-600 text-xs sm:text-sm tracking-wider font-semibold">
                SPECIALIZED SUPPORT
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                Connect With The Right Department
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4">
                Get accurate help by reaching the right department.
              </p>
            </div>

            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
             

              {/* Card  */}
              <div className="group w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-white to-green-50 border border-green-100 shadow-sm hover:shadow-lg md:hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-105 transition-transform duration-300 text-lg sm:text-xl md:text-2xl">
                  🎓
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Student Support</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3">Guidance, welfare & counseling.</p>
                <a
                  className="text-green-600 text-sm sm:text-base font-semibold hover:text-green-800 transition-colors inline-flex items-center gap-1"
                  href="mailto:support@littlewonderspublicschoolcpj.com"
                >
                  info@littlewonderspublicschoolcpj.com
                </a>
              </div>

              
            </div>
          </div>
 {/*        OPTIMIZED BANNER SECTION                  */}
         
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-center text-white shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Quick Response Guaranteed</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Expect a response within 24 hours on weekdays.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}