import React, { useEffect } from 'react'
import { useState } from 'react'
import style from './Nav.module.css'

export default function Nav() {
    const [cont, setcont] = useState(0)
    useEffect(() => {
        // Your useEffect logic here
    }, [])
    
    // Define the navItems array
    const navItems = [
        {
            label: "Home",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            active: true
        },
        {
            label: "Search",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            active: false
        },
        {
            label: "Favorites",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            active: false
        },
        {
            label: "Profile",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            active: false
        }
    ];

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-white rounded-2xl shadow-lg border border-gray-100 z-10 overflow-hidden">
            <div className="flex justify-around items-center py-3 px-2 bg-white rounded-2xl">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ease-in-out group ${item.active
                            ? "text-gradient-to-r from-[#B89573] to-[#6B4A2B] bg-orange-50"
                            : "text-gray-400 hover:text-[#6B4A2B]"
                            }`}
                    >
                        {/* الخلفية المتحركة */}
                        {item.active && (
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl"></div>
                        )}

                        {/* التأثير عند المرور */}
                        <div className="absolute inset-0 bg-[#6b4a2b18] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>

                        {/* النقاط البرتقالية للعنصر النشط */}
                        {item.active && (
                            <div className="absolute -top-1 right-3 w-2 h-2 bg-gradient-to-r from-[#B89573] to-[#6B4A2B] rounded-full animate-pulse"></div>
                        )}

                        {/* الأيقونة */}
                        <div className="relative z-10 transition-transform text-[#6B4A2B] duration-300 bg group-hover:scale-110">
                            {item.icon}
                        </div>

                        {/* النص */}
                        <span
                            className={`text-xs mt-1 relative z-10 font-medium transition-all duration-300 ${item.active
                                ? "text-[#6B4A2B]"
                                : "text-gray-500 group-hover:text-[#6B4A2B]-500"
                                }`}
                        >
                            {item.label}
                        </span>
                        {/* الخط البرتقالي السفلي للعنصر النشط */}
                        {item.active && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-[#B89573] to-[#6B4A2B] rounded-t-full transition-all duration-300"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}