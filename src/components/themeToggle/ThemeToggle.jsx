"use client";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/Contexts";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div
            style={
                theme === "light"
                    ? { color: "yellow", backgroundColor: "black" }
                    : { color: "white", backgroundColor: "darkgray" }
            }
            onClick={handleThemeToggle}
            className={styles.container}
        >
            <IoSunny />
            <FaCircle
                style={
                    theme === "light"
                        ? { right: "2px", color: "whitesmoke" }
                        : { left: "2px", color: "black" }
                }
                className={styles.themeTogglerCircle}
            />
            <IoMoon />
        </div>
    );
};

export default ThemeToggle;
