"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
/* ----------------------- Small Utilities ----------------------- */

const CountUp = ({ to = 100, duration = 1200 }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (t: number): void => {
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return (
    <div className="font-extrabold text-3xl md:text-4xl text-gray-900">
      {value}
      {to > 100 ? "+" : ""}
    </div>
  );
};

/* ----------------------- Class Block Component ----------------------- */

const ClassBlock = ({ data }: { data: { id: string; title: string; gradient: string; icon: string; bullets: string[] } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-transform hover:-translate-y-1"
      role="region"
      aria-labelledby={`title-${data.id}`}
    >
      <div className="flex">
        <div className={`w-1.5 ${data.gradient} hidden sm:block`} aria-hidden="true" />
        <div className="p-5 flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${data.gradient} text-white text-xl shadow-sm`}>
                <span aria-hidden>{data.icon}</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 id={`title-${data.id}`} className="text-lg font-semibold text-gray-900">
                {data.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {data.bullets.slice(0, 2).join(" · ")}
              </p>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 border border-gray-100"
              >
                {open ? "Hide topics" : "View topics"}
                <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden mt-4"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {data.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------- Page Data ----------------------- */

const progressionItems = [
  {
    id: "s1",
    title: "Class 1–2 — Discovery",
    gradient: "bg-gradient-to-b from-green-500 to-green-600",
    icon: "🔬",
    bullets: ["Living things & senses", "Basic materials & properties", "Simple experiments", "Observation skills"],
  },
  {
    id: "s2",
    title: "Class 3–5 — Exploration",
    gradient: "bg-gradient-to-b from-teal-500 to-teal-600",
    icon: "🌱",
    bullets: ["Plants & animals", "States of matter", "Simple machines", "Weather & planets"],
  },
  {
    id: "s3",
    title: "Class 6–8 — Foundations",
    gradient: "bg-gradient-to-b from-indigo-500 to-indigo-600",
    icon: "⚗️",
    bullets: ["Cells & organisms", "Elements & mixtures", "Force & motion basics", "Ecosystems & energy"],
  },
  {
    id: "s4",
    title: "Class 9–10 — Applied Science",
    gradient: "bg-gradient-to-b from-purple-500 to-purple-600",
    icon: "🧪",
    bullets: ["Microorganisms & heredity", "Chemical reactions & acids/bases", "Work, energy, electricity", "Environmental science"],
  },
  {
    id: "s5",
    title: "Class 11–12 — Advanced",
    gradient: "bg-gradient-to-b from-amber-500 to-amber-600",
    icon: "🔭",
    bullets: ["Cell biology & biotechnology", "Organic & physical chemistry", "Mechanics, optics & thermodynamics", "Research & modeling projects"],
  },
];

/* duplicate for smooth infinite slider */
const duplicated = [...progressionItems, ...progressionItems];

/* ----------------------- Main Component ----------------------- */

export default function SciencePage() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onEnter = () => setIsPaused(true);
    const onLeave = () => setIsPaused(false);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onEnter, { passive: true });
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[64vh] md:h-[72vh] lg:h-[78vh] overflow-hidden">
          <Image src="/images/MiddleSchool.jpg" alt="Science hero" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/45"></div>

          <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-full flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center gap-3 bg-white/6 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-5">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 20v-8" />
                <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M6 8h12" />
              </svg>
              <span className="text-white text-sm">K–12 • Inquiry-led • Lab-powered</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg max-w-3xl">
              Science — <span className="text-amber-300">Curiosity</span>, <span className="text-blue-300">Method</span>, <span className="text-teal-300">Discovery</span>
            </h1>

            <p className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl">
              Hands-on experiments, evidence-based inquiry, and modern labs to prepare students for real-world science and STEM pathways.
            </p>

            <div className="mt-6 flex gap-3">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-5 py-3 rounded-xl shadow-lg transition">
                Request Curriculum
              </button>
              <button className="inline-flex items-center gap-2 bg-white/90 text-gray-900 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition">
                View Syllabus
              </button>
            </div>
          </div>

          <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-amber-300/10 rounded-full filter blur-3xl pointer-events-none" />
        </section>

        {/* OVERVIEW & STATS */}
        <section className="max-w-6xl mx-auto -mt-16 px-6 md:px-10 lg:px-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Overview</h2>
              <p className="mt-3 text-gray-700 max-w-2xl">
                Our Science curriculum builds scientific literacy through inquiry-based learning, laboratory experiments, and interdisciplinary projects.
                Students learn to ask testable questions, design experiments, analyze data, and communicate findings—skills that last a lifetime.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Lab Skills</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Safe & accurate experiments</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Data Literacy</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Observation & analysis</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Environmental Science</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Sustainability projects</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">STEM Readiness</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Interdisciplinary projects</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Students mentored</div>
                    <CountUp to={420} />
                  </div>
                  <div className="text-green-600 text-3xl">🔬</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Labs & Projects</div>
                    <CountUp to={85} />
                  </div>
                  <div className="text-amber-500 text-3xl">🧪</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Avg. assessment</div>
                    <CountUp to={92} />
                  </div>
                  <div className="text-purple-500 text-3xl">📈</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== AUTO-RUNNING PROGRESSION SLIDER (30s loop) ========== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Progression: Class 1 → 12</h3>

          <div className="relative overflow-hidden rounded-2xl">
            <div
              ref={sliderRef}
              className={`flex gap-6 will-change-transform ${isPaused ? "pause-scroll" : "running-scroll"}`}
              style={{ "--scroll-duration": "30s" } as React.CSSProperties}
              tabIndex={0}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              {duplicated.map((p, idx) => (
                <div
                  key={`${p.id}-${idx}`}
                  className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex-shrink-0 mr-6"
                >
                  <div className={`inline-flex items-center gap-3 px-3 py-1 rounded-lg ${p.gradient} text-white mb-4`}>
                    <div className="w-9 h-9 rounded-md bg-white/20 flex items-center justify-center text-sm font-semibold">
                      {idx % progressionItems.length + 1}
                    </div>

                    <div>
                      <div className="text-base font-semibold">{p.title}</div>
                      <div className="text-xs text-white/80">{p.bullets.slice(0, 2).join(" · ")}</div>
                    </div>
                  </div>

                  <ul className="text-sm text-gray-700 space-y-2">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 text-green-500">•</div>
                        <div>{b}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/90 to-white/0" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/90 to-white/0" />
          </div>
        </section>

        {/* ========== REDESIGNED DETAILED TOPICS — CLASS WISE ========== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Detailed Topics — Class Wise</h3>

          <p className="text-center text-gray-600 mb-8">
            Material-styled gradient blocks. Click any block's "View topics" to expand the full topic list.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Class 1-2 */}
            <ClassBlock
              data={{
                id: "s1",
                title: "Class 1 – 2 (Discovery)",
                gradient: "bg-gradient-to-b from-green-500 to-green-600",
                icon: "🔬",
                bullets: [
                  "Senses & body parts",
                  "Plants & animals — basics",
                  "Common materials & uses",
                  "Seasons, weather & day/night",
                  "Simple observation & drawing",
                ],
              }}
            />

            {/* Class 3-5 */}
            <ClassBlock
              data={{
                id: "s2",
                title: "Class 3 – 5 (Exploration)",
                gradient: "bg-gradient-to-b from-teal-500 to-teal-600",
                icon: "🌱",
                bullets: [
                  "Life cycles of plants & animals",
                  "States of matter & simple changes",
                  "Forces in daily life (push/pull)",
                  "Solar system & environment",
                  "Simple experiments and record keeping",
                ],
              }}
            />

            {/* Class 6-8 */}
            <ClassBlock
              data={{
                id: "s3",
                title: "Class 6 – 8 (Foundations)",
                gradient: "bg-gradient-to-b from-indigo-500 to-indigo-600",
                icon: "⚗️",
                bullets: [
                  "Cell structure & diversity of life",
                  "Acids, bases & mixtures",
                  "Speed, force, pressure basics",
                  "Energy forms & transfer",
                  "Ecosystems & human impact",
                ],
              }}
            />

            {/* Class 9-10 */}
            <ClassBlock
              data={{
                id: "s4",
                title: "Class 9 – 10 (Applied Science)",
                gradient: "bg-gradient-to-b from-purple-500 to-purple-600",
                icon: "🧪",
                bullets: [
                  "Heredity & evolution basics",
                  "Chemical reactions & stoichiometry intro",
                  "Work, energy, electricity & magnetism",
                  "Environmental challenges & conservation",
                ],
              }}
            />

            {/* Class 11-12 */}
            <ClassBlock
              data={{
                id: "s5",
                title: "Class 11 – 12 (Advanced)",
                gradient: "bg-gradient-to-b from-amber-500 to-amber-600",
                icon: "🔭",
                bullets: [
                  "Molecular biology & genetics",
                  "Physical chemistry & thermodynamics",
                  "Mechanics, waves & optics",
                  "Research methodology & project work",
                ],
              }}
            />

            {/* Why this sequence */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-200 text-xl">💡</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Why this sequence?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Students progress from concrete observations (early years) → structured inquiry (middle years) → analytic & applied investigation (senior years).
                    This builds curiosity, methodical thinking, and research skills needed for higher STEM study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-10">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-3xl shadow-2xl text-center">
            <h4 className="text-2xl font-bold">Want the full class-wise Science curriculum PDF?</h4>
            <p className="mt-2 text-sm text-white/90">Request detailed syllabi, lab safety guides and sample lesson plans for each class.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-green-700 px-5 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">Request PDF</button>
              <button className="bg-transparent border border-white px-5 py-3 rounded-xl text-white hover:bg-white/10 transition">Contact Admissions</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ---------------------- Styles for auto-scroll + utilities ---------------------- */}
      <style jsx>{`
        :root {
          --scroll-duration: 30s;
        }

        .running-scroll {
          animation: scroll-left var(--scroll-duration) linear infinite;
        }
        .pause-scroll {
          animation: scroll-left var(--scroll-duration) linear infinite;
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* hide default scrollbar in webkit while keeping accessibility */
        .running-scroll::-webkit-scrollbar,
        .pause-scroll::-webkit-scrollbar {
          display: none;
        }

        /* 3D helpers (kept ready) */
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
