import React from "react";

import ProjectItem from "./ProjectItem";
import ProjectsData from "../data/ProjectsInfo.json";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="projects-section px-10 py-20">
        <div className="projects-head flex flex-col items-center justify-center">
          <h2 className="bg-gradient-main bg-clip-text p-1 font-bold text-transparent dark:text-white mm:text-4xl md:text-5xl">
            {t("projects.main_title")}
          </h2>

          <p className="mt-1 bg-gradient-main bg-clip-text text-center text-lg text-transparent dark:text-white mm:max-w-sm sm:max-w-lg">
            {t("projects.detail")}
          </p>
        </div>

        <div className="projects grid gap-12 py-8 mm:px-0 lg:px-24">
          {ProjectsData.map((item) => (
            <ProjectItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
