import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../data/servicesData";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative"
    >
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Comprehensive{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Technology Solutions
          </span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We provide top-quality IT & security solutions for businesses and
          modern homes. Discover how we can empower your setup.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm"></div>

                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow group-hover:text-gray-800 transition-colors">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium group-hover:bg-blue-50 group-hover:text-blue-700 transition-all"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="mt-auto w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            We provide tailored technology solutions to meet your specific
            requirements. Contact us to discuss your project needs.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}

