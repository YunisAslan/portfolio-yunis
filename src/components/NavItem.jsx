import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ href, icon, title }) => {
  return (
    <>
      <NavLink
        to={`${href}`}
        className="nav-link flex w-[9rem] items-center rounded-lg p-2 pl-2 text-[20px] hover:bg-gray-200"
      >
        {icon}
        <span className="text-gray-600">{title}</span>
      </NavLink>
    </>
  );
};

export default NavItem;
