'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'id' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="relative w-16 h-8 bg-gray-200 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Toggle language"
            title={`Switch to ${language === 'en' ? 'Indonesian' : 'English'}`}
        >
            <div
                className={`absolute top-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-xs font-bold ${language === 'id' ? 'translate-x-8' : 'translate-x-0'
                    }`}
            >
                <span className="text-black dark:text-white">
                    {language.toUpperCase()}
                </span>
            </div>

            {/* Background labels */}
            <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium">
                <span className={`transition-opacity duration-300 ${language === 'en' ? 'opacity-0' : 'opacity-60 text-black dark:text-gray-400'}`}>
                    EN
                </span>
                <span className={`transition-opacity duration-300 ${language === 'id' ? 'opacity-0' : 'opacity-60 text-black dark:text-gray-400'}`}>
                    ID
                </span>
            </div>
        </button>
    );
}