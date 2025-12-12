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
export default function ArtAndCraftPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-white">
      <Header />

      <main className="flex-grow">

        {/* ⭐ HERO SECTION ⭐ */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/Art & Craft.jpg"
              alt="Art & Craft Hero"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-20 text-center px-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-5">
              <span className="text-white text-sm">Creativity • Expression • Imagination</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl">
              Art & Craft — Create, Imagine, Inspire
            </h1>

            <p className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl mx-auto">
              Nurturing creativity, imagination, and artistic confidence through hands-on exploration.
            </p>

            <div className="mt-6 flex gap-3 justify-center">
              <button className="bg-gradient-to-r from-pink-600 to-red-500 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition">
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
                Our Art & Craft curriculum helps students express their creativity through drawing, painting, sculpture,
                craftwork, and mixed media projects. Students build fine motor skills, visual awareness, imagination,
                and cultural appreciation as they explore different artistic mediums and techniques.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Drawing & Sketching", "Shapes · shading · observation"],
                  ["Painting", "Acrylic · watercolor · textures"],
                  ["3D Art", "Clay · paper craft · sculpture"],
                  ["Creative Crafts", "Origami · textile art · décor"],
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
                <div className="text-sm text-gray-500">Art Projects Completed</div>
                <CountUp to={540} />
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-500">Workshops Conducted</div>
                <CountUp to={42} />
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-500">Exhibitions Organized</div>
                <CountUp to={18} />
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ PROGRESSION SLIDER ⭐ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Art Progression — Class 1 → 12</h3>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex gap-6 running-scroll" style={{ animationDuration: "30s" }}>
              {[
                { title: "Class 1–2", topics: "Coloring · basic shapes", color: "from-pink-400 to-pink-500" },
                { title: "Class 3–5", topics: "Crafts · sketching", color: "from-rose-400 to-rose-500" },
                { title: "Class 6–8", topics: "Perspective · painting", color: "from-fuchsia-400 to-fuchsia-500" },
                { title: "Class 9–10", topics: "Canvas work · acrylics", color: "from-purple-500 to-purple-600" },
                { title: "Class 11–12", topics: "Portfolio · art history", color: "from-pink-600 to-pink-700" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex-shrink-0"
                >
                  <div
                    className={`inline-flex items-center gap-3 px-3 py-1 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4`}
                  >
                    <div className="w-9 h-9 rounded-md bg-white/20 flex items-center justify-center text-sm font-semibold">
                      {i + 1}
                    </div>
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

        {/* ⭐ DETAILED TOPICS ⭐ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Detailed Topics — Class Wise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Class 1–2 (Foundations)",
                bullets: ["Basic coloring", "Cut & paste", "Simple drawings", "Craft practice"],
              },
              {
                title: "Class 3–5 (Exploration)",
                bullets: ["Mandala basics", "Clay modeling", "Creative posters", "Nature craft"],
              },
              {
                title: "Class 6–8 (Skills)",
                bullets: ["Shading", "Portrait basics", "Watercolor", "3D sculpture"],
              },
              {
                title: "Class 9–10 (Advancement)",
                bullets: ["Canvas painting", "Acrylic techniques", "Art styles", "Portfolio creation"],
              },
              {
                title: "Class 11–12 (Mastery)",
                bullets: ["Fine arts", "Advanced sketching", "Art history", "Exhibition prep"],
              },
            ].map((block, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{block.title}</h4>
                <ul className="space-y-2 text-gray-700">
                  {block.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ⭐ CTA ⭐ */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 pb-16">
          <div className="bg-gradient-to-r from-pink-600 to-red-500 text-white p-8 rounded-3xl shadow-2xl text-center">
            <h4 className="text-2xl font-bold">Want the complete Art & Craft curriculum?</h4>
            <p className="mt-2 text-sm text-white/90">
              Request detailed lesson plans, craft modules, and project guidelines.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-pink-600 px-5 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">
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

      {/* Slider Animation */}
      <style jsx>{`
        .running-scroll {
          animation: scroll-left 30s linear infinite;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
