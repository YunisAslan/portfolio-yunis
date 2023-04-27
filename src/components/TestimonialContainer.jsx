import React from 'react'

import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";

import Testimonial from './Testimonial';
import TestimonialInfo from '../data/TestimonialInfo.json';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { useTheme } from '../hooks/useTheme';


const TestimonialContainer = () => {

    const { theme } = useTheme()

    return (
        <>
            <div className="testimonial-container mt-16 mb-16 mx-5">

                <div className="testimonial-head flex justify-center"
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="700"
                >
                    <h2 className='text-3xl font-bold bg-gradient-to-r uppercase text-transparent bg-clip-text tracking-wider dark:text-white'>Testimonials</h2>

                    <HiOutlineChatBubbleBottomCenter
                        className='ml-3 text-2xl dark:text-white'
                        style={{ stroke: theme === 'dark' ? "url(#dark-gradient)" : "url(#light-gradient)" }}
                    // come in GradientIcons
                    />
                </div>


                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
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
                    className="mySwiper mt-12"
                >

                    <div>
                        {
                            TestimonialInfo.map((OneInfo) => (
                                <SwiperSlide key={OneInfo.testimonial_id}><Testimonial testimonialImg={OneInfo.testimonial_id} testimonialPerson={OneInfo.testimonial_person} testimonialText={OneInfo.testimonial_text} testimonialPicture={OneInfo.testimonial_picture} /></SwiperSlide>
                            ))
                        }
                    </div>

                </Swiper>

            </div>
        </>
    )
}

export default TestimonialContainer