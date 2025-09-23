import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: 'Blog & Insights',
    description: 'Explore our thoughts on software development, design, open-source technologies, and professional tips from the Antipaya team.',
};

const blogPosts = [
    {
        id: 1,
        title: "Building Modular React Applications: A Developer's Guide",
        excerpt: "Learn how to structure React applications for maximum reusability and maintainability. We share our proven patterns for component architecture.",
        category: "Development",
        readTime: "8 min read",
        date: "March 15, 2024",
        featured: true,
        tags: ["React", "Architecture", "Best Practices"]
    },
    {
        id: 2,
        title: "The Art of Brand Worldbuilding in Digital Spaces",
        excerpt: "Creating cohesive brand experiences across digital touchpoints requires more than just consistent colors. Here's how we approach digital brand storytelling.",
        category: "Design",
        readTime: "6 min read",
        date: "March 10, 2024",
        featured: true,
        tags: ["Branding", "Design", "Storytelling"]
    },
    {
        id: 3,
        title: "Open Source Tools That Changed Our Workflow",
        excerpt: "A curated list of open-source tools that have transformed how we work, from development to design to project management.",
        category: "Tools",
        readTime: "5 min read",
        date: "March 5, 2024",
        featured: false,
        tags: ["Open Source", "Productivity", "Workflow"]
    },
    {
        id: 4,
        title: "API Design Principles for Scalable Backends",
        excerpt: "Best practices for designing APIs that can grow with your business. Learn about versioning, documentation, and performance optimization.",
        category: "Development",
        readTime: "12 min read",
        date: "February 28, 2024",
        featured: false,
        tags: ["API", "Backend", "Scalability"]
    },
    {
        id: 5,
        title: "Flutter vs React Native: Our 2024 Perspective",
        excerpt: "An honest comparison based on real projects. When to choose Flutter, when to go with React Native, and factors that matter most.",
        category: "Development",
        readTime: "10 min read",
        date: "February 20, 2024",
        featured: false,
        tags: ["Flutter", "React Native", "Mobile"]
    },
    {
        id: 6,
        title: "Event Planning in the Digital Age: Lessons Learned",
        excerpt: "From virtual conferences to hybrid events, here's what we've learned about creating meaningful experiences in the digital era.",
        category: "Events",
        readTime: "7 min read",
        date: "February 15, 2024",
        featured: false,
        tags: ["Events", "Digital", "Experience"]
    }
];

const categories = ["All", "Development", "Design", "Tools", "Events"];

export default function Blog() {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Blog & <span className="text-primary">Insights</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Thoughts, tutorials, and insights from our team on software development,
                            design, open-source technologies, and the future of digital experiences.
                        </p>
                    </div>
                </section>

                {/* Featured Posts */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-16">
                            {featuredPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                >
                                    {/* Featured Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full font-medium">
                                                Featured
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Post Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium">
                                                {post.category}
                                            </span>
                                            <span className="text-sm text-gray-500">{post.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">{post.date}</span>
                                            <button className="text-primary hover:text-secondary font-medium text-sm transition-colors duration-300">
                                                Read More →
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Posts */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">All Articles</h2>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className="px-4 py-2 rounded-full font-medium transition-all duration-300 bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-200"
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`inline-block text-sm px-3 py-1 rounded-full font-medium ${post.category === 'Development' ? 'bg-primary/10 text-primary' :
                                                post.category === 'Design' ? 'bg-secondary/10 text-secondary' :
                                                    post.category === 'Tools' ? 'bg-accent/10 text-accent' :
                                                        'bg-gray-100 text-gray-700'
                                            }`}>
                                            {post.category}
                                        </span>
                                        <span className="text-sm text-gray-500">{post.readTime}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 2).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                        <button className="text-primary hover:text-secondary font-medium text-sm transition-colors duration-300">
                                            Read More →
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Stay in the Loop
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Get notified when we publish new articles and insights.
                                No spam, just valuable content delivered to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topics Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                What We Write About
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our content covers the full spectrum of modern digital development and design
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
                                <p className="text-sm text-gray-600">React, Flutter, APIs, and modern web technologies</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
                                <p className="text-sm text-gray-600">UX/UI principles, branding, and digital experiences</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                                <p className="text-sm text-gray-600">Emerging technologies and industry trends</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-gray-800/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Business</h3>
                                <p className="text-sm text-gray-600">Strategy, processes, and professional growth</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Have a topic you&apos;d like us to cover?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            We love hearing from our community. Suggest article topics or share your own insights.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
                        >
                            Get in Touch
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}