'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-20 bg-gradient-to-br from-white via-gray-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* 404 Illustration */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-full mb-6">
                                <svg
                                    className="w-16 h-16 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-8v.01M12 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-8xl lg:text-9xl font-bold text-primary mb-4">
                                404
                            </h1>
                        </div>

                        {/* Error Message */}
                        <div className="mb-8">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                {t('notFound.title')}
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                                {t('notFound.description')}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Link
                                href="/"
                                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                {t('notFound.backHome')}
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 bg-transparent text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                                {t('notFound.contact')}
                            </Link>
                        </div>

                        {/* Popular Links */}
                        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                {t('notFound.popularLinks')}
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <Link
                                    href="/about"
                                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                                >
                                    {t('nav.about')}
                                </Link>
                                <Link
                                    href="/services"
                                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                                >
                                    {t('nav.services')}
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                                >
                                    {t('nav.portfolio')}
                                </Link>
                                <Link
                                    href="/testimonials"
                                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                                >
                                    {t('nav.testimonials')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}