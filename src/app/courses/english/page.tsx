"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
/* ----------------------- Utilities ----------------------- */
const CountUp = ({ to = 100, duration = 1200 }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop: FrameRequestCallback = (t: number) => {
      const p: number = Math.min(1, (t - start) / duration);
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

/* ----------------------- ClassBlock Component ----------------------- */

const ClassBlock = ({ id, title, gradient, icon, bullets }: { id: string; title: string; gradient: string; icon: string; bullets: string[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-transform hover:-translate-y-1"
      role="region"
      aria-labelledby={`title-${id}`}
    >
      <div className="flex">
        <div className={`w-1.5 ${gradient} hidden sm:block`} aria-hidden="true" />
        <div className="p-5 flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${gradient} text-white text-xl shadow-sm`}>
                <span aria-hidden>{icon}</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 id={`title-${id}`} className="text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{bullets.slice(0, 2).join(" · ")}</p>
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
            transition={{ duration: 0.32 }}
            className="overflow-hidden mt-4"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
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
    id: "e1",
    title: "Class 1–2 — Foundations",
    gradient: "bg-gradient-to-b from-amber-400 to-amber-500",
    icon: "🔤",
    bullets: ["Alphabet & phonics", "Listening & speaking basics", "Simple words & reading", "Rhymes & vocabulary"],
  },
  {
    id: "e2",
    title: "Class 3–5 — Building Fluency",
    gradient: "bg-gradient-to-b from-yellow-400 to-yellow-500",
    icon: "📘",
    bullets: ["Reading comprehension", "Paragraph writing", "Grammar basics", "Vocabulary expansion"],
  },
  {
    id: "e3",
    title: "Class 6–8 — Expression & Analysis",
    gradient: "bg-gradient-to-b from-orange-400 to-orange-500",
    icon: "✍️",
    bullets: ["Creative writing", "Literary devices", "Advanced grammar", "Speeches & presentations"],
  },
  {
    id: "e4",
    title: "Class 9–10 — Critical Literacy",
    gradient: "bg-gradient-to-b from-amber-500 to-amber-600",
    icon: "📚",
    bullets: ["Poetry & prose analysis", "Essay & report writing", "Research basics", "Debates & rhetoric"],
  },
  {
    id: "e5",
    title: "Class 11–12 — Mastery",
    gradient: "bg-gradient-to-b from-yellow-500 to-yellow-600",
    icon: "🎓",
    bullets: ["Advanced literature study", "Academic writing & critique", "Language & society", "Independent research"],
  },
];

const duplicated = [...progressionItems, ...progressionItems];

/* ----------------------- Main Component ----------------------- */

export default function EnglishPage() {
  const sliderRef = useRef(null);

   useEffect(() => {
       return () => {};
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="flex-grow">
       {/* HERO SECTION */}
<section className="relative w-full h-[65vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">

  {/* Proper wrapper for fill image */}
  <div className="absolute inset-0">
    <Image
      src="/images/slider1.jpg"
      alt="English hero"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* HERO CONTENT */}
  <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-full flex flex-col justify-center items-center text-center">
    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-5">
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 20v-8" />
        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M6 8h12" />
      </svg>
      <span className="text-white text-sm">K–12 • Literacy-first • Communicate with confidence</span>
    </div>

    <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg max-w-3xl">
      English — Read Write Speak
    </h1>

    <p className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl">
      Nurturing fluent readers, confident writers and articulate speakers.
    </p>

    <div className="mt-6 flex gap-3">
      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-5 py-3 rounded-xl shadow-lg transition">
        Request Curriculum
      </button>
      <button className="inline-flex items-center gap-2 bg-white/90 text-gray-900 px-4 py-3 rounded-xl shadow">
        View Syllabus
      </button>
    </div>
  </div>

</section>


        {/* OVERVIEW & STATS */}
        <section className="max-w-6xl mx-auto -mt-16 px-6 md:px-10 lg:px-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Overview</h2>
              <p className="mt-3 text-gray-700 max-w-2xl">
                Our English curriculum combines literature, language and communication practice. Students study texts across genres,
                develop writing voice, and build critical thinking via discussion, projects and performance.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Reading</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Comprehension & analysis</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Writing</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Creative & academic</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Speaking</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Presentations & debates</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Language</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Grammar & vocabulary</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Students mentored</div>
                    <CountUp to={380} />
                  </div>
                  <div className="text-amber-500 text-3xl">📚</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Workshops & Clubs</div>
                    <CountUp to={64} />
                  </div>
                  <div className="text-yellow-500 text-3xl">🗣️</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Avg. assessment</div>
                    <CountUp to={94} />
                  </div>
                  <div className="text-orange-500 text-3xl">✍️</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== AUTO-RUNNING PROGRESSION SLIDER (30s loop) ========== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Progression: Class 1 → 12</h3>

          <div className="relative overflow-hidden rounded-2xl">
            {/* The container below is animated via CSS keyframes to auto-scroll left.
                It contains duplicated items so the visual appears infinite. */}
            <div
              ref={sliderRef}
              className="flex gap-6 will-change-transform running-scroll"
              style={{ animationDuration: "30s" }}
            >
              {duplicated.map((p, idx) => (
                <div
                  key={`${p.id}-${idx}`}
                  className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex-shrink-0"
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
                        <div className="mt-1 text-amber-500">•</div>
                        <div>{b}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* subtle fade edges */}
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
            <ClassBlock
              id="e1"
              title="Class 1 – 2 (Foundations)"
              gradient="bg-gradient-to-b from-amber-400 to-amber-500"
              icon={"🔤"}
              bullets={[
                "Alphabet & phonics",
                "Listening & speaking exercises",
                "Simple words & reading practice",
                "Short picture-based stories",
                "Basic vocabulary & rhymes",
              ]}
            />

            <ClassBlock
              id="e2"
              title="Class 3 – 5 (Fluency)"
              gradient="bg-gradient-to-b from-yellow-400 to-yellow-500"
              icon={"📘"}
              bullets={[
                "Paragraph reading & comprehension",
                "Sentence structure & punctuation",
                "Creative writing (stories & poems)",
                "Vocabulary building activities",
                "Role-plays & oral presentations",
              ]}
            />

            <ClassBlock
              id="e3"
              title="Class 6 – 8 (Expression)"
              gradient="bg-gradient-to-b from-orange-400 to-orange-500"
              icon={"✍️"}
              bullets={[
                "Essay writing & composition",
                "Literary terms & short prose analysis",
                "Advanced grammar & usage",
                "Formal letters & reports",
                "Debates & speech skills",
              ]}
            />

            <ClassBlock
              id="e4"
              title="Class 9 – 10 (Critical Literacy)"
              gradient="bg-gradient-to-b from-amber-500 to-amber-600"
              icon={"📚"}
              bullets={[
                "Poetry & prose analysis",
                "Critical reading & inference",
                "Research & reference skills",
                "Advanced writing for exams",
                "Oral fluency & presentations",
              ]}
            />

            <ClassBlock
              id="e5"
              title="Class 11 – 12 (Mastery)"
              gradient="bg-gradient-to-b from-yellow-500 to-yellow-600"
              icon={"🎓"}
              bullets={[
                "Literary criticism & theory basics",
                "Academic & argumentative writing",
                "Language in society & culture",
                "Independent research projects",
              ]}
            />

            {/* Why this sequence */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-200 text-xl">💡</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Why this sequence?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    We start with phonics and oral fluency, build reading comprehension and structured writing,
                    then progress to critical analysis, research skills and independent composition — preparing
                    learners for higher studies and confident communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-10">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-8 rounded-3xl shadow-2xl text-center">
            <h4 className="text-2xl font-bold">Want the full class-wise English curriculum PDF?</h4>
            <p className="mt-2 text-sm text-white/90">Request detailed syllabi, lesson plans and sample reading lists for each class.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-amber-600 px-5 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">Request PDF</button>
              <button className="bg-transparent border border-white px-5 py-3 rounded-xl text-white hover:bg-white/10 transition">Contact Admissions</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ---------------------- Local styles: auto-scroll + utilities ---------------------- */}
      <style jsx>{`
        .running-scroll {
          display: flex;
          gap: 1.5rem;
          align-items: stretch;
          /* infinite leftward translation of half the width (duplicated list) */
          animation: scroll-left var(--scroll-duration, 30s) linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* visually hide native scrollbar if it appears */
        .running-scroll::-webkit-scrollbar {
          display: none;
        }

        /* helpers for 3D / interactive blocks (kept lightweight) */
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
