'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation files
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.blog': 'Blog',
        'nav.language': 'Language',
        'nav.theme': 'Theme',

        // Home page
        'home.hero.title1': 'Build with',
        'home.hero.title2': 'soul.',
        'home.hero.title3': 'Scale with',
        'home.hero.title4': 'clarity.',
        'home.hero.subtitle': "We're Antipaya — a software & digital house crafting modular solutions that grow with your vision.",
        'home.hero.cta1': 'Explore Our Services',
        'home.hero.cta2': 'See Our Work',

        'home.intro.title': "We're not just another software house",
        'home.intro.subtitle': 'We build experiences that matter. From Flutter mobile apps to Next.js web platforms, from brand worldbuilding to seamless API architectures — everything we create is designed to be modular, scalable, and deeply meaningful.',

        'home.features.modular.title': 'Modular',
        'home.features.modular.desc': 'Every component, every system, every solution — built to adapt and evolve with your needs.',
        'home.features.scalable.title': 'Scalable',
        'home.features.scalable.desc': 'From MVP to enterprise. Our architecture grows with your ambitions, no matter how big.',
        'home.features.soulful.title': 'Soulful',
        'home.features.soulful.desc': 'Technology with purpose. Every line of code carries intention, every design tells a story.',

        'home.cta.title': 'Ready to build something extraordinary?',
        'home.cta.subtitle': "Let's turn your vision into reality. Start with a conversation.",
        'home.cta.button': 'Start Your Project',

        // Toast messages
        'toast.welcome': "Welcome to Antipaya — let's build something meaningful.",

        // Not Found page
        'notFound.title': 'Page Not Found',
        'notFound.description': 'The page you\'re looking for doesn\'t exist. It might have been moved, deleted, or you entered the wrong URL.',
        'notFound.backHome': 'Back to Home',
        'notFound.contact': 'Contact Us',
        'notFound.popularLinks': 'Popular Pages',

        // Stats
        'stats.projects': 'Projects',
        'stats.clients': 'Clients',

        // Project names (can be left in English or localized)
        'project.flowcommerce': 'FlowCommerce API',
        'project.healthbridge': 'HealthBridge Platform',
        'project.neobank': 'NeoBank Identity',

        // Footer
        'footer.tagline': 'Build with soul. Scale with clarity.',
        'footer.description': 'Modular, creative, and professional solutions for your digital needs.',
        'footer.quickLinks': 'Quick Links',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.sitemap': 'Sitemap',
        'footer.softwareDev': 'Software Development',
        'footer.mobileDev': 'Mobile App Development',
        'footer.branding': 'Branding & Design',
        'footer.eventPlanning': 'Event Planning',
        'footer.documentation': 'Documentation',

        // About page
        'about.title': 'About Antipaya',
        'about.subtitle': "We're more than a software house. We're architects of digital experiences, crafting solutions that bridge technology and humanity.",
        'about.vision.title': 'Our Vision',
        'about.vision.content': "To be the bridge between ambitious ideas and meaningful digital realities. We envision a world where technology serves humanity's greatest aspirations, where every line of code contributes to something larger than itself.",
        'about.mission.title': 'Our Mission',
        'about.philosophy.title': 'Our Philosophy',
        'about.philosophy.subtitle': 'Three core principles guide everything we do',
        'about.team.title': 'The People Behind Antipaya',
        'about.team.subtitle': 'A diverse team of creators, builders, and dreamers united by a shared vision',
        'about.cta.title': 'Ready to work with us?',
        'about.cta.subtitle': "Let's build something extraordinary together. Every great project starts with a conversation.",
        'about.cta.button': 'Get In Touch',

        // About page details
        'about.mission.content': 'To empower organizations and individuals through modular, scalable, and deeply meaningful digital solutions. We build with soul, scale with clarity, and always keep the human experience at the center of everything we create.',
        'about.vision.points.humanCentered': '<strong>Human-Centered:</strong> Technology that enhances human potential',
        'about.vision.points.futureReady': '<strong>Future-Ready:</strong> Solutions that evolve with tomorrow\'s needs',
        'about.vision.points.accessible': '<strong>Accessible:</strong> Great design and technology for everyone',

        // Philosophy details
        'about.philosophy.modular.title': 'Modular',
        'about.philosophy.modular.description': 'Like building blocks, every component we create is designed to fit perfectly with others while maintaining its own integrity and purpose.',
        'about.philosophy.modular.points.reusable': 'Reusable components',
        'about.philosophy.modular.points.clean': 'Clean architectures',
        'about.philosophy.modular.points.scalable': 'Scalable foundations',
        'about.philosophy.modular.points.flexible': 'Flexible integrations',

        'about.philosophy.scalable.title': 'Scalable',
        'about.philosophy.scalable.description': 'From the first user to the millionth, from startup to enterprise. Our solutions grow with your ambitions.',
        'about.philosophy.scalable.points.performance': 'Performance optimization',
        'about.philosophy.scalable.points.cloud': 'Cloud-native design',
        'about.philosophy.scalable.points.loadBalancing': 'Load balancing ready',
        'about.philosophy.scalable.points.futureProof': 'Future-proof architecture',

        'about.philosophy.soulful.title': 'Soulful',
        'about.philosophy.soulful.description': 'Technology with purpose. Every interaction tells a story, every interface sparks joy, every solution makes life better.',
        'about.philosophy.soulful.points.userCentered': 'User-centered design',
        'about.philosophy.soulful.points.meaningful': 'Meaningful interactions',
        'about.philosophy.soulful.points.emotional': 'Emotional connection',
        'about.philosophy.soulful.points.purposeDriven': 'Purpose-driven features',

        // Services page
        'services.title': 'Our Services',
        'services.subtitle': 'From concept to deployment, we craft digital solutions that grow with your vision. Every service is designed to be modular, scalable, and deeply meaningful.',

        // Software Development
        'services.software.title': 'Software Development',
        'services.software.description': 'Full-stack solutions built for performance, scalability, and user delight. We specialize in modern frameworks and cutting-edge technologies.',
        'services.software.features.flutter.title': 'Flutter Mobile Apps',
        'services.software.features.flutter.description': 'Cross-platform mobile applications with native performance',
        'services.software.features.nextjs.title': 'Next.js Web Platforms',
        'services.software.features.nextjs.description': 'Fast, SEO-optimized web applications with modern React',
        'services.software.features.api.title': 'Modular API Development',
        'services.software.features.api.description': 'Scalable backend architectures and RESTful/GraphQL APIs',
        'services.software.features.cloud.title': 'Cloud Architecture',
        'services.software.features.cloud.description': 'AWS, Azure, and Google Cloud deployment solutions',

        // Branding & Worldbuilding
        'services.branding.title': 'Branding & Worldbuilding',
        'services.branding.description': 'We craft brand identities that tell stories and create worlds that resonate. Every brand we build has soul and purpose.',
        'services.branding.features.identity.title': 'Brand Identity Design',
        'services.branding.features.identity.description': 'Logos, color systems, and visual language that speaks',
        'services.branding.features.strategy.title': 'Brand Strategy',
        'services.branding.features.strategy.description': 'Positioning, messaging, and narrative development',
        'services.branding.features.digital.title': 'Digital Brand Experience',
        'services.branding.features.digital.description': 'Cohesive brand implementation across all touchpoints',
        'services.branding.features.worldbuilding.title': 'Worldbuilding & Lore',
        'services.branding.features.worldbuilding.description': 'Creating rich backstories and universes for your brand',

        // Events & Experience Planning
        'services.events.title': 'Event & Experience Planning',
        'services.events.description': 'Memorable experiences that bring communities together. From corporate events to creative gatherings, we make moments matter.',
        'services.events.features.corporate.title': 'Corporate Events',
        'services.events.features.corporate.description': 'Product launches, conferences, and team building experiences',
        'services.events.features.community.title': 'Community Gatherings',
        'services.events.features.community.description': 'Workshops, meetups, and collaborative sessions',
        'services.events.features.virtual.title': 'Virtual Experiences',
        'services.events.features.virtual.description': 'Online events, webinars, and digital conferences',
        'services.events.features.experience.title': 'Experience Design',
        'services.events.features.experience.description': 'Journey mapping and touchpoint optimization',

        // Documentation & Workflow
        'services.documentation.title': 'Documentation & Workflow',
        'services.documentation.description': 'Clear documentation and seamless handoffs that ensure your project\'s success long after we\'ve delivered it.',
        'services.documentation.features.technical.title': 'Technical Documentation',
        'services.documentation.features.technical.description': 'API docs, system architecture, and deployment guides',
        'services.documentation.features.process.title': 'Process Optimization',
        'services.documentation.features.process.description': 'Workflow design and team collaboration strategies',
        'services.documentation.features.knowledge.title': 'Knowledge Transfer',
        'services.documentation.features.knowledge.description': 'Training sessions and handoff documentation',
        'services.documentation.features.maintenance.title': 'Maintenance Plans',
        'services.documentation.features.maintenance.description': 'Ongoing support and evolution strategies',

        // Process
        'services.process.title': 'Our Process',
        'services.process.subtitle': 'Every project follows our proven methodology, designed for transparency, collaboration, and exceptional results.',
        'services.process.steps.discovery.title': 'Discovery',
        'services.process.steps.discovery.description': 'Understanding your vision, goals, and constraints through deep conversation and research.',
        'services.process.steps.strategy.title': 'Strategy',
        'services.process.steps.strategy.description': 'Crafting a roadmap that aligns technology choices with business objectives.',
        'services.process.steps.creation.title': 'Creation',
        'services.process.steps.creation.description': 'Building with agile methodology, constant feedback, and iterative improvement.',
        'services.process.steps.evolution.title': 'Evolution',
        'services.process.steps.evolution.description': 'Launching, monitoring, and continuously improving based on real-world feedback.',

        // Services CTA
        'services.cta.title': 'Ready to start your project?',
        'services.cta.subtitle': "Let's discuss how we can bring your vision to life with our comprehensive services.",
        'services.cta.button': 'Start a Conversation',

        // Portfolio page
        'portfolio.title': 'Our Portfolio',
        'portfolio.subtitle': 'A showcase of our best work across technology, branding, and experience design. Each project represents our commitment to building with soul and scaling with clarity.',
        'portfolio.filter.all': 'All Projects',
        'portfolio.filter.technology': 'Technology',
        'portfolio.filter.branding': 'Branding',
        'portfolio.filter.events': 'Events',
        'portfolio.stats.title': 'Project Impact',
        'portfolio.stats.subtitle': 'Every project we deliver creates lasting value for our clients and their communities.',
        'portfolio.stats.projects': 'Projects Delivered',
        'portfolio.stats.clients': 'Happy Clients',
        'portfolio.stats.delivery': 'On-Time Delivery',
        'portfolio.stats.support': 'Support Available',
        'portfolio.cta.title': 'Ready to create your success story?',
        'portfolio.cta.subtitle': "Let's build something remarkable together. Your project could be our next showcase.",
        'portfolio.cta.button': 'Start Your Project',

        // Contact page
        'contact.title': "Let's Connect",
        'contact.subtitle': "Ready to turn your vision into reality? We'd love to hear about your project and explore how we can build something extraordinary together.",

        // Contact methods
        'contact.methods.email.title': 'Email Us',
        'contact.methods.email.description': 'For detailed project discussions and proposals',
        'contact.methods.whatsapp.title': 'WhatsApp',
        'contact.methods.whatsapp.description': 'Quick questions and immediate responses',
        'contact.methods.social.title': 'Follow Us',
        'contact.methods.social.description': 'Stay updated with our latest work and insights',

        // Contact form
        'contact.form.title': 'Start Your Project',
        'contact.form.subtitle': "Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.",
        'contact.form.fields.name.label': 'Full Name *',
        'contact.form.fields.name.placeholder': 'Your full name',
        'contact.form.fields.email.label': 'Email Address *',
        'contact.form.fields.email.placeholder': 'your.email@company.com',
        'contact.form.fields.company.label': 'Company/Organization',
        'contact.form.fields.company.placeholder': 'Your company name',
        'contact.form.fields.project.label': 'Project Type *',
        'contact.form.fields.project.placeholder': 'Select project type',
        'contact.form.fields.project.options.web': 'Web Development',
        'contact.form.fields.project.options.mobile': 'Mobile App',
        'contact.form.fields.project.options.api': 'API/Backend',
        'contact.form.fields.project.options.branding': 'Branding & Design',
        'contact.form.fields.project.options.events': 'Event Planning',
        'contact.form.fields.project.options.consultation': 'Consultation',
        'contact.form.fields.project.options.other': 'Other',
        'contact.form.fields.budget.label': 'Project Budget',
        'contact.form.fields.budget.placeholder': 'Select budget range',
        'contact.form.fields.timeline.label': 'Timeline',
        'contact.form.fields.timeline.placeholder': 'Select timeline',
        'contact.form.fields.message.label': 'Project Details *',
        'contact.form.fields.message.placeholder': 'Tell us about your project...',
        'contact.form.submit': 'Send Message',
        'contact.form.submitting': 'Sending...',

        // FAQ
        'contact.faq.title': 'Frequently Asked Questions',
        'contact.faq.q1.question': 'How long does a typical project take?',
        'contact.faq.q1.answer': 'Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
        'contact.faq.q2.question': 'Do you work with international clients?',
        'contact.faq.q2.answer': 'Absolutely! We work with clients worldwide and are experienced in remote collaboration across different time zones.',
        'contact.faq.q3.question': 'What is your development process?',
        'contact.faq.q3.answer': 'We follow an agile development process with regular check-ins, iterative development, and continuous client feedback to ensure we deliver exactly what you envision.',
        'contact.faq.q4.question': 'Do you provide ongoing support?',
        'contact.faq.q4.answer': 'Yes, we offer comprehensive maintenance packages and ongoing support to ensure your project continues to perform optimally after launch.',

        // Testimonials page
        'testimonials.title': 'Client Testimonials',
        'testimonials.subtitle': "Don't just take our word for it. Here's what our clients say about working with Antipaya and the impact our solutions have made on their businesses.",

        // Testimonials stats
        'testimonials.stats.title': 'Client Satisfaction',
        'testimonials.stats.subtitle': 'Our commitment to excellence is reflected in these numbers',
        'testimonials.stats.rating': 'Average Rating',
        'testimonials.stats.rating.desc': 'Based on 25+ reviews',
        'testimonials.stats.retention': 'Client Retention',
        'testimonials.stats.retention.desc': 'Long-term partnerships',
        'testimonials.stats.delivery': 'On-Time Delivery',
        'testimonials.stats.delivery.desc': 'Every project, every time',
        'testimonials.stats.referral': 'Referral Rate',
        'testimonials.stats.referral.desc': 'Clients recommend us',

        // Case study
        'testimonials.casestudy.title': 'From Idea to Impact',
        'testimonials.casestudy.subtitle': 'Every project we undertake follows a journey from initial concept to measurable results. Here\'s how we approach each challenge:',
        'testimonials.casestudy.metrics.discovery': 'Deep Discovery',
        'testimonials.casestudy.metrics.discovery.desc': 'Understanding your vision and goals',
        'testimonials.casestudy.metrics.strategy': 'Strategic Planning',
        'testimonials.casestudy.metrics.strategy.desc': 'Roadmap for success',
        'testimonials.casestudy.metrics.execution': 'Flawless Execution',
        'testimonials.casestudy.metrics.execution.desc': 'Bringing ideas to life',

        // Testimonials CTA
        'testimonials.cta.title': 'Ready to become our next success story?',
        'testimonials.cta.subtitle': 'Join the growing list of satisfied clients who chose Antipaya for their digital transformation.',
        'testimonials.cta.button': 'Start Your Journey',
        'testimonials.project': 'Project:',

        // Common elements
        'common.readMore': 'Read More',
        'common.learnMore': 'Learn More',
        'common.getStarted': 'Get Started',
        'common.viewAll': 'View All'
    },
    id: {
        // Navigation
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.services': 'Layanan',
        'nav.portfolio': 'Portofolio',
        'nav.testimonials': 'Testimoni',
        'nav.contact': 'Kontak',
        'nav.blog': 'Blog',
        'nav.language': 'Bahasa',
        'nav.theme': 'Tema',

        // Home page
        'home.hero.title1': 'Bangun dengan',
        'home.hero.title2': 'jiwa.',
        'home.hero.title3': 'Kembangkan dengan',
        'home.hero.title4': 'kejelasan.',
        'home.hero.subtitle': 'Kami Antipaya — rumah software & digital yang menciptakan solusi modular yang berkembang bersama visi Anda.',
        'home.hero.cta1': 'Jelajahi Layanan Kami',
        'home.hero.cta2': 'Lihat Karya Kami',

        'home.intro.title': 'Kami bukan sekadar software house biasa',
        'home.intro.subtitle': 'Kami membangun pengalaman yang bermakna. Dari aplikasi mobile Flutter hingga platform web Next.js, dari membangun identitas brand hingga arsitektur API yang seamless — semua yang kami ciptakan dirancang modular, scalable, dan penuh makna.',

        'home.features.modular.title': 'Modular',
        'home.features.modular.desc': 'Setiap komponen, setiap sistem, setiap solusi — dibangun untuk beradaptasi dan berkembang sesuai kebutuhan Anda.',
        'home.features.scalable.title': 'Scalable',
        'home.features.scalable.desc': 'Dari MVP hingga enterprise. Arsitektur kami tumbuh bersama ambisi Anda, sebesar apapun itu.',
        'home.features.soulful.title': 'Berjiwa',
        'home.features.soulful.desc': 'Teknologi dengan tujuan. Setiap baris kode membawa maksud, setiap desain menceritakan kisah.',

        'home.cta.title': 'Siap membangun sesuatu yang luar biasa?',
        'home.cta.subtitle': 'Mari wujudkan visi Anda menjadi kenyataan. Mulai dengan percakapan.',
        'home.cta.button': 'Mulai Proyek Anda',

        // Toast messages
        'toast.welcome': 'Selamat datang di Antipaya — mari bangun sesuatu yang bermakna.',

        // Not Found page
        'notFound.title': 'Halaman Tidak Ditemukan',
        'notFound.description': 'Halaman yang Anda cari tidak ada. Mungkin telah dipindahkan, dihapus, atau Anda salah memasukkan URL.',
        'notFound.backHome': 'Kembali ke Beranda',
        'notFound.contact': 'Hubungi Kami',
        'notFound.popularLinks': 'Halaman Populer',

        // Stats
        'stats.projects': 'Proyek',
        'stats.clients': 'Klien',

        // Project names
        'project.flowcommerce': 'API FlowCommerce',
        'project.healthbridge': 'Platform HealthBridge',
        'project.neobank': 'Identitas NeoBank',

        // Footer
        'footer.tagline': 'Bangun dengan jiwa. Kembangkan dengan kejelasan.',
        'footer.description': 'Solusi modular, kreatif, dan profesional untuk kebutuhan digital Anda.',
        'footer.quickLinks': 'Tautan Cepat',
        'footer.services': 'Layanan',
        'footer.contact': 'Kontak',
        'footer.rights': 'Hak cipta dilindungi.',
        'footer.privacy': 'Kebijakan Privasi',
        'footer.terms': 'Syarat Layanan',
        'footer.sitemap': 'Peta Situs',
        'footer.softwareDev': 'Pengembangan Software',
        'footer.mobileDev': 'Pengembangan Aplikasi Mobile',
        'footer.branding': 'Branding & Desain',
        'footer.eventPlanning': 'Perencanaan Acara',
        'footer.documentation': 'Dokumentasi',

        // About page
        'about.title': 'Tentang Antipaya',
        'about.subtitle': 'Kami lebih dari sekadar software house. Kami adalah arsitek pengalaman digital, menciptakan solusi yang menjembatani teknologi dan kemanusiaan.',
        'about.vision.title': 'Visi Kami',
        'about.vision.content': 'Menjadi jembatan antara ide-ide ambisius dan realitas digital yang bermakna. Kami membayangkan dunia di mana teknologi melayani aspirasi terbesar kemanusiaan, di mana setiap baris kode berkontribusi pada sesuatu yang lebih besar dari dirinya sendiri.',
        'about.mission.title': 'Misi Kami',
        'about.philosophy.title': 'Filosofi Kami',
        'about.philosophy.subtitle': 'Tiga prinsip inti yang memandu semua yang kami lakukan',
        'about.team.title': 'Tim di Balik Antipaya',
        'about.team.subtitle': 'Tim yang beragam dari para pencipta, pembangun, dan pemimpi yang bersatu dalam visi yang sama',
        'about.cta.title': 'Siap bekerja dengan kami?',
        'about.cta.subtitle': 'Mari bangun sesuatu yang luar biasa bersama-sama. Setiap proyek hebat dimulai dengan percakapan.',
        'about.cta.button': 'Hubungi Kami',

        // About page details
        'about.mission.content': 'Memberdayakan organisasi dan individu melalui solusi digital yang modular, scalable, dan penuh makna. Kami membangun dengan jiwa, berkembang dengan kejelasan, dan selalu menempatkan pengalaman manusia di pusat segala yang kami ciptakan.',
        'about.vision.points.humanCentered': '<strong>Berpusat pada Manusia:</strong> Teknologi yang meningkatkan potensi manusia',
        'about.vision.points.futureReady': '<strong>Siap Masa Depan:</strong> Solusi yang berkembang dengan kebutuhan esok hari',
        'about.vision.points.accessible': '<strong>Mudah Diakses:</strong> Desain dan teknologi hebat untuk semua orang',

        // Philosophy details
        'about.philosophy.modular.title': 'Modular',
        'about.philosophy.modular.description': 'Seperti blok bangunan, setiap komponen yang kami buat dirancang untuk cocok sempurna dengan yang lain sambil mempertahankan integritas dan tujuannya sendiri.',
        'about.philosophy.modular.points.reusable': 'Komponen yang dapat digunakan kembali',
        'about.philosophy.modular.points.clean': 'Arsitektur yang bersih',
        'about.philosophy.modular.points.scalable': 'Fondasi yang scalable',
        'about.philosophy.modular.points.flexible': 'Integrasi yang fleksibel',

        'about.philosophy.scalable.title': 'Scalable',
        'about.philosophy.scalable.description': 'Dari pengguna pertama hingga jutaan pengguna, dari startup hingga enterprise. Solusi kami berkembang dengan ambisi Anda.',
        'about.philosophy.scalable.points.performance': 'Optimisasi performa',
        'about.philosophy.scalable.points.cloud': 'Desain cloud-native',
        'about.philosophy.scalable.points.loadBalancing': 'Siap untuk load balancing',
        'about.philosophy.scalable.points.futureProof': 'Arsitektur tahan masa depan',

        'about.philosophy.soulful.title': 'Soulful',
        'about.philosophy.soulful.description': 'Teknologi dengan tujuan. Setiap interaksi menceritakan kisah, setiap antarmuka memicu kegembiraan, setiap solusi membuat hidup lebih baik.',
        'about.philosophy.soulful.points.userCentered': 'Desain berpusat pada pengguna',
        'about.philosophy.soulful.points.meaningful': 'Interaksi yang bermakna',
        'about.philosophy.soulful.points.emotional': 'Koneksi emosional',
        'about.philosophy.soulful.points.purposeDriven': 'Fitur yang didorong tujuan',

        // Services page
        'services.title': 'Layanan Kami',
        'services.subtitle': 'Dari konsep hingga deployment, kami menciptakan solusi digital yang berkembang bersama visi Anda. Setiap layanan dirancang modular, scalable, dan penuh makna.',

        // Software Development
        'services.software.title': 'Pengembangan Software',
        'services.software.description': 'Solusi full-stack yang dibangun untuk performa, skalabilitas, dan kepuasan pengguna. Kami ahli dalam framework modern dan teknologi terdepan.',
        'services.software.features.flutter.title': 'Aplikasi Mobile Flutter',
        'services.software.features.flutter.description': 'Aplikasi mobile cross-platform dengan performa native',
        'services.software.features.nextjs.title': 'Platform Web Next.js',
        'services.software.features.nextjs.description': 'Aplikasi web cepat dan SEO-optimized dengan React modern',
        'services.software.features.api.title': 'Pengembangan API Modular',
        'services.software.features.api.description': 'Arsitektur backend scalable dan API RESTful/GraphQL',
        'services.software.features.cloud.title': 'Arsitektur Cloud',
        'services.software.features.cloud.description': 'Solusi deployment AWS, Azure, dan Google Cloud',

        // Branding & Worldbuilding
        'services.branding.title': 'Branding & Worldbuilding',
        'services.branding.description': 'Kami menciptakan identitas brand yang bercerita dan menciptakan dunia yang beresonansi. Setiap brand yang kami bangun memiliki jiwa dan tujuan.',
        'services.branding.features.identity.title': 'Desain Identitas Brand',
        'services.branding.features.identity.description': 'Logo, sistem warna, dan bahasa visual yang bercerita',
        'services.branding.features.strategy.title': 'Strategi Brand',
        'services.branding.features.strategy.description': 'Positioning, messaging, dan pengembangan narasi',
        'services.branding.features.digital.title': 'Pengalaman Brand Digital',
        'services.branding.features.digital.description': 'Implementasi brand yang kohesif di semua touchpoint',
        'services.branding.features.worldbuilding.title': 'Worldbuilding & Lore',
        'services.branding.features.worldbuilding.description': 'Menciptakan cerita latar dan universe yang kaya untuk brand Anda',

        // Events & Experience Planning
        'services.events.title': 'Perencanaan Acara & Pengalaman',
        'services.events.description': 'Pengalaman berkesan yang menyatukan komunitas. Dari acara korporat hingga pertemuan kreatif, kami membuat momen yang bermakna.',
        'services.events.features.corporate.title': 'Acara Korporat',
        'services.events.features.corporate.description': 'Peluncuran produk, konferensi, dan pengalaman team building',
        'services.events.features.community.title': 'Pertemuan Komunitas',
        'services.events.features.community.description': 'Workshop, meetup, dan sesi kolaboratif',
        'services.events.features.virtual.title': 'Pengalaman Virtual',
        'services.events.features.virtual.description': 'Acara online, webinar, dan konferensi digital',
        'services.events.features.experience.title': 'Desain Pengalaman',
        'services.events.features.experience.description': 'Pemetaan journey dan optimasi touchpoint',

        // Documentation & Workflow
        'services.documentation.title': 'Dokumentasi & Workflow',
        'services.documentation.description': 'Dokumentasi yang jelas dan handoff yang seamless untuk memastikan kesuksesan proyek Anda jauh setelah kami selesai mengerjakan.',
        'services.documentation.features.technical.title': 'Dokumentasi Teknis',
        'services.documentation.features.technical.description': 'Dokumen API, arsitektur sistem, dan panduan deployment',
        'services.documentation.features.process.title': 'Optimasi Proses',
        'services.documentation.features.process.description': 'Desain workflow dan strategi kolaborasi tim',
        'services.documentation.features.knowledge.title': 'Transfer Pengetahuan',
        'services.documentation.features.knowledge.description': 'Sesi pelatihan dan dokumentasi handoff',
        'services.documentation.features.maintenance.title': 'Rencana Maintenance',
        'services.documentation.features.maintenance.description': 'Dukungan berkelanjutan dan strategi evolusi',

        // Process
        'services.process.title': 'Proses Kami',
        'services.process.subtitle': 'Setiap proyek mengikuti metodologi terbukti kami, dirancang untuk transparansi, kolaborasi, dan hasil yang luar biasa.',
        'services.process.steps.discovery.title': 'Discovery',
        'services.process.steps.discovery.description': 'Memahami visi, tujuan, dan batasan Anda melalui percakapan mendalam dan riset.',
        'services.process.steps.strategy.title': 'Strategi',
        'services.process.steps.strategy.description': 'Menyusun roadmap yang menyelaraskan pilihan teknologi dengan tujuan bisnis.',
        'services.process.steps.creation.title': 'Pembuatan',
        'services.process.steps.creation.description': 'Membangun dengan metodologi agile, feedback konstan, dan perbaikan iteratif.',
        'services.process.steps.evolution.title': 'Evolusi',
        'services.process.steps.evolution.description': 'Meluncurkan, memantau, dan terus meningkatkan berdasarkan feedback dunia nyata.',

        // Services CTA
        'services.cta.title': 'Siap memulai proyek Anda?',
        'services.cta.subtitle': 'Mari diskusikan bagaimana kami dapat mewujudkan visi Anda dengan layanan komprehensif kami.',
        'services.cta.button': 'Mulai Percakapan',

        // Portfolio page
        'portfolio.title': 'Portofolio Kami',
        'portfolio.subtitle': 'Showcase karya terbaik kami di bidang teknologi, branding, dan desain pengalaman. Setiap proyek mewakili komitmen kami untuk membangun dengan jiwa dan berkembang dengan kejelasan.',
        'portfolio.filter.all': 'Semua Proyek',
        'portfolio.filter.technology': 'Teknologi',
        'portfolio.filter.branding': 'Branding',
        'portfolio.filter.events': 'Acara',
        'portfolio.stats.title': 'Dampak Proyek',
        'portfolio.stats.subtitle': 'Setiap proyek yang kami kerjakan memberikan nilai berkelanjutan bagi klien dan komunitas mereka.',
        'portfolio.stats.projects': 'Proyek Selesai',
        'portfolio.stats.clients': 'Klien Puas',
        'portfolio.stats.delivery': 'Pengiriman Tepat Waktu',
        'portfolio.stats.support': 'Dukungan Tersedia',
        'portfolio.cta.title': 'Siap menciptakan kisah sukses Anda?',
        'portfolio.cta.subtitle': 'Mari bangun sesuatu yang luar biasa bersama-sama. Proyek Anda bisa menjadi showcase kami berikutnya.',
        'portfolio.cta.button': 'Mulai Proyek Anda',

        // Contact page
        'contact.title': 'Mari Terhubung',
        'contact.subtitle': 'Siap mewujudkan visi Anda menjadi kenyataan? Kami ingin mendengar tentang proyek Anda dan menjelajahi bagaimana kami dapat membangun sesuatu yang luar biasa bersama-sama.',

        // Contact methods
        'contact.methods.email.title': 'Email Kami',
        'contact.methods.email.description': 'Untuk diskusi proyek detail dan proposal',
        'contact.methods.whatsapp.title': 'WhatsApp',
        'contact.methods.whatsapp.description': 'Pertanyaan cepat dan respon langsung',
        'contact.methods.social.title': 'Ikuti Kami',
        'contact.methods.social.description': 'Tetap update dengan karya dan insight terbaru kami',

        // Contact form
        'contact.form.title': 'Mulai Proyek Anda',
        'contact.form.subtitle': 'Ceritakan tentang proyek Anda dan kami akan menghubungi Anda dalam 24 jam dengan proposal detail.',
        'contact.form.fields.name.label': 'Nama Lengkap *',
        'contact.form.fields.name.placeholder': 'Nama lengkap Anda',
        'contact.form.fields.email.label': 'Alamat Email *',
        'contact.form.fields.email.placeholder': 'email.anda@perusahaan.com',
        'contact.form.fields.company.label': 'Perusahaan/Organisasi',
        'contact.form.fields.company.placeholder': 'Nama perusahaan Anda',
        'contact.form.fields.project.label': 'Jenis Proyek *',
        'contact.form.fields.project.placeholder': 'Pilih jenis proyek',
        'contact.form.fields.project.options.web': 'Pengembangan Web',
        'contact.form.fields.project.options.mobile': 'Aplikasi Mobile',
        'contact.form.fields.project.options.api': 'API/Backend',
        'contact.form.fields.project.options.branding': 'Branding & Desain',
        'contact.form.fields.project.options.events': 'Perencanaan Acara',
        'contact.form.fields.project.options.consultation': 'Konsultasi',
        'contact.form.fields.project.options.other': 'Lainnya',
        'contact.form.fields.budget.label': 'Budget Proyek',
        'contact.form.fields.budget.placeholder': 'Pilih rentang budget',
        'contact.form.fields.timeline.label': 'Timeline',
        'contact.form.fields.timeline.placeholder': 'Pilih timeline',
        'contact.form.fields.message.label': 'Detail Proyek *',
        'contact.form.fields.message.placeholder': 'Ceritakan tentang proyek Anda...',
        'contact.form.submit': 'Kirim Pesan',
        'contact.form.submitting': 'Mengirim...',

        // FAQ
        'contact.faq.title': 'Pertanyaan yang Sering Diajukan',
        'contact.faq.q1.question': 'Berapa lama proyek biasanya selesai?',
        'contact.faq.q1.answer': 'Timeline proyek bervariasi berdasarkan scope dan kompleksitas. Website sederhana memerlukan 2-4 minggu, sementara aplikasi kompleks bisa memakan 3-6 bulan. Kami memberikan timeline detail saat konsultasi awal.',
        'contact.faq.q2.question': 'Apakah Anda bekerja dengan klien internasional?',
        'contact.faq.q2.answer': 'Tentu saja! Kami bekerja dengan klien di seluruh dunia dan berpengalaman dalam kolaborasi remote lintas zona waktu.',
        'contact.faq.q3.question': 'Seperti apa proses pengembangan Anda?',
        'contact.faq.q3.answer': 'Kami mengikuti proses pengembangan agile dengan check-in berkala, pengembangan iteratif, dan feedback klien berkelanjutan untuk memastikan kami menghasilkan tepat seperti yang Anda bayangkan.',
        'contact.faq.q4.question': 'Apakah Anda menyediakan dukungan berkelanjutan?',
        'contact.faq.q4.answer': 'Ya, kami menawarkan paket maintenance komprehensif dan dukungan berkelanjutan untuk memastikan proyek Anda terus berkinerja optimal setelah diluncurkan.',

        // Testimonials page
        'testimonials.title': 'Testimoni Klien',
        'testimonials.subtitle': 'Jangan hanya percaya kata kami. Inilah yang dikatakan klien kami tentang bekerja dengan Antipaya dan dampak solusi kami pada bisnis mereka.',

        // Testimonials stats
        'testimonials.stats.title': 'Kepuasan Klien',
        'testimonials.stats.subtitle': 'Komitmen kami terhadap keunggulan tercermin dalam angka-angka ini',
        'testimonials.stats.rating': 'Rating Rata-rata',
        'testimonials.stats.rating.desc': 'Berdasarkan 25+ ulasan',
        'testimonials.stats.retention': 'Retensi Klien',
        'testimonials.stats.retention.desc': 'Kemitraan jangka panjang',
        'testimonials.stats.delivery': 'Pengiriman Tepat Waktu',
        'testimonials.stats.delivery.desc': 'Setiap proyek, setiap waktu',
        'testimonials.stats.referral': 'Tingkat Rujukan',
        'testimonials.stats.referral.desc': 'Klien merekomendasikan kami',

        // Case study
        'testimonials.casestudy.title': 'Dari Ide ke Dampak',
        'testimonials.casestudy.subtitle': 'Setiap proyek yang kami kerjakan mengikuti perjalanan dari konsep awal hingga hasil yang terukur. Begini cara kami mendekati setiap tantangan:',
        'testimonials.casestudy.metrics.discovery': 'Discovery Mendalam',
        'testimonials.casestudy.metrics.discovery.desc': 'Memahami visi dan tujuan Anda',
        'testimonials.casestudy.metrics.strategy': 'Perencanaan Strategis',
        'testimonials.casestudy.metrics.strategy.desc': 'Roadmap menuju kesuksesan',
        'testimonials.casestudy.metrics.execution': 'Eksekusi Sempurna',
        'testimonials.casestudy.metrics.execution.desc': 'Mewujudkan ide menjadi kenyataan',

        // Testimonials CTA
        'testimonials.cta.title': 'Siap menjadi kisah sukses kami berikutnya?',
        'testimonials.cta.subtitle': 'Bergabunglah dengan daftar klien yang puas yang memilih Antipaya untuk transformasi digital mereka.',
        'testimonials.cta.button': 'Mulai Perjalanan Anda',
        'testimonials.project': 'Proyek:',

        // Common elements
        'common.readMore': 'Baca Selengkapnya',
        'common.learnMore': 'Pelajari Lebih Lanjut',
        'common.getStarted': 'Mulai',
        'common.viewAll': 'Lihat Semua'
    }
}; export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Auto-detect language from system/browser
        const detectLanguage = (): Language => {
            // Check localStorage first
            const saved = localStorage.getItem('language') as Language;
            if (saved && (saved === 'en' || saved === 'id')) {
                return saved;
            }

            // Detect from browser/system
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('id') || browserLang.includes('indonesia')) {
                return 'id';
            }

            return 'en'; // default fallback
        };

        const detectedLang = detectLanguage();
        setLanguageState(detectedLang);

        // Save to localStorage if not already saved
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', detectedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return translations[language]?.[key as keyof typeof translations['en']] || key;
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}