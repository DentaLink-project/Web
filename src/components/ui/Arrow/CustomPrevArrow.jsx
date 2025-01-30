import React from 'react'

const CustomPrevArrow = ({ onClick }) => (
    <button
        className="absolute left-[-50px] z-10 bg-gray-100 w-10 h-10 shadow-xl  -translate-y-1/2 top-1/2 hover:bg-gray-200 text-[#5A5A5A] text-4xl "
        onClick={onClick}
        aria-label="Previous"
    >
        &#8249; {/* Left Arrow */}
    </button>
);

export default CustomPrevArrow