import React, { useState, useEffect } from 'react'
// ICONS
import { HiBars3 } from "react-icons/hi2";
import { GrHomeRounded } from "react-icons/gr";
import { RxPerson, RxCross1 } from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { BsSun, BsMoonStars } from "react-icons/bs";

//IMAGES
import SiteLogoWhite from '../assets/images/yunis-logo-white.png';
import SiteLogoBlack from '../assets/images/yunis-logo.png'

import { NavLink } from 'react-router-dom';



const Navbar = () => {

    // for navbar menu
    const [open, setOpen] = useState(false)

    // for dark/light mode
    const [theme, setTheme] = useState(
        localStorage.getItem("theme")
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.removeItem("theme")
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <>
            <header className="header flex justify-between items-center h-[8rem] z-50"
                data-aos="fade-down"
                data-aos-easing="ease-out"
                data-aos-duration="600"
            >

                <div className="site-logo sm:w-[8rem] text-white mm:w-[6rem]">
                    <img
                        src={theme === 'dark' ? SiteLogoWhite : SiteLogoBlack}
                        alt=""
                    />
                </div>


                <div className="navbar z-50 flex items-center">

                    <button onClick={handleTheme} className='mr-3 mm:text-xl sm:text-3xl text-black'>
                        {theme === "dark" ? <BsMoonStars className='text-white' /> : <BsSun />}
                    </button>

                    <button className="menu-trigger flex items-center justify-center text-4xl relative rounded-full sm:w-[4rem] sm:h-[4rem] mm:w-12 mm:h-12 bg-white text-gray-600 cursor-pointer" onClick={() => { setOpen(open => !open) }}>
                        {open ? <RxCross1 className='text-2xl text-black' /> : <HiBars3 className='text-black' />}
                    </button>

                    <div className={`dropdown-menu ${open ? 'active' : 'inactive'} bg-white w-[13rem] h-[10rem] rounded-lg
                    mm:right-10 md:right-16 lg:right-40 top-28  absolute flex flex-col pl-6 pt-3 font-semibold text-lg`}>
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