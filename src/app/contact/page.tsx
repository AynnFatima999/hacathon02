import FootDetail from '@/components/FootDetail';
import Header from '@/components/Header';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Aboutpage = () => {
  return (
    <>
     <Header />
      <section className="w-full h-[205px] md:w-[1110px] md:h-[310px] mx-auto lg:mx-16 xl:mx-32 2xl:mx-64">
        <div className="w-full h-[200px] flex justify-center items-center relative pt-2 md:pt-28 ">
          {/* Background Image Section */}
          <div className="w-full md:w-full h-[216px] md:h-[316px] absolute flex items-center justify-center">
            <Image
              src="/images/Rectangle 1.png"
              alt="bg"
              width={600}
              height={400}
              className="md:w-full md:h-[316px] h-[216px]"
            />
          </div>

          {/* Overlapping Content Section */}
          <div className="flex flex-col absolute items-center w-[200px] h-[180px] ">
            {/* Logo and Shop Text */}
            <div className="absolute mt-3">
              <Image
                src="/images/Meubel House_Logos-05.png"
                alt="bg"
                width={60}
                height={60}
                className="md:w-[80px] md:h-[80px] h-[80] items-center mx-auto"
              />
              <div className="font-semibold text-xl text-center md:text-2xl -translate-y-2">
                Contact
              </div>
              <div className="flex gap-1 text-sm md:text-md items-center justify-center">
                <div className="">
                  <Link href="/">Home</Link>
                </div>
                <div>
                  <ChevronRightIcon className="size-4" />
                </div>
                <div className="">
                  <Link href="/shop">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full md:w-[1110px] h-max  mx-auto lg:mx-16 xl:mx-32 2xl:mx-64 flex flex-col  items-center pt-8 gap-8  ">
      <div className='w-[90%] h-[40%] mx-auto items-center text-center flex flex-col md:flex-row gap-4'>
     <div className='flex flex-col gap-3'> 
        <h1 className='text-xl md:text-2xl font-Poppins font-semibold'>Get In Touch With Us</h1>
        <p className='text-xs md:text-sm font-Poppins text-g1 p-4 pt-0 md:px-16 tracking-wide'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
     </div>
      </div>
     

     
     <div className='w-[80%] md:w-[60%] h-[80%] mx-auto  items-center text-center flex flex-col md:flex-row gap-4 justify-between'>
     <div className='flex flex-col gap-4 items-center md:pl-4 '>
     <div className='flex flex-col items-center md:items-start gap-2 font-Poppins'>
           <div className='flex gap-2 items-center'>
            <div className='w-4 h-4'><img src="/images/map.png" alt="vector" /></div>
            <div className='text-md font-semibold'>Address</div></div>
            <div className='md:w-40 text-sm md:p-1 md:text-start md:pl-0 p-6 pt-2'>236 5th SE Avenue, New York NY10000, United States</div>  
     </div>

     <div className='flex flex-col items-center md:items-start gap-2 font-Poppins'>
     <div className='flex gap-2 items-center'>
     <div className='w-4 h-4'><img src="/images/mob.png" alt="vector" /></div>
            <div className='text-md font-semibold'>Phone</div> </div>

            <div className='md:w-40 text-sm md:p-1 md:text-start md:pl-0 p-6 pt-2'>Mobile: +(84) 546-6789
            Hotline: +(84) 456-6789</div>  
     </div>

     <div className='flex flex-col items-center md:items-start gap-2 font-Poppins'>
     <div className='flex gap-2 items-center'>
     <div className='w-4 h-4'><img src="/images/time.png" alt="vector" /></div>
            <div className='text-md font-semibold'>Working Time</div> </div>
            <div className='md:w-40 text-sm md:p-1 md:text-start md:pl-0 p-6 pt-2'>Monday-Friday: 9:00 - 22:00
            Saturday-Sunday: 9:00 - 21:00</div>  
     </div>


     </div>
    
    <div className='flex flex-col items-center md:items-start gap-4'>
     <div className='flex flex-col items-center md:items-start gap-2'>
            <div className='text-sm'>Your name</div>
            <div className='w-60 h-12 border border-g1  rounded-md text-center items-center-'><input type="text" placeholder='abc'  className='outline-none w-60 h-12 bg-transparent p-2'   /></div>
     </div>
     <div className='flex flex-col items-center md:items-start gap-2'>
            <div className='text-sm'>Email address</div>
            <div className='w-60 h-12 border border-g1  rounded-md text-center items-center-'><input type="text" placeholder='abc@gmail.com' className='outline-none w-60 h-12 bg-transparent p-2'   /></div>
     </div>

     <div className='flex flex-col items-center md:items-start gap-2'>
            <div className='text-sm'>Subject</div>
            <div className='w-60 h-12 border border-g1  rounded-md text-center items-center-'><input type="text" placeholder='This is an optional' className='outline-none w-60 h-12 bg-transparent p-2'   /></div>
     </div>


     <div className='flex flex-col items-center md:items-start gap-2'>
            <div className='text-sm'>Message</div>
            <div className='w-60 h-20 border border-g1  rounded-md text-center items-center-'><input type="text" placeholder='Hey! This is really amazing..' className='outline-none w-60 h-12 bg-transparent p-2'   /></div>
     </div>

     <button className='w-48 h-8 border border-black mt-4 rounded-md text-center items-center'>Submit</button>
     </div>
          
     </div>



    </div>

    <FootDetail />
    </>
  )
}

export default Aboutpage;
