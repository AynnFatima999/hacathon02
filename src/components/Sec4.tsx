import Image from 'next/image'
import React from 'react'

const Sec4 = () => {
  return (
    <section className="w-full h-[520px] md:w-[1110px] md:h-[600px] mx-auto lg:16px xl:mx-32px 2xl:mx-64px bg-y2">
      <div className="w-[90%] h-[80%] mx-auto justify-center flex flex-col md:flex-row gap-2 my-auto flex-1">
        <div className='w-[100%] md:[880px] h-[50%] md:h-[100%]'>
        <Image
            src='/images/Asgaard sofa 1.png'
            alt='sofa'
            width={500}
            height={500}
            className="w-[300px] h-[300px] md:w-[560px] md:h-[540px] mx-auto md:-translate-y-10 -translate-x-2"
          />
        </div>
        <div className='w-[100%] md:w-[80%] h-[40%] flex flex-col gap-2 md:pl-12 mt-6 font-Poppins translate-x-6 translate-y-16 md:translate-y-40'>
           <div className='font-medium text-lg'>New Arrivals</div>
            <div className='font-bold text-3xl'>Asgaard sofa</div>
            <div className='mt-3'><button className='w-40 h-10 border border-black px-4 py-2'>Order Now</button></div>
            

        </div>
     </div>
      


   </section>
  )
}

export default Sec4
