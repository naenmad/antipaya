'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        timeline: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage('Thank you! We&apos;ll get back to you within 24 hours.');
            setFormData({
                name: '',
                email: '',
                company: '',
                project: '',
                budget: '',
                timeline: '',
                message: ''
            });
        }, 1000);
    };

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            {t('contact.title')}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('contact.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Contact Methods */}
                <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-8 mb-16">

                            {/* Email */}
                            <div className="card-professional text-center">
                                <div className="icon-circle icon-circle-primary">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.methods.email.title')}</h3>
                                <p className="text-gray-600 mb-4">{t('contact.methods.email.description')}</p>
                                <a
                                    href="mailto:hello@antipaya.com"
                                    className="text-primary hover:text-secondary font-medium transition-colors duration-300"
                                >
                                    antipaya@gmail.com
                                </a>
                            </div>

                            {/* WhatsApp */}
                            <div className="card-whatsapp text-center">
                                <div className="icon-circle icon-circle-whatsapp">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.methods.whatsapp.title')}</h3>
                                <p className="text-gray-600 mb-4">{t('contact.methods.whatsapp.description')}</p>
                                <a
                                    href="https://wa.me/6285183058315"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#25D366] hover:text-[#1DA851] font-medium transition-colors duration-300"
                                >
                                    +62 851-8305-8315
                                </a>
                            </div>


                            {/* Social */}
                            <div className="card-accent text-center">
                                <div className="icon-circle icon-circle-accent">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.methods.social.title')}</h3>
                                <p className="text-gray-600 mb-4">{t('contact.methods.social.description')}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="text-accent hover:text-primary transition-colors duration-300">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-accent hover:text-primary transition-colors duration-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-accent hover:text-primary transition-colors duration-300">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                                {t('contact.form.title')}
                            </h2>
                            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
                                {t('contact.form.subtitle')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="rounded-2xl p-8 shadow-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                            <div className="grid md:grid-cols-2 gap-6">

                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.fields.name.label')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                                        style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                                        placeholder={t('contact.form.fields.name.placeholder')}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.fields.email.label')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                                        placeholder={t('contact.form.fields.email.placeholder')}
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.fields.company.label')}
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                                        placeholder={t('contact.form.fields.company.placeholder')}
                                    />
                                </div>

                                {/* Project Type */}
                                <div>
                                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.fields.project.label')}
                                    </label>
                                    <select
                                        id="project"
                                        name="project"
                                        required
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                                    >
                                        <option value="">{t('contact.form.fields.project.placeholder')}</option>
                                        <option value="web-development">{t('contact.form.fields.project.options.web')}</option>
                                        <option value="mobile-app">{t('contact.form.fields.project.options.mobile')}</option>
                                        <option value="api-backend">{t('contact.form.fields.project.options.api')}</option>
                                        <option value="branding">{t('contact.form.fields.project.options.branding')}</option>
                                        <option value="event-planning">{t('contact.form.fields.project.options.events')}</option>
                                        <option value="consultation">{t('contact.form.fields.project.options.consultation')}</option>
                                        <option value="other">{t('contact.form.fields.project.options.other')}</option>
                                    </select>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.fields.budget.label')}
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                                    >
                                        <option value="">{t('contact.form.fields.budget.placeholder')}</option>
                                        <option value="under-10k">{t('contact.form.fields.budget.options.under10k')}</option>
                                        <option value="10k-25k">{t('contact.form.fields.budget.options.10k25k')}</option>
                                        <option value="25k-50k">{t('contact.form.fields.budget.options.25k50k')}</option>
                                        <option value="50k-100k">{t('contact.form.fields.budget.options.50k100k')}</option>
                                        <option value="over-100k">{t('contact.form.fields.budget.options.over100k')}</option>
                                        <option value="discuss">{t('contact.form.fields.budget.options.discuss')}</option>
                                    </select>
                                </div>

                                {/* Timeline */}
                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contact.form.fields.timeline.label')}
                                    </label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                                    >
                                        <option value="">{t('contact.form.fields.timeline.placeholder')}</option>
                                        <option value="asap">{t('contact.form.fields.timeline.options.asap')}</option>
                                        <option value="1-2-months">{t('contact.form.fields.timeline.options.1to2months')}</option>
                                        <option value="3-6-months">{t('contact.form.fields.timeline.options.3to6months')}</option>
                                        <option value="6-12-months">{t('contact.form.fields.timeline.options.6to12months')}</option>
                                        <option value="flexible">{t('contact.form.fields.timeline.options.flexible')}</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mt-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('contact.form.fields.message.label')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                                    placeholder={t('contact.form.fields.message.placeholder')}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-primary text-white px-8 py-4 rounded-full hover:bg-secondary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                                </button>
                            </div>

                            {/* Submit Message */}
                            {submitMessage && (
                                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                                {t('contact.faq.title')}
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="faq-item rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                                    {t('contact.faq.q1.question')}
                                </h3>
                                <p style={{ color: 'var(--muted)' }}>
                                    {t('contact.faq.q1.answer')}
                                </p>
                            </div>

                            <div className="faq-item rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                                    {t('contact.faq.q2.question')}
                                </h3>
                                <p style={{ color: 'var(--muted)' }}>
                                    {t('contact.faq.q2.answer')}
                                </p>
                            </div>

                            <div className="faq-item rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                                    {t('contact.faq.q3.question')}
                                </h3>
                                <p style={{ color: 'var(--muted)' }}>
                                    {t('contact.faq.q3.answer')}
                                </p>
                            </div>

                            <div className="faq-item rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                                    {t('contact.faq.q4.question')}
                                </h3>
                                <p style={{ color: 'var(--muted)' }}>
                                    {t('contact.faq.q4.answer')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}