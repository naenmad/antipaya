'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 12;
            });
        }, 120);

        return () => clearInterval(interval);
    }, [])

    if (!isLoading) return null

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-center space-y-8">
                {/* Logo with animation */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 animate-pulse"></div>
                    <div className="relative w-24 h-24 mx-auto">
                        <Image
                            src="/logo.svg"
                            alt="Antipaya Logo"
                            fill
                            className="object-contain animate-bounce-subtle"
                        />
                    </div>
                </div>

                {/* Company info with staggered animation */}
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white animate-pulse">
                        Antipaya
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Build with soul. Scale with clarity.
                    </p>
                </div>

                {/* Progress bar */}
                <div className="w-64 mx-auto space-y-2">
                    <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Loading... {Math.round(progress)}%
                    </p>
                </div>

                {/* Animated dots */}
                <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    )
}