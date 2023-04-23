import React from 'react'

const SkillLogo = ({ mySkill }) => {
    return (
        <>

            <div className='skill-container flex justify-center bg-gray-100 border-gray-100 py-8 rounded-[74px] md:mx-6 mm:mx-10 dark:bg-gradient-to-r dark:from-fromColorTestimonial dark:to-toColorTestimonial my-6'
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="600"
            >
                <div className='skill-logo w-[9rem] h-[8.5rem] flex justify-center'>
                    <img src={mySkill} alt=""/>
                </div>
            </div>


        </>
    )
}

export default SkillLogo