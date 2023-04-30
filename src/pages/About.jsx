import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../components/ui/Button";
import BackHomeBtn from "../components/ui/BackHomeBtn";

// MY PHOTO
import OwnImg from "../assets/images/photo-for-everything-4.jpg";

// CV
import MYCV from "../assets/Resume.pdf";

const About = () => {
  // useEffect(() => {
  //     window.scrollTo(0, 0)
  // }, []);

  return (
    <>
      <BackHomeBtn />

      <section className="about-section flex flex-col items-center justify-center">
        <div className="own-picture flex justify-center mm:w-[300px] sm:w-[450px]">
          <img src={OwnImg} alt="" className="rounded-xl" />
        </div>

        <div className="about-container dark:text-gray-100 mm:px-7 mm:text-center sm:text-justify lg:px-[20rem]">
          <h2 className="bg-gradient-main bg-clip-text py-8 text-4xl font-semibold text-transparent dark:text-white">
            Hi again, I'm Yunis.
          </h2>

          <p>
            I am a junior front-end developer, living in Baku. I enjoy working
            with new technologies and developing websites. I can develop fast
            and dynamic web pages for front-end.
          </p>
          <br />
          <p>
            Currently, I work as a freelancer and study as a second-year student
            at Azerbaijan Technical University.
          </p>
          <br />
          <p>
            Outside of development, I love reading books and listening to
            different styles of music. I also enjoy spending time with my
            friends and family.
          </p>
          <br />
          <p>
            If you want to chat, feel free to
            <NavLink
              to="/contact"
              className="ml-1 rounded-sm p-1 font-semibold underline decoration-taxonomyBlack transition-all duration-300 hover:bg-taxonomyBlack/30 dark:decoration-slate-100 dark:hover:bg-white dark:hover:text-taxonomyBlack dark:hover:decoration-taxonomyBlack"
            >
              reach out.
            </NavLink>
          </p>

          <a href={MYCV} download>
            <Button className="button-left left mt-5" variant="primary">
              Download CV
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
