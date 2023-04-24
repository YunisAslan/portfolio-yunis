import React, { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeChanger = () => {

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
            <Button onClick={handleTheme} variant="ghost">
                {theme === "dark" ? <BsMoon /> : <BsSun />}
            </Button>
        </>
    )
};

export default ThemeChanger;
