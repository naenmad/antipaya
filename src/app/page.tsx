import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-pink-50 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="block text-gray-900">Build with</span>
                    <span className="block text-primary">soul.</span>
                    <span className="block text-gray-900">Scale with</span>
                    <span className="block text-secondary">clarity.</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-lg">
                    We&apos;re <strong className="text-primary">Antipaya</strong> — a software & digital house
                    crafting modular solutions that grow with your vision.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="bg-primary text-white px-8 py-4 rounded-full hover:bg-secondary transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Explore Our Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-center"
                  >
                    See Our Work
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1 bg-gray-100 h-8 rounded-md"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-primary/20 rounded-md w-3/4"></div>
                      <div className="h-4 bg-secondary/20 rounded-md w-1/2"></div>
                      <div className="h-4 bg-accent/20 rounded-md w-2/3"></div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg"></div>
                        <div className="h-24 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-lg"></div>
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
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Modular</h3>
                <p className="text-gray-600">
                  Every component, every system, every solution — built to adapt and evolve with your needs.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-secondary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Scalable</h3>
                <p className="text-gray-600">
                  From MVP to enterprise. Our architecture grows with your ambitions, no matter how big.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Soulful</h3>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to build something extraordinary?
            </h2>
            <p className="text-xl text-white/90 mb-8">
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