"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import React, { useState, useEffect } from "react";

/* ----------------------- CountUp Utility ----------------------- */
const CountUp = ({ to = 100, duration = 1200 }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <div className="font-extrabold text-3xl md:text-4xl text-gray-900">{value}+</div>;
};

/* ----------------------- Main Component ----------------------- */
export default function ComputerStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="flex-grow">

        {/* ⭐ HERO SECTION ⭐ */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/Computer.jpg"
              alt="Computer Studies Hero"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-20 text-center px-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-5">
              <span className="text-white text-sm">Tech-Driven Learning • Practical Skills • Future Ready</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl">
              Computer Studies — Coding, Logic & Digital Skills
            </h1>

            <p className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl mx-auto">
              Empowering digital natives with computational thinking, coding foundations, and real-world technology skills.
            </p>

            <div className="mt-6 flex gap-3 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition">
                Request Curriculum
              </button>
              <button className="bg-white/90 text-gray-900 px-4 py-3 rounded-xl shadow hover:scale-105 transition">
                View Syllabus
              </button>
            </div>
          </div>
        </section>

        {/* ⭐ OVERVIEW & STATS ⭐ */}
        <section className="max-w-6xl mx-auto -mt-16 px-6 md:px-10 lg:px-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Overview */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Overview</h2>
              <p className="mt-3 text-gray-700 max-w-2xl">
                Our Computer Studies curriculum helps students build essential technology skills, including computer fundamentals,
                coding, digital creativity, and safe online practices. From hands-on projects to problem-solving challenges, students
                gain confidence in using technology to create, innovate, and succeed in academics and beyond.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Coding Basics", "Block & text programming"],
                  ["Digital Literacy", "Internet, devices, safety"],
                  ["Problem Solving", "Logic & computational thinking"],
                  ["Web Skills", "Intro to HTML & website basics"],
                ].map(([title, desc], i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500">{title}</div>
                    <div className="text-lg font-semibold text-gray-900 mt-2">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-500">Students Trained</div>
                <CountUp to={320} />
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-500">Coding Projects Completed</div>
                <CountUp to={120} />
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-500">Workshops Conducted</div>
                <CountUp to={48} />
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ PROGRESSION SLIDER ⭐ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Tech Progression — Class 1 → 12</h3>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex gap-6 running-scroll" style={{ animationDuration: "30s" }}>
              {[
                {
                  title: "Class 1–2",
                  topics: "Computers basics · Mouse & keyboard",
                  color: "from-purple-400 to-purple-500",
                },
                {
                  title: "Class 3–5",
                  topics: "Scratch coding · Internet skills",
                  color: "from-blue-400 to-blue-500",
                },
                {
                  title: "Class 6–8",
                  topics: "Web basics · Problem solving",
                  color: "from-indigo-400 to-indigo-500",
                },
                {
                  title: "Class 9–10",
                  topics: "Python basics · Software concepts",
                  color: "from-violet-500 to-violet-600",
                },
                {
                  title: "Class 11–12",
                  topics: "Programming · Cybersecurity basics",
                  color: "from-purple-600 to-purple-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex-shrink-0"
                >
                  <div className={`inline-flex items-center gap-3 px-3 py-1 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4`}>
                    <div className="w-9 h-9 rounded-md bg-white/20 flex items-center justify-center text-sm font-semibold">{i + 1}</div>
                    <div>
                      <div className="text-base font-semibold">{item.title}</div>
                      <div className="text-xs text-white/80">{item.topics}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/90 to-white/0" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/90 to-white/0" />
          </div>
        </section>

        {/* ⭐ DETAILED TOPICS SECTION ⭐ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Detailed Topics — Class Wise</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Class 1–2 (Foundations)",
                bullets: ["Basic parts of a computer", "Typing & mouse training", "Paint & creative tools", "Safe use of devices"],
              },
              {
                title: "Class 3–5 (Exploration)",
                bullets: ["Scratch programming", "Digital citizenship", "Web searches & productivity tools", "Simple animations"],
              },
              {
                title: "Class 6–8 (Skills)",
                bullets: ["HTML basics", "Game logic", "Flowcharts & algorithms", "Computer hardware overview"],
              },
              {
                title: "Class 9–10 (Advancement)",
                bullets: ["Python basics", "Data types & variables", "Cyber safety", "Software applications"],
              },
              {
                title: "Class 11–12 (Mastery)",
                bullets: ["Programming deeper concepts", "File handling", "Database basics", "Cybersecurity introduction"],
              },
            ].map((block, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{block.title}</h4>
                <ul className="space-y-2 text-gray-700">
                  {block.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ⭐ CTA SECTION ⭐ */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-10">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 rounded-3xl shadow-2xl text-center">
            <h4 className="text-2xl font-bold">Want the complete Computer Studies curriculum?</h4>
            <p className="mt-2 text-sm text-white/90">Request detailed lesson plans, coding modules, and project guidelines.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-purple-700 px-5 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">
                Request PDF
              </button>
              <button className="bg-transparent border border-white px-5 py-3 rounded-xl text-white hover:bg-white/10 transition">
                Contact Admissions
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style jsx>{`
        .running-scroll {
          animation: scroll-left 30s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
