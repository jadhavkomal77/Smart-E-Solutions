import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">SE</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Smart E Solutions</h3>
                <p className="text-blue-400 text-sm">Technology Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading provider of security and technology solutions with over 15 years of experience serving businesses and homes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                CCTV Surveillance
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                Digital Locks
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                Printers & Scanners
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                Projectors
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                Network Solutions
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Call Us</p>
                  <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Us</p>
                  <a href="mailto:info@smartesolutions.com" className="hover:text-blue-400 transition-colors break-all">
                    info@smartesolutions.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p>Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Smart E Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
