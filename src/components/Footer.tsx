import Link from 'next/link';
import React from 'react'


const Footer = () => {
  return (
    <footer className="w-full h-max md:w-[1110px] md:h-[540px] mx-auto flex justify-center items-center ">
  <div className="w-[90%] md:w-[910px] h-[728px]  md:h-[430px]  flex flex-col items-center gap-1 mt-4 ">
    {/* Upper Section */}
    <div className="w-[90%] h-[620px] md:w-[940px] md:h-[312px]  flex flex-col md:flex-row md:gap-10 -translate-x-2 md:items-center">
    <div className='w-[220px] h-[24px] md:w-[px] md:h-[px] text-xs md:text-sm text-g1 text-center items-center mx-auto md:mx-0 mb-4 shrink-0'>400 University Drive Suite 200 Coral Gables,FL 33134 USA
    </div>
     {/* right container Section */}
    <div className='w-full h-[580px] md:w-[710px] md:h-[312px] flex flex-col md:flex-row items-center justify-center  '>
        <div className='w-[220px] h-[412px] md:h-[312px] flex flex-col gap-4 justify-center items-center mx-auto '>
            <div className='w-[48px] h-[24px] text-g1 text-center'>Links</div>
            <div className='w-[48px] h-[24px] font-md justify-center text-center md:text-start'><Link href='/'>Home</Link></div>
            <div className='w-[48px] h-[24px] font-md justify-center text-center md:text-start'><Link href='/'>About</Link></div>
            <div className='w-[48px] h-[24px] font-md justify-center text-center md:text-start'><Link href='/shop'>Shop</Link></div>
            <div className='w-[48px] h-[24px] font-md justify-center text-center md:text-start'><Link href='/'>Contact</Link></div>
        </div>
       
        <div className='w-[220px] h-[412px] md:h-[250px] flex flex-col gap-5  justify-center items-center mx-auto md:mb-10 '>
            <div className='w-[148px] h-[24px] text-g1 text-center'>Help</div>
            <div className='w-[148px] h-[24px] font-md justify-center text-center '><Link href='/'>Payment Options</Link></div>
            <div className='w-[148px] h-[24px] font-md justify-center text-center '><Link href='/'>Returns</Link></div>
            <div className='w-[148px] h-[24px] font-md justify-center text-center '><Link href='/'>Privacy Policies</Link></div>
        </div>

        <div className='w-[260px] h-[380px] md:h-[200px] flex flex-col gap-4 justify-center items-center mx-auto md:mb-32'>
            <div className='w-[100px] h-[24px] text-g1 text-center'>Newsletter</div>
            <div className='w-[200px] h-[24px] font-md justify-center text-center md:text-start flex flex-col items-center md:flex-row gap-4'>
                <div className='text-xs w-full flex-1'><input type="text" placeholder='Enter Your Email Address' className='outline-none bg-transparent text-black border-b border-gray-600 w-36 ' /></div>
                <div className='w-[70px] text-xs font-medium border-b border-gray-400 font-Poppins'>SUBSCRIBE</div>
            </div>
            
        </div>
    </div>
     
    </div>
    
      <div className='border-b w-[90%] md:w-full mx-auto my-0'></div>
    {/* Lower Section */}
    <div className="w-[90%] md:w-[910px] h-[40px] flex items-center text-center justify-center md:justify-start text-sm md: text-[#000000]">
      2022 Meubel House. All rights reserved
    </div>
  </div>
</footer>

  )
}

export default Footer;
