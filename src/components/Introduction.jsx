import React from 'react'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTheme } from '../hooks/useTheme';

import manOnTheBike from '../assets/images/man-on-a-bicycle.svg'

const Introduction = () => {

  const { theme } = useTheme()

  return (
    <>
      <section className="introduction flex flex-col items-center lg:mt-24 mm:mt-32">

        <h2 className='mm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text dark:text-white'>
          Hi, I'm Yunis.
        </h2>

        <span className='flex items-center text-[1.1rem] dark:text-white font-semibold text-transparent bg-clip-text pt-2'>

          <HiOutlineLocationMarker
            className='mr-1 text-2xl dark:!text-white'
            style={{ stroke: theme === 'dark' ? "url(#dark-gradient)" : "url(#light-gradient)" }}
          // come in GradientIcons
          />
          Baku
        </span>
        <p className='text-transparent bg-clip-text text-lg text-center mt-3 mm:px-12 md:px-6 dark:text-white max-w-xl'>
          Currently, I'm engaged in the development of the frontend of websites using modern technologies.
        </p>

      </section>
    </>
  )
}

export default Introduction