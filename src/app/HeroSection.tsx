'use client';
import { useState, useEffect } from 'react';
 import Image from'next/image';
 import Button from'../components/ui/Button';

interface ServiceCard {
  id: string;
  icon?: string;
  number: string;
  description: string;
}

const HeroSection = () => {
  const [serviceCards, setServiceCards] = useState<ServiceCard[]>([])

  useEffect(() => {
    setServiceCards([
      {
        id: '1',
        number: '01',
        description: 'Providing quality education for a bright future.'
      },
      {
        id: '2',
        icon: '/images/img_send.svg',
        number: '01',
        description: 'Nurturing young minds for a better tomorrow.'
      },
      {
        id: '3',
        icon: '/images/img_shopping_bag.svg',
        number: '01',
        description: 'A place where learning is fun and interactive.'
      },
      {
        id: '4',
        icon: '/images/img_settings.svg',
        number: '01',
        description: 'Fostering creativity and critical thinking.'
      }
    ])
  }, [])

  const handleStartClick = () => {
    // Handle start button click
  }

  return (
    <section className="w-full relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[760px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/img_image_4.png"
              alt="Education background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#385c8e7f] flex flex-col justify-center items-start px-[28px] sm:px-[56px] py-[77px] sm:py-[154px]">
            <div className="flex flex-col gap-[47px] sm:gap-[94px] justify-start items-start w-full max-w-[892px]">
              {/* Hero Text */}
              <div className="w-full">
                <h1 className="text-[27px] sm:text-[40px] md:text-[54px] font-extrabold leading-[32px] sm:leading-[47px] md:leading-[63px] text-left text-text-light font-['Roboto']">
                  Start Your Beautiful
                  <br />
                  And <span className="text-[#f4b033]">Bright Future</span>
                </h1>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-start items-center gap-[4px] sm:gap-[8px] w-full">
                <Button
                  text="Start"
                  text_font_size="text-[12px] sm:text-[24px]"
                  text_font_family="Roboto"
                  text_font_weight="font-extrabold"
                  text_line_height="leading-[15px] sm:leading-[29px]"
                  fill_background_color="bg-[#fca519]"
                  border_border_radius="rounded-[11px] sm:rounded-[22px]"
                  className="px-[17px] sm:px-[34px] py-[3px] sm:py-[6px] w-full sm:w-auto"
                  onClick={handleStartClick}
                />
                <Button
                  text="Start"
                  text_font_size="text-[12px] sm:text-[24px]"
                  text_font_family="Roboto"
                  text_font_weight="font-extrabold"
                  text_line_height="leading-[15px] sm:leading-[29px]"
                  text_color="text-text-primary"
                  fill_background_color="bg-background-white"
                  border_border_radius="rounded-[11px] sm:rounded-[22px]"
                  className="px-[17px] sm:px-[34px] py-[3px] sm:py-[6px] ml-0 sm:ml-[8px] w-full sm:w-auto"
                  onClick={handleStartClick}
                />
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="absolute bottom-[-60px] sm:bottom-[-112px] left-[150px] sm:left-[300px] right-[15px] sm:right-[30px]">
            <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[20px] w-full overflow-x-auto sm:overflow-x-visible">
              {serviceCards.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col justify-center items-center min-w-[180px] sm:min-w-[222px] h-auto bg-background-light border border-solid border-[#106d63] rounded-[19px] sm:rounded-[38px] p-[10px] sm:p-[20px]"
                >
                  <div className="flex flex-col gap-[8px] sm:gap-[16px] justify-start items-center w-full">
                    <div className="flex justify-start items-start w-full">
                      {card.icon ? (
                        <div className="flex justify-center items-center w-[31px] sm:w-[62px] h-[31px] sm:h-[62px] bg-secondary-background rounded-[15px] sm:rounded-[30px] p-[9px] sm:p-[18px]">
                          <Image
                            src={card.icon}
                            alt="service icon"
                            width={26}
                            height={26}
                            className="w-[13px] sm:w-[26px] h-[13px] sm:h-[26px]"
                          />
                        </div>
                      ) : (
                        <div className="w-[31px] sm:w-[62px] h-[31px] sm:h-[62px] bg-secondary-background rounded-[15px] sm:rounded-[30px]"></div>
                      )}
                      <div className="flex justify-end items-center flex-1 mt-[3px] sm:mt-[6px]">
                        <span className="text-[16px] sm:text-[33px] font-normal leading-[20px] sm:leading-[40px] text-left text-text-accent font-['Bungee']">
                          0
                        </span>
                        <span className="text-[16px] sm:text-[33px] font-normal leading-[20px] sm:leading-[40px] text-left text-text-accent font-['Bungee']">
                          {card.number}
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-[20px] font-normal leading-[15px] sm:leading-[30px] text-left text-text-secondary font-['Poppins'] w-full">
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
  )
}

export default HeroSection