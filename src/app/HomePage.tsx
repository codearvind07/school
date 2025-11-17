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
      
      <main className="flex flex-col justify-start items-center w-full flex-1">
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