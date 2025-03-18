// ThemeToggle.jsx
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button onClick={toggleTheme}>
            Växla till {theme === 'dark' ? 'ljus' : 'mörk'} tema
        </button>
    );
};

export default ThemeToggle;