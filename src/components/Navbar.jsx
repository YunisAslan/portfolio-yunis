import React, { useRef, useState, useEffect } from "react";

// ICONS
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

import Button from './ui/Button';
import { navItems } from './NavItemsData';
import NavItem from './NavItem';

const Navbar = () => {

    // for navbar menu
    const [open, setOpen] = useState(false)
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
        </>
    )
};

export default Navbar;
