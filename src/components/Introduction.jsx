import React from 'react'

import { HiOutlineLocationMarker } from "react-icons/hi";

const Introduction = () => {
  return (
    <>

      <section className="introduction flex flex-col items-center lg:mt-24 mm:mt-32">
        <h2 className='lg:text-[4.375rem] font-bold text-transparent bg-clip-text mm:text-[2.7rem]
        dark:text-white'
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-duration="600"
        >Hi, I'm Yunis.</h2>
        <span className='flex items-center text-[1.1rem] dark:text-white font-semibold text-transparent bg-clip-text'
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-duration="600"
        >
          <HiOutlineLocationMarker className='mr-1 text-gray-700 text-[1.4rem] dark:text-white' />
          Baku
        </span>
        <p className='text-transparent bg-clip-text text-[1.05rem] mt-3 text-center dark:text-white'
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-duration="600"
        >Currently, I'm engaged in the development of the frontend <br /> of websites using modern technologies.</p>

      </section>
    </>
  )
}

export default Introduction