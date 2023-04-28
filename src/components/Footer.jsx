import React from 'react'

import { AiOutlineTwitter, AiOutlineFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>

      <footer className='footer bg-[#fff] flex flex-col items-center mt-32 h-52 dark:bg-blue-300/5'>

        <div className="icons flex text-4xl mt-14 space-x-6">
          <a
            rel='noreferrer'
            href="https://twitter.com/Nekrolog_nekro"
            target="_blank"
            className='flex items-center justify-center w-10 h-10 rounded-lg hover:scale-105 hover:-translate-y-2 transition-all duration-700 text-taxonomyBlack hover:text-white hover:bg-taxonomyBlack  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack'>
            <AiOutlineTwitter />
          </a>
          <a
            rel='noreferrer'
            href="https://www.facebook.com/yunis.aslanov.9"
            target="_blank"
            className='flex items-center justify-center w-10 h-10 rounded-lg hover:scale-105 hover:-translate-y-2 transition-all duration-700 text-taxonomyBlack hover:text-white hover:bg-taxonomyBlack  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack'>
            <AiOutlineFacebook />
          </a>
          <a
            rel='noreferrer'
            href="https://www.linkedin.com/in/yunis-aslanov"
            target="_blank"
            className='flex items-center justify-center w-10 h-10 rounded-lg hover:scale-105 hover:-translate-y-2 transition-all duration-700 text-taxonomyBlack hover:text-white hover:bg-taxonomyBlack  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack'>
            <AiFillLinkedin />
          </a>
          <a
            rel='noreferrer'
            href="https://www.instagram.com/llll.yunis.llll"
            target="_blank"
            className='flex items-center justify-center w-10 h-10 rounded-lg hover:scale-105 hover:-translate-y-2 transition-all duration-700 text-taxonomyBlack hover:text-white hover:bg-taxonomyBlack  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack'><AiOutlineInstagram /></a>
          <a
            rel='noreferrer'
            href="https://github.com/YunisAslan"
            target="_blank"
            className='flex items-center justify-center w-10 h-10 rounded-lg hover:scale-105 hover:-translate-y-2 transition-all duration-700 text-taxonomyBlack hover:text-white hover:bg-taxonomyBlack  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack'><AiOutlineGithub /></a>
        </div>

        <span className='mm:text-xs sm:text-sm flex items-center mt-10 text-gray-600 dark:text-white'>
          Copyright &copy; 2023 Yunis Aslanov. All rights reserved.
        </span>
      </footer>
    </>

  )
}

export default Footer