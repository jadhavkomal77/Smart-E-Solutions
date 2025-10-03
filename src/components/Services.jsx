// import { Camera, Lock, Printer, Projector, Wifi, Monitor } from 'lucide-react';

// function Services() {
//   const services = [
//     {
//       icon: Camera,
//       title: 'CCTV Surveillance',
//       description: 'Advanced surveillance systems with HD cameras, night vision, remote monitoring, and cloud storage solutions.',
//       features: ['HD Quality', 'Remote Access', 'Motion Detection', '24/7 Recording'],
//       gradient: 'from-blue-600 to-blue-700',
//     },
//     {
//       icon: Lock,
//       title: 'Digital Locks',
//       description: 'Smart lock systems with biometric, PIN, and card access. Enhance security with keyless entry solutions.',
//       features: ['Biometric', 'PIN Access', 'Remote Control', 'Auto Lock'],
//       gradient: 'from-gray-700 to-gray-900',
//     },
//     {
//       icon: Printer,
//       title: 'Printers & Scanners',
//       description: 'Wide range of printers and scanners for offices. High-speed, reliable, and cost-effective solutions.',
//       features: ['High Speed', 'Multi-function', 'Wireless', 'Cloud Print'],
//       gradient: 'from-blue-700 to-blue-900',
//     },
//     {
//       icon: Projector,
//       title: 'Projectors',
//       description: 'Professional projectors for presentations, home theater, and educational purposes with crystal clear display.',
//       features: ['Full HD', 'Long Lamp Life', 'Portable', 'Wireless Connect'],
//       gradient: 'from-gray-800 to-black',
//     },
//     {
//       icon: Wifi,
//       title: 'Network Solutions',
//       description: 'Complete networking infrastructure setup with routers, switches, and wireless solutions for seamless connectivity.',
//       features: ['High Speed', 'Secure', 'Scalable', 'Reliable'],
//       gradient: 'from-blue-600 to-blue-800',
//     },
//     {
//       icon: Monitor,
//       title: 'IT Equipment',
//       description: 'Comprehensive IT equipment supply including computers, monitors, accessories, and peripheral devices.',
//       features: ['Latest Tech', 'Warranty', 'Support', 'Installation'],
//       gradient: 'from-gray-700 to-black',
//     },
//   ];

//   return (
//     <section id="services" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
//             Our Services
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Comprehensive{' '}
//             <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//               Technology Solutions
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             We offer a complete range of technology and security services designed to meet the unique needs
//             of modern businesses and homes.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

//                 <div className="relative p-8">
//                   <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
//                     <Icon className="text-white" size={32} />
//                   </div>

//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">
//                     {service.title}
//                   </h3>

//                   <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors">
//                     {service.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2">
//                     {service.features.map((feature, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium group-hover:bg-white/20 group-hover:text-white transition-all"
//                       >
//                         {feature}
//                       </span>
//                     ))}
//                   </div>

//                   <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700 shadow-lg">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-white text-center shadow-2xl">
//           <h3 className="text-2xl sm:text-3xl font-bold mb-4">
//             Need a Custom Solution?
//           </h3>
//           <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
//             We provide tailored technology solutions to meet your specific requirements.
//             Contact us to discuss your project needs.
//           </p>
//           <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105">
//             Request Custom Quote
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;


import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";

function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((f, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">{f}</span>
                    ))}
                  </div>
                 <button
  onClick={() => navigate(`/services/${service.id}`)}
  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
>
  Learn More
</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
