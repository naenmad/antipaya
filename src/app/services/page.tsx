'use client';

import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
    const { t } = useLanguage();
    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            {t('services.title')}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">

                            {/* Software Development */}
                            <div className="card-professional">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">{t('services.software.title')}</h2>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {t('services.software.description')}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.software.features.flutter.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.software.features.flutter.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.software.features.nextjs.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.software.features.nextjs.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.software.features.api.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.software.features.api.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.software.features.cloud.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.software.features.cloud.description')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Branding & Worldbuilding */}
                            <div className="card-secondary">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">{t('services.branding.title')}</h2>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {t('services.branding.description')}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.branding.features.identity.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.branding.features.identity.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.branding.features.strategy.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.branding.features.strategy.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.branding.features.digital.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.branding.features.digital.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.branding.features.worldbuilding.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.branding.features.worldbuilding.description')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Event & Experience Planning */}
                            <div className="card-accent">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">{t('services.events.title')}</h2>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {t('services.events.description')}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.events.features.corporate.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.events.features.corporate.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.events.features.community.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.events.features.community.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.events.features.virtual.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.events.features.virtual.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.events.features.experience.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.events.features.experience.description')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Documentation & Workflow */}
                            <div className="card-neutral">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">{t('services.documentation.title')}</h2>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {t('services.documentation.description')}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.documentation.features.technical.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.documentation.features.technical.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.documentation.features.process.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.documentation.features.process.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.documentation.features.knowledge.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.documentation.features.knowledge.description')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{t('services.documentation.features.maintenance.title')}</h3>
                                            <p className="text-sm text-gray-600">{t('services.documentation.features.maintenance.description')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                {t('services.process.title')}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {t('services.process.subtitle')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">1</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('services.process.steps.discovery.title')}</h3>
                                <p className="text-gray-600 text-sm">
                                    {t('services.process.steps.discovery.description')}
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">2</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('services.process.steps.strategy.title')}</h3>
                                <p className="text-gray-600 text-sm">
                                    {t('services.process.steps.strategy.description')}
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">3</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('services.process.steps.creation.title')}</h3>
                                <p className="text-gray-600 text-sm">
                                    {t('services.process.steps.creation.description')}
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">4</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('services.process.steps.evolution.title')}</h3>
                                <p className="text-gray-600 text-sm">
                                    {t('services.process.steps.evolution.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                            {t('services.cta.title')}
                        </h2>
                        <p className="text-xl text-black mb-8 dark:text-white">
                            {t('services.cta.subtitle')}
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
                        >
                            {t('services.cta.button')}
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}