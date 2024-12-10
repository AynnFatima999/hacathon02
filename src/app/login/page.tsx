import FootDetail from '@/components/FootDetail'
import Header from '@/components/Header'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginAccount = () => {
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
                Shop
              </div>
              <div className="flex gap-1 text-sm md:text-md items-center justify-center">
                <div className="">
                  <Link href="/">Home</Link>
                </div>
                <div>
                  <ChevronRightIcon className="size-4" />
                </div>
                <div className="">
                  <Link href="/shop">Shop</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part */}
        <div className="w-full md:w-[1110px] h-max mx-auto lg:mx-16 xl:mx-32 2xl:mx-64  flex flex-col md:flex-row items-center pt-8 gap-8  ">
        
        <div className='w-[90%] h-[80%]  mx-auto flex flex-col items-center md:items-start p-2 font-Poppins gap-4'>
            <div className='font-semibold text-xl md:text-2xl'>Log In</div>
            <div className='flex flex-col items-center md:items-start gap-2'>
            <div className='text-sm'>Username or email address</div>
            <div className='w-60 h-12 border border-g1  rounded-md text-center items-center-'><input type="text" className='outline-none w-60 h-12 bg-transparent'   /></div>
            </div>

            <div className='flex flex-col items-center md:items-start gap-2'>
            <div className='text-sm'>Password</div>
            <div className='w-60 h-12 border border-g1 rounded-md text-center items-center-'><input type="password" className='outline-none w-60 h-12 bg-transparent' /></div>
            </div>

            <div className='items-center md:items-start gap-2 text-sm'> <input type="checkbox" className='m-2 items-center' />
            Remember me
            </div>
            
            <div className='flex flex-col items-center md:items-start gap-2'>
          <button className='w-40 h-12 border border-black  rounded-md text-center items-center'>Login</button>
         <Link href='/'><div className='text-sm'>Lost your password?</div> </Link>
         
          </div>
        </div>
       
        <div className='w-[90%] h-[80%]  mx-auto flex flex-col items-center md:items-start p-2 font-Poppins gap-4'>
            <div className='font-semibold text-xl md:text-2xl'>Registor</div>
            <div className='flex flex-col items-center md:items-start gap-2'>
            <div className='text-sm'>Email address</div>
            <div className='w-60 h-12 border border-g1  rounded-md text-center items-center-'><input type="text" className='outline-none w-60 h-12 bg-transparent'   /></div>
            </div>

          <div className='flex flex-col items-center md:items-start gap-2'>  
            <div className='text-sm text-center md:text-start p-4 pb-0 md:pl-0 text-g1'>A link to set a new password will be sent to your email address.</div>
            <div className='text-sm text-center md:text-start p-4 md:pl-0 text-g1'> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
           
            </div>
            
          <button className='w-40 h-12 border border-black  rounded-md text-center items-center'>Registor</button>
        </div>
       
       
        
        </div>
     <FootDetail />
     
 </> 
 )
}

export default LoginAccount
