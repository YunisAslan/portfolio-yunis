import React from 'react'

import TestimonialItem from './TestimonialItem';
import TestimonialInfo from '../data/TestimonialInfo.json';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const TestimonialContainer = () => {

    return (
        <>
            <div className="testimonials-section py-10 px-10 relative">

                <div className="testimonial-head flex flex-col justify-center items-center">
                    <h2 className='mm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r dark:text-white p-1'>
                        Testimonials
                    </h2>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
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
                        {TestimonialInfo.map((oneInfo) => (
                            <SwiperSlide key={oneInfo.id}>
                                <TestimonialItem {...oneInfo} />
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>

            </div>
        </>
    )
}

export default TestimonialContainer