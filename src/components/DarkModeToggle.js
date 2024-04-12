import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded"
        >
            Toggle Dark Mode
        </button>
    );
};

export default DarkModeToggle;
