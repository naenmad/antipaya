import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: 'Testimonials',
    description: 'What our clients say about working with Antipaya. Real stories from real projects that showcase our commitment to excellence.',
};

const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "CTO",
        company: "TechFlow Solutions",
        content: "Antipaya transformed our scattered systems into a cohesive, scalable platform. Their modular approach meant we could grow without technical debt. Simply outstanding work.",
        rating: 5,
        project: "Enterprise API Platform"
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        role: "Founder",
        company: "GreenLiving Co.",
        content: "The brand identity Antipaya created for us doesn&apos;t just look good—it tells our story. Every touchpoint feels authentic and purposeful. They truly understand what &apos;soulful&apos; means.",
        rating: 5,
        project: "Complete Brand Overhaul"
    },
    {
        id: 3,
        name: "Dr. Amanda Foster",
        role: "Medical Director",
        company: "HealthBridge Clinic",
        content: "Our patient management system has revolutionized how we operate. Antipaya&apos;s attention to healthcare workflows and user experience is unmatched.",
        rating: 5,
        project: "Healthcare Management Platform"
    },
    {
        id: 4,
        name: "James Liu",
        role: "Event Director",
        company: "Innovation Summit",
        content: "From concept to execution, Antipaya made our conference seamless. 500 attendees, zero stress. Their event planning expertise is world-class.",
        rating: 5,
        project: "Tech Conference 2024"
    },
    {
        id: 5,
        name: "Elena Vasquez",
        role: "Product Manager",
        company: "RetailNext",
        content: "The mobile app Antipaya built for us has 4.8 stars in the app store and growing user engagement every month. The Flutter implementation is flawless.",
        rating: 5,
        project: "E-Commerce Mobile App"
    },
    {
        id: 6,
        name: "David Park",
        role: "CEO",
        company: "CloudScale Systems",
        content: "Their documentation and handoff process is phenomenal. Six months later, our team is still discovering helpful details in their technical docs.",
        rating: 5,
        project: "API Gateway Implementation"
    }
];

export default function Testimonials() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Client <span className="text-primary">Testimonials</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with Antipaya
                            and the impact our solutions have made on their businesses.
                        </p>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Rating Stars */}
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-accent"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Testimonial Content */}
                                    <blockquote className="text-gray-700 mb-6 leading-relaxed">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </blockquote>

                                    {/* Client Info */}
                                    <div className="border-t border-gray-100 pt-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">
                                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                                <div className="text-sm text-gray-600">{testimonial.role}</div>
                                                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full inline-block">
                                            Project: {testimonial.project}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Client Satisfaction
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our commitment to excellence is reflected in these numbers
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">4.9/5</div>
                                <div className="text-gray-700 font-medium">Average Rating</div>
                                <div className="text-sm text-gray-500 mt-1">Based on 25+ reviews</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">98%</div>
                                <div className="text-gray-700 font-medium">Client Retention</div>
                                <div className="text-sm text-gray-500 mt-1">Long-term partnerships</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">100%</div>
                                <div className="text-gray-700 font-medium">On-Time Delivery</div>
                                <div className="text-sm text-gray-500 mt-1">Every project, every time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">85%</div>
                                <div className="text-gray-700 font-medium">Referral Rate</div>
                                <div className="text-sm text-gray-500 mt-1">Clients recommend us</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study Highlight */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        From Idea to Impact
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        &ldquo;When we started working with Antipaya, we had a vision but no clear path.
                                        They didn&apos;t just build our platform—they helped us understand our own business better.
                                        Today, we&apos;re processing 10x more transactions with the same team size.&rdquo;
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xl">SC</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Sarah Chen</div>
                                            <div className="text-sm text-gray-600">CTO, TechFlow Solutions</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-2xl font-bold text-primary mb-1">10x</div>
                                        <div className="text-sm text-gray-600">Transaction Volume Increase</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-2xl font-bold text-secondary mb-1">50%</div>
                                        <div className="text-sm text-gray-600">Faster Processing Time</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-2xl font-bold text-accent mb-1">99.9%</div>
                                        <div className="text-sm text-gray-600">System Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                            Ready to become our next success story?
                        </h2>
                        <p className="text-xl text-black mb-8 dark:text-white">
                            Join the growing list of satisfied clients who chose Antipaya for their digital transformation.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
                        >
                            Start Your Journey
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}