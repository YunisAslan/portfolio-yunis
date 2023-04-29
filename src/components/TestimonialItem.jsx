import React from "react";

const Testimonial = ({ ...oneInfo }) => {
  return (
    <>
      <div className="testimonial group flex justify-center">
        <div className="testimonial-theme rounded-lg border border-lightBorder bg-white p-4 dark:border-darkBorder dark:bg-blue-300/5">
          <blockquote className='blockquote relative z-50 w-full max-w-lg self-center py-7 text-8xl font-medium leading-none text-blue-500 before:absolute before:right-4 before:top-0 before:content-["”"]'></blockquote>

          <div className="testimonial-content pt-4">
            <p className="text-[15px] dark:text-gray-100">
              {oneInfo.testimonial_text}
            </p>
          </div>

          <div className="profile flex items-center justify-between pt-8">
            <h2 className="text-base font-[600] italic text-taxonomyBlack dark:text-gray-100">
              <span className="text-lg text-blue-500">@</span>
              {oneInfo.testimonial_person}
            </h2>

            <div className="h-16 w-16 overflow-hidden rounded-full">
              <img
                src={oneInfo.testimonial_picture}
                alt=""
                className="flex items-center rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
