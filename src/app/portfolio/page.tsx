'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';

// This would normally come from a database or CMS
const projects = [
    {
        id: 1,
        title: "E-Commerce Mobile App",
        category: "tech",
        description: "Cross-platform shopping app built with Flutter, featuring real-time inventory and seamless payments.",
        tech: ["Flutter", "Firebase", "Stripe API"],
        image: "/placeholder-project.jpg",
        featured: true
    },
    {
        id: 2,
        title: "Brand Identity for StartupXYZ",
        category: "branding",
        description: "Complete brand overhaul including logo design, color system, and brand guidelines for a fintech startup.",
        tech: ["Brand Strategy", "Visual Identity", "Guidelines"],
        image: "/placeholder-project.jpg",
        featured: true
    },
    {
        id: 3,
        title: "Healthcare Management Platform",
        category: "tech",
        description: "Next.js web platform for healthcare providers with patient management and appointment scheduling.",
        tech: ["Next.js", "PostgreSQL", "Prisma"],
        image: "/placeholder-project.jpg",
        featured: false
    },
    {
        id: 4,
        title: "Tech Conference 2024",
        category: "event",
        description: "Full event planning and execution for a 500-person technology conference including speaker management.",
        tech: ["Event Planning", "Speaker Management", "Logistics"],
        image: "/placeholder-project.jpg",
        featured: true
    },
    {
        id: 5,
        title: "API Gateway for Microservices",
        category: "tech",
        description: "Scalable API gateway handling authentication, rate limiting, and service orchestration.",
        tech: ["Node.js", "Docker", "Kong Gateway"],
        image: "/placeholder-project.jpg",
        featured: false
    },
    {
        id: 6,
        title: "Sustainable Fashion Brand",
        category: "branding",
        description: "Brand worldbuilding for eco-friendly fashion startup, including story development and visual identity.",
        tech: ["Brand Story", "Sustainable Design", "Packaging"],
        image: "/placeholder-project.jpg",
        featured: false
    }
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'tech', label: 'Technology' },
        { id: 'branding', label: 'Branding' },
        { id: 'event', label: 'Events' }
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
                            Our <span className="text-primary">Portfolio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A showcase of our best work across technology, branding, and experience design.
                            Each project represents our commitment to building with soul and scaling with clarity.
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
                                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
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
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                            <span className={`inline-block w-3 h-3 rounded-full ${project.category === 'tech' ? 'bg-primary' :
                                                    project.category === 'branding' ? 'bg-secondary' :
                                                        'bg-accent'
                                                }`}></span>
                                        </div>

                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">
                                            View Project
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
                                Project Impact
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Every project we deliver creates lasting value for our clients and their communities.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
                                <div className="text-gray-700 font-medium">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">25+</div>
                                <div className="text-gray-700 font-medium">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">100%</div>
                                <div className="text-gray-700 font-medium">On-Time Delivery</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">24/7</div>
                                <div className="text-gray-700 font-medium">Support Available</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Ready to create your success story?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let&apos;s build something remarkable together. Your project could be our next showcase.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
                        >
                            Start Your Project
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}