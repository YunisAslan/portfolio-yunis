import React from 'react'

import ReactImg from '../assets/images/react.svg'
import CssImg from '../assets/images/css3.png'
import HtmlImg from '../assets/images/html5new.webp'

import JsImg from '../assets/images/js.svg'
import TailImg from '../assets/images/Tailwind.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";


import { FiSettings } from "react-icons/fi";
import SkillLogo from './SkillLogo'



const Skills = () => {
    return (
        <>
            <section className="skills-section mt-[14rem]">

                <div className="skills-head flex justify-center items-center"
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="700"
                >
                    <h2 className='text-4xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-gray-300 to-slate-800 dark:text-white'>My Skills</h2>
                    <FiSettings className='set-icon ml-3 text-[1.7rem] text-gray-700 dark:text-white' />
                </div>


                <Swiper
                    // slidesPerView={}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        324: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1324: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}

                    className="mySwiper mt-[3rem]"
                >

                    <div className="skills-logos">
                        <SwiperSlide><SkillLogo mySkill={HtmlImg} /></SwiperSlide>
                        <SwiperSlide><SkillLogo mySkill={CssImg} /></SwiperSlide>
                        <SwiperSlide><SkillLogo mySkill={TailImg} /></SwiperSlide>
                        <SwiperSlide><SkillLogo mySkill={JsImg} /></SwiperSlide>
                        <SwiperSlide><SkillLogo mySkill={ReactImg} /></SwiperSlide>
                    </div>

                </Swiper>



            </section>

        </>
    )
}

export default Skills