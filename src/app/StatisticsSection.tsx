'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award, BadgeCheck } from "lucide-react";

interface StatItem {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  icon?: any;
}

const StatisticsSection = () => {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    // 🔥 Updated NEW SCHOOL stats
    const initialStats = [
      { id: "1", value: 2025, label: "Year Established", suffix: "", icon: GraduationCap },
      { id: "2", value: 15, label: "Dedicated Teachers", suffix: "", icon: Users },
      { id: "3", value: 12, label: "Modern Classrooms", suffix: "", icon: Award },
      { id: "4", value: 1, label: "Strong Vision", suffix: "", icon: BadgeCheck }
    ];

    setStats(initialStats);
    setCounts(initialStats.map(() => 0));
  }, []);

  // COUNT-UP ANIMATION
  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts(prev => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, [stats]);

  return (
    <section
      className="w-full mt-[28px] sm:mt-[56px] relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/stat.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[50px] sm:py-[80px]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-[30px] sm:gap-[60px] md:gap-[120px] justify-center items-center w-full max-w-[700px] mx-auto"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col justify-start items-center w-[82px]"
              >

                {/* ICON BOX */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-[82px] h-[82px] flex items-center justify-center"
                >
                  <IconComponent className="w-10 h-10 text-white drop-shadow-md" />
                </motion.div>

                {/* ANIMATED NUMBER */}
                <span className="text-[20px] sm:text-[36px] font-bold text-white mt-[14px] sm:mt-[28px] drop-shadow-lg">
                  {counts[index]}
                  {stat.suffix}
                </span>

                {/* LABEL */}
                <span className="text-[10px] sm:text-[16px] text-gray-200 font-medium mt-[8px] sm:mt-[16px] text-center leading-[14px] sm:leading-[20px]">
                  {stat.label}
                </span>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
