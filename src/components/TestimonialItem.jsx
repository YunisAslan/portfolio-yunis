import React from 'react'

const Testimonial = ({ ...oneInfo }) => {
    return (
        <>
            <div className="testimonial flex justify-center group">

                <div className="testimonial-theme bg-white rounded-lg border border-lightBorder p-4 dark:bg-blue-300/5 dark:border-darkBorder">

                    <blockquote className='blockquote text-blue-500 w-full max-w-lg font-medium self-center relative py-7 before:absolute before:content-["”"] text-8xl leading-none before:top-0 before:right-4 z-50'></blockquote>

                    <div className="testimonial-content pt-4">
                        <p className='text-[15px] dark:text-gray-100'>{oneInfo.testimonial_text}</p>
                    </div>

                    <div className='profile flex items-center justify-between pt-8'>
                        <h2 className='italic text-base font-[600] text-taxonomyBlack dark:text-gray-100'>
                            <span className='text-blue-500 text-lg'>@</span> {oneInfo.testimonial_person}
                        </h2>

                        <div className='w-16 h-16 overflow-hidden rounded-full'>
                            <img
                                src={oneInfo.testimonial_picture}
                                alt=""
                                className='rounded-full flex items-center'
                            />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Testimonial