

import { useState } from 'react';
import { Camera, Lock, Printer, Projector, HardDrive, Wifi, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";  
import IPCCTVCamera from "/src/assets/IP CCTV Camera.jpeg"; 
import PTZSecurityCamera from "/src/assets/PTZ Security Camera.jpeg"; 
import BiometricDoorLock from "/src/assets/Biometric Door Lock.jpeg"; 
import SmartKeypadLock from "/src/assets/Smart Keypad Lock.jpg"; 
import PrinterMultifunction from "/src/assets/Laser Printer Multi-function.jpeg"; 
import InkjetPhotoPrinter from "/src/assets/inkjet-printer.jpg"; 
import FullHDProjector from "/src/assets/Full HD Projector.jpeg"; 
import PortableMiniProjector from "/src/assets/Portable Mini Projector.jpeg"; 
import NetworkVideoRecorder from "/src/assets/Network Video Recorder.jpeg"; 
import EnterpriseRouter from "/src/assets/Enterprise Router.jepg.jpeg"; 
import SmartBulbRGB from "/src/assets/Smart Bulb RGB.jpeg"; 
import ConferenceMicrophone from "/src/assets/Conference Microphone.jpg"; 
import WirelessMouse from "/src/assets/Wireless Mousejpeg.jpeg"; 
import SmartWiFiPlug from "/src/assets/Smart WiFi Plug.jpeg"; 
import MechanicalKeyboard from "/src/assets/Mechanical Keyboard.jpeg"; 


function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();  

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
    description: "High-definition IP camera with night vision, motion detection, and remote viewing.",
    price: "From ₹4,500",
    features: ["4MP Resolution", "Night Vision", "Weatherproof", "Mobile App"],
    image: IPCCTVCamera,
  },
  {
    category: "cctv",
    name: "PTZ Security Camera",
    description: "Pan-Tilt-Zoom camera with 360° coverage and 30x optical zoom.",
    price: "From ₹12,000",
    features: ["360° View", "30x Optical Zoom", "AI Motion Tracking"],
    image: PTZSecurityCamera,
  },

  {
    category: "locks",
    name: "Biometric Door Lock",
    description: "Fingerprint smart lock with keypad and mobile app unlock.",
    price: "From ₹8,000",
    features: ["Fingerprint Unlock", "Mobile App", "PIN Code", "Auto Lock"],
    image: BiometricDoorLock,
  },
  {
    category: "locks",
    name: "Smart Keypad Lock",
    description: "Keyless entry lock with multiple access methods.",
    price: "From ₹5,500",
    features: ["PIN Unlock", "RFID Access", "Emergency Key"],
    image: SmartKeypadLock,
  },

  {
    category: "printers",
    name: "Multifunction Laser Printer",
    description: "High-speed printer with scan, copy, and wireless connectivity.",
    price: "From ₹15,000",
    features: ["Print/Scan/Copy", "WiFi", "Duplex Printing"],
    image: PrinterMultifunction,
  },
  {
    category: "printers",
    name: "Inkjet Photo Printer",
    description: "Best for high-quality photo prints at home or office.",
    price: "From ₹9,500",
    features: ["Photo Printing", "Borderless Prints", "Wireless"],
    image: InkjetPhotoPrinter,
  },

  {
    category: "projectors",
    name: "Full HD Projector",
    description: "1920x1080 resolution projector with HDMI & USB support.",
    price: "From ₹18,000",
    features: ["1080p", "HDMI Input", "Remote Control"],
    image: FullHDProjector,
  },
  {
    category: "projectors",
    name: "Portable Mini Projector",
    description: "Compact projector with wireless screen mirroring.",
    price: "From ₹7,000",
    features: ["WiFi", "Compact", "HD Ready"],
    image: PortableMiniProjector,
  },
  {
    category: "networking",
    name: "Network Video Recorder (NVR)",
    description: "Professional NVR for CCTV systems with 16 channels.",
    price: "From ₹22,000",
    features: ["16 Channels", "4K Support", "Remote Access"],
    image: NetworkVideoRecorder,
  },
  {
    category: "networking",
    name: "Enterprise Router",
    description: "High-performance router for offices and enterprises.",
    price: "From ₹10,500",
    features: ["Gigabit Ports", "Firewall", "VPN Support"],
    image: EnterpriseRouter,
  },

  {
    category: "accessories",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life.",
    price: "From ₹750",
    features: ["2.4GHz", "Ergonomic Design", "Rechargeable"],
    image: WirelessMouse,
  },
  {
    category: "accessories",
    name: "Mechanical Keyboard",
    description: "RGB backlit keyboard with blue switches.",
    price: "From ₹3,200",
    features: ["RGB Lighting", "Durable Keys", "USB-C"],
    image: MechanicalKeyboard,
  },

  {
    category: "smart-devices",
    name: "Smart WiFi Plug",
    description: "Voice-controlled smart plug with Alexa & Google support.",
    price: "From ₹1,200",
    features: ["WiFi", "Voice Control", "Energy Monitoring"],
    image: SmartWiFiPlug,
  },
  {
    category: "smart-devices",
    name: "Smart Bulb RGB",
    description: "16M color smart bulb with remote control via app.",
    price: "From ₹900",
    features: ["RGB Colors", "Dimmable", "WiFi Control"],
    image: SmartBulbRGB,
  },
{
  category: "audio-video",
  name: "Conference Microphone",
  description: "USB plug-and-play microphone for meetings, podcasts, and recording.",
  price: "From ₹4,000",
  features: ["Omnidirectional", "USB Powered", "Plug & Play"],
  image: ConferenceMicrophone,
}

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
             <div className="h-60 relative overflow-hidden flex items-center justify-center bg-white">
  <img
    src={product.image}
    alt={product.name}
    className="max-h-full max-w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
/>
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
