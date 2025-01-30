import React from 'react'
import img from '../../../../public/images/market/General-Dentists 1.png'
const HeaderSection = ({ title, subtitle, imgURL, textDir }) => {
    return (
        <header
            className={ `relative bg-cover bg-center bg-no-repeat h-[580px] flex flex-col justify-center `
}
    style={{ backgroundImage: `url('${imgURL}')` }}
    >
            <div className=' bg-white/40 w-full h-full absolute top-0 left-0'> </div>
                <div className='relative z-20 text-6xl text-black px-28 '>
                    <p className='font-thin text-[#5A5A5A] leading-12 pb-5'>{subtitle}</p>
                    <h1 >{title}</h1>
                </div>
    
        </header>
    )
}

export default HeaderSection