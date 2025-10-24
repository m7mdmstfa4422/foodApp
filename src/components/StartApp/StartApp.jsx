"use client"

import { useState } from "react"
import img from './coff.jpg';
import { NavLink } from "react-router-dom";

export default function StartApp() {
    const [isPressed, setIsPressed] = useState(false)

    const handlePress = () => {
        setIsPressed(true)
        setTimeout(() => setIsPressed(false), 1000)
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-[#1a1410] via-[#2d2420] to-[#0f0c0a] text-white relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 z-0">
                <img
                    src={img}
                    className="w-full h-full object-cover animate-image-zoom"
                    alt="Premium coffee experience"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60"></div>
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                    {/* Outer rotating circle */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#c67c4e] border-r-[#c67c4e] animate-spin-slow"></div>

                    {/* Middle rotating circle */}
                    <div className="absolute inset-4 rounded-full border-3 border-transparent border-b-[#c67c4e] animate-spin-reverse"></div>

                    {/* Inner circle */}
                    <div className="absolute inset-8 rounded-full border-2 border-[#c67c4e]/50 flex items-center justify-center">
                        <div className="text-center">
                            <span className="text-4xl md:text-5xl">🤎</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 pb-12 md:pb-16 px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center justify-end">
                <div className="max-w-2xl text-center">
                    <h1
                        className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight animate-fade-in-up text-balance drop-shadow-lg"
                        style={{ animationDelay: "0.2s", textShadow: "0 4px 12px rgba(0, 0, 0, 0.8)" }}
                    >
                        Brew <span className="text-[#c67c4e] block">Perfection</span>
                    </h1>

                    <p
                        className="text-gray-100 text-base sm:text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up max-w-xl mx-auto drop-shadow-md"
                        style={{ animationDelay: "0.4s", textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}
                    >
                        Discover the art of exceptional coffee. Handcrafted, ethically sourced, and roasted to perfection.
                    </p>

                    <NavLink to='/Home/Coffee'>

                        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                            <button
                                className="relative bg-[#c67c4e] hover:bg-[#b8673f] text-center text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center overflow-hidden group animate-button-pulse"
                                onClick={handlePress}
                            >
                                <div
                                    className={`flex items-center justify-center transition-all duration-300 ${isPressed ? "opacity-0" : "opacity-100"}`}
                                >
                                    <span className="mr-2">Explore Now</span>
                                    <svg className="w-5 h-5 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>

                                <div
                                    className={`absolute inset-0 flex items-center justify-center bg-[#a85a38] rounded-lg transition-all duration-300 ${isPressed ? "opacity-100" : "opacity-0"}`}
                                >
                                    <span className="mr-2">Let's Go!</span>
                                    <svg className="w-5 h-5 animate-bounce-x-fast" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </NavLink>

                    <div
                        className="hidden md:flex gap-8 mt-8 justify-center animate-fade-in-up"
                        style={{ animationDelay: "0.8s" }}
                    >
                        {["Instagram", "Twitter", "Facebook"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-gray-400 hover:text-[#c67c4e] transition-colors duration-300 text-sm font-medium hover:animate-social-float"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes bounceXFast {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes imageZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }
        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(198, 124, 78, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(198, 124, 78, 0);
          }
        }
        @keyframes socialFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-bounce-x {
          animation: bounceX 1.5s ease-in-out infinite;
        }
        .animate-bounce-x-fast {
          animation: bounceXFast 0.7s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-image-zoom {
          animation: imageZoom 8s ease-in-out infinite;
        }
        .animate-button-pulse {
          animation: buttonPulse 2s infinite;
        }
        .hover\:animate-social-float:hover {
          animation: socialFloat 0.6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spinReverse 6s linear infinite;
        }
      `}</style>
        </div>
    )
}
