'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: t('nav.home') },
        { href: '/about', label: t('nav.about') },
        { href: '/services', label: t('nav.services') },
        { href: '/portfolio', label: t('nav.portfolio') },
        { href: '/testimonials', label: t('nav.testimonials') },
        { href: '/contact', label: t('nav.contact') },
    ];

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <Image
                                src="/logo.svg"
                                alt="Antipaya Logo"
                                width={40}
                                height={40}
                                className="transition-transform duration-300 group-hover:scale-110"
                                priority
                            />
                        </div>
                        <div className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                            Antipaya
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative transition-colors duration-200 font-medium ${isActive(item.href)
                                        ? 'text-primary dark:text-primary'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                                    } ${isActive(item.href)
                                        ? 'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                                        : ''
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors duration-200 font-medium"
                        >
                            {t('nav.contact')}
                        </Link>
                        <div className="flex items-center space-x-4 ml-4">
                            <LanguageToggle />
                            <DarkModeToggle />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                            <LanguageToggle />
                            <DarkModeToggle />
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none focus:text-primary"
                            aria-label="Toggle navigation menu"
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${isActive(item.href)
                                            ? 'text-primary bg-primary/10 dark:bg-primary/20'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="block w-full mt-4 bg-primary text-white px-3 py-2 rounded-full hover:bg-secondary transition-colors duration-200 font-medium text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;