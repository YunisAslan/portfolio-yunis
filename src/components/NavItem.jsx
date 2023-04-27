import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ href, icon, title }) => {
    return (
        <>
            <NavLink to={`${href}`} className='nav-link w-[9rem] p-2 flex items-center hover:bg-gray-200 rounded-lg pl-2 text-[20px]'>
                {icon}
                <span className="text-gray-600">{title}</span>
            </NavLink>
        </>


    )
};

export default NavItem;
