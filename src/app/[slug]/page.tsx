import Header from '@/components/Header';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react'

const Singlepage = () => {
  return (
   <div>
    <Header />
    <div className="md:w-[1110px] h-[600px] mx-auto w-[100%] bg-w2 flex flex-col pt-8 md:pt-0 "> 
  {/* heading nav */}
    <div className='w-[100%] h-[40px] flex  gap-4 items-center'>
    <div className="">
                  <Link href="/">Home</Link>
                </div>
                <div>
                  <ChevronRightIcon className="size-4" />
                </div>
                <div className="">
                  <Link href="/shop">Shop</Link>
                </div>
                <div>
                  <ChevronRightIcon className="size-4" />
                </div>

                <div className="h-6 border-l border-black"></div>
                <div className='font-Poppins'>Asgaard sofa</div>
    </div>
    
    {/* content sec */}
    <div className='w-[100%] h-[80%] mx-auto my-4 border flex'>
      <div className='w-[50%] h-[50%]'></div>
      <div className='w-[50%] h-[50%]'></div>
    </div>
    
   


    </div>
    </div>
  )
}

export default Singlepage; 
