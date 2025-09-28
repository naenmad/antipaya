'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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

    const getNavIcon = (href: string) => {
        const icons: { [key: string]: React.ReactElement } = {
            '/': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
            '/about': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            '/services': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            '/portfolio': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
            '/testimonials': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
            '/contact': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        };
        return icons[href] || icons['/'];
    };

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group relative z-10">
                            <div className="relative">
                                <Image
                                    src="/logo.svg"
                                    alt="Antipaya Logo"
                                    width={40}
                                    height={40}
                                    className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                                    priority
                                />
                            </div>
                            <div className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text hover:text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                                Antipaya
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navItems.slice(0, -1).map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative py-2 px-3 rounded-lg transition-all duration-300 font-medium group ${isActive(item.href)
                                        ? 'text-primary dark:text-primary bg-primary/5 dark:bg-primary/10'
                                        : 'text-black dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100/70 dark:hover:bg-gray-800/70'
                                        }`}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    {isActive(item.href) && (
                                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                    )}
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="relative bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 group overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center space-x-2">
                                    <span>{t('nav.contact')}</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>

                            {/* Toggle Controls */}
                            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200 dark:border-gray-700">
                                <LanguageToggle />
                                <DarkModeToggle />
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center space-x-3">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`relative p-2 rounded-lg transition-all duration-300 focus:outline-none ${isMenuOpen
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-black dark:text-gray-300 hover:text-primary hover:bg-gray-100/70 dark:hover:bg-gray-800/70'
                                    }`}
                                aria-label="Toggle navigation menu"
                            >
                                <div className="relative w-6 h-6">
                                    <span
                                        className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                                            }`}
                                    ></span>
                                    <span
                                        className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                            }`}
                                    ></span>
                                    <span
                                        className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                                            }`}
                                    ></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden fixed inset-x-0 top-16 z-40 transition-all duration-300 ease-in-out ${isMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-full pointer-events-none'
                }`}>
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-black/60 dark:border-gray-700/50 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-center mb-6 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/logo.svg"
                                    alt="Antipaya Logo"
                                    width={32}
                                    height={32}
                                    className="drop-shadow-sm"
                                />
                                <div className="text-xl font-bold text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text hover:text-transparent">
                                    Antipaya
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="space-y-2 mb-6">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group flex items-center space-x-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform ${isActive(item.href)
                                        ? 'text-primary bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary shadow-sm'
                                        : 'text-black dark:text-gray-300 hover:text-primary hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:translate-x-2'
                                        }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="text-primary">{getNavIcon(item.href)}</div>
                                    <span className="flex-1">{item.label}</span>
                                    {isActive(item.href) && (
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                            <Link
                                href="/contact"
                                className="group flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>{t('nav.contact')}</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Settings Section */}
                        <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                            <div className="flex items-center justify-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-black dark:text-gray-400">{t('nav.language')}</span>
                                    <LanguageToggle />
                                </div>
                                <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-black dark:text-gray-400">{t('nav.theme')}</span>
                                    <DarkModeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navigation;