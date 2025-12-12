"use client";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Image from "next/image";

export default function CoursesPage() {
  const courses = [
    {
      title: "Pre-Primary (Nursery – UKG)",
      image: "/images/Pre-Primary.jpg",
      description:
        "A fun and activity-based learning environment focusing on motor skills, communication, phonics, numeracy, creativity, and social development for young learners.",
      age: "3-5 Years",
      icon: "🎨",
    },
    {
      title: "Primary (Classes 1–5)",
      image: "/images/Primary.jpg",
      description:
        "A strong foundation in English, Mathematics, EVS, Computers, and Arts with weekly activity classes to encourage thinking, creativity, and real-life learning.",
      age: "6-10 Years",
      icon: "📚",
    },
    {
      title: "Middle School (Classes 6–8)",
      image: "/images/MiddleSchool.jpg",
      description:
        "Curriculum designed to develop analytical thinking, digital skills, problem-solving, and practical understanding through activity-based science and mathematics sessions.",
      age: "11-13 Years",
      icon: "🔬",
    },
    {
      title: "Secondary School (Classes 9–10)",
      image: "/images/Secondary School.jpg",
      description:
        "A disciplined and structured learning environment focusing on core subjects, exam preparation, doubt-solving, and concept mastery for board exams.",
      age: "14-15 Years",
      icon: "🎯",
    },
    {
      title: "Senior Secondary (Classes 11–12)",
      image: "/images/Senior Secondary.jpg",
      description:
        "Focused subject guidance, competitive exam preparation, career counselling, and high-quality notes to help students succeed in board exams and future careers.",
      streams: ["Science (PCM/PCB)", "Commerce"],
      age: "16-17 Years",
      icon: "🎓",
    },
    {
      title: "Co-Curricular Activities",
      image: "/images/Co-Curricular Activities.jpg",
      description:
        "Includes art & craft, dance, music, yoga, sports, storytelling, science clubs, educational trips, and personality development programs to build confidence and creativity.",
      age: "All Ages",
      icon: "⭐",
    },
  ];

  const methods = [
    {
      icon: "💡",
      title: "Smart Classrooms",
      description:
        "Interactive boards, digital content, and visual learning tools that make complex concepts easy to understand.",
      features: ["Digital Boards", "Audio-Visual Aids", "Online Resources"],
    },
    {
      icon: "🔍",
      title: "Activity-Based Learning",
      description:
        "Practical experiments, group tasks, and skill-based modules that encourage hands-on experience.",
      features: ["Science Labs", "Group Projects", "Practical Sessions"],
    },
    {
      icon: "👥",
      title: "Personal Attention",
      description:
        "Small batch sizes and regular doubt-clearing sessions ensure every student gets individual focus.",
      features: ["Small Groups", "Mentorship", "Regular Feedback"],
    },
  ];

  const whyUs = [
    { icon: "🏫", text: "Safe & child-friendly campus" },
    { icon: "👩‍🏫", text: "Experienced and caring teachers" },
    { icon: "💻", text: "Smart & digital classrooms" },
    { icon: "🌱", text: "Holistic education approach" },
    { icon: "💰", text: "Affordable fee structure" },
    { icon: "👨‍👩‍👧‍👦", text: "Regular parent-teacher interaction" },
    { icon: "⚽", text: "Sports & extracurricular activities" },
    { icon: "📐", text: "Focus on discipline & values" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* ================================================= */}
        {/*                      HERO SECTION                */}
        {/* ================================================= */}
        <section className="relative w-full h-[65vh] sm:h-[70vh] md:h-[85vh] overflow-hidden rounded-b-2xl md:rounded-b-[40px] shadow-lg">
          <Image
            src="/images/Computer.jpg" // ⭐ Replace with your own
            alt="Academic Programs at Little Wonders"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl">
              Our Academic Programs
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
              Carefully structured learning pathways that blend academic excellence with holistic 
              development to prepare students for success in a rapidly evolving world.
            </p>

            <div className="mt-6 bg-amber-400 h-1 w-20 md:w-28 rounded-full"></div>
          </div>
        </section>

        {/* ================================================= */}
        {/*                   COURSES GRID                   */}
        {/* ================================================= */}
        <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs tracking-wider font-semibold">
              ACADEMIC PROGRAMS
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Comprehensive Learning Pathways
            </h2>

            <p className="mt-3 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured curriculum is designed to nurture every stage of your child's educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl shadow-md">
                    {course.icon}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-xs sm:text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                      {course.age}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {course.title}
                  </h3>

                  {/* Streams */}
                  {course.streams && (
                    <div className="mb-4">
                      {course.streams.map((stream, i) => (
                        <span
                          key={i}
                          className="inline-block bg-blue-50 text-blue-800 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2 border border-blue-100"
                        >
                          {stream}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================= */}
        {/*               TEACHING METHODOLOGY               */}
        {/* ================================================= */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-16">
              <span className="text-blue-600 text-xs tracking-wider font-semibold">
                OUR APPROACH
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Innovative Teaching Methodology
              </h2>

              <p className="mt-3 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                We combine traditional values with modern educational practices to create 
                a dynamic learning environment that nurtures curiosity and critical thinking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {methods.map((method, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {method.description}
                  </p>

                  <ul className="space-y-2">
                    {method.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 text-sm">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/*                 WHY CHOOSE US                     */}
        {/* ================================================= */}
        <section className="py-14 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-16">
              <span className="text-blue-600 text-xs tracking-wider font-semibold">
                WHY CHOOSE US
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                The Little Wonders Difference
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <p className="text-gray-800 text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/*                     CTA SECTION                   */}
        {/* ================================================= */}
        <section className="mx-4 md:mx-8 lg:mx-16 mb-16">
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 p-10 rounded-2xl shadow-xl text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Admissions Are Now Open!
            </h3>

            <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto">
              Join our vibrant learning community and give your child the best start at a modern, caring, and progressive school.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
