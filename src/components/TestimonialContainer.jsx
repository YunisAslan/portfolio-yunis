import React from 'react'

import { FaRegComment } from "react-icons/fa";
import Testimonial from './Testimonial';

import TestimonialInfo from '../data/TestimonialInfo.json';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";


const TestimonialContainer = () => {

    return (
        <>
            <div className="testimonial-container mt-16 mb-16 mx-5">

                <div className="testimonial-head flex justify-center"
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="700"
                >
                    <h2 className='text-3xl font-bold  bg-gradient-to-r uppercase dark:text-white text-transparent bg-clip-text tracking-wider'>Testimonials</h2>
                    <FaRegComment className='ml-3 text-2xl bg-clip-text text-gray-700 dark:text-white' />
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