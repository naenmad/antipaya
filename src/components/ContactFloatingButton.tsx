'use client'

import Link from 'next/link'

export default function ContactFloatingButton() {
    return (
        <Link
            href="/contact"
            className="fixed bottom-4 right-4 z-40 p-3 bg-primary hover:bg-secondary text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center"
            aria-label="Contact us"
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2 8l10 6 10-6M2 8v8a2 2 0 002 2h16a2 2 0 002-2V8"
                />
            </svg>
        </Link>
    )
}
