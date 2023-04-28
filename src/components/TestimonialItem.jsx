import React from 'react'

const Testimonial = ({ testimonialPerson, testimonialText,testimonialPicture }) => {
    return (
        <>
            <div className="testimonial flex justify-center py-5">
                <div className="testimonial-theme w-[17.7rem] h-[20rem] rounded-[2.75rem] bg-gray-100
                dark:bg-gradient-to-r dark:from-fromColorTestimonial dark:to-toColorTestimonial px-1">

                    <div className="testimonial-content pl-4 px-2 pt-4">
                        <img
                            src={testimonialPicture}
                            alt=""
                            className='w-[4rem] h-[4rem] rounded-full mb-5 flex items-center' />
                        <h2
                            className='border-t-[1px] border-gray-300 dark:border-gray-500 mr-7 pt-3 mb-3 text-xl font-bold dark:text-gray-100'>
                            {testimonialPerson}
                        </h2>
                        <p className='text-[15px] dark:text-gray-100'>{testimonialText}</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Testimonial