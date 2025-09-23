'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ProgressBar() {
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsLoading(true)
        setProgress(10)

        const timer1 = setTimeout(() => setProgress(30), 100)
        const timer2 = setTimeout(() => setProgress(70), 300)
        const timer3 = setTimeout(() => {
            setProgress(100)
            setTimeout(() => {
                setIsLoading(false)
                setProgress(0)
            }, 200)
        }, 500)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
        }
    }, [pathname])

    if (!isLoading) return null

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
            <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}