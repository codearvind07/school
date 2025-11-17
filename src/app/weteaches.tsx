"use client";

import { motion } from "framer-motion";
import { Lightbulb, BookOpenCheck, Users, Sparkles } from "lucide-react";

const teachingPoints = [
  {
    id: 1,
    title: "Learning With Joy",
    description:
      "We make every lesson interactive and enjoyable to keep children curious, confident, and excited to learn.",
    icon: Sparkles,
    gradient: "from-orange-400 to-yellow-500",
  },
  {
    id: 2,
    title: "Activity-Based Teaching",
    description:
      "Children learn by doing — through experiments, stories, games, role-plays, and hands-on tasks.",
    icon: BookOpenCheck,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: 3,
    title: "Individual Attention",
    description:
      "Every child learns differently. We ensure personal care, guidance, and support for every student.",
    icon: Users,
    gradient: "from-green-400 to-green-600",
  },
  {
    id: 4,
    title: "Value-Based Education",
    description:
      "We teach discipline, hard work, and humanity — shaping responsible, kind, and future-ready individuals.",
    icon: Lightbulb,
    gradient: "from-purple-400 to-purple-600",
  },
];

export default function WeTeaches() {
  return (
    <section className="w-full py-20 sm:py-28 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[26px] sm:text-[48px] font-extrabold text-gray-800">
            How <span className="text-[#f6a532]">We Teach</span>
          </h2>
          <p className="text-[11px] sm:text-[18px] text-gray-600 max-w-[600px] mx-auto mt-3">
            Our modern teaching approach blends creativity, discipline, and joyful learning
            to build confident and future-ready children.
          </p>
        </motion.div>

        {/* Teaching Cards */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-6 sm:gap-8
        ">
          {teachingPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="
                  bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl 
                  border border-gray-100 transition-all cursor-pointer
                "
              >
                {/* Icon Box */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className={`
                    w-14 h-14 sm:w-16 sm:h-16 
                    rounded-2xl flex items-center justify-center 
                    text-white mb-5 shadow-lg
                    bg-gradient-to-br ${item.gradient}
                  `}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[22px] font-bold text-gray-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-[16px] text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20"
        >
          <div
            className="
              bg-gradient-to-r from-[#f6a532] to-orange-500
              text-white rounded-3xl p-8 sm:p-12 shadow-xl
              text-center max-w-[900px] mx-auto
            "
          >
            <h3 className="text-[20px] sm:text-[32px] font-extrabold mb-3">
              We Teach With Heart & Vision
            </h3>
            <p className="text-[11px] sm:text-[18px] leading-relaxed">
              We believe education must build knowledge, values, creativity, and confidence.  
              Our mission is to create a joyful learning space where every child shines.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
