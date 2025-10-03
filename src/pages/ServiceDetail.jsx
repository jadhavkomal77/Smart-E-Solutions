import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Service Not Found</h1>
        <p className="mt-2 text-gray-600">The service you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 sm:p-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {service.title}
          </span>
        </h1>

        <p className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed">{service.description}</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">Key Features:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-50 transition"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/enquiry")}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 shadow-lg transition"
          >
            Make an Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
