import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen p-8 bg-gray-50">
        <button onClick={() => navigate(-1)} className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          ← Back
        </button>
        <h1 className="text-3xl font-bold">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <button onClick={() => navigate(-1)} className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{service.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc list-inside text-gray-700">
        {service.features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceDetail;
