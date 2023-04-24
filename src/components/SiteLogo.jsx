import { useState, useEffect } from 'react'
import SiteLogoWhite from '../assets/images/yunis-logo-white.png';
import SiteLogoBlack from '../assets/images/yunis-logo.png';

function SiteLogo() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [logoImage, setLogoImage] = useState(theme === 'dark' ? SiteLogoWhite : SiteLogoBlack);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        setLogoImage(storedTheme === 'dark' ? SiteLogoWhite : SiteLogoBlack);
    }, []);

    useEffect(() => {
        setLogoImage(theme === 'dark' ? SiteLogoWhite : SiteLogoBlack);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="site-logo w-32 text-white">
            <img src={logoImage} alt="" />
        </div>
    );
}


export default SiteLogo