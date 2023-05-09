import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { TfiWorld } from "react-icons/tfi";
import AZFlag from "../assets/images/flags/azerbaijan.png";
import UKFlag from "../assets/images/flags/united-kingdom.png";

import { useTranslation } from "react-i18next";
import { LANG_LOCAL_STORAGE_KEY } from "../i18n";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem(LANG_LOCAL_STORAGE_KEY) || "en"
  );
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleLanguageChange = async (lang) => {
    try {
      await i18n.changeLanguage(lang);
      setLanguage(lang);
      localStorage.setItem(LANG_LOCAL_STORAGE_KEY, lang);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const handleOutsideMenu = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleOutsideMenu);
    };
  }, [menuRef, buttonRef]);

  return (
    <>
      <div className="relative">
        <Button
          title={t("introduction.lang_title")}
          ref={buttonRef}
          variant="ghost"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <TfiWorld />
        </Button>

        <div
          ref={menuRef}
          className={`language-menu clip-bar1 invisible absolute top-14 flex h-28 w-52 flex-col justify-center rounded-xl bg-white pl-4 text-left text-lg font-semibold opacity-0 shadow-menuShadow transition-all duration-500 ${
            openMenu
              ? "clip-bar2 !visible !opacity-100 transition-all duration-500"
              : ""
          } `}
        >
          <button onClick={() => handleLanguageChange("en")}>
            <span
              className={`${
                language === "en" && "text-taxonomyBlack"
              } mr-3 flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200`}
            >
              <img src={UKFlag} alt="" className="mr-3 w-5" /> English
            </span>
          </button>

          <button onClick={() => handleLanguageChange("az")}>
            <span
              className={`${
                language === "az" && "text-taxonomyBlack"
              } mr-3 flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200`}
            >
              <img src={AZFlag} alt="" className="mr-3 w-5" /> Azərbaycan
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
