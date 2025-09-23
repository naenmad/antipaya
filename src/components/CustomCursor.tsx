'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const updateCursorType = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isClickable = target.closest('a, button, [role="button"], input, textarea, select') !== null
            setIsPointer(isClickable)
        }

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('mouseover', updateCursorType)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('mouseover', updateCursorType)
        }
    }, [])

    return (
        <>
            {/* Main cursor */}
            <div
                className="fixed pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: mousePosition.x - 10,
                    top: mousePosition.y - 10,
                    transform: isPointer ? 'scale(1.5)' : 'scale(1)',
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>

            {/* Cursor trail */}
            <div
                className="fixed pointer-events-none z-40"
                style={{
                    left: mousePosition.x - 20,
                    top: mousePosition.y - 20,
                    transform: isPointer ? 'scale(2)' : 'scale(1)',
                    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
                    opacity: isPointer ? 0.3 : 0.1
                }}
            >
                <div className="w-10 h-10 bg-primary rounded-full blur-sm"></div>
            </div>
        </>
    )
}