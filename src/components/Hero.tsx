import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-[580px] md:w-[1110px] md:h-[600px] mx-auto lg:16px xl:mx-32px 2xl:mx-64px bg-y1'>
       <div className='w-[80%] h-[90%] mx-auto justify-center flex flex-col md:flex-row pt-12 md:pt-0'>
       <div className='w-[50%] h-[90%px] my-auto md:mx-auto flex-col'>
        <div className='w-[240px] h-[200px] md:w-[380px] md:h-[160px]  ml-6 md:ml-0 pt-8 mx-auto items-center justify-center font-Poppins text-3xl md:text-5xl text-center md:text-start font-medium '>
        Rocket single seater <br />
       <Link href='/'><span className='inline-block mt-4 text-sm font-md mx-auto border-b border-black'>Shop Now</span></Link> 
        </div>
         
      
       </div>
       <div className='w-[100%] h-[50%px] flex justify-center items-center '>
        <Image src='/images/Rocket single seater 1.png' alt='herosofaimage' width={560} height={500} className='w-[400px] h-[300px] md:w-[600px] md:h-[520px] mt-6'/>
       </div>


       </div>
    </section>
  )
}

export default Hero
