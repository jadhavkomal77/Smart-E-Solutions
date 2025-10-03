import { useState } from 'react';
import { Camera, Lock, Printer, Projector, HardDrive, Wifi, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";   // 👈 हे import कर

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();   // 👈 hook वापर

  const handleEnquiry = (productName) => {
    navigate(`/enquiry?product=${encodeURIComponent(productName)}`);
  };

  const categories = [
    { id: 'all', name: 'All Products', icon: null },
    { id: 'cctv', name: 'CCTV Systems', icon: Camera },
    { id: 'locks', name: 'Digital Locks', icon: Lock },
    { id: 'printers', name: 'Printers', icon: Printer },
    { id: 'projectors', name: 'Projectors', icon: Projector },
    { id: 'storage', name: 'Storage', icon: HardDrive },
    { id: 'network', name: 'Networking', icon: Wifi },
  ];

    const products = [
    {
      category: "cctv",
      name: "IP CCTV Camera 4MP",
      description:
        "High-definition IP camera with night vision, motion detection, and remote viewing capabilities.",
      price: "From ₹4,500",
      features: ["4MP Resolution", "Night Vision", "Weatherproof", "Mobile App"],
      image: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      category: "cctv",
      name: "PTZ Security Camera",
      description:
        "Pan-tilt-zoom camera with 360° coverage, auto-tracking, and smart detection features.",
      price: "From ₹12,000",
      features: ["360° Coverage", "Auto Tracking", "HD Quality", "Cloud Storage"],
      image: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
    {
      category: "locks",
      name: "Biometric Door Lock",
      description:
        "Advanced fingerprint lock with multiple access modes and remote control via smartphone.",
      price: "From ₹8,500",
      features: ["Fingerprint", "PIN Code", "RFID Card", "App Control"],
      image: "bg-gradient-to-br from-blue-700 to-blue-900",
    },
    {
      category: "locks",
      name: "Smart Keypad Lock",
      description:
        "Keyless entry system with customizable PIN codes and temporary access for guests.",
      price: "From ₹5,500",
      features: ["PIN Access", "Auto Lock", "Low Battery Alert", "Weather Resistant"],
      image: "bg-gradient-to-br from-gray-800 to-black",
    },
    {
      category: "printers",
      name: "Laser Printer Multi-function",
      description:
        "High-speed laser printer with print, scan, and copy functions for office use.",
      price: "From ₹15,000",
      features: ["Fast Printing", "Wireless", "Auto Duplex", "Cloud Print"],
      image: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      category: "printers",
      name: "Inkjet Photo Printer",
      description:
        "Professional photo printer with vibrant color output and high-resolution printing.",
      price: "From ₹8,000",
      features: ["Photo Quality", "Borderless", "CD/DVD Print", "Compact Design"],
      image: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
    {
      category: "projectors",
      name: "Full HD Projector",
      description:
        "Bright 1080p projector perfect for presentations, movies, and gaming experiences.",
      price: "From ₹25,000",
      features: ["Full HD", "High Brightness", "HDMI/USB", "Long Lamp Life"],
      image: "bg-gradient-to-br from-blue-700 to-blue-900",
    },
    {
      category: "projectors",
      name: "Portable Mini Projector",
      description:
        "Compact projector with wireless connectivity, perfect for on-the-go presentations.",
      price: "From ₹12,000",
      features: ["Portable", "Wireless", "Built-in Battery", "Smart OS"],
      image: "bg-gradient-to-br from-gray-800 to-black",
    },
    {
      category: "storage",
      name: "Network Video Recorder",
      description:
        "16-channel NVR with 4TB storage for recording and managing multiple cameras.",
      price: "From ₹18,000",
      features: ["16 Channels", "4TB Storage", "Remote Access", "Backup"],
      image: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      category: "network",
      name: "Enterprise Router",
      description:
        "High-performance router with advanced security and seamless connectivity for businesses.",
      price: "From ₹6,500",
      features: ["Dual Band", "High Speed", "VPN Support", "QoS"],
      image: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Quality Products
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our extensive range of top-quality products from leading manufacturers worldwide.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {Icon && <Icon size={18} />}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Product Image Section */}
              <div className={`h-48 ${product.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative text-white text-center p-6">
                  <div className="text-4xl font-bold mb-2">{product.name.split(' ')[0]}</div>
                  <div className="text-sm opacity-90">Premium Quality</div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price + Enquire Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Starting at</div>
                    <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                  </div>
                  <button
                    onClick={() => handleEnquiry(product.name)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors group-hover:gap-3"
                  >
                    Enquire
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
