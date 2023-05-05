import { Suspense, lazy, useEffect, useState } from "react";

// MAIN COMPONENTS
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default App;
