import React from 'react'

const CustomNextArrow = ({ onClick }) => (
    <button
        className="absolute right-0 z-10 bg-gray-100 w-10 h-10 shadow-xl -translate-y-1/2 top-1/2 hover:bg-gray-200 text-[#5A5A5A] text-4xl "
        onClick={onClick}
        aria-label="Next"
    >
        &#8250; {/* Right Arrow */}
    </button>
);

export default CustomNextArrow