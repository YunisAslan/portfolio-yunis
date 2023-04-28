import React from 'react'

import TestimonialItem from './TestimonialItem';
import TestimonialInfo from '../data/TestimonialInfo.json';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { useTheme } from '../hooks/useTheme';


const TestimonialContainer = () => {

    const { theme } = useTheme()

    return (
        <>
            <div className="testimonials-section py-10 px-10">

                <div className="testimonial-head flex flex-col justify-center items-center">
                    <h2 className='mm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r tracking-wider dark:text-white p-1'>
                        Testimonials
                    </h2>

                    <p className='text-transparent bg-clip-text text-lg text-center mt-1 dark:text-white'>
                        I mainly use these technologies for projects.
                    </p>
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
                                <SwiperSlide key={OneInfo.testimonial_id}><TestimonialItem testimonialImg={OneInfo.testimonial_id} testimonialPerson={OneInfo.testimonial_person} testimonialText={OneInfo.testimonial_text} testimonialPicture={OneInfo.testimonial_picture} /></SwiperSlide>
                            ))
                        }
                    </div>

                </Swiper>

            </div>
        </>
    )
}

export default TestimonialContainer