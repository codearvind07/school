"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../components/ui/Button";

interface ServiceCard {
  id: string;
  icon?: string;
  number: string;
  description: string;
}

const slides = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [serviceCards, setServiceCards] = useState<ServiceCard[]>([]);

  // SIMPLE AUTO-SLIDER (NO PROGRESS BAR)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // UPDATED: LOCAL ICONS ADDED HERE
  useEffect(() => {
    setServiceCards([
      {
        id: "1",
        icon: "/images/kick.png",
        number: "1",
        description: "Quality education for a brighter future.",
      },
      {
        id: "2",
        icon: "/images/basketball.png",
        number: "2",
        description: "Nurturing young minds for a better tomorrow.",
      },
      {
        id: "3",
        icon: "/images/ball.png",
        number: "3",
        description: "A place where learning is fun and interactive.",
      },
      {
        id: "4",
        icon: "/images/cricket.png",
        number: "4",
        description: "Fostering creativity and critical thinking.",
      },
    ]);
  }, []);

  return (
    <section className="w-full relative mt-0 pt-0">
      <div className="w-full mx-auto p-0">
        <div
          className="relative w-full m-0 p-0"
          style={{ paddingBottom: "52.08%" }}
        >
          {/* SLIDES */}
          {slides.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-[1200ms] bg-black ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover object-center"
                priority={i === 0}
              />
            </div>
          ))}

         

          {/* ARROWS */}
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            className="absolute left-5 top-1/2 -translate-y-1/2 p-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % slides.length)
            }
            className="absolute right-5 top-1/2 -translate-y-1/2 p-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* SERVICE CARDS - Hidden on mobile devices */}
          <div className="absolute bottom-[-40px] sm:bottom-[-90px] left-[150px] sm:left-[300px] right-[15px] sm:right-[30px] hidden sm:block">
            <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[20px] w-full overflow-x-auto">

              {serviceCards.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col justify-center items-center min-w-[180px] sm:min-w-[222px] h-auto bg-background-light border border-[#106d63] rounded-[19px] sm:rounded-[38px] p-[10px] sm:p-[20px]"
                >
                  <div className="flex flex-col gap-[8px] sm:gap-[16px] justify-start items-center w-full">
                    <div className="flex justify-start items-start w-full">

                      {/* ICON — REMOVED GREEN BACKGROUND BOX */}
                      <div className="flex justify-center items-center">
                        {card.icon && (
                          <Image
                            src={card.icon}
                            alt="service icon"
                            width={80}
                            height={80}
                            className="w-[30px] sm:w-[45px] h-[30px] sm:h-[45px]"
                          />
                        )}
                      </div>

                      {/* NUMBER */}
                      <div className="flex justify-end items-center flex-1 mt-[3px] sm:mt-[6px]">
                        <span className="text-[16px] sm:text-[33px] font-['Bungee'] text-text-accent">
                          0
                        </span>
                        <span className="text-[16px] sm:text-[33px] font-['Bungee'] text-text-accent">
                          {card.number}
                        </span>
                      </div>
                    </div>

                    <p className="text-[10px] sm:text-[20px] text-text-secondary font-['Poppins'] w-full">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
