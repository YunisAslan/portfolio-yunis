import React from "react";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";

const Home = () => {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="wrapper">
        <Introduction />
      </div>

      <Skills />
      <Projects />
      <Testimonials />
    </>
  );
};

export default Home;
