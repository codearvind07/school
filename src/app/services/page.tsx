"use client";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Academic Excellence",
      description:
        "Comprehensive curriculum covering all core subjects with innovative teaching methods tailored to different learning styles.",
      icon: (
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "blue" as ColorKey,
      features: [
        "Personalized learning approaches",
        "Regular assessment and feedback",
        "Advanced placement opportunities",
        "Project-based learning",
      ],
    },
    {
      title: "Student Wellbeing",
      description:
        "Dedicated support services to ensure every student's emotional, social, and academic well-being.",
      icon: (
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "teal" as ColorKey,
      features: [
        "Counseling and guidance programs",
        "Special needs accommodation",
        "Peer mentoring initiatives",
        "Career counseling",
      ],
    },
    {
      title: "Extracurricular Activities",
      description:
        "Diverse range of activities to develop talents, interests, and leadership skills beyond the classroom.",
      icon: (
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "indigo" as ColorKey,
      features: [
        "Sports and athletics programs",
        "Arts and creative workshops",
        "Community service opportunities",
        "Leadership development",
      ],
    },
    {
      title: "Digital Learning",
      description:
        "Modern technology tools and resources integrated into learning to prepare students for the digital world.",
      icon: (
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "purple" as ColorKey,
      features: [
        "Interactive smart classrooms",
        "Coding and robotics programs",
        "Digital literacy training",
        "Technology clubs",
      ],
    },
    {
      title: "Parent Partnership",
      description:
        "Strong partnership with parents through regular communication, workshops, and involvement opportunities.",
      icon: (
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      color: "green" as ColorKey,
      features: [
        "Regular parent-teacher conferences",
        "Parent education workshops",
        "Volunteer opportunities",
        "Family events",
      ],
    },
    {
      title: "Health & Safety",
      description:
        "Comprehensive health and safety measures to ensure a secure and nurturing environment for all students.",
      icon: (
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "amber" as ColorKey,
      features: [
        "On-site medical support",
        "Nutritious meal programs",
        "Secure campus environment",
        "Health education",
      ],
    },
  ];

  const colorMap = {
    blue: "bg-blue-600 text-blue-500",
    teal: "bg-teal-600 text-teal-500",
    indigo: "bg-indigo-600 text-indigo-500",
    purple: "bg-purple-600 text-purple-500",
    green: "bg-green-600 text-green-500",
    amber: "bg-amber-600 text-amber-500",
  } as const;

  type ColorKey = keyof typeof colorMap;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        
        {/* ================================================= */}
        {/*                   HERO SECTION                    */}
        {/* ================================================= */}
        <section className="relative w-full h-[65vh] sm:h-[70vh] md:h-[85vh] overflow-hidden rounded-b-2xl md:rounded-b-[40px] shadow-lg">
          <Image
            src="/images/slider3.jpg"
            alt="Educational services at Little Wonders"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl">
              Our Educational Services
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
              Comprehensive programs and support services designed to nurture every aspect of your child's academic, social, and personal development.
            </p>

            <div className="mt-6 bg-amber-400 h-1 w-20 md:w-28 rounded-full"></div>
          </div>
        </section>

        {/* ================================================= */}
        {/*               SERVICES GRID SECTION               */}
        {/* ================================================= */}
        <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs tracking-wider font-semibold">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
              Comprehensive Educational Services
            </h2>
            <p className="mt-3 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services designed to support every aspect of your child's educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`p-3 rounded-xl shadow-md ${
                      colorMap[service.color].split(" ")[0]
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <svg
                        className={`h-4 w-4 mr-3 mt-1 ${
                          colorMap[service.color].split(" ")[1]
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 11a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================= */}
        {/*        ADDITIONAL PROGRAMS (RESPONSIVE)           */}
        {/* ================================================= */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-16">
              <span className="text-blue-600 text-xs tracking-wider font-semibold">
                BEYOND THE CLASSROOM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
                Holistic Student Development
              </h2>
              <p className="mt-3 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                Our holistic approach ensures every student receives the support and opportunities they need to thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🎨",
                  title: "Creative Arts",
                  description:
                    "Visual and performing arts programs to foster creativity and self-expression.",
                },
                {
                  icon: "⚽",
                  title: "Sports Excellence",
                  description:
                    "Comprehensive sports programs promoting physical fitness and teamwork.",
                },
                {
                  icon: "🔬",
                  title: "Science Labs",
                  description:
                    "State-of-the-art laboratories for hands-on scientific exploration.",
                },
                {
                  icon: "🌍",
                  title: "Global Awareness",
                  description:
                    "Programs developing cultural understanding and global citizenship.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/*                    CTA BANNER                     */}
        {/* ================================================= */}
        <section className="mx-4 md:mx-8 lg:mx-12 mb-10 sm:mb-14 md:mb-20">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Quick Response Guaranteed
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Expect a response within 24 hours on weekdays.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
