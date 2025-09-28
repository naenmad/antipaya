'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const { t } = useLanguage()

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-black dark:border-gray-700/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/logo.svg"
                                alt="Antipaya Logo"
                                width={40}
                                height={40}
                                className="drop-shadow-sm"
                            />
                            <h3 className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text hover:text-transparent">Antipaya</h3>
                        </div>
                        <p className="text-black dark:text-gray-300 text-sm leading-relaxed">
                            {t('footer.tagline')}<br />
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="p-2 rounded-lg text-black dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-lg text-black dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.62 0 11.988-5.367 11.988-11.988C24.005 5.367 18.637.001 12.017.001z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-lg text-black dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-lg text-black dark:text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-black dark:text-white">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="group flex items-center space-x-2 text-black dark:text-gray-300 hover:text-primary transition-all duration-300">
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    <span>{t('nav.home')}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="group flex items-center space-x-2 text-black dark:text-gray-300 hover:text-primary transition-all duration-300">
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span>{t('nav.about')}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="group flex items-center space-x-2 text-black dark:text-gray-300 hover:text-primary transition-all duration-300">
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    <span>{t('nav.services')}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="group flex items-center space-x-2 text-black dark:text-gray-300 hover:text-primary transition-all duration-300">
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                    <span>{t('nav.portfolio')}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="group flex items-center space-x-2 text-black dark:text-gray-300 hover:text-primary transition-all duration-300">
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                    <span>{t('nav.testimonials')}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="group flex items-center space-x-2 text-black dark:text-gray-300 hover:text-primary transition-all duration-300">
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span>{t('nav.contact')}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-black dark:text-white">{t('footer.services')}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-black dark:text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>{t('footer.softwareDev')}</span>
                            </li>
                            <li className="flex items-center space-x-2 text-black dark:text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>{t('footer.mobileDev')}</span>
                            </li>
                            <li className="flex items-center space-x-2 text-black dark:text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>{t('footer.branding')}</span>
                            </li>
                            <li className="flex items-center space-x-2 text-black dark:text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>{t('footer.eventPlanning')}</span>
                            </li>
                            <li className="flex items-center space-x-2 text-black dark:text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>{t('footer.documentation')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-black dark:text-white">{t('footer.contact')}</h4>
                        <div className="space-y-4">
                            <div className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </div>
                                <span className="text-black dark:text-gray-300 text-sm group-hover:text-primary transition-colors duration-300">antipaya@gmail.com</span>
                            </div>
                            <div className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-black dark:text-gray-300 text-sm group-hover:text-primary transition-colors duration-300">+62 851-8305-8315</span>
                            </div>
                            <div className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-black dark:text-gray-300 text-sm group-hover:text-primary transition-colors duration-300">Karawang, Indonesia</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-black dark:border-gray-700/50 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-black dark:text-gray-400 text-sm">
                            © {currentYear} Antipaya. {t('footer.rights')}
                        </div>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-black dark:text-gray-400 hover:text-primary text-sm transition-all duration-300 hover:underline">
                                {t('footer.privacy')}
                            </Link>
                            <Link href="/terms" className="text-black dark:text-gray-400 hover:text-primary text-sm transition-all duration-300 hover:underline">
                                {t('footer.terms')}
                            </Link>
                            <Link href="/sitemap" className="text-black dark:text-gray-400 hover:text-primary text-sm transition-all duration-300 hover:underline">
                                {t('footer.sitemap')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}