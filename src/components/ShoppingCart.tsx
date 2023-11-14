import React from 'react'
import Image from 'next/image'
import cart from '../../public/images/icon-cart.svg'
const ShoppingCart = () => {
  return (
    <div className='relative md:px-10 cursor-pointer'>
      <Image src={cart} alt='cart-icon'></Image>
      <span className='absolute w-4 h-3  bg-primary-orange rounded-full m-1 bottom-2 left-2 md:left-12 flex items-center justify-center'><p className='text-xs text-center text-white border-1 border-red-600'>1</p></span>
    </div>
  )
}

export default ShoppingCart