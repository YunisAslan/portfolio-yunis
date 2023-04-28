import React from 'react'

const Testimonial = ({ testimonialPerson, testimonialText, testimonialPicture }) => {
    return (
        <>
            <div className="testimonial flex justify-center">

                <div className="testimonial-theme bg-white w-[18rem] rounded-md border border-lightBorder p-4 dark:bg-blue-300/5 dark:border-darkBorder">

                    <blockquote className='blockquote text-blue-500'></blockquote>

                    <div className="testimonial-content pt-4">
                        <p className='text-[15px] dark:text-gray-100'>{testimonialText}</p>

                    </div>


                    <div className='profile flex items-center justify-between pt-10'>
                        <h2 className='text-lg font-[600] text-taxonomyBlack dark:text-gray-100'>
                            {testimonialPerson}
                        </h2>

                        <img
                            src={testimonialPicture}
                            alt=""
                            className='w-[4rem] h-[4rem] rounded-full flex items-center'
                        />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Testimonial