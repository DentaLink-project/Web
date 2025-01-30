import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import img from '../../../public/images/market/tool2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomNextArrow from '../ui/Arrow/CustomNextArrow';
import CustomPrevArrow from '../ui/Arrow/CustomPrevArrow';


const ProductList = ({products}) => {



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='flex justify-end pr-10'>
            <div className="pt-10 relative w-[1300px]">
                <Slider {...settings}>
                    {products.map((product, i) => (
                        <div key={i} className="">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default ProductList;
