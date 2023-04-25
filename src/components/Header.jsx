import React from 'react'

import BrandLogo from './ui/BrandLogo';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import { useTheme } from '../hooks/useTheme';
import Navbar from './Navbar';

const Header = () => {

    const { theme } = useTheme()

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
                    <Navbar />
                </div>

            </header>
        </>
    )
}

export default Header