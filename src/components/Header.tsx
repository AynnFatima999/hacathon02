import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Header = () => {
  return (
    <header className='w-full h-20 md:w-[1109px]  md:h-[90px] mx-auto lg:mx-auto xl:mx-32px 2xl:mx-64px  bg-y1 flex flex-col md:flex-row px-0 justify-center
     items-center'>
        
        <div className='md:w-[430px] h-[24px] flex justify-center text-center items-center gap-6 md:ml-32'>
          <div className='list'><Link href='/'>Home</Link></div>
          <div className='list'><Link href='/'>About</Link></div>
          <div className='list'><Link href='/'>Shop</Link></div>
          <div className='list'><Link href='/'>Contact</Link></div>
        </div>
        <div className='w-[247px] h-[28px] flex justify-center md:justify-end gap-6 md:ml-16 items-center'>
          <div className='w-[28px] h-[28px] items-center flex '><Link href='/'><Image src='/images/Vector3.png' alt='vector' width={18} height={18}/></Link></div>
          <div className='w-[28px] h-[28px] items-center flex '><Link href='/'><Image src='/images/Vector2.png' alt='vector' width={18} height={18}/></Link></div>
          <div className='w-[28px] h-[28px] items-center flex '><Link href='/'><Image src='/images/Vector4.png' alt='vector' width={20} height={20}/></Link></div>
          <div className='w-[28px] h-[28px] items-center flex '><Link href='/'><Image src='/images/Vector1.png' alt='vector' width={18} height={20}/></Link></div>
          </div>

       
      
    </header>
  )
}

export default Header;
