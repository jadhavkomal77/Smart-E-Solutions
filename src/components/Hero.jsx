import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Professional Technology Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Secure Your World with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Smart Technology
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Leading provider of CCTV surveillance, digital locks, printers, projectors, and comprehensive security solutions. Trust, innovation, and excellence in every installation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => scrollToSection('products')}
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Explore Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 hover:scale-105"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-medium">Call Us</span>
              </a>
              <a
                href="mailto:info@smartesolutions.com"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-medium">Email Us</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="font-medium">Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl transform rotate-6 opacity-20 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform shadow-lg">
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-blue-100 text-sm font-medium">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform shadow-lg">
                    <div className="text-4xl font-bold text-white mb-2">5K+</div>
                    <div className="text-gray-300 text-sm font-medium">Happy Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform shadow-lg">
                    <div className="text-4xl font-bold text-white mb-2">100+</div>
                    <div className="text-gray-300 text-sm font-medium">Products</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform shadow-lg">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-blue-100 text-sm font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
