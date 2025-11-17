'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
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
    <section className="w-full mt-16 sm:mt-[100px] md:mt-[150px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 w-full">
          {/* LEFT IMAGE COLUMN - Centered and larger on mobile */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[48%] gap-4 lg:gap-0 px-2 sm:px-[14px] mt-8 lg:mt-0"
          >
            <div className="flex flex-col gap-4 sm:gap-[19px] md:gap-[38px] items-center w-full">
              {/* IMAGE 1 - Larger and centered on mobile */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex justify-center w-full">
                <Image
                  src="/images/card1.jpg"
                  alt="Education service"
                  width={226}
                  height={346}
                  className="
                    w-[140px] sm:w-[113px] md:w-[226px] 
                    h-[214px] sm:h-[173px] md:h-[346px] 
                    rounded-[21px] sm:rounded-[21px] md:rounded-[42px] 
                    object-cover shadow-xl
                  "
                />
              </motion.div>

              {/* ORANGE CARD - Centered on mobile */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="
                  flex items-center justify-center w-full max-w-[200px] sm:max-w-none
                  bg-gradient-to-r from-[#fca519] to-[#ffb93a]
                  rounded-[21px] sm:rounded-[21px] md:rounded-[42px]
                  p-2 sm:p-[6px] md:p-[12px]
                  shadow-lg
                "
              >
                <div className="
                  w-[45px] sm:w-[39px] md:w-[78px] 
                  h-[45px] sm:h-[39px] md:h-[78px]
                  bg-white rounded-[19px] sm:rounded-[19px] md:rounded-[38px]
                " />
              </motion.div>
            </div>

            {/* RIGHT SMALL IMAGES - Centered and larger on mobile */}
            <div className="flex flex-col gap-4 sm:gap-[8px] md:gap-[16px] items-center w-full">
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }} className="flex justify-center w-full">
                <Image
                  src="/images/card2.jpg"
                  alt="Student"
                  width={214}
                  height={214}
                  className="
                    w-[120px] sm:w-[107px] md:w-[214px]
                    h-[120px] sm:h-[107px] md:h-[214px]
                    rounded-full object-cover shadow-lg
                  "
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex justify-center w-full">
                <Image
                  src="/images/card3.jpg"
                  alt="Learning environment"
                  width={224}
                  height={268}
                  className="
                    w-[140px] sm:w-[112px] md:w-[224px]
                    h-[168px] sm:h-[134px] md:h-[268px]
                    rounded-[21px] sm:rounded-[21px] md:rounded-[42px]
                    object-cover shadow-xl
                  "
                />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-start items-start w-full lg:w-[52%] lg:self-end"
          >
            {/* TITLE */}
            <h2
              className="
                text-[21px] sm:text-[26px] md:text-[32px] lg:text-[42px]
                font-extrabold text-text-primary
                leading-tight sm:leading-snug lg:leading-tight
                ml-[13px] sm:ml-[26px]
              "
            >
              Our Education System
              <br />
              <span className="text-[#f4b033] drop-shadow-md">Inspire You More.</span>
            </h2>

            {/* Description */}
            <p
              className="
                text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px]
                opacity-80 leading-relaxed sm:leading-relaxed lg:leading-relaxed
                text-text-primary font-['Source_Serif_Pro']
                mt-3 sm:mt-5 ml-[13px] sm:ml-[26px]
              "
            >
              We are a new school built with a strong passion for education.  
              Our goal is to shape a future where learning is joyful, meaningful,  
              and full of creativity. We are committed to providing a modern and  
              inspiring environment where every child grows with confidence.
            </p>

            <p
              className="
                text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px]
                opacity-70 leading-relaxed sm:leading-relaxed lg:leading-relaxed
                text-text-primary font-['Source_Serif_Pro']
                mt-3 sm:mt-4 ml-[13px] sm:ml-[26px]
              "
            >
              We promote curiosity, confidence, discipline, and global exposure —  
              helping students become responsible, confident, and values-driven individuals.
            </p>

            {/* SERVICES LIST */}
            <div className="flex flex-col lg:flex-row w-full mt-[17px] sm:mt-[34px] ml-[7px] sm:ml-[14px]">
              <div className="flex flex-col gap-[10px] sm:gap-[20px] w-full">
                <div className="flex flex-col gap-[7px] sm:gap-[14px]">
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      className="
                        flex gap-2 sm:gap-[9px] md:gap-[18px]
                        p-2 sm:p-4 rounded-xl
                        hover:bg-gray-50 transition-all
                      "
                    >
                      {/* ICON */}
                      <div className="
                        w-[31px] sm:w-[39px] md:w-[78px]
                        h-[31px] sm:h-[39px] md:h-[78px]
                        bg-[#f4b033]
                        rounded-[15px] sm:rounded-[19px] md:rounded-[38px]
                        shadow-md
                      " />

                      {/* TEXT */}
                      <div className="flex flex-col flex-1">
                        <h3 className="text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] font-extrabold text-text-primary">
                          {service.title}
                        </h3>
                        <p className="text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px] opacity-80 text-text-primary">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CALL NOW */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex mt-3 items-center w-full"
                >
                  <div className="
                    w-[36%] h-[23px] sm:h-[30px] md:h-[46px]
                    bg-gradient-to-r from-[#fca519] to-[#ffbb40]
                    rounded-[11px] sm:rounded-[16px] md:rounded-[22px]
                  " />

                  <div className="flex gap-[6px] sm:gap-[8px] md:gap-[12px] items-center flex-1 px-[13px] sm:px-[20px] md:px-[26px]">
                    <div className="
                      w-[23px] sm:w-[30px] md:w-[46px] 
                      h-[23px] sm:h-[30px] md:h-[46px]
                      bg-secondary-background 
                      rounded-[11px] sm:rounded-[15px] md:rounded-[22px]
                    " />

                    <div>
                      <span className="text-[7px] sm:text-[9px] md:text-[12px] lg:text-[15px] font-extrabold">CALL NOW</span>
                      <br />
                      <span className="text-[7px] sm:text-[9px] md:text-[12px] lg:text-[15px] font-extrabold">8173055035</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;