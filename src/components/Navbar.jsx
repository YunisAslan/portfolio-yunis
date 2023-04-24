import React, { useState, useEffect, useRef } from 'react'
// ICONS
import { HiBars3 } from "react-icons/hi2";
import { GrHomeRounded } from "react-icons/gr";
import { RxPerson, RxCross1 } from "react-icons/rx";
import { CiMail } from "react-icons/ci";

//IMAGES
import SiteLogoWhite from '../assets/images/yunis-logo-white.png';
import SiteLogoBlack from '../assets/images/yunis-logo.png'

import { NavLink } from 'react-router-dom';
import Button from './ui/Button';
import ThemeChanger from '../theme/ThemeChanger';
import SiteLogo from './SiteLogo';

const Navbar = () => {

    // for navbar menu
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)

    const handleClose = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [menuRef, handleClose]);

    return (
        <>
            <header className="header flex justify-between items-center h-32 mm:px-5 md:px-12 lg:px-40"
                data-aos="fade-down"
                data-aos-easing="ease-out"
                data-aos-duration="600"
            >

                <SiteLogo />

                <div className="navbar flex items-center">

                    <ThemeChanger />

                    <Button onClick={handleClose} className="m-2" variant="circle">
                        {open ? <RxCross1 className='text-2xl' /> : <HiBars3 />}
                    </Button>

                    <div ref={menuRef} className={`dropdown-menu ${open ? 'active' : 'inactive'} bg-white w-[13rem] h-[10rem] rounded-lg
                    mm:right-10 md:right-16 lg:right-40 top-28 absolute flex flex-col pl-6 pt-3 font-semibold text-lg z-50`}>
                        <ul>
                            <li>
                                <NavLink to="/" className='nav-link w-[9rem] p-2 flex items-center hover:bg-gray-200 rounded-lg pl-2 text-gray-600 text-[20px]'>
                                    <GrHomeRounded className='mr-3 flex font-bold text-2xl' /> Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="about" className='nav-link w-[9rem] p-2 flex items-center hover:bg-gray-200 rounded-lg pl-2 text-gray-600 text-[20px]'>
                                    <RxPerson className='mr-3 text-black text-2xl' /> About</NavLink>
                            </li>

                            <li>
                                <NavLink to="contact" className='nav-link w-[9rem] p-2 flex items-center hover:bg-gray-200 rounded-lg pl-2 text-gray-600 text-[20px]'>
                                    <CiMail className='mr-3 text-black text-2xl' /> Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </header>

        </>
    )
}

export default Navbar