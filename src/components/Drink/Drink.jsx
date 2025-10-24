import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loding/Loding';

export default function Drink() {
  const [dataDrink, setDataDrink] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const getDrink = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake'
        );
        if (isMounted) {
          setDataDrink(data?.drinks || []);
          console.log('✅ API response:', data);
        }
      } catch (err) {
        console.error('❌ Error fetching Drink data:', err);
        if (isMounted) setError('حدث خطأ أثناء تحميل البيانات');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    getDrink();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <Loading/>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!dataDrink || dataDrink.length === 0)
    return <p className="text-center text-gray-500">لا توجد بيانات.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 place-items-center ">
      {dataDrink.map((item) => (
        <div
          key={item?.idDrink}
          className="product-card group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-[#F9F6F1] bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#C2A383]/20"
        >
          {/* Product Image */}
          <div className="relative mx-4 mt-4 flex h-60 overflow-hidden rounded-xl sm:h-72 md:h-80 bg-gradient-to-br from-[#3C2A21]/10 to-[#6B4F3A]/10">
            <img
              className="w-full object-cover transition-all duration-500 group-hover:scale-105"
              src={item?.strDrinkThumb}
              alt={item?.strDrink}
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply"></div>

            {/* Discount Badge */}
            <span className="absolute top-3 left-3 rounded-full bg-[#6B4F3A] px-3 py-1 text-sm font-semibold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              20% OFF
            </span>

            {/* Wishlist Button */}
            <button
              className="absolute top-3 right-3 rounded-full bg-white/90 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#A67856] focus:ring-offset-2"
              aria-label="Add to wishlist"
            >
              <svg
                className="h-5 w-5 text-[#3C2A21] transition-colors hover:text-[#A67856]"
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

            {/* Quick View Overlay */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
              <button className="rounded-full bg-[#3C2A21] px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#6B4F3A] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A67856] focus:ring-offset-2">
                Quick View
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-4 px-4 pb-4 sm:mt-6 sm:px-6 sm:pb-6">
            <div className="block focus:outline-none focus:ring-2 focus:ring-[#A67856] focus:ring-offset-2 rounded-lg p-2 -m-2">
              <h3 className="text-xl font-bold text-[#2B2B2B] transition-colors group-hover:text-[#6B4F3A] sm:text-2xl">
                {item?.strDrink}
              </h3>
              <p className="mt-1 text-sm text-[#A67856] font-medium">
                Freshly Ground Blend
              </p>
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center sm:mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-[#A67856] sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 rounded-full bg-[#C2A383]/20 px-2 py-0.5 text-xs font-semibold text-[#6B4F3A] sm:text-sm">
                  4.9
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-center justify-between sm:mt-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-2xl font-bold text-[#3C2A21] sm:text-3xl">
                  $14.99
                </span>
                <span className="text-sm text-[#6B4F3A] font-medium">
                  250g
                </span>
              </div>
              <div className="text-sm text-[#A67856] font-medium">
                ☕ Arabica Blend
              </div>
            </div>

            {/* Add to Cart */}
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B89573] to-[#6B4A2B] px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:from-[#7C5A3D] hover:to-[#4B3328] hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#A67856] focus:ring-offset-2 sm:px-6 sm:py-2 sm:text-lg">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
