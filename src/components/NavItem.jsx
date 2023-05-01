import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NavItem = ({ href, icon, title }) => {

  const { t } = useTranslation("nav");

  return (
    <>
      <NavLink
        to={`${href}`}
        className="nav-link mr-3 flex items-center rounded-lg p-2 text-[20px] hover:bg-gray-200"
      >
        {icon}
        <span className="text-gray-600">{t(title)}</span>
      </NavLink>
    </>
  );
};

export default NavItem;
