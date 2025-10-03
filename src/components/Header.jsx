// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white shadow-lg py-3'
//           : 'bg-white/20 backdrop-blur-md py-5'
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
//               <span className="text-white font-bold text-xl">SE</span>
//             </div>
//             <div>
//               <h1
//                 className={`font-bold text-xl sm:text-2xl transition-colors ${
//                   isScrolled ? 'text-gray-900' : 'text-gray-900'
//                 }`}
//               >
//                 Smart E Solutions
//               </h1>
//               <p
//                 className={`text-xs sm:text-sm transition-colors ${
//                   isScrolled ? 'text-blue-600' : 'text-blue-700'
//                 }`}
//               >
//                 Technology & Security Solutions
//               </p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {['home','about','services','products'].map(section => (
//               <button
//                 key={section}
//                 onClick={() => scrollToSection(section)}
//                 className="font-medium text-gray-900 hover:text-blue-600 transition-all"
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </button>
//             ))}
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
//             >
//               Contact Us
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl rounded-b-2xl overflow-hidden">
//             <nav className="flex flex-col p-4 space-y-2">
//               {['home','about','services','products'].map(section => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </button>
//               ))}
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="text-left px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all font-medium shadow-lg"
//               >
//                 Contact Us
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    } else {
      navigate(`/?scrollTo=${id}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">SE</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl sm:text-2xl transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
                Smart E Solutions
              </h1>
              <p className={`text-xs sm:text-sm transition-colors ${isScrolled ? "text-blue-600" : "text-blue-100"}`}>
                Technology & Security Solutions
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {["home", "about", "services", "products"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-all hover:scale-105 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/20"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl rounded-b-2xl overflow-hidden">
            <nav className="flex flex-col p-4 space-y-2">
              {["home", "about", "services", "products"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all font-medium shadow-lg"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

