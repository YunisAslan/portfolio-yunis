import React from "react";

import ProjectItem from "./ProjectItem";
import ProjectsData from '../data/ProjectsInfo.json'


const Projects = () => {
    return (
        <>
            <section className="projects-section py-20 px-10">

                <div className="projects-head flex flex-col justify-center items-center">
                    <h2 className="mm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r tracking-wider dark:text-white p-1">
                        Projects
                    </h2>

                    <p className='text-transparent bg-clip-text text-lg text-center mt-1 dark:text-white 
                    mm:max-w-sm sm:max-w-lg'>
                        Check out my latest projects that showcase my skills and expertise in web development.
                    </p>
                </div>

                <div className="projects grid gap-12 mm:px-0 lg:px-24 py-8">
                    {ProjectsData.map((item) => (
                        <ProjectItem key={item.id} {...item} />
                    ))}
                </div>

            </section>
        </>
    )
};

export default Projects;
