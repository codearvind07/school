"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const sliderData = [
  {
    img: "/images/slider1.jpg",
    title: "Where Excellence Begins",
    subtitle: "A modern school shaping the future of young learners.",
  },
  {
    img: "/images/slider2.jpg",
    title: "Transforming Learning for Tomorrow",
    subtitle: "Smart classrooms, engaging curriculum, and holistic growth.",
  },
  {
    img: "/images/slider3.jpg",
    title: "Smart Education for a Smarter Future",
    subtitle: "Interactive learning that builds confidence and curiosity.",
  },
  {
    img: "/images/slider4.jpg",
    title: "Building Leaders, Innovators & Thinkers",
    subtitle: "A strong foundation for lifelong success.",
  },
];

/**
 * Custom hook to manage slider state and auto-progression.
 * @param slideCount - The total number of slides.
 * @param interval - The duration for each slide in milliseconds.
 */
const useSlider = (slideCount: number, interval: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear existing timer
    if (slideRef.current) clearTimeout(slideRef.current);

    // Slide transition timer
    slideRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, interval);

    return () => {
      if (slideRef.current) clearTimeout(slideRef.current);
    };
  }, [currentIndex, slideCount, interval]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return { currentIndex, nextSlide, prevSlide, goToSlide };
};

const Slide = ({ 
  data, 
  isActive 
}: { 
  data: (typeof sliderData)[0]; 
  isActive: boolean 
}) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
    aria-hidden={!isActive}
  >
    <img
      src={data.img}
      alt={data.title}
      className="w-full h-full object-cover object-center"
      loading={isActive ? "eager" : "lazy"}
    />
    <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 lg:px-20 text-white bg-black/30">
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-xl animate-fade-in-down">
        {data.title}
      </h2>
      <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-xl drop-shadow animate-fade-in-up">
        {data.subtitle}
      </p>
    </div>
  </div>
);

const SlideIndicators = ({ 
  currentIndex,
  totalSlides,
  onDotClick
}: { 
  currentIndex: number;
  totalSlides: number;
  onDotClick: (index: number) => void;
}) => (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          index === currentIndex 
            ? "bg-white scale-125" 
            : "bg-white/50 hover:bg-white/70"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);

const NavigationArrows = ({ 
  onPrev, 
  onNext 
}: { 
  onPrev: () => void; 
  onNext: () => void;
}) => (
  <>
    {/* Previous Button - Left side */}
    <button
      onClick={onPrev}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
      aria-label="Previous Slide"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Next Button - Right side */}
    <button
      onClick={onNext}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
      aria-label="Next Slide"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </>
);



const serviceCardsData = [
  { id: "1", icon: "/images/kick.png", number: "1", description: "Quality education for a brighter future." },
  { id: "2", icon: "/images/basketball.png", number: "2", description: "Nurturing young minds for a better tomorrow." },
  { id: "3", icon: "/images/ball.png", number: "3", description: "A place where learning is fun and interactive." },
  { id: "4", icon: "/images/cricket.png", number: "4", description: "Fostering creativity and critical thinking." },
];

const ServiceCard = ({ card }: { card: (typeof serviceCardsData)[0] }) => (
  <div
    className="flex flex-col justify-center items-center w-[calc(50%-5px)] sm:w-auto sm:min-w-[222px] bg-background-light border border-[#106d63] rounded-[19px] sm:rounded-[38px] p-[10px] sm:p-[20px]"
  >
    <div className="flex flex-col gap-[8px] sm:gap-[16px] w-full">
      <div className="flex justify-between items-center">
        {card.icon && (
          <img src={card.icon} alt="" width="45" height="45" className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]" />
        )}
        <span className="text-[16px] sm:text-[33px] font-['Bungee'] text-text-accent">
          0{card.number}
        </span>
      </div>
      <p className="text-[10px] sm:text-[20px] font-['Poppins'] text-text-secondary">
        {card.description}
      </p>
    </div>
  </div>
);

const HeroSection = () => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useSlider(sliderData.length);

  return (
    <section className="w-full relative mt-0 pt-16 mb-64 sm:mb-48">
      <div className="w-full mx-auto p-0">
        {/* Slider Container - Optimized for 1920x900 images */}
        <div className="relative w-full aspect-[1920/900] max-h-[900px] m-0 p-0 overflow-hidden">
          {/* For mobile: Ensure full image display */}
          <div className="absolute inset-0 md:hidden">
            {sliderData.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                aria-hidden={i !== currentIndex}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  loading={i === currentIndex ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          {/* For desktop: Optimized for 1920x900 */}
          <div className="hidden md:block">
            {sliderData.map((slide, i) => (
              <Slide key={i} data={slide} isActive={i === currentIndex} />
            ))}
          </div>

          {/* Navigation Arrows and Slide Indicators */}
          <NavigationArrows 
            onPrev={prevSlide} 
            onNext={nextSlide}
          />
          <SlideIndicators 
            currentIndex={currentIndex}
            totalSlides={sliderData.length}
            onDotClick={goToSlide}
          />
        </div>

        {/* Service Cards Container - KEPT EXACTLY THE SAME LAYOUT */}
        <div className="absolute bottom-[-240px] sm:bottom-[-120px] w-[90%] sm:w-auto left-1/2 sm:left-[300px] -translate-x-1/2 sm:translate-x-0 right-auto sm:right-[30px] z-20">
          <div className="flex flex-wrap justify-center gap-[10px] sm:flex-nowrap sm:gap-[20px] sm:overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
            {serviceCardsData.map((card) => (
              <ServiceCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;