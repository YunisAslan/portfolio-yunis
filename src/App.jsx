// MAIN COMPONENTS
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// ROUTING
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// PAGES

// AOS (animation)
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// AOS (animation)


function App() {
  return (

    <>
      <BrowserRouter>

        <div className="wrapper">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>


  );
}

export default App;
