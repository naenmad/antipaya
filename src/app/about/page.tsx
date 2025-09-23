import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Antipaya&apos;s vision, mission, and philosophy of building modular, scalable, and soulful software solutions.',
};

export default function About() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="text-primary">Antipaya</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We&apos;re more than a software house. We&apos;re architects of digital experiences,
                            crafting solutions that bridge technology and humanity.
                        </p>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    To be the bridge between ambitious ideas and meaningful digital realities.
                                    We envision a world where technology serves humanity&apos;s greatest aspirations,
                                    where every line of code contributes to something larger than itself.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <p className="text-gray-700">
                                            <strong>Human-Centered:</strong> Technology that enhances human potential
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <p className="text-gray-700">
                                            <strong>Future-Ready:</strong> Solutions that evolve with tomorrow&apos;s needs
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <p className="text-gray-700">
                                            <strong>Accessible:</strong> Great design and technology for everyone
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        To empower organizations and individuals through modular, scalable,
                                        and deeply meaningful digital solutions. We build with soul, scale with clarity,
                                        and always keep the human experience at the center of everything we create.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Our Philosophy
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Three core principles guide everything we do
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Modular */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modular</h3>
                                <p className="text-gray-600 mb-6">
                                    Like building blocks, every component we create is designed to fit perfectly
                                    with others while maintaining its own integrity and purpose.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li>• Reusable components</li>
                                    <li>• Clean architectures</li>
                                    <li>• Scalable foundations</li>
                                    <li>• Flexible integrations</li>
                                </ul>
                            </div>

                            {/* Scalable */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                                    <div className="w-8 h-8 bg-secondary rounded-full"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable</h3>
                                <p className="text-gray-600 mb-6">
                                    From the first user to the millionth, from startup to enterprise.
                                    Our solutions grow with your ambitions.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li>• Performance optimization</li>
                                    <li>• Cloud-native design</li>
                                    <li>• Load balancing ready</li>
                                    <li>• Future-proof architecture</li>
                                </ul>
                            </div>

                            {/* Soulful */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Soulful</h3>
                                <p className="text-gray-600 mb-6">
                                    Technology with purpose. Every interaction tells a story,
                                    every interface sparks joy, every solution makes life better.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li>• User-centered design</li>
                                    <li>• Meaningful interactions</li>
                                    <li>• Emotional connection</li>
                                    <li>• Purpose-driven features</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                The People Behind Antipaya
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A diverse team of creators, builders, and dreamers united by a shared vision
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">Team</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Team</h3>
                                <p className="text-gray-600">
                                    Full-stack developers, mobile specialists, and DevOps engineers
                                    passionate about clean code and scalable solutions.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">Design</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Team</h3>
                                <p className="text-gray-600">
                                    UX/UI designers and brand strategists who believe that
                                    beautiful design is inseparable from meaningful function.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">Strategy</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Team</h3>
                                <p className="text-gray-600">
                                    Business analysts and project managers who ensure every solution
                                    aligns with your goals and drives real results.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Ready to work with us?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let&apos;s build something extraordinary together. Every great project starts with a conversation.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
                        >
                            Get In Touch
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}