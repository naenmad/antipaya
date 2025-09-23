'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // Show loading for 2 seconds

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="text-center">
                {/* Animated Logo */}
                <div className="mb-8">
                    <h1 className="text-6xl font-bold text-primary animate-pulse">
                        Antipaya
                    </h1>
                    <p className="text-gray-600 mt-2 animate-fade-in">
                        Build with soul. Scale with clarity.
                    </p>
                </div>

                {/* Loading Spinner */}
                <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    )
}