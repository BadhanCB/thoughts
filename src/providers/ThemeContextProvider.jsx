"use client"
import { ThemeContext } from '@/contexts/Contexts';
import { useEffect, useState } from 'react';

const getFromLocalStorage = () => {
    let value;
    if(typeof window !== "undefined"){
        value = window.localStorage.getItem('theme');
    }
    return value || 'light';
}

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(getFromLocalStorage());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{mounted && <div className={theme}>{children}</div>}</ThemeContext.Provider>
    );
};

export default ThemeContextProvider;