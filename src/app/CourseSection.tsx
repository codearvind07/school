'use client';
import { useState, useEffect } from 'react';
 import Image from'next/image';

interface Course {
  id: string;
  image: string;
  title: string;
}

const CourseSection = () => {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    setCourses([
      {
        id: '1',
        image: '/images/img_rectangle_63.png',
        title: 'Course 1'
      },
      {
        id: '2',
        image: '/images/img_rectangle_65.png',
        title: 'Course 2'
      },
      {
        id: '3',
        image: '/images/img_rectangle_64.png',
        title: 'Course 3'
      }
    ])
  }, [])

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center w-full mt-[7px] sm:mt-[14px]">
          <span className="text-[18px] sm:text-[36px] font-semibold leading-[23px] sm:leading-[46px] text-left text-text-primary font-['Source_Serif_Pro']">
            www.littlewonderspublicschool.com
          </span>
          <h2 className="text-[18px] sm:text-[36px] font-semibold leading-[23px] sm:leading-[46px] text-left text-text-primary font-['Source_Serif_Pro'] mt-[29px] sm:mt-[58px]">
            Explore Our <span className="text-[20px] sm:text-[40px] text-[#f6a532]">Courses</span>
          </h2>
          <p className="text-[8px] sm:text-[16px] font-normal leading-[10px] sm:leading-[20px] text-center text-text-primary font-['Source_Serif_Pro'] w-[30%] mt-[3px] sm:mt-[6px]">
            We offer a wide range of courses to help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-[32px] sm:gap-[65px] md:gap-[130px] w-full max-w-[1048px] mt-[48px] sm:mt-[96px]">
            {courses.map((course) => (
              <div key={course.id} className="flex-1">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={262}
                  height={162}
                  className="w-full h-[81px] sm:h-[162px] rounded-[21px] sm:rounded-[42px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseSection