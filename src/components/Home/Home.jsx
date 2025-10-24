import React, { useState } from 'react';
import coff from '../Home/hotmilk.jpg'
import logo from '../Home/logoo.png'
import { Link, NavLink, Outlet } from 'react-router-dom';

// مكون البطاقة القابلة لإعادة الاستخدام
const CoffeeCard = ({ item }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative mb-3">
                <img
                    src={coff}
                    alt={item.name}
                    className="w-full h-28 object-cover rounded-xl"
                />
                <div className="absolute top-2 left-2 bg-white bg-opacity-50 px-2 py-1 rounded-lg flex items-center">
                    <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-black text-xs font-medium">{item.rating}</span>
                </div>
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="absolute top-2 right-2 bg-white bg-opacity-80 p-1 rounded-full hover:bg-opacity-100 transition-all duration-200"
                >
                    <svg
                        className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`}
                        fill={isLiked ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </button>
            </div>

            <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
            <p className="text-gray-500 text-sm mb-3">{item.description}</p>

            <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{item.price}</span>
                <button className="bg-orange-500 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

// مكون علامة التبويب القابلة لإعادة الاستخدام
const CategoryTab = ({ category, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-xl whitespace-nowrap font-medium transition-all duration-300 ${isActive ? "bg-orange-500 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
        >
            {category}
        </button>
    );
};

// مكون شريط التنقل السفلي
const BottomNavigation = () => {
    const navItems = [
        {
            icon: (
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            ), label: "Home", active: true
        },
        {
            icon: (
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            ), label: "Favorites", active: false
        },
        {
            icon: (
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                </svg>
            ), label: "Orders", active: false
        },
        {
            icon: (
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
            ), label: "Profile", active: false
        },
    ];


};

const Home = () => {


    return (
        <div className="bg-gray-50 min-h-screen max-w-7xl mx-auto lg:px-6 lg:py-6">

            {/* المحتوى الرئيسي */}
            <div className="lg:flex lg:gap-8">
              
                {/* المحتوى الرئيسي */}
                <div className="flex-1">
                    <div className='bg-neutral-800 lg:rounded-2xl pt-2'>
                        {/* Header */}
                        <div className="flex justify-between items-center px-4 py-4 lg:pt-0  ">
                            <div>
                                <p className="text-white text-sm">Location</p>
                                <div className="flex items-center">
                                    <h1 className="text-white font-semibold">Egypt, New Cairo</h1>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full overflow-hidden lg:hidden">
                                <img src={logo} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="px-4 py-5 mb-6 lg:mb-8 ">
                            <div className="flex items-center space-x-3">
                                <div className="flex-1 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search coffee"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent lg:py-4"
                                    />
                                </div>
                                {/* <button className="bg-orange-500 p-3 rounded-xl hover:bg-orange-600 transition-colors duration-200 lg:p-4">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                                    />
                                </svg>
                            </button> */}
                            </div>
                        </div>
                    </div>


                    {/* Category Tabs */}
                    <div className="px-4 mb-6 lg:mb-8">
                        <div className="flex space-x-4 overflow-x-auto pb-2">
                            <NavLink to='coffee' className='px-6 py-2 rounded-xl whitespace-nowrap font-medium transition-all duration-300 bg-gradient-to-r from-[#6B4F3A] to-[#3C2A21] text-white hover:text-white focus:animate-pulse focus:border-2 focus:border-gray-800  '>Coffee</NavLink>
                            <NavLink to='Drink' className='px-6 py-2 rounded-xl whitespace-nowrap font-medium transition-all duration-300 bg-gradient-to-r from-[#B89573] to-[#6B4A2B] shadow-md text-white  hover:text-white focus:animate-pulse focus:border-2 focus:border-gray-800 '>Drink</NavLink>
                            <NavLink to='Beef' className='px-6 py-2 rounded-xl whitespace-nowrap font-medium transition-all duration-300 bg-gradient-to-r from-[#7B3F32] to-[#4A2318] text-white hover:text-white focus:animate-pulse focus:border-2 focus:border-gray-800 '>Beef</NavLink>
                            <NavLink to='Chicken' className='px-6 py-2 rounded-xl whitespace-nowrap font-medium transition-all duration-300  bg-gradient-to-r from-[#A35416] to-[#E29C50] text-white hover:text-white focus:animate-pulse focus:border-2 focus:border-gray-800 '>Chicken</NavLink>
                            <NavLink to='Dessert' className='px-6 py-2 rounded-xl whitespace-nowrap font-medium transition-all duration-300 bg-gradient-to-r from-[#D4A373] to-[#E8BCA8] shadow-md text-white  hover:text-white focus:animate-pulse focus:border-2 focus:border-gray-600 '>Dessert</NavLink>
                        </div>
                    </div>

                    {/* Coffee Grid */}
                    <div className="px-4 mb-20 lg:mb-6">
                        <h2 className="text-xl font-bold mb-4 lg:mb-6">Popular Now</h2>
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Bottom Navigation - مخفي على الشاشات الكبيرة */}
            <div className="lg:hidden">
                <BottomNavigation />
            </div>
        </div>
    );
};

export default Home;