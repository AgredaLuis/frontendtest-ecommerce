import React from 'react'

const Cart = () => {
  return (
    <article className='absolute bg-white rounded-xl shadow-2xl w-[330px] mx-auto mt-1 p-5 right-0 top-16'>
      <h3 className='m-1 pb-2 border-b-2 font-bold'>Cart</h3>



      <button className='bg-primary-orange py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full duration-500  hover:bg-primary-pale-orange'>Checkout</button>
    </article>
  )
}

export default Cart