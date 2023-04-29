import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ProjectItem = ({ ...item }) => {

    return (
        <>
            <div className="project-card bg-white rounded-lg py-5 mm:px-6 lg:px-10 border border-lightBorder dark:bg-blue-300/5 dark:border-darkBorder group">

                <div className="grid grid-cols-12 items-center">

                    <div className="project-left py-10 mm:pr-0 lg:pr-10 mm:col-span-12 lg:col-span-6">

                        <h3 className="mm:text-2xl lg:text-3xl font-semibold pb-4 dark:text-white">{item.project_title}</h3>
                        <p className="mm:text-base lg:text-lg dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci accusantium aliquam. Ut id, porro et magni consectetur totam voluptatum.</p>

                        <button onClick={() => window.open(`${item.project_address}`)} className="flex items-center w-36 space-x-5 rounded-md group-hover:bg-blue-500 duration-500 py-2 px-3 mt-10 group">
                            <span className="text-blue-500 group-hover:text-white dark:text-white z-10">
                                Preview
                            </span>
                            <HiOutlineArrowNarrowRight className="text-2xl text-blue-500 group-hover:translate-x-3 group-hover:text-white duration-500 transition-all dark:text-white z-10" />
                        </button>

                    </div>

                    <div className="project-right mm:col-span-12 lg:col-span-6 overflow-hidden rounded-md">
                        <img src={item.project_img} alt="" className="group-hover:scale-105 duration-500 transition-all" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjectItem;
