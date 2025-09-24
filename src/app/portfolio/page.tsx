'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// This would normally come from a database or CMS
const projects = [
    {
        id: 1,
        title: "FlowCommerce - E-Commerce Revolution",
        category: "tech",
        description: "Revolutionary e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless multi-payment integration. Built for scale with modern microservices architecture.",
        tech: ["Flutter", "Firebase", "Stripe API", "Machine Learning", "Redis"],
        image: "/placeholder-project.jpg",
        featured: true,
        stats: { users: "50K+", conversion: "23%", uptime: "99.9%" },
        year: "2024",
        client: "FlowCommerce Inc.",
        duration: "6 months"
    },
    {
        id: 2,
        title: "FinTech Brand Identity - NeoBank",
        category: "branding",
        description: "Complete brand transformation for a digital bank startup. Created comprehensive brand guidelines, visual identity system, and digital-first brand experience that resonates with Gen-Z users.",
        tech: ["Brand Strategy", "Visual Identity", "Guidelines", "Digital Design", "Motion Graphics"],
        image: "/placeholder-project.jpg",
        featured: true,
        stats: { awareness: "300%", engagement: "180%", satisfaction: "4.8/5" },
        year: "2024",
        client: "NeoBank Solutions",
        duration: "4 months"
    },
    {
        id: 3,
        title: "HealthBridge - Medical Management Suite",
        category: "tech",
        description: "Comprehensive healthcare management platform serving 100+ clinics. Features include patient records, appointment scheduling, telemedicine integration, and automated billing systems.",
        tech: ["Next.js", "PostgreSQL", "Prisma", "WebRTC", "FHIR"],
        image: "/placeholder-project.jpg",
        featured: false,
        stats: { clinics: "100+", patients: "10K+", efficiency: "40%" },
        year: "2023",
        client: "HealthBridge Network",
        duration: "8 months"
    },
    {
        id: 4,
        title: "InnovateTech Summit 2024",
        category: "event",
        description: "Premier technology conference bringing together 2000+ tech leaders, 50+ speakers, and 100+ companies. Full event planning, digital platform, and hybrid experience management.",
        tech: ["Event Planning", "Speaker Management", "Logistics", "Streaming Platform", "Mobile App"],
        image: "/placeholder-project.jpg",
        featured: true,
        stats: { attendees: "2000+", speakers: "50+", satisfaction: "4.9/5" },
        year: "2024",
        client: "Tech Innovation Council",
        duration: "12 months"
    },
    {
        id: 5,
        title: "CloudScale API Gateway",
        category: "tech",
        description: "Enterprise-grade API gateway processing 1M+ requests daily. Features advanced authentication, rate limiting, caching, and real-time monitoring for microservices architecture.",
        tech: ["Node.js", "Docker", "Kong Gateway", "Kubernetes", "Prometheus"],
        image: "/placeholder-project.jpg",
        featured: false,
        stats: { requests: "1M+/day", latency: "<50ms", availability: "99.99%" },
        year: "2023",
        client: "CloudScale Systems",
        duration: "5 months"
    },
    {
        id: 6,
        title: "EcoFashion Brand Universe",
        category: "branding",
        description: "Sustainable fashion brand worldbuilding including brand story, packaging design, digital presence, and social impact messaging. Created authentic connection with eco-conscious consumers.",
        tech: ["Brand Story", "Sustainable Design", "Packaging", "Content Strategy", "Social Impact"],
        image: "/placeholder-project.jpg",
        featured: false,
        stats: { engagement: "250%", sales: "180%", impact: "Carbon Neutral" },
        year: "2023",
        client: "EcoFashion Co.",
        duration: "6 months"
    },
    {
        id: 7,
        title: "EdTech Learning Platform",
        category: "tech",
        description: "Interactive learning platform serving 25K+ students with AI-powered personalized learning paths, live classes, and comprehensive progress tracking.",
        tech: ["React", "Node.js", "MongoDB", "WebRTC", "Machine Learning"],
        image: "/placeholder-project.jpg",
        featured: false,
        stats: { students: "25K+", completion: "85%", satisfaction: "4.7/5" },
        year: "2023",
        client: "EduTech Academy",
        duration: "7 months"
    },
    {
        id: 8,
        title: "Smart City IoT Dashboard",
        category: "tech",
        description: "Real-time city management dashboard integrating 1000+ IoT sensors for traffic, air quality, and energy monitoring. Helping cities make data-driven decisions.",
        tech: ["React", "Python", "InfluxDB", "IoT", "Data Visualization"],
        image: "/placeholder-project.jpg",
        featured: false,
        stats: { sensors: "1000+", cities: "5", efficiency: "30%" },
        year: "2024",
        client: "Smart City Solutions",
        duration: "10 months"
    }
];

export default function Portfolio() {
    const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: t('portfolio.filter.all') },
        { id: 'tech', label: t('portfolio.filter.technology') },
        { id: 'branding', label: t('portfolio.filter.branding') },
        { id: 'event', label: t('portfolio.filter.events') }
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            {t('portfolio.title')}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('portfolio.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="py-12 bg-white border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="card-neutral overflow-hidden group"
                                >
                                    {/* Project Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    {project.category === 'tech' && (
                                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                        </svg>
                                                    )}
                                                    {project.category === 'branding' && (
                                                        <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                                        </svg>
                                                    )}
                                                    {project.category === 'event' && (
                                                        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                {project.featured && (
                                                    <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                                                        Featured
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Project Year Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <span>{project.client}</span>
                                                    <span>•</span>
                                                    <span>{project.duration}</span>
                                                </div>
                                            </div>
                                            <span className={`inline-block w-3 h-3 rounded-full flex-shrink-0 ${project.category === 'tech' ? 'bg-primary' :
                                                project.category === 'branding' ? 'bg-secondary' :
                                                    'bg-accent'
                                                }`}></span>
                                        </div>

                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Project Stats */}
                                        {project.stats && (
                                            <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                                                {Object.entries(project.stats).map(([key, value], index) => (
                                                    <div key={index} className="text-center">
                                                        <div className="text-sm font-bold text-gray-900">{value}</div>
                                                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 3).map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="inline-block bg-gray-200 text-gray-500 text-xs px-2 py-1 rounded-md font-medium">
                                                    +{project.tech.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium group-hover:bg-primary">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No projects found in this category.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                {t('portfolio.stats.title')}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {t('portfolio.stats.subtitle')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
                                <div className="text-gray-700 font-medium">{t('portfolio.stats.projects')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">25+</div>
                                <div className="text-gray-700 font-medium">{t('portfolio.stats.clients')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">100%</div>
                                <div className="text-gray-700 font-medium">{t('portfolio.stats.delivery')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">24/7</div>
                                <div className="text-gray-700 font-medium">{t('portfolio.stats.support')}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                            {t('portfolio.cta.title')}
                        </h2>
                        <p className="text-xl text-black mb-8 dark:text-white">
                            {t('portfolio.cta.subtitle')}
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
                        >
                            {t('portfolio.cta.button')}
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}