'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Get existing theme from html element (set by inline script)
        const htmlElement = document.documentElement;
        const currentlyDark = htmlElement.classList.contains('dark');

        // Check stored preference
        const savedMode = localStorage.getItem('darkMode');
        const hasStoredPreference = savedMode !== null;

        // Use current state from html element as primary source
        const shouldBeDark = hasStoredPreference ? savedMode === 'true' : currentlyDark;

        setIsDark(shouldBeDark);

        // Ensure html element matches our preference
        if (shouldBeDark && !currentlyDark) {
            htmlElement.classList.add('dark');
        } else if (!shouldBeDark && currentlyDark) {
            htmlElement.classList.remove('dark');
        }

        // Save preference if not stored
        if (!hasStoredPreference) {
            localStorage.setItem('darkMode', shouldBeDark.toString());
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);

        // Apply theme immediately to html element
        const htmlElement = document.documentElement;
        if (newDarkMode) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        // Save to localStorage
        localStorage.setItem('darkMode', newDarkMode.toString());
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="relative w-16 h-8 bg-gray-200 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Toggle dark mode"
        >
            <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${isDark ? 'translate-x-8' : 'translate-x-0'
                    }`}
            >
                {isDark ? (
                    // Moon icon
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" clipRule="evenodd" />
                    </svg>
                ) : (
                    // Sun icon
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                )}
            </div>
        </button>
    );
}