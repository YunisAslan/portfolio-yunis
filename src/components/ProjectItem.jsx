import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ProjectItem = ({ ...item }) => {
  return (
    <>
      <div className="project-card group rounded-lg border border-lightBorder bg-white py-5 dark:border-darkBorder dark:bg-blue-300/5 mm:px-6 lg:px-10">
        <div className="grid grid-cols-12 items-center">
          <div className="project-left py-10 mm:col-span-12 mm:pr-0 lg:col-span-6 lg:pr-10">
            <h3 className="pb-4 font-semibold dark:text-white mm:text-2xl lg:text-3xl">
              {item.project_title}
            </h3>
            <p className="dark:text-white mm:text-base lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio adipisci accusantium aliquam. Ut id, porro et magni
              consectetur totam voluptatum.
            </p>

            <button
              onClick={() => window.open(`${item.project_address}`)}
              className="group mt-10 flex w-36 items-center space-x-5 rounded-md px-3 py-2 duration-500 group-hover:bg-blue-500"
            >
              <span className="z-10 text-blue-500 group-hover:text-white dark:text-white">
                Preview
              </span>
              <HiOutlineArrowNarrowRight className="z-10 text-2xl text-blue-500 transition-all duration-500 group-hover:translate-x-3 group-hover:text-white dark:text-white" />
            </button>
          </div>

          <div className="project-right overflow-hidden rounded-md mm:col-span-12 lg:col-span-6">
            <img
              src={item.project_img}
              alt=""
              className="transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
