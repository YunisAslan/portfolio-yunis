import React from 'react'

import { skillItems } from './SkillItems'
import SkillBox from './SkillBox'

const Skills = () => {

    return (
        <>
            <section className="skills-section mt-72 px-20 py-20 bg-[#FFF] dark:bg-blue-300/5">

                <div className="skills-head flex flex-col justify-center items-center">
                    <h2 className='mm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r tracking-wider dark:text-white p-1'>
                        Skills
                    </h2>

                    <p className='text-transparent bg-clip-text text-lg text-center mt-1 dark:text-white'>
                        I mainly use these technologies for projects.
                    </p>
                </div>
           
                <div className="skill-boxes grid mm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 mm:px-8 lg:px-16">
                    {skillItems.map((item, index) => (
                        <SkillBox key={index} mySkill={item.icon} />
                    ))}
                </div>

                <p className='text-transparent bg-clip-text text-lg text-center pt-3 dark:text-white'>
                    These modern technologies will provide you with a fast and advanced experience.
                </p>

            </section>

        </>
    )
}

export default Skills