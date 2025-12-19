'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

/* Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const ServiceSection = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    setServices([
      {
        id: '1',
        title: 'Academic Excellence Program',
        description:
          'Our program builds strong academic foundations through discipline, guided learning, and a supportive environment that motivates every child to do their best.'
      },
      {
        id: '2',
        title: 'Character & Values Development',
        description:
          'We nurture discipline, hardwork, and humanity in every student, helping them grow emotionally, socially, and morally to become responsible future leaders.'
      }
    ]);
  }, []);

  return (
    <section className="w-full mt-0 pt-4 sm:pt-8 md:pt-12">

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">

          {/* LEFT IMAGES (Layout preserved, premium styling added) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-row lg:flex-row justify-center items-start w-full lg:w-[48%] gap-3 sm:gap-6 lg:gap-8"
          >
            {/* LEFT VERTICAL STACK */}
            <div className="flex flex-col gap-5 items-center">

              {/* MAIN IMAGE */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/images/card1.jpg"
                  alt="Education service"
                  width={226}
                  height={346}
                  className="
                    w-[135px] sm:w-[160px] md:w-[226px]
                    h-[215px] sm:h-[260px] md:h-[346px]
                    rounded-3xl object-cover
                    shadow-xl shadow-orange-200/40
                  "
                />
              </motion.div>

              {/* ORANGE GRADIENT BLOCK */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="
                  bg-gradient-to-br from-orange-400 to-yellow-400
                  rounded-3xl shadow-lg shadow-orange-300/40
                  flex justify-center items-center
                  w-[125px] sm:w-[150px] md:w-[200px]
                  h-[70px] sm:h-[90px] md:h-[120px]
                "
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-inner" />
              </motion.div>

            </div>

            {/* RIGHT IMAGE STACK */}
            <div className="flex flex-col gap-5 items-center">

              {/* CIRCLE IMAGE — with spin animation */}
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/images/card2.jpg"
                  alt="Student"
                  width={214}
                  height={214}
                  className="
                    w-[115px] sm:w-[150px] md:w-[214px]
                    h-[115px] sm:h-[150px] md:h-[214px]
                    rounded-full object-cover
                    shadow-xl shadow-orange-200/30
                    animate-spin-slow
                  "
                />
              </motion.div>

              {/* SECOND IMAGE */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/images/card3.jpg"
                  alt="Learning environment"
                  width={224}
                  height={268}
                  className="
                    w-[135px] sm:w-[170px] md:w-[224px]
                    h-[160px] sm:h-[210px] md:h-[268px]
                    rounded-3xl object-cover
                    shadow-xl shadow-orange-200/40
                  "
                />
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT — EXACT SAME LAYOUT, PREMIUM STYLE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col w-full lg:w-[52%]"
          >
            {/* GREETING */}
            <div className="mb-4">
              <span className="inline-block bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-bold tracking-wider uppercase text-[10px] sm:text-xs whitespace-nowrap border border-orange-100">
                Welcome to Little Wonders Public School
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-extrabold leading-tight text-gray-900">
              Our Education System  
              <br />
              Inspire You More.
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
              We are a new school built with passion for education.  
              Our goal is to provide a modern environment that helps students grow with confidence,
              curiosity, creativity, and strong values.
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
              We focus on character, discipline, and global exposure, ensuring students become responsible
              and future-ready individuals.
            </p>

            {/* SERVICES LIST */}
            <div className="flex flex-col mt-8 gap-5">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  className="
                    flex gap-4 p-4 rounded-2xl
                    bg-white shadow-md border border-gray-100
                    hover:shadow-xl hover:border-orange-200
                    transition-all
                  "
                >
                  <div className="w-14 h-14 bg-orange-400 rounded-2xl shadow-inner" />

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CALL NOW + LEARN MORE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-semibold">
                CALL NOW: 8173055035
              </div>

              <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold flex items-center group">
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
