
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Enquiry from "./pages/Enquiry";
// import ServiceDetail from "./pages/ServiceDetail";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/enquiry" element={<Enquiry />} />
//         <Route path="/services/:serviceId" element={<ServiceDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom";

// 🧩 Components / Sections
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 📄 Pages
import Enquiry from "./pages/Enquiry";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <Router>
      {/* ✅ Header & Footer globally visible on every page */}
      <Header />

      <Routes>
  
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <About />
              <Services />
              <Products />
              <Contact />
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;




