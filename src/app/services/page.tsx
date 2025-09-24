import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Comprehensive software development, branding, and digital solutions. From Flutter apps to Next.js platforms, API development to brand worldbuilding.',
};

export default function Services() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="text-primary">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From concept to deployment, we craft digital solutions that grow with your vision.
                            Every service is designed to be modular, scalable, and deeply meaningful.
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
                                    <h2 className="text-2xl font-bold text-gray-900">Software Development</h2>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Full-stack solutions built for performance, scalability, and user delight.
                                    We specialize in modern frameworks and cutting-edge technologies.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Flutter Mobile Apps</h3>
                                            <p className="text-sm text-gray-600">Cross-platform mobile applications with native performance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Next.js Web Platforms</h3>
                                            <p className="text-sm text-gray-600">Fast, SEO-optimized web applications with modern React</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Modular API Development</h3>
                                            <p className="text-sm text-gray-600">Scalable backend architectures and RESTful/GraphQL APIs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Cloud Architecture</h3>
                                            <p className="text-sm text-gray-600">AWS, Azure, and Google Cloud deployment solutions</p>
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
                                    <h2 className="text-2xl font-bold text-gray-900">Branding & Worldbuilding</h2>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    We craft brand identities that tell stories and create worlds that resonate.
                                    Every brand we build has soul and purpose.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Brand Identity Design</h3>
                                            <p className="text-sm text-gray-600">Logos, color systems, and visual language that speaks</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Brand Strategy</h3>
                                            <p className="text-sm text-gray-600">Positioning, messaging, and narrative development</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Digital Brand Experience</h3>
                                            <p className="text-sm text-gray-600">Cohesive brand implementation across all touchpoints</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Worldbuilding & Lore</h3>
                                            <p className="text-sm text-gray-600">Creating rich backstories and universes for your brand</p>
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
                                    <h2 className="text-2xl font-bold text-gray-900">Event & Experience Planning</h2>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Memorable experiences that bring communities together.
                                    From corporate events to creative gatherings, we make moments matter.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Corporate Events</h3>
                                            <p className="text-sm text-gray-600">Product launches, conferences, and team building experiences</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Community Gatherings</h3>
                                            <p className="text-sm text-gray-600">Workshops, meetups, and collaborative sessions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Virtual Experiences</h3>
                                            <p className="text-sm text-gray-600">Online events, webinars, and digital conferences</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Experience Design</h3>
                                            <p className="text-sm text-gray-600">Journey mapping and touchpoint optimization</p>
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
                                    <h2 className="text-2xl font-bold text-gray-900">Documentation & Workflow</h2>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Clear documentation and seamless handoffs that ensure your project&apos;s success
                                    long after we&apos;ve delivered it.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Technical Documentation</h3>
                                            <p className="text-sm text-gray-600">API docs, system architecture, and deployment guides</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Process Optimization</h3>
                                            <p className="text-sm text-gray-600">Workflow design and team collaboration strategies</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Knowledge Transfer</h3>
                                            <p className="text-sm text-gray-600">Training sessions and handoff documentation</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Maintenance Plans</h3>
                                            <p className="text-sm text-gray-600">Ongoing support and evolution strategies</p>
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
                                Our Process
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Every project follows our proven methodology, designed for transparency,
                                collaboration, and exceptional results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">1</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                                <p className="text-gray-600 text-sm">
                                    Understanding your vision, goals, and constraints through deep conversation and research.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">2</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                                <p className="text-gray-600 text-sm">
                                    Crafting a roadmap that aligns technology choices with business objectives.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">3</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Creation</h3>
                                <p className="text-gray-600 text-sm">
                                    Building with agile methodology, constant feedback, and iterative improvement.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">4</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Evolution</h3>
                                <p className="text-gray-600 text-sm">
                                    Launching, monitoring, and continuously improving based on real-world feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                            Ready to start your project?
                        </h2>
                        <p className="text-xl text-black mb-8 dark:text-white">
                            Let&apos;s discuss how we can bring your vision to life with our comprehensive services.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
                        >
                            Start a Conversation
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}