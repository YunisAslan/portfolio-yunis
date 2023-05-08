import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../components/ui/Button";
import BackHomeBtn from "../components/ui/BackHomeBtn";

// MY PHOTO
import OwnImg from "../assets/images/photo-for-everything-4.jpg";

// CV
import MYCV from "../assets/Resume.pdf";
import { useTranslation } from "react-i18next";

const About = () => {
  // useEffect(() => {
  //     window.scrollTo(0, 0)
  // }, []);

  const { t } = useTranslation();

  return (
    <>
      <BackHomeBtn />

      <section className="about-section flex flex-col items-center justify-center">
        <div className="own-picture flex justify-center mm:w-[300px] sm:w-[450px] object-cover">
          <img src={OwnImg} alt="" className="rounded-xl" />
        </div>

        <div className="about-container dark:text-gray-100 mm:px-7 mm:text-center sm:text-justify lg:px-[20rem]">
          <h2 className="bg-gradient-main bg-clip-text py-8 text-4xl font-semibold text-transparent dark:text-white">
            {t("aboutme.title")}
          </h2>

          <p>{t("aboutme.paragraph_1")}</p> <br />
          <p>{t("aboutme.paragraph_2")}</p> <br />
          <p>{t("aboutme.paragraph_3")}</p> <br />

          <p>
            {t("aboutme.link_p")}
            <NavLink
              to="/contact"
              className="ml-1 rounded-sm p-1 font-semibold underline decoration-taxonomyBlack transition-all duration-300 hover:bg-taxonomyBlack/30 dark:decoration-slate-100 dark:hover:bg-white dark:hover:text-taxonomyBlack dark:hover:decoration-taxonomyBlack"
            >
              {t("aboutme.reach")}
            </NavLink>
          </p>
          <a href={MYCV} download>
            <Button className="button-left left mt-5" variant="primary">
              {t("aboutme.download")}
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
