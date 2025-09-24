import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import ScrollProgress from "@/components/ScrollProgress";
import ContactFloatingButton from "@/components/ContactFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Antipaya - Software & Digital House",
    template: "%s | Antipaya"
  },
  description: "Build with soul. Scale with clarity. Antipaya delivers modular software solutions, creative branding, and professional digital experiences.",
  keywords: ["software development", "digital house", "Flutter", "Next.js", "branding", "web development", "mobile apps", "API development"],
  authors: [{ name: "Antipaya Team" }],
  creator: "Antipaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antipaya.com",
    title: "Antipaya - Software & Digital House",
    description: "Build with soul. Scale with clarity. Professional software and digital solutions.",
    siteName: "Antipaya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antipaya - Software & Digital House",
    description: "Build with soul. Scale with clarity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <ProgressBar />
  <ContactFloatingButton />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2 rounded-md"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
