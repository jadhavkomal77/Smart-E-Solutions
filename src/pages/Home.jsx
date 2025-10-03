import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
