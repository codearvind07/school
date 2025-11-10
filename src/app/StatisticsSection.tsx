'use client';
import { useState, useEffect } from 'react';

interface StatItem {
  id: string;
  value: string;
  label: string;
}

const StatisticsSection = () => {
  const [stats, setStats] = useState<StatItem[]>([])

  useEffect(() => {
    setStats([
      { id: '1', value: '500', label: '+Total text' },
      { id: '2', value: '1900', label: '+Total text' },
      { id: '3', value: '750', label: '+Total text' },
      { id: '4', value: '100', label: '+Total text' }
    ])
  }, [])

  return (
    <section 
      className="w-full mt-[28px] sm:mt-[56px] relative"
      style={{
        backgroundImage: 'url(/images/img_image_6.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#007f5f7f]"></div>
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center w-full py-[35px] sm:py-[70px]">
          <div className="flex flex-col sm:flex-row gap-[27px] sm:gap-[54px] md:gap-[108px] justify-center items-center w-full max-w-[658px] mt-[19px] sm:mt-[38px]">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col justify-start items-center w-[82px]">
                <div className="w-[82px] h-[82px] bg-[#f6a532] rounded-[40px]"></div>
                <span className="text-[17px] sm:text-[34px] font-normal leading-[20px] sm:leading-[40px] text-left text-text-light font-['Roboto'] mt-[14px] sm:mt-[28px]">
                  {stat.value}
                </span>
                <span className="text-[8px] sm:text-[16px] font-normal leading-[10px] sm:leading-[19px] text-left text-text-light font-['Roboto'] mt-[8px] sm:mt-[16px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection