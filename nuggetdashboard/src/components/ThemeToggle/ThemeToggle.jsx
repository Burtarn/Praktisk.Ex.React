import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    };

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    inputProps={{ 'aria-label': 'Tema växlare' }}
                />
            }
            label={theme === 'dark' ? 'Mörkt tema' : 'Ljust tema'}
        />
    );
};

export default ThemeToggle;