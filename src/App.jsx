import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
// import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <Router>
      <div className="scroll-smooth">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/services/:serviceSlug" element={<ServiceDetails />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
