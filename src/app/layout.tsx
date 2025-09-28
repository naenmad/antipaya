import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActions from "@/components/FloatingActions";
import TextSelectionEffect from "@/components/TextSelectionEffect";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antipaya.com",
    title: "Antipaya - Software & Digital House",
    description: "Build with soul. Scale with clarity. Professional software and digital solutions.",
    siteName: "Antipaya",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Antipaya Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Antipaya - Software & Digital House",
    description: "Build with soul. Scale with clarity.",
    images: ["/android-chrome-512x512.png"],
    creator: "@antipaya"
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#fb5801"
      }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Antipaya"
  },
  formatDetection: {
    telephone: false
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* PWA and Browser Compatibility */}
        <meta name="theme-color" content="#fb5801" />
        <meta name="msapplication-TileColor" content="#fb5801" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preload critical resources */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedMode = localStorage.getItem('darkMode');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var shouldBeDark = savedMode ? savedMode === 'true' : prefersDark;
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased transition-colors duration-300" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <LanguageProvider>
          <TextSelectionEffect />
          <ScrollProgress />
          <ProgressBar />
          <FloatingActions />
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
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
