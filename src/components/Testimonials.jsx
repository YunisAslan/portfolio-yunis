import React from "react";

import TestimonialItem from "./TestimonialItem";
import TestimonialInfo from "../data/TestimonialInfo.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { useTranslation } from "react-i18next";

const TestimonialContainer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="testimonials-section relative px-10 py-10">
        <div className="testimonial-head flex flex-col items-center justify-center">
          <h2 className="bg-gradient-main bg-clip-text p-1 font-bold text-transparent dark:text-white mm:text-4xl md:text-5xl">
            {t("testimonials.title")}
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
  );
};

export default TestimonialContainer;
