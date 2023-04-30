import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ href, icon, title }) => {
  return (
    <>
      <NavLink
        to={`${href}`}
        className="nav-link flex mr-3 items-center rounded-lg p-2 text-[20px] hover:bg-gray-200"
      >
        {icon}
        <span className="text-gray-600">{title}</span>
      </NavLink>
    </>
  );
};

export default NavItem;
