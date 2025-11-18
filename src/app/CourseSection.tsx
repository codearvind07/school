'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FlaskRound,
  PencilRuler,
  Computer,
  Palette,
  Volleyball
} from 'lucide-react';

interface Subject {
  id: string;
  title: string;
  image: string;
  icon: any;
  color: string;
}

const CourseSection = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    setSubjects([
      {
        id: '1',
        title: 'Mathematics',
        image: '/images/maths.jpg',
        icon: BookOpen,
        color: 'from-blue-400 via-blue-500 to-blue-700'
      },
      {
        id: '2',
        title: 'Science',
        image: '/images/Science.jpg',
        icon: FlaskRound,
        color: 'from-green-400 via-green-500 to-green-700'
      },
      {
        id: '3',
        title: 'English',
        image: '/images/English.jpg',
        icon: PencilRuler,
        color: 'from-yellow-300 via-yellow-400 to-yellow-600'
      },
      {
        id: '4',
        title: 'Computer Studies',
        image: '/images/Computer.jpg',
        icon: Computer,
        color: 'from-purple-400 via-purple-500 to-purple-700'
      },
      {
        id: '5',
        title: 'Art & Craft',
        image: '/images/Art & Craft.jpg',
        icon: Palette,
        color: 'from-pink-400 via-pink-500 to-pink-700'
      },
      {
        id: '6',
        title: 'Physical Education',
        image: '/images/Physical.jpg',
        icon: Volleyball,
        color: 'from-orange-400 via-orange-500 to-orange-700'
      }
    ]);
  }, []);

  return (
    <section className="w-full mt-[80px] sm:mt-[120px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[22px] sm:text-[40px] font-extrabold text-center text-gray-800 drop-shadow-sm">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Our Subjects</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[10px] sm:text-[17px] text-center text-gray-600 mt-3 max-w-[420px]"
          >
            A colorful learning journey for every child — helping them discover their passion.
          </motion.p>
        </motion.div>

        {/* SUBJECT CARDS - Two rows with 3 images each */}
        <div className="flex flex-col gap-6 sm:gap-10 mt-10 sm:mt-16">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {subjects.slice(0, 3).map((subj, index) => {
              const Icon = subj.icon;

              return (
                <motion.div
                  key={subj.id}
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  whileHover={{ scale: 1.07 }}
                  className="cursor-pointer group"
                >
                  {/* CARD WRAPPER WITH GRADIENT BORDER */}
                  <div className="
                    relative rounded-2xl overflow-hidden shadow-xl 
                    border-[3px] border-transparent 
                    bg-gradient-to-br from-transparent to-transparent
                    hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,140,0,0.45)]
                    transition-all duration-500
                  ">

                    {/* FULL IMAGE FIT + PARALLAX */}
                    <motion.div
                      className="w-full h-[140px] sm:h-[210px] relative"
                      whileHover={{ scale: 1.14 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={subj.image}
                        alt={subj.title}
                        fill
                        className="object-cover"
                        unoptimized={true}
                      />
                    </motion.div>

                    {/* COOL OVERLAY */}
                    <motion.div
                      className="
                        absolute inset-0 
                        bg-gradient-to-t from-black/90 via-black/30 to-transparent
                        flex flex-col justify-end p-4
                      "
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* ICON WITH GLOW */}
                      <motion.div
                        whileHover={{ scale: 1.25, rotate: 6 }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className={`
                          w-12 h-12 sm:w-14 sm:h-14
                          rounded-xl flex items-center justify-center
                          text-white shadow-xl
                          bg-gradient-to-br ${subj.color}
                          ring-2 ring-white/40
                        `}
                      >
                        <Icon className="w-7 h-7 drop-shadow-md" />
                      </motion.div>

                      {/* SUBJECT TITLE */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-[13px] sm:text-[20px] font-bold mt-3 drop-shadow-lg"
                      >
                        {subj.title}
                      </motion.h3>
                    </motion.div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {subjects.slice(3, 6).map((subj, index) => {
              const Icon = subj.icon;

              return (
                <motion.div
                  key={subj.id}
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  whileHover={{ scale: 1.07 }}
                  className="cursor-pointer group"
                >
                  {/* CARD WRAPPER WITH GRADIENT BORDER */}
                  <div className="
                    relative rounded-2xl overflow-hidden shadow-xl 
                    border-[3px] border-transparent 
                    bg-gradient-to-br from-transparent to-transparent
                    hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,140,0,0.45)]
                    transition-all duration-500
                  ">

                    {/* FULL IMAGE FIT + PARALLAX */}
                    <motion.div
                      className="w-full h-[140px] sm:h-[210px] relative"
                      whileHover={{ scale: 1.14 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={subj.image}
                        alt={subj.title}
                        fill
                        className="object-cover"
                        unoptimized={true}
                      />
                    </motion.div>

                    {/* COOL OVERLAY */}
                    <motion.div
                      className="
                        absolute inset-0 
                        bg-gradient-to-t from-black/90 via-black/30 to-transparent
                        flex flex-col justify-end p-4
                      "
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* ICON WITH GLOW */}
                      <motion.div
                        whileHover={{ scale: 1.25, rotate: 6 }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className={`
                          w-12 h-12 sm:w-14 sm:h-14
                          rounded-xl flex items-center justify-center
                          text-white shadow-xl
                          bg-gradient-to-br ${subj.color}
                          ring-2 ring-white/40
                        `}
                      >
                        <Icon className="w-7 h-7 drop-shadow-md" />
                      </motion.div>

                      {/* SUBJECT TITLE */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-[13px] sm:text-[20px] font-bold mt-3 drop-shadow-lg"
                      >
                        {subj.title}
                      </motion.h3>
                    </motion.div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseSection;