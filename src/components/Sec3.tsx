import React from 'react'
import Sofa from './Sofa'
import Link from 'next/link'

const Sec3 = () => {
  return (
    <section className='w-full h-[620px] md:w-[1110px] md:h-[600px] mx-auto lg:16px xl:mx-32px 2xl:mx-64px bg-[#FFFF]'>
    <div className='w-[90%] h-[90%] mx-auto items-center text-center flex flex-col mt-8 md:pt-0 gap-4'>
     <div className='flex flex-col gap-3'> 
        <h1 className='text-2xl font-Poppins font-medium'>Top Picks For You</h1>
        <p className='text-xs md:text-sm font-Poppins text-g1 p-4'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
     </div>

     <div className='w-full md:h-[380px] flex overflow-x-scroll '>
       <Sofa name="Trenton modular sofa_3" price="Rs. 25,000.00" image="/images/Trenton modular sofa_3 1.png" />
      <Sofa name="Granite dining table with chair" price="Rs. 25,000.00" image="/images/Granite dining table with dining chair 1.png" />
      <Sofa name="Outdoor bar table and stool" price="Rs. 25,000.00" image="/images/Outdoor bar table and stool 1.png" />
      <Sofa name="Plain console with teak mirror" price="Rs. 25,000.00" image="/images/Plain console with teak mirror 1.png" />
     </div>

     <Link href="/">
              <span className="inline-block mt-10 md:mt-4 text-sm font-md mx-auto border-b border-black">
                View More
              </span>
            </Link>
    </div>
    </section>
  )
}

export default Sec3
