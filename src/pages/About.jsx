import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../components/Button'
import UseNavigate from '../hooks/UseNavigate'

// MY PHOTO
import ownImg from '../assets/images/photo-for-everything-4.jpg'

// CV
import MYCV from '../assets/Resume.pdf'

const About = () => {
    return (
        <section className="about-section">

            <UseNavigate />

            <div className="own-picture flex justify-center"
                data-aos="fade"
                data-aos-easing="ease-out"
                data-aos-duration="700"
            >
                <img src={ownImg} alt="" className='sm:w-[450px] mm:w-[300px]
                rounded-[2rem]' />
            </div>

            <div className="about-container lg:mx-[20rem] mm:mx-[1rem] dark:text-gray-100"
                data-aos="fade"
                data-aos-easing="ease-out"
                data-aos-duration="900"
            >
                <h2 className='text-4xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pt-12 pb-9 dark:text-white'
                    data-aos="fade"
                    data-aos-easing="ease-out"
                    data-aos-duration="600"
                >Hi again, I'm Yunis.</h2>

                <p>I am a junior front-end developer, living in Baku. I enjoy working with new technologies and developing websites. I can develop fast and dynamic web pages for front-end.</p>
                <br />
                <p>Currently, I work as a freelancer and study as a second-year student at Azerbaijan Technical University.</p>
                <br />
                <p>Outside of development, I love reading books and listening to different styles of music. I also enjoy spending time with my friends and family.</p>
                <br />
                <p>If you want to chat, feel free to <NavLink to="/contact" className='font-bold underline decoration-slate-900 transition-all hover:bg-slate-400 dark:hover:text-slate-900 rounded-sm p-1'>reach out.</NavLink></p>


                <a href={MYCV} download>
                    <Button btnText="Download CV" className="my-custom-btn button-left left" />
                </a>

            </div>

        </section>
    )
}

export default About