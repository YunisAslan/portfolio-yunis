import React from "react";

import { skillItems } from "./SkillItems";
import SkillBox from "./SkillBox";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="skills-section mt-72 bg-[#FFF] px-20 py-20 dark:bg-blue-300/5">
        <div className="skills-head flex flex-col items-center justify-center">
          <h2 className="bg-gradient-main bg-clip-text p-1 font-bold text-transparent dark:text-white mm:text-4xl md:text-5xl">
            {t("skills.title")}
          </h2>

          <p className="mt-1 bg-gradient-main bg-clip-text text-center text-lg text-transparent dark:text-white">
            {t("skills.detail")}
          </p>
        </div>

        <div className="skill-boxes grid gap-4 py-8 mm:grid-cols-1 mm:px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
          {skillItems.map((item, index) => (
            <SkillBox key={index} icon={item.icon} />
          ))}
        </div>

        <p className="text-taxonomyBlack bg-clip-text pt-3 text-center text-lg text-transparent dark:text-white">
          {t("skills.detail_plus")}
        </p>
      </section>
    </>
  );
};

export default Skills;
