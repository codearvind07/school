'use client';
import { useState, useEffect } from 'react';
 import Image from'next/image';
 

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const ServiceSection = () => {
  const [services, setServices] = useState<ServiceItem[]>([])

  useEffect(() => {
    setServices([
      {
        id: '1',
        title: 'Education servic',
        description: 'I am a creative designer with a passion for crafting visually engaging and'
      },
      {
        id: '2',
        title: 'International hub',
        description: 'I am a creative designer with a passion for crafting visually engaging and'
      }
    ])
  }, [])

  const handleCallNow = () => {
    // Handle call now action
  }

  return (
    <section className="w-full mt-[23px] sm:mt-[46px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 w-full">
          {/* Left Images Column */}
          <div className="flex flex-col lg:flex-row justify-start items-center w-full lg:w-[48%] gap-4 lg:gap-0 px-[7px] sm:px-[14px]">
            <div className="flex flex-col gap-[19px] sm:gap-[38px] justify-start items-end w-full lg:w-auto">
              <Image
                src="/images/img_rectangle_55.png"
                alt="Education service"
                width={226}
                height={346}
                className="w-[113px] sm:w-[226px] h-[173px] sm:h-[346px] rounded-[21px] sm:rounded-[42px] ml-[13px] sm:ml-[26px] object-cover"
              />
              <div className="flex justify-start items-center w-[86%] bg-[#fca519] rounded-[21px] sm:rounded-[42px] p-[6px] sm:p-[12px]">
                <div className="w-[39px] sm:w-[78px] h-[39px] sm:h-[78px] bg-background-white rounded-[19px] sm:rounded-[38px] ml-[15px] sm:ml-[30px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] sm:gap-[16px] justify-start items-end w-full lg:w-auto">
              <Image
                src="/images/img_ellipse_17.png"
                alt="Student"
                width={214}
                height={214}
                className="w-[107px] sm:w-[214px] h-[107px] sm:h-[214px] rounded-full object-cover"
              />
              <Image
                src="/images/img_rectangle_56.png"
                alt="Learning environment"
                width={224}
                height={268}
                className="w-[112px] sm:w-[224px] h-[134px] sm:h-[268px] rounded-[21px] sm:rounded-[42px] ml-[12px] sm:ml-[24px] object-cover"
              />
            </div>
          </div>

          {/* Right Content Column */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[52%] lg:self-end">
            <h2 className="text-[21px] sm:text-[42px] font-extrabold leading-[25px] sm:leading-[49px] text-left text-text-primary font-['Roboto'] ml-[13px] sm:ml-[26px]">
              Our Education System 
              <br />
              <span className="text-[#f4b033]">Inspire You More.</span>
            </h2>
            <p className="text-[8px] sm:text-[16px] font-normal leading-[10px] sm:leading-[20px] text-left text-text-primary font-['Source_Serif_Pro'] w-[84%] mt-[8px] sm:mt-[16px] ml-[13px] sm:ml-[26px]">
              I am a creative designer with a passion for crafting visually engaging and user-centered designs.
            </p>

            <div className="flex flex-col lg:flex-row justify-start items-center w-full mt-[17px] sm:mt-[34px] ml-[7px] sm:ml-[14px]">
              <div className="flex flex-col gap-[10px] sm:gap-[20px] justify-start items-start w-full lg:w-auto mr-0 lg:mr-[11px] sm:mr-[22px]">
                <div className="flex flex-col gap-[7px] sm:gap-[14px] w-full">
                  {services.map((service) => (
                    <div key={service.id} className="flex gap-[9px] sm:gap-[18px] justify-start items-start w-full">
                      <div className="w-[39px] sm:w-[78px] h-[39px] sm:h-[78px] bg-[#f4b033] rounded-[19px] sm:rounded-[38px] flex-shrink-0"></div>
                      <div className="flex flex-col gap-[1px] sm:gap-[2px] justify-start items-start flex-1">
                        <h3 className="text-[10px] sm:text-[20px] font-extrabold leading-[12px] sm:leading-[24px] text-left text-text-primary font-['Roboto']">
                          {service.title}
                        </h3>
                        <p className="text-[8px] sm:text-[16px] font-normal leading-[10px] sm:leading-[20px] text-left text-text-primary font-['Source_Serif_Pro'] w-full">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-start items-center w-full">
                  <div className="w-[36%] h-[23px] sm:h-[46px] bg-[#fca519] rounded-[11px] sm:rounded-[22px]"></div>
                  <div className="flex gap-[6px] sm:gap-[12px] justify-start items-center flex-1 px-[13px] sm:px-[26px]">
                    <div className="w-[23px] sm:w-[46px] h-[23px] sm:h-[46px] bg-secondary-background rounded-[11px] sm:rounded-[22px]"></div>
                    <div className="flex flex-col justify-start items-start">
                      <span className="text-[7px] sm:text-[15px] font-extrabold leading-[9px] sm:leading-[18px] text-left text-text-primary font-['Roboto']">
                        CALL NOW
                      </span>
                      <span className="text-[7px] sm:text-[15px] font-extrabold leading-[9px] sm:leading-[18px] text-left text-text-primary font-['Roboto']">
                        7355747848
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[8px] sm:text-[16px] font-bold leading-[10px] sm:leading-[20px] text-left text-text-primary font-['Source_Serif_Pro'] w-full lg:w-[30%] mt-[2px] sm:mt-[4px]">
                I am a creative designer with a passion for crafting visually engaging and user-centered designs. I am a creative designer with a passion for crafting visually engaging and user-centered designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection