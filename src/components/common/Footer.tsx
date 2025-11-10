'use client';

import Link from '../ui/Link';

const Footer = () => {
  const useCasesLinks = [
    { label: 'Admissions', href: '/admissions' },
    { label: 'Academics', href: '/academics' },
    { label: 'Student Life', href: '/student-life' },
    { label: 'Athletics', href: '/athletics' },
    { label: 'Arts', href: '/arts' },
    { label: 'Community', href: '/community' },
    { label: 'About Us', href: '/about-us' },
  ]

  const exploreLinks = [
    { label: 'News', href: '/news' },
    { label: 'Events', href: '/events' },
    { label: 'Careers', href: '/careers' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Giving', href: '/giving' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'School Store', href: '/store' },
  ]

  const resourcesLinks = [
    { label: 'Parent Portal', href: '/parents' },
    { label: 'Student Portal', href: '/students' },
    { label: 'Faculty & Staff', href: '/faculty' },
    { label: 'Calendar', href: '/calendar' },
    { label: 'Library', href: '/library' },
    { label: 'Lunch Menu', href: '/lunch-menu' },
    { label: 'School Directory', href: '/directory' },
  ]

  return (
    <footer className="w-full bg-footer-background border-t border-footer-border mt-[48px] md:mt-[96px] mr-[30px] md:mr-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[16px] md:py-[32px]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 w-full md:w-[84%]">
            {/* Use Cases Column */}
            <div className="flex flex-col gap-[14px] md:gap-[28px] justify-start items-start w-full md:w-[42%]">
              <h3 className="text-sm font-semibold leading-md text-text-dark">
                Use cases
              </h3>
              <ul className="flex flex-col gap-[6px] md:gap-[12px] justify-start items-start">
                {useCasesLinks?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link?.href}
                      variant="primary"
                      className="text-sm font-normal leading-md text-text-dark hover:text-text-accent"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Column */}
            <div className="flex flex-col gap-[14px] md:gap-[28px] justify-start items-start w-full md:w-[42%]">
              <h3 className="text-sm font-semibold leading-md text-text-dark">
                Explore
              </h3>
              <ul className="flex flex-col gap-[6px] md:gap-[12px] justify-start items-start">
                {exploreLinks?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link?.href}
                      variant="primary"
                      className="text-sm font-normal leading-md text-text-dark hover:text-text-accent"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-[14px] md:gap-[28px] justify-start items-start w-full md:w-auto">
              <h3 className="text-sm font-semibold leading-md text-text-dark">
                Resources
              </h3>
              <ul className="flex flex-col gap-[6px] md:gap-[12px] justify-start items-start">
                {resourcesLinks?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link?.href}
                      variant="primary"
                      className="text-sm font-normal leading-md text-text-dark hover:text-text-accent"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer