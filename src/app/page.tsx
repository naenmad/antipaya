'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import { Toast, useToast } from '@/components/Toast';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Toast hook for small welcome notification
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    // show a subtle welcome toast once on first load
    // guard: only show if not already visible
    if (!toast.isVisible) {
      showToast("Welcome to Antipaya — let's build something meaningful.", 'info');
    }
    // run only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navigation />
      <CustomCursor />
      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onClose={hideToast} />
      <main className="min-h-screen overflow-hidden">
        {/* Hero Section with Enhanced Animations */}
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-pink-50 pt-20 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                top: '10%',
                left: '10%'
              }}
            ></div>
            <div
              className="absolute w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
              style={{
                transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
                top: '60%',
                right: '15%'
              }}
            ></div>
            <div
              className="absolute w-48 h-48 bg-accent/5 rounded-full blur-3xl"
              style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                bottom: '20%',
                left: '60%'
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className={`block text-gray-900 transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Build with</span>
                    <span className={`block text-primary transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>soul.</span>
                    <span className={`block text-gray-900 transition-all duration-700 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Scale with</span>
                    <span className={`block text-secondary transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>clarity.</span>
                  </h1>
                  <p className={`text-xl text-gray-600 max-w-lg transition-all duration-700 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    We&apos;re <strong className="text-primary">Antipaya</strong> — a software & digital house
                    crafting modular solutions that grow with your vision.
                  </p>
                </div>

                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Link
                    href="/services"
                    className="group bg-primary text-white px-8 py-4 rounded-full hover:bg-secondary transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
                  >
                    <span className="relative z-10">Explore Our Services</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="group border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-center relative overflow-hidden"
                  >
                    <span className="relative z-10">See Our Work</span>
                    <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                </div>
              </div>

              <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <div className="flex-1 bg-gray-100 h-8 rounded-md"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">FlowCommerce API</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">HealthBridge Platform</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">NeoBank Identity</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg">
                          <div className="text-2xl font-bold text-primary">50+</div>
                          <div className="text-xs text-gray-600">Projects</div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-lg">
                          <div className="text-2xl font-bold text-secondary">25+</div>
                          <div className="text-xs text-gray-600">Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We&apos;re not just another software house
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We build experiences that matter. From Flutter mobile apps to Next.js web platforms,
              from brand worldbuilding to seamless API architectures — everything we create is
              designed to be modular, scalable, and deeply meaningful.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="card-professional text-center">
                <div className="icon-circle icon-circle-primary">
                  <svg className="w-8 h-8" style={{ color: 'var(--white)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modular</h3>
                <p className="text-gray-600">
                  Every component, every system, every solution — built to adapt and evolve with your needs.
                </p>
              </div>

              <div className="card-secondary text-center">
                <div className="icon-circle icon-circle-secondary">
                  <svg className="w-8 h-8" style={{ color: 'var(--white)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable</h3>
                <p className="text-gray-600">
                  From MVP to enterprise. Our architecture grows with your ambitions, no matter how big.
                </p>
              </div>

              <div className="card-accent text-center">
                <div className="icon-circle icon-circle-accent">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Soulful</h3>
                <p className="text-gray-600">
                  Technology with purpose. Every line of code carries intention, every design tells a story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Ready to build something extraordinary?
            </h2>
            <p className="text-xl text-black mb-8 dark:text-white">
              Let&apos;s turn your vision into reality. Start with a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}