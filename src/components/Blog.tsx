import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <section className="w-full h-max  md:w-[1110px] md:h-[450px]  mx-auto lg:16px xl:mx-32px 2xl:mx-64px my-20 flex flex-col items-center ">
      <div className="w-[80%] h-[80%] mx-auto justify-center items-center flex flex-col gap-8 md:gap-1 ">

     
     <div className='flex flex-col gap-3 items-center mt-5 md:mt-5'> 
        <h1 className='text-2xl font-Poppins font-semibold text-center' >Our Blogs</h1>
        <p className='text-xs md:text-sm font-Poppins text-g1 p-4 pt-1 text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
     </div> 
     
       <div className='flex md:flex-row flex-col gap-6'>
      <div className="w-[320px] h-[280px] md:h-[286px] md:w-[240px]  flex flex-col gap-6 mx-auto p-4 cursor-pointer">
        {/* Image Section */}
        <div className=" flex justify-center shrink-0 ">
          <Image
            src='/images/Rectangle 13.png'
            alt='blogs'
            width={200}
            height={200}
            className="md:w-full md:h-full flex mx-auto"
          />
        </div>
  
        {/* Details Section */}
        <div className="flex flex-col items-center md:items-start gap-2 ">
          <h2 className="text-sm font-Poppins">Going all-in with millennial design</h2>
          <p className="text-black font-semibold text-base font-Poppins">Read More</p>
          <div className='w-20 border-b-4 bg-g1'></div>
        </div>
      </div>
  
      <div className="w-[320px] h-[280px] md:h-[286px] md:w-[240px] flex flex-col gap-4 mx-auto p-4 cursor-pointer">
        {/* Image Section */}
        <div className="flex justify-center shrink-0 ">
          <Image
            src='/images/Rectangle 14.png'
            alt='blogs'
            width={200}
            height={200}
            className="md:w-full md:h-full flex mx-auto"
          />
        </div>
  
        {/* Details Section */}
        <div className="flex flex-col items-center md:items-start gap-2 ">
          <h2 className="text-sm font-md font-Poppins ">Going all-in with millennial design</h2>
          <p className="text-black font-semibold text-base font-Poppins">Read More</p>
          <div className='w-20 border-b-4 bg-g1'></div>
        </div>
      </div>

      <div className="w-[320px] h-[280px] md:h-[286px] md:w-[240px] flex flex-col gap-4 mx-auto p-4 cursor-pointer">
        {/* Image Section */}
        <div className=" flex justify-center shrink-0 ">
          <Image
            src='/images/Rectangle 15.png'
            alt='blogs'
            width={200}
            height={200}
            className="md:w-full md:h-full flex mx-auto"
          />
        </div>
  
        {/* Details Section */}
        <div className="flex flex-col items-center md:items-start gap-2 ">
          <h2 className="text-sm font-md font-Poppins ">Going all-in with millennial design</h2>
          <p className="text-black font-semibold text-base font-Poppins">Read More</p>
          <div className='w-20 border-b-4 bg-g1'></div>
        </div> </div>
      </div> 
    </div>
    </section>
  )
}

export default Blog
