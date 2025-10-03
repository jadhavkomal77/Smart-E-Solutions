
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
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;



