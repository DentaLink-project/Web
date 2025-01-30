'use client'
import React from 'react'
import dentalProducts from '@/data/dentalProducts'
import ProductList from '@/components/market/ProductList'
import HeaderSection from '@/components/ui/HeaderSection/HeaderSection'
import headerImg from '../../../public/images/market/General-Dentists 1.png'
const marketPage = () => {
 
  return (
    <div className=''>
      <HeaderSection imgURL="/images/market/General-Dentists%201.png" textDir='center' title="you Know and Trust" subtitle='All the Brands' />
      <div className='flex flex-col gap-5 mt-10 px-16'>
        {
          dentalProducts.map(i => (
            <div key={i.category} className='flex flex-col mb-12'>
              <h1 className='text-4xl'>{i.category}</h1>
              <ProductList products={i.products} />
            </div>
          ))
    }
      </div>
      
    </div>
  )
}

export default marketPage