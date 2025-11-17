import { Metadata } from 'next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services - Little Wonders Public School',
  description: 'Discover our educational services and support programs for students and parents at Little Wonders Public School.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-yellow-400">Educational</span> Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive programs and support services designed to nurture every aspect 
              of your child's academic, social, and personal development.
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  title: "Academic Programs",
                  description: "Comprehensive curriculum covering all core subjects with innovative teaching methods tailored to different learning styles.",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  color: "blue",
                  features: [
                    "Personalized learning approaches",
                    "Regular assessment and feedback",
                    "Advanced placement opportunities",
                    "Project-based learning"
                  ]
                },
                {
                  title: "Student Support",
                  description: "Dedicated support services to ensure every student's emotional, social, and academic well-being.",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: "green",
                  features: [
                    "Counseling and guidance programs",
                    "Special needs accommodation",
                    "Peer mentoring initiatives",
                    "Career counseling"
                  ]
                },
                {
                  title: "Extracurricular Activities",
                  description: "Diverse range of activities to develop talents, interests, and leadership skills beyond the classroom.",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  color: "purple",
                  features: [
                    "Sports and athletics programs",
                    "Arts and creative workshops",
                    "Community service opportunities",
                    "Leadership development"
                  ]
                },
                {
                  title: "Technology Integration",
                  description: "Modern technology tools and resources integrated into learning to prepare students for the digital world.",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: "yellow",
                  features: [
                    "Interactive smart classrooms",
                    "Coding and robotics programs",
                    "Digital literacy training",
                    "Technology clubs"
                  ]
                },
                {
                  title: "Parent Engagement",
                  description: "Strong partnership with parents through regular communication, workshops, and involvement opportunities.",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  color: "red",
                  features: [
                    "Regular parent-teacher conferences",
                    "Parent education workshops",
                    "Volunteer opportunities",
                    "Family events"
                  ]
                },
                {
                  title: "Health & Safety",
                  description: "Comprehensive health and safety measures to ensure a secure and nurturing environment for all students.",
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  color: "indigo",
                  features: [
                    "On-site medical support",
                    "Nutritious meal programs",
                    "Secure campus environment",
                    "Health education"
                  ]
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200"
                >
                  {/* Color Header */}
                  <div className={`h-3 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600`}></div>
                  
                  <div className="p-6">
                    {/* Icon and Title */}
                    <div className="flex items-start mb-6">
                      <div className={`bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-2xl p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors pt-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-700">
                          <svg className={`h-5 w-5 text-${service.color}-500 mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className={`text-${service.color}-600 font-semibold text-sm hover:text-${service.color}-700 transition-colors flex items-center group/btn`}>
                        Learn More
                        <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-lg tracking-wider">BEYOND THE CLASSROOM</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Comprehensive Student Development
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our holistic approach ensures every student receives the support and opportunities 
                they need to thrive academically, socially, and personally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Creative Arts",
                  description: "Visual and performing arts programs to foster creativity and self-expression."
                },
                {
                  icon: "⚽",
                  title: "Sports Excellence",
                  description: "Comprehensive sports programs promoting physical fitness and teamwork."
                },
                {
                  icon: "🔬",
                  title: "Science Labs",
                  description: "State-of-the-art laboratories for hands-on scientific exploration."
                },
                {
                  icon: "🌍",
                  title: "Global Awareness",
                  description: "Programs developing cultural understanding and global citizenship."
                }
              ].map((program, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-40 translate-y-40"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact us today to learn how our comprehensive educational services can support 
              your child's unique learning journey and help them reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule a Tour
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300">
                Contact Admissions
              </button>
            </div>
            <p className="text-blue-200 mt-6 text-sm">
              We're here to answer all your questions and help you get started
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}