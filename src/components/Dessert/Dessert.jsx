import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Dessert.module.css';

export default function Dessert() {
  const [DataDessert, setDataDessert] = useState([]);

  const GitDessert = async () => {
    try {
      const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
      );
      setDataDessert(data?.meals || []);
    } catch (error) {
      console.error('Error fetching Dessert data:', error);
    }
  };

  useEffect(() => {
    GitDessert();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F5] flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {DataDessert.map((Dessert) => (
          <div
            key={Dessert.idMeal}
            className="product-card group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-[#FFF8F5] bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#E8BCA8]/30"
          >
            {/* Product Image */}
            <div className="relative mx-4 mt-4 flex h-60 overflow-hidden rounded-xl sm:h-72 md:h-80 bg-gradient-to-br from-[#D4A373]/10 to-[#F3D6B2]/10">
              <img
                className="w-full object-cover transition-all duration-500 group-hover:scale-105"
                src={Dessert.strMealThumb}
                alt={Dessert.strMeal}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJncmFpbmVkIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMiIgbnVtT2N0YXZlcz0iMyIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI2dyYWluZWQpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-25 mix-blend-multiply"></div>

              {/* Badge */}
              <span className="absolute top-3 left-3 rounded-full bg-[#D4A373] px-3 py-1 text-sm font-semibold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                New
              </span>

              {/* Wishlist */}
              <button
                className="absolute top-3 right-3 rounded-full bg-white/90 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#E8BCA8] focus:ring-offset-2"
                aria-label="Add to wishlist"
              >
                <svg
                  className="h-5 w-5 text-[#7B4B2A] transition-colors hover:text-[#D4A373]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Quick View */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                <button
                  className="rounded-full bg-[#D4A373] px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#E8BCA8] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E8BCA8] focus:ring-offset-2"
                  aria-label="Quick view of Dessert"
                >
                  Quick View
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 px-4 pb-4 sm:mt-6 sm:px-6 sm:pb-6 ">
              <h3 className="text-xl font-bold text-[#3E2C25] transition-colors group-hover:text-[#D4A373] sm:text-2xl">
                {Dessert.strMeal}
              </h3>
              <p className="mt-1 text-sm text-[#D4A373] font-medium">
                Soft • Creamy • Sweet Bliss
              </p>

              {/* Rating */}
              <div className="mt-3 flex  sm:mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-[#E8BCA8] sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 rounded-full bg-[#F3D6B2]/40 px-2 py-0.5 text-xs font-semibold text-[#7B4B2A] sm:text-sm">
                  5.0
                </span>
              </div>

              {/* Price */}
              <div className="mt-3 flex items-center justify-between sm:mt-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                  <span className="text-2xl font-bold text-[#7B4B2A] sm:text-3xl">
                    $8.99
                  </span>
                  <span className="text-sm text-[#D4A373] font-medium">
                    Slice
                  </span>
                </div>
                <div className="text-sm text-[#E8BCA8] font-medium">
                  🍰 Sweet Treat
                </div>
              </div>

              {/* Add to Cart */}
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A373] to-[#E8BCA8] px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:from-[#E8BCA8] hover:to-[#D4A373] hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E8BCA8] focus:ring-offset-2 sm:px-6 sm:py-4 sm:text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </button>

              {/* Quick Info */}
              <div className="mt-3 flex justify-between text-xs text-[#7B4B2A]/80 sm:text-sm">
                <span>☕ Latte Cream</span>
                <span>🍫 Cocoa Touch</span>
                <span>🍯 Caramel Swirl</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
