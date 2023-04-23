import React from 'react'

import { AiOutlineTwitter, AiOutlineFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>

      <footer className='footer bg-footer-bg flex flex-col items-center mt-24 h-[13rem] dark:bg-slate-800/30'>

        <div className="icons flex text-4xl mt-14 space-x-6">
          <a
            rel='noreferrer'
            href="https://twitter.com/Nekrolog_nekro"
            target="_blank"
            className='hover:scale-105 hover:-translate-y-2 transition-all duration-700
          hover:bg-gray-400 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-lg dark:text-white dark:hover:bg-gray-700'><AiOutlineTwitter /></a>
          <a
            rel='noreferrer'
            href="https://www.facebook.com/yunis.aslanov.9"
            target="_blank"
            className='hover:scale-105 hover:-translate-y-2 transition-all duration-700
          hover:bg-gray-400 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-lg dark:text-white dark:hover:bg-gray-700'><AiOutlineFacebook /></a>
          <a
            rel='noreferrer'
            href="https://www.linkedin.com/in/yunis-aslanov"
            target="_blank"
            className='hover:scale-105 hover:-translate-y-2 transition-all duration-700
          hover:bg-gray-400 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-lg dark:text-white dark:hover:bg-gray-700'><AiFillLinkedin />
          </a>
          <a
            rel='noreferrer'
            href="https://www.instagram.com/llll.yunis.llll"
            target="_blank"
            className='hover:scale-105 hover:-translate-y-2 transition-all duration-700
          hover:bg-gray-400 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-lg dark:text-white dark:hover:bg-gray-700'><AiOutlineInstagram /></a>
          <a
            rel='noreferrer'
            href="https://github.com/YunisAslan"
            target="_blank"
            className='hover:scale-105 hover:-translate-y-2 transition-all duration-700
          hover:bg-gray-400 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-lg dark:text-white dark:hover:bg-gray-700'><AiOutlineGithub /></a>
        </div>

        <span className='mm:text-xs sm:text-sm flex items-center mt-10 text-gray-600 dark:text-white'>Copyright &copy; 2023 Yunis Aslanov. All rights reserved.</span>
      </footer>
    </>

  )
}

export default Footer