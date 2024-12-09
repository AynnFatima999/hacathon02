import React from 'react'

const FootDetail = () => {
  return (
    <div className='w-full h-[360px] md:w-[1109px] md:h-[300px] mx-auto my-8 lg:mx-auto xl:mx-32px 2xl:mx-64px flex flex-col gap-2 md:gap-4 p-4 md:p-0 md:flex-row justify-evenly
     items-center bg-w2'>
        <div className='flex flex-col gap-6 p-4 md:p-0 md:flex-row justify-evenly'>
      <div className='md:w-[280px] flex flex-col items-center md:items-start justify-center gap-2'>
      <div className='font-Poppins font-semibold text-lg md:text-xl'>Free Delivery</div>
      <div className='font-Poppins text-xs px-12 text-center md:text-start md:px-0 md:text-md tracking-wider text-g1'>For all oders over $50, consectetur adipim scing elit.</div>
      </div>

      <div className='md:w-[280px] flex flex-col items-center md:items-start justify-center gap-2'>
      <div className='font-Poppins font-semibold text-lg md:text-xl'>90 Days Return</div>
      <div className='font-Poppins text-xs px-12 text-center md:text-start md:px-0 md:text-md text-g1 tracking-wider  '>If goods have problems, consectetur adipim scing elit..</div>
      </div>

      <div className='md:w-[280px] flex flex-col items-center md:items-start justify-center  gap-2'>
      <div className='font-Poppins font-semibold text-lg md:text-xl'>Secure Payment</div>
      <div className='font-Poppins text-xs px-12 text-center md:text-start md:px-0 md:text-md text-g1 tracking-wider'>100% secure payment, consectetur adipim scing elit.</div>
      </div>
      </div>
    </div>
  )
}

export default FootDetail
