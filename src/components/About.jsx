import { Shield, Award, Users, Zap } from 'lucide-react';

function About() {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Security',
      description: 'Industry-leading security solutions with proven track record of protecting businesses and homes.',
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Premium quality products from top manufacturers with comprehensive warranties and support.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with extensive experience in installation and maintenance services.',
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: '24/7 customer support with rapid response times and efficient problem resolution.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Partner in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Technology & Security
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Smart E Solutions is a leading provider of cutting-edge technology and security solutions.
            With over 15 years of experience, we specialize in CCTV surveillance systems, digital locks,
            printers, projectors, and comprehensive security installations for residential and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose Smart E Solutions?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Comprehensive Solutions</h4>
                    <p className="text-gray-300">End-to-end security and technology solutions tailored to your needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Professional Installation</h4>
                    <p className="text-gray-300">Expert technicians ensure perfect installation and configuration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Ongoing Support</h4>
                    <p className="text-gray-300">24/7 technical support and maintenance services for peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Competitive Pricing</h4>
                    <p className="text-gray-300">Best value for money with transparent pricing and no hidden costs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Establishment Year</span>
                    <span className="text-2xl font-bold">2008</span>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-2xl font-bold">5000+</span>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-2xl font-bold">99.8%</span>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Service Coverage</span>
                    <span className="text-2xl font-bold">Pan India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
