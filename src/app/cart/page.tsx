import FootDetail from '@/components/FootDetail'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cartpage = () => {
  return (
    <>
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
                Cart
              </div>
              <div className="flex gap-1 text-sm md:text-md items-center justify-center">
                <div className="">
                  <Link href="/">Home</Link>
                </div>
                <div>
                  <ChevronRightIcon className="size-4" />
                </div>
                <div className="">
                  <Link href="/shop">Cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
         </section >

         <div className="w-full md:w-[1110px] h-[600px] md:[400px] mx-auto lg:mx-16 xl:mx-32 2xl:mx-64  flex flex-col md:flex-row items-center pt-8 gap-3 md:gap-10   ">
            <div className='w-[90%] h-[50%]  flex flex-col gap-6 items-center my-10'>


        <div className="w-[100%] md:w-[100%] h-10 flex items-center justify-between gap-2 md:gap-4  bg-w2 text-center mx-auto mt-2 md:mt-0 ">

          <div className="font-Poppins w-[60px] h-[20] text-sm md:text-md pl-2">
          Product
          </div>
          <div className="font-Poppins w-[30px] h-[20] text-sm md:text-md ">
          Price
          </div>
          <div className="font-Poppins  text-sm md:text-md ">
          Quantity
          </div>
          <div className="font-Poppins text-sm md:text-md pr-2">
          Subtotal
          </div>
    
        </div>


        <div className="w-[100%] md:w-[100%] h-20 flex items-center justify-between text-center mx-auto">
          <div className='flex gap-1 justify-center items-center '>
          <div className="flex flex-col md:flex-row justify-center pl-2 items-center mx-auto">
        <img
          src='/images/Outdoor sofa set 1.png'
          alt=""
          className="w-[40px] h-[40px] bg-y1 rounded-sm "
        />
        </div>
          
          <div className="font-Poppins  text-[8px] md:text-xs md:text-md">
          Asgaard <br />sofa
          </div> </div>

          <div className="font-Poppins text-[8px] md:text-[10px]  text-g1  ">
          Rs. 250,000.00
          </div>
          <div className="font-Poppins w-6 h-6 text-sm md:text-md bg-w3 border border-g1">
          1
          </div>
          <div className="font-Poppins text-[10px] pr-2 text-g1 ">
          Rs. 250,000.00
          </div>
    
        </div>
       </div>


            <div className='w-[250px] md:w-[300px] h-[420px] md:h-[300px] flex flex-col gap-4 mx-auto bg-y3 mb-4 md:mb-0 rounded-sm md:mr-6'>
            <div className='font-semibold text-xl text-center md:text-2xl p-4'>Cart Totals</div>
            <div className='flex justify-between p-6 pt-0'>
            <div className='font-Poppins text-sm md:text-md'>Subtotal</div>
            <div className="font-Poppins text-sm md:text-md text-g1 ">Rs. 250,000.00 </div>
            </div>

            <div className='flex justify-between p-6 pt-0'>
            <div className='font-Poppins text-sm md:text-md'>Total</div>
            <div className="font-Poppins text-sm md:text-md text-yellow-600 ">Rs. 250,000.00 </div>
            </div>
            
            <div className='items-center flex mx-auto'>
            <button className='w-40 h-12 border border-black rounded-xl text-center items-center'>Check Out</button>
            </div> 

           </div>

            
         </div>






      <FootDetail />
    
    </>
  )
}

export default Cartpage
