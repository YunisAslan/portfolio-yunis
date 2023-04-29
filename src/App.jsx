// MAIN COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";
import GradientIcons from "./components/ui/GradientIcons";

// ROUTING
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// PAGES
import Loading from "./components/ui/Loading";

function App() {
  return (
    <>
      <BrowserRouter>
        <GradientIcons />
        {/* that's the svg generator.It affect all gradient icons */}
        <Header />
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
