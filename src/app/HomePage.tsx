'use client';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import StatisticsSection from './StatisticsSection';
import CourseSection from './CourseSection';
import WeTeaches from './weteaches';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full min-h-screen bg-background-white">
      <Header />
      
      {/* Added mt-[90px] for mobile to create space for fixed header, sm:mt-0 to reset on larger screens */}
      <main className="flex flex-col justify-start items-center w-full flex-1 mt-[50px] sm:mt-0">
        <HeroSection />
        <ServiceSection />
        <StatisticsSection />
        <CourseSection />
        <WeTeaches />

      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage