
// import { useLocation } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function Enquiry() {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const product = params.get("product"); // Product name from query

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header />

//       <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-5">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
//             <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//               Enquiry Form
//             </span>
//           </h1>
//           <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
//             Fill out the form below and our team will get back to you shortly.
//           </p>
//         </div>

//         <div className="max-w-2xl mx-auto">
//           {product && (
//             <div className="mb-6 text-center">
//               <p className="text-gray-700 text-lg sm:text-xl">
//                 You are enquiring about:{" "}
//                 <span className="font-semibold text-blue-600">{product}</span>
//               </p>
//             </div>
//           )}

//           <form className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
//             <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
//             <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
//             <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
//             <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded-lg" required />
//             <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
//               Submit Enquiry
//             </button>
//           </form>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Enquiry;

import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Enquiry() {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate hook
  const params = new URLSearchParams(location.search);
  const product = params.get("product"); // Product name from query

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-5">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)} // go back to previous page
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-2"
          >
            <span>&larr;</span>
            <span>Back</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Enquiry Form
            </span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {product && (
            <div className="mb-6 text-center">
              <p className="text-gray-700 text-lg sm:text-xl">
                You are enquiring about:{" "}
                <span className="font-semibold text-blue-600">{product}</span>
              </p>
            </div>
          )}

          <form className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded-lg" required />
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              Submit Enquiry
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Enquiry;


