import { Metadata } from 'next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Courses - Little Wonders Public School',
  description:
    'Discover the complete academic programs and learning pathways at Little Wonders Public School, a newly established institution focused on modern and holistic education.',
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-yellow-400">Academic</span> Programs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Carefully structured learning pathways that blend academic excellence with 
              holistic development, preparing students for success in a rapidly evolving world.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* COURSE GRID */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  title: "Pre-Primary (Nursery – UKG)",
                  image: "/images/Pre-Primary.jpg",
                  description: "A fun and activity-based learning environment focusing on motor skills, communication, phonics, numeracy, creativity, and social development for young learners.",
                  age: "3-5 Years",
                  icon: "🎨"
                },
                {
                  title: "Primary (Classes 1–5)",
                  image: "/images/Primary.jpg",
                  description: "A strong foundation in English, Mathematics, EVS, Computers, and Arts with weekly activity classes to encourage thinking, creativity, and real-life learning.",
                  age: "6-10 Years",
                  icon: "📚"
                },
                {
                  title: "Middle School (Classes 6–8)",
                  image: "/images/MiddleSchool.jpg",
                  description: "Curriculum designed to develop analytical thinking, digital skills, problem-solving, and practical understanding through activity-based science and mathematics sessions.",
                  age: "11-13 Years",
                  icon: "🔬"
                },
                {
                  title: "Secondary School (Classes 9–10)",
                  image: "/images/Secondary School.jpg",
                  description: "A disciplined and structured learning environment focusing on core subjects, exam preparation, doubt-solving, and concept mastery for board exams.",
                  age: "14-15 Years",
                  icon: "🎯"
                },
                {
                  title: "Senior Secondary (Classes 11–12)",
                  image: "/images/Senior Secondary.jpg",
                  description: "Focused subject guidance, competitive exam preparation, career counselling, and high-quality notes to help students succeed in board exams and future careers.",
                  streams: ["Science (PCM/PCB)", "Commerce"],
                  age: "16-17 Years",
                  icon: "🎓"
                },
                {
                  title: "Co-Curricular Activities",
                  image: "/images/Co-Curricular Activities.jpg",
                  description: "Includes art & craft, dance, music, yoga, sports, storytelling, science clubs, educational trips, and personality development programs to build confidence and creativity.",
                  age: "All Ages",
                  icon: "⭐"
                }
              ].map((course, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-xl">
                      {course.icon}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-white text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                        {course.age}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    
                    {course.streams && (
                      <div className="mb-3">
                        {course.streams.map((stream, i) => (
                          <span 
                            key={i}
                            className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
                          >
                            {stream}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-gray-600 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center group/btn">
                        Learn More
                        <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* TEACHING METHODOLOGY */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-lg tracking-wider">OUR APPROACH</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Innovative Teaching Methodology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine traditional values with modern educational practices to create 
                a dynamic learning environment that nurtures curiosity and critical thinking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💡",
                  title: "Smart Classrooms",
                  description: "Interactive boards, digital content, and visual learning tools that make complex concepts easy to understand.",
                  features: ["Digital Boards", "Audio-Visual Aids", "Online Resources"]
                },
                {
                  icon: "🔍",
                  title: "Activity-Based Learning",
                  description: "Practical experiments, group tasks, and skill-based modules that encourage hands-on experience.",
                  features: ["Science Labs", "Group Projects", "Practical Sessions"]
                },
                {
                  icon: "👥",
                  title: "Personal Attention",
                  description: "Small batch sizes and regular doubt-clearing sessions ensure every student gets individual focus.",
                  features: ["Small Groups", "Mentorship", "Regular Feedback"]
                }
              ].map((method, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-lg tracking-wider">WHY CHOOSE US</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                The Little Wonders Difference
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏫", text: "Safe & child-friendly campus" },
                { icon: "👩‍🏫", text: "Experienced and caring teachers" },
                { icon: "💻", text: "Smart & digital classrooms" },
                { icon: "🌱", text: "Holistic education approach" },
                { icon: "💰", text: "Affordable fee structure" },
                { icon: "👨‍👩‍👧‍👦", text: "Regular parent-teacher interaction" },
                { icon: "⚽", text: "Sports & extracurricular activities" },
                { icon: "📐", text: "Focus on discipline & values" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-40 translate-y-40"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Admissions Are Now Open!
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Join our vibrant learning community and give your child the best start 
              at a modern, caring, and progressive school designed for tomorrow's leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                Enroll Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300">
                Schedule a Visit
              </button>
            </div>
            <p className="text-blue-200 mt-6 text-sm">
              Limited seats available for the 2024 academic year
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}