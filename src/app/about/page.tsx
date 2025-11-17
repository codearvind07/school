import { Metadata } from 'next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Little Wonders Public School',
  description: 'Learn more about our school history, mission, and dedicated team at Little Wonders Public School.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="text-yellow-400">Little Wonders</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Nurturing young minds with passion, dedication, and innovative educational approaches 
              to shape the leaders of tomorrow.
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Our Story */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Story</span>
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Little Wonders Public School was established with a vision to create a nurturing 
              environment where every child can discover their unique potential. Our journey began 
              with a small group of passionate educators who believed that learning should be 
              joyful, meaningful, and accessible to all.
            </p>
            <p>
              Over the years, we have grown into a respected educational institution known for 
              our innovative teaching methods, dedicated faculty, and commitment to holistic 
              development. We continue to evolve with the changing educational landscape while 
              staying true to our core values.
            </p>
            <p>
              Today, we serve hundreds of students from diverse backgrounds, preparing them 
              not just for academic excellence but for life beyond the classroom.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 -z-10"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 -z-10"></div>
      </div>
      
      {/* Campus Image Section */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
          {/* Background Image */}
          <div className="w-full h-96 relative">
            <Image
              src="/images/Our Story.jpg" // Update with your actual image path
              alt="Little Wonders Public School Campus"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0 group-hover:translate-y-2 transition-transform duration-500">
              <div className="flex items-center mb-3">
                <div className="w-8 h-1 bg-yellow-400 mr-3"></div>
                <h3 className="text-2xl font-bold">Our Campus</h3>
              </div>
              <p className="text-lg opacity-90 font-light">
                Modern infrastructure for modern education
              </p>
            </div>
            
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-500"></div>
          </div>
          
          {/* Decorative Badge */}
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <span className="text-sm font-semibold text-gray-800 flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              State-of-the-Art
            </span>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-400 rounded-2xl transform rotate-12 opacity-90 shadow-lg z-10">
          <div className="w-full h-full flex items-center justify-center text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
        
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-400 rounded-full opacity-90 shadow-lg z-10">
          <div className="w-full h-full flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-lg tracking-wider">OUR PHILOSOPHY</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 mr-6 shadow-lg">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To provide a holistic educational experience that nurtures intellectual curiosity, 
                    creativity, and character development, empowering students to become confident, 
                    responsible, and globally aware individuals who make positive contributions to society.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent group-hover:from-blue-600 transition-colors"></div>
              </div>

              {/* Vision */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 mr-6 shadow-lg">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To be a leading educational institution that inspires lifelong learning, fosters 
                    innovation, and develops compassionate leaders who contribute positively to society 
                    and create meaningful change in an increasingly interconnected world.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent group-hover:from-purple-600 transition-colors"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-lg tracking-wider">OUR FOUNDATION</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Little Wonders Public School
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '⭐',
                  title: 'Excellence',
                  description: 'We strive for the highest standards in all our endeavors, encouraging continuous improvement and achievement through dedicated effort and innovation.',
                  color: 'from-yellow-400 to-yellow-500',
                  bgColor: 'yellow'
                },
                {
                  icon: '🤝',
                  title: 'Community',
                  description: 'We believe in the power of collaboration and building strong relationships among students, parents, and staff to create a supportive learning environment.',
                  color: 'from-green-400 to-green-500',
                  bgColor: 'green'
                },
                {
                  icon: '❤️',
                  title: 'Compassion',
                  description: 'We foster empathy, kindness, and understanding, creating a supportive environment where every child feels valued, respected, and cared for.',
                  color: 'from-red-400 to-red-500',
                  bgColor: 'red'
                },
                {
                  icon: '💡',
                  title: 'Innovation',
                  description: 'We embrace creative thinking and modern educational approaches to prepare students for the challenges and opportunities of the future.',
                  color: 'from-blue-400 to-blue-500',
                  bgColor: 'blue'
                },
                {
                  icon: '🎯',
                  title: 'Integrity',
                  description: 'We uphold the highest ethical standards, teaching students the importance of honesty, responsibility, and moral courage in all aspects of life.',
                  color: 'from-purple-400 to-purple-500',
                  bgColor: 'purple'
                },
                {
                  icon: '🌱',
                  title: 'Growth',
                  description: 'We believe in continuous development and lifelong learning, nurturing both academic and personal growth in every student and staff member.',
                  color: 'from-teal-400 to-teal-500',
                  bgColor: 'teal'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-gray-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
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
              Join Our Educational Journey
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Discover how Little Wonders Public School can help your child unlock their 
              full potential in a nurturing and innovative learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule a Visit
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}