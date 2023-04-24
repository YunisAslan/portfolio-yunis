import React, { useState, useRef, useEffect } from 'react'
// ICONS
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

import BrandLogo from './ui/BrandLogo';
import Button from './ui/Button';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import { useTheme } from '../hooks/useTheme';

//navbar
import { navItems } from './NavItemsData';
import NavItem from './NavItem';



const Navbar = () => {

    // for navbar menu
    const [open, setOpen] = useState(false)

    const { theme } = useTheme()

    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) &&
                buttonRef.current && !buttonRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuRef, buttonRef]);

    const menuOpenClose = open ? <RxCross1 className='text-2xl' /> : <HiBars3 />

    return (
        <>
            <header className="flex justify-between items-center h-32 mm:px-5 md:px-12 lg:px-40"
                data-aos="fade-down"
                data-aos-easing="ease-out"
                data-aos-duration="600"
            >

                <div className="header-left">
                    {theme === 'dark'
                        ? <BrandLogo fill={"#fff"} width={100} />
                        : <BrandLogo fill={"#000"} width={100} />
                    }
                </div>

                <div className="header-right flex items-center">

                    <ThemeSwitcher />

                    <Button ref={buttonRef} onClick={() => setOpen(!open)} className="m-2" variant="circle">
                        {menuOpenClose}
                    </Button>

                    <nav ref={menuRef} className={`menu-container ${open ? 'active' : ''}`}>
                        {navItems.map((item, index) => (
                            <NavItem
                                key={index}
                                href={item.href}
                                title={item.title}
                                icon={item.icon}
                            />
                        ))}
                    </nav>
                </div>

            </header>

        </>
    )
}

export default Navbar