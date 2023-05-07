import React from "react";
import { useTranslation } from "react-i18next";

import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {

  const {t} = useTranslation()

  return (
    <>
      <footer className="footer mt-32 flex h-52 flex-col items-center bg-[#fff] dark:bg-blue-300/5">
        <div className="icons mt-14 flex space-x-6 text-4xl">
          <a
            rel="noreferrer"
            href="https://twitter.com/Nekrolog_nekro"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-taxonomyBlack transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:bg-taxonomyBlack hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack"
          >
            <AiOutlineTwitter />
          </a>
          <a
            rel="noreferrer"
            href="https://www.facebook.com/yunis.aslanov.9"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-taxonomyBlack transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:bg-taxonomyBlack hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack"
          >
            <AiOutlineFacebook />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/yunis-aslanov"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-taxonomyBlack transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:bg-taxonomyBlack hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack"
          >
            <AiFillLinkedin />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/llll.yunis.llll"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-taxonomyBlack transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:bg-taxonomyBlack hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack"
          >
            <AiOutlineInstagram />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/YunisAslan"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-taxonomyBlack transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:bg-taxonomyBlack hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-taxonomyBlack"
          >
            <AiOutlineGithub />
          </a>
        </div>

        <span className="mt-10 flex items-center text-gray-600 dark:text-white mm:text-xs sm:text-sm">
          {t("footer.detail")}
        </span>
      </footer>
    </>
  );
};

export default Footer;
