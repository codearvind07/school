"use client";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-16  md:pt-20">

        {/* ================================================= */}
        {/*                   HERO SECTION                    */}
        {/* ================================================= */}
        <section className="relative w-full h-[65vh] sm:h-[70vh] md:h-[85vh] overflow-hidden rounded-b-2xl md:rounded-b-[40px] shadow-lg">
          <Image
            src="/images/board.jpg" // ⭐ Replace with your hero image
            alt="About Little Wonders Public School"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl">
              About Little Wonders
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
              Nurturing young minds with passion, dedication, and innovative educational approaches
              to shape the leaders of tomorrow.
            </p>

          </div>
        </section>

        {/* ================================================= */}
        {/*                    OUR STORY                      */}
        {/* ================================================= */}
        <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* STORY TEXT CONTAINER */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Little Wonders Public School was established with a vision to create a nurturing
                  environment where every child can discover their unique potential. Our journey began
                  with a small group of passionate educators who believed that learning should be
                  joyful, meaningful, and accessible to all.
                </p>

                <p>
                  Over the years, we have grown into a respected educational institution known for
                  our innovative teaching methods, dedicated faculty, and commitment to holistic
                  development. We continue to evolve with the changing educational landscape while
                  staying true to our core values.
                </p>

                <p>
                  Today, we serve hundreds of students from diverse backgrounds, preparing them
                  not just for academic excellence but for life beyond the classroom.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Teachers</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* CAMPUS IMAGE */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="relative w-full h-80 md:h-[28rem]">
                <Image
                  src="/images/Our Story.jpg" // ⭐ Replace if needed
                  alt="Little Wonders Public School Campus"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div className="h-1 w-10 bg-amber-400 mr-3"></div>
                    <h3 className="text-xl font-bold">Our Campus</h3>
                  </div>
                  <p className="text-sm opacity-90">
                    Modern infrastructure for modern education
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================================================= */}
        {/*                MISSION & VISION                   */}
        {/* ================================================= */}
        <section className="bg-gray-50 py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-16">
              <span className="text-blue-600 text-xs font-semibold tracking-wider">
                OUR PHILOSOPHY
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-4 rounded-xl shadow-lg">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold ml-4">Our Mission</h3>
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  To provide a holistic educational experience that nurtures intellectual curiosity,
                  creativity, and character development.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600 p-4 rounded-xl shadow-lg">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold ml-4">Our Vision</h3>
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  To be a leading institution that inspires lifelong learning and builds future-ready leaders.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/*                  CORE VALUES                     */}
        {/* ================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-14">
              <span className="text-blue-600 text-xs font-semibold tracking-wider">
                OUR FOUNDATION
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Core Values
              </h2>

              <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto mt-3">
                The principles that guide everything we do at Little Wonders Public School.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "⭐", title: "Excellence", color: "bg-yellow-500", description: "We strive for the highest standards..." },
                { icon: "🤝", title: "Community", color: "bg-green-500", description: "We believe in collaboration..." },
                { icon: "❤️", title: "Compassion", color: "bg-red-500", description: "We foster empathy and respect..." },
                { icon: "💡", title: "Innovation", color: "bg-blue-500", description: "We embrace creative thinking..." },
                { icon: "🎯", title: "Integrity", color: "bg-purple-500", description: "We uphold strong ethical values..." },
                { icon: "🌱", title: "Growth", color: "bg-teal-500", description: "We support lifelong learning..." },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                >
                  <div
                    className={`${value.color} w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl mb-4`}
                  >
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/*                   CTA SECTION                    */}
        {/* ================================================= */}
        <section className="mx-4 md:mx-8 lg:mx-16 mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-10 rounded-2xl shadow-xl text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Join Our Educational Journey
            </h3>
            <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
              Discover how Little Wonders Public School can help your child unlock their full potential.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
