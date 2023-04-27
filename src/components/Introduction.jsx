import React from 'react'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTheme } from '../hooks/useTheme';

const Introduction = () => {

  const { theme } = useTheme()

  return (
    <>

      <section className="introduction flex flex-col items-center lg:mt-24 mm:mt-32">
        <h2 className='mm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text dark:text-white'
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-duration="600">
          Hi, I'm Yunis.
        </h2>

        <span className='flex items-center text-[1.1rem] dark:text-white font-semibold text-transparent bg-clip-text pt-2'
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-duration="600">

          <HiOutlineLocationMarker
            className='mr-1 text-2xl dark:!text-white'
            style={{ stroke: theme === 'dark' ? "url(#dark-gradient)" : "url(#light-gradient)" }}
          // come in GradientIcons
          />
          Baku
        </span>
        <p className='text-transparent bg-clip-text text-lg text-center mt-3 px-6 dark:text-white'
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-duration="600">
          Currently, I'm engaged in the development of the frontend <br /> of websites using modern technologies.
        </p>

      </section>
    </>
  )
}

export default Introduction