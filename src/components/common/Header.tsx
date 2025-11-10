'use client';
import { useState } from 'react';
 import Image from'next/image';
 import Button from'../ui/Button';
 import IconButton from'../ui/IconButton';
 import Link from'../ui/Link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'courses', href: '/courses' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="w-full bg-header-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[16px] md:gap-[26px] justify-start items-start w-full mt-[13px] md:mt-[26px]">
          {/* Top Social Media Bar */}
          <div className="flex justify-start items-center w-full md:w-[32%]">
            <div className="flex justify-end items-center w-full bg-background-warning px-[11px] md:px-[22px] py-[3px] md:py-[6px] rounded-[12px]">
              <div className="w-[13px] md:w-[26px] h-[13px] md:h-[26px] bg-secondary-background rounded-[6px] md:rounded-[12px]"></div>
              <div className="w-[13px] md:w-[26px] h-[13px] md:h-[26px] bg-secondary-background rounded-[6px] md:rounded-[12px] ml-[4px] md:ml-[8px]"></div>
              <IconButton
                src="/images/img_group_7.svg"
                width={18}
                height={18}
                className="w-[13px] md:w-[26px] h-[13px] md:h-[26px] bg-secondary-background rounded-[6px] md:rounded-[12px] ml-[4px] md:ml-[8px] p-[2px] md:p-[4px]"
                variant="ghost"
              />
              <IconButton
                src="/images/img_facebook.svg"
                width={18}
                height={18}
                className="w-[13px] md:w-[26px] h-[13px] md:h-[26px] bg-secondary-background rounded-[6px] md:rounded-[12px] ml-[4px] md:ml-[8px] p-[2px] md:p-[4px]"
                variant="ghost"
              />
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between items-center w-full">
            {/* Mobile Menu Button */}
            <button 
              className="block lg:hidden p-2" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 h-0.5 bg-text-light mb-1"></div>
              <div className="w-6 h-0.5 bg-text-light mb-1"></div>
              <div className="w-6 h-0.5 bg-text-light"></div>
            </button>

            {/* Desktop Navigation */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:justify-end lg:w-[68%] absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-header-background lg:bg-transparent z-50 lg:z-auto`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[12px] md:gap-[24px] p-4 lg:p-0">
                {/* Navigation Items */}
                <ul className="flex flex-col lg:flex-row lg:gap-[12px] md:gap-[24px] mb-4 lg:mb-0">
                  {navigationItems.map((item, index) => (
                    <li key={index} className="flex justify-center items-center py-2 lg:py-0">
                      <Link 
                        href={item.href}
                        variant="light"
                        className="text-sm md:text-md font-semibold leading-xl"
                      >
                        {item.label}
                      </Link>
                      <Image
                        src="/images/img_arrow_down.svg"
                        alt="dropdown"
                        width={10}
                        height={12}
                        className="w-[10px] md:w-[14px] h-[12px] md:h-[16px] ml-2"
                      />
                    </li>
                  ))}
                </ul>

                

                {/* Search and Apply Button */}
                <div className="flex items-center gap-2 lg:gap-4">
                
                  <Button
                    text="apply now"
                    className="ml-[7px] md:ml-[14px] px-[12px] md:px-[24px] py-[5px] md:py-[10px]"
                    style={{ borderRadius: '22px 22px 0px 22px' }}
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header