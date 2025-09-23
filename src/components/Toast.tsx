'use client'

import { useState, useEffect } from 'react'

interface ToastProps {
    message: string
    type: 'success' | 'error' | 'info'
    isVisible: boolean
    onClose: () => void
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 5000) // Auto close after 5 seconds

            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    if (!isVisible) return null

    const typeStyles = {
        success: 'bg-green-500 border-green-600',
        error: 'bg-red-500 border-red-600',
        info: 'bg-blue-500 border-blue-600'
    }

    return (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg text-white shadow-lg border-l-4 ${typeStyles[type]} animate-slide-in-right max-w-sm`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    {type === 'success' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                    {type === 'error' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                    {type === 'info' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                    <span className="text-sm font-medium">{message}</span>
                </div>
                <button
                    onClick={onClose}
                    className="ml-4 text-white hover:text-gray-200 transition-colors"
                    aria-label="Close notification"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

// Hook for using toast notifications
export function useToast() {
    const [toast, setToast] = useState<{
        message: string
        type: 'success' | 'error' | 'info'
        isVisible: boolean
    }>({
        message: '',
        type: 'info',
        isVisible: false
    })

    const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
        setToast({
            message,
            type,
            isVisible: true
        })
    }

    const hideToast = () => {
        setToast(prev => ({ ...prev, isVisible: false }))
    }

    return {
        toast,
        showToast,
        hideToast
    }
}