'use client'
import { XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header className="w-full h-20 md:w-[1109px] md:h-[90px] mx-auto lg:mx-auto xl:mx-32px 2xl:mx-64px flex flex-col md:flex-row px-0 justify-center items-center">
      <div className="md:w-[430px] h-[24px] flex justify-center text-center items-center gap-6 md:ml-32">
        <div className="list"><Link href="/">Home</Link></div>
        <div className="list"><Link href="/">About</Link></div>
        <div className="list"><Link href="/shop">Shop</Link></div>
        <div className="list"><Link href="/contact">Contact</Link></div>
      </div>

      <div className="w-[247px] h-[28px] flex justify-center md:justify-end gap-6 md:ml-16 items-center">
        <div className="w-[28px] h-[28px] items-center flex">
          <Link href="/login">
            <Image src="/images/Vector3.png" alt="vector" width={18} height={18} />
          </Link>
        </div>
        <div className="w-[28px] h-[28px] items-center flex">
          <Link href="/">
            <Image src="/images/Vector2.png" alt="vector" width={18} height={18} />
          </Link>
        </div>
        <div className="w-[28px] h-[28px] items-center flex">
          <Link href="/">
            <Image src="/images/Vector4.png" alt="vector" width={20} height={20} />
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="w-[28px] h-[28px] items-center flex cursor-pointer relative">
          <Image
            src="/images/Vector1.png"
            alt="vector"
            width={18}
            height={20}
            onClick={() => setCartOpen((prev) => !prev)} // Toggle cart visibility
          />
          {isCartOpen && 
          (<div className='absolute w-52 h-72 md:w-52 md:h-72 p4 rounded-md shadow-sm bg-y3 border ml-4 border-black right-0 top-10  flex flex-col z-[20] gap-4 items-center'>
               <div className='flex font-semibold items-center text- text-center md:text-xl'>Shopping Cart</div>
               <div className="flex justify-between pl-2 items-center mx-auto gap-6">
           <img
             src='/images/Outdoor sofa set 1.png'
             alt=""
             className="w-[40px] h-[40px] bg-y1 rounded-sm "
           />
           <div className='flex flex-col'>
        <div className="font-Poppins text-[16px] md:text-[10px] md:text-md">
          Asgaard sofa
          </div> 
          <div className="font-Poppins text-[10px] md:text-[8px] md:text-md gap-2">
         <span className='px-1 md:px-0'>1</span>
         <span className='px-1 md:px-0'>X</span>
         <span className='px-1 md:px-0'>Rs. 250,000.00</span>
         
          </div>
          <div className='bg-g2 w-6 h-6 rounded-full items-center flex justify-center  md:translate-x-12 translate-y-2'><XMarkIcon className='size-3'/></div>
             </div>
           </div>

          <div className='flex justify-between p-6 pt-10 gap-6 items-center'>
            <div className='font-Poppins text-sm '>Subtotal</div>
            <div className="font-Poppins  text-[10px] md:text-[10px] md:text-md gap-2 text-yellow-600">Rs. 250,000.00 </div>
          </div>
          <div className='w-full border-b border-g1 '></div>
          <div className='items-center flex gap-4 px-2'>
          <Link href='/cart'><button className='w-20 h-8 text-sm border border-black rounded-xl text-center items-center'>ViewCart</button></Link>
            <button className='w-20 h-8 text-sm border border-black rounded-xl text-center items-center'>Check Out</button>
            </div>

       

          </div>)
          } 
        </div>
      </div>
    </header>
  );
};

export default Header;
