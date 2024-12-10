"use client";

import Header from "@/components/Header";
import ProductGallery from "@/components/imageComponent";
import Sec3 from "@/components/Sec3";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductidProps {
  params: { id: string };
}

const Productid: React.FC<ProductidProps> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <Header />
      <div className="md:w-[1110px] h-max mx-auto w-[100%] flex flex-col pt-8 ">
        {/* Heading nav */}
        <div className="w-[100%] h-[40px] flex gap-4 items-center justify-center md:justify-start">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <ChevronRightIcon className="size-4" />
          </div>
          <div>
            <Link href="/shop">Shop</Link>
          </div>
          <div>
            <ChevronRightIcon className="size-4" />
          </div>

          <div className="h-6 border-l border-black"></div>
          <div className="font-Poppins">Asgaard sofa</div>
        </div>

        {/* images section */}
        <div className="w-[100%] h-[80%] mx-auto my-4 shrink-0 md:gap-6 flex md:flex-row flex-col">
          <ProductGallery />

          {/* content section */}
          <div className="md:w-1/2 flex flex-col pt-12 pb-6 md:py-12 items-center md:items-start gap-1">
            <div className="font-medium font-Poppins text-xl tracking-wide md:text-2xl ">
              Asgaard sofa
            </div>
            <div className="text-g1 md:text-lg font-Poppins ">
              Rs. 250,000.00
            </div>

            {/* Rating section */}
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                <Image
                  src="/images/star.png"
                  alt="ratings"
                  width={16}
                  height={10}
                />
                <Image
                  src="/images/star.png"
                  alt="ratings"
                  width={16}
                  height={10}
                />
                <Image
                  src="/images/star.png"
                  alt="ratings"
                  width={16}
                  height={10}
                />
                <Image
                  src="/images/star.png"
                  alt="ratings"
                  width={16}
                  height={10}
                />
                <Image
                  src="/images/star.png"
                  alt="ratings"
                  width={16}
                  height={8}
                />
              </div>
              <div className="h-4.5 border-l border-black"></div>
              <div className="font-light font-Poppins text-sm items-center text-g1">
                5 Customer Review
              </div>
              <div></div>
            </div>
            {/* para section */}
            <div className="p-8 md:pr-6 pt-4 md:pl-0 pb-4 text-center md:text-start text-sm ">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-g1 items-center text-center md:text-start">
                Size
              </div>

              <div className="flex gap-4">
                <div className="font-Poppins w-[30px] h-[24px] rounded-sm bg-[#FBEBB5] text-sm md:text-md text-center font-light">
                  XL
                </div>
                <div className="font-Poppins w-[30px] h-[24px] rounded-sm text-sm md:text-md text-center bg-w2 font-light ">
                  XS
                </div>

                <div className="font-Poppins w-[30px] h-[24px] rounded-sm text-sm md:text-md text-center bg-w2 font-light">
                  S
                </div>
              </div>
            </div>

            {/* COLOR DIV */}
            <div className="flex flex-col gap-2 my-4">
              <div className="text-g1 items-center text-center md:text-start ">
                Color
              </div>
              <div className="flex gap-2 md:gap-3">
                <div className="font-Poppins w-[30px] h-[30px] rounded-full bg-blue-400 text-sm md:text-md text-center font-light">
                </div>
                <div className="font-Poppins w-[30px] h-[30px] rounded-full text-sm md:text-md text-center bg-black font-light ">
                </div>
                <div className="font-Poppins w-[30px] h-[30px] rounded-full text-sm md:text-md text-center bg-[#CDBA7B] font-light">
                </div>
              </div>
            </div>
               {/* Btn DIV */}
            <div className="flex gap-4 my-4">
              <div className="w-[100px] h-[48px] md:w-[120px] md:h-[60px] rounded-md border flex justify-between items-center">
                <div className="items-center p-2 bg-w2 w-10 font-medium">
                  <div className="border-black w-2 border-b-2 mx-auto pt-1"></div>
                </div>
                <div className="items-center p-2 bg-w2 w-10 text-center">1</div>
                <div className="items-center p-2 bg-w2 w-10">+</div>
            </div>
            <div className="w-[160px] h-[48px] md:w-[200px] md:h-[60px] rounded-md border border-black flex items-center justify-center mx-auto">
           <Link href='/'> <button className="">Add To Cart</button></Link>
            </div>

            </div>

            <div className="w-48 border-l border-black items-end"></div>
              {/* last DIV */}
            
              <div className="w-[240px] h-[150px] md:h-[210px]  flex ">
              <div className="w-1/2 h-[150px] md:h-[210px]  flex flex-col font-Poppins text-g1 justify-between py-3">
              <div>SKU</div>
              <div>Category</div>
              <div>Tags</div>
              
              </div>
              <div className="w-1/6 h-[150px] md:h-[210px]  flex flex-col font-Poppins text-g1 justify-between py-4">
                <div className="flex flex-col items-center gap-1 ">
                <div className="w-1 h-1  rounded-full bg-g2"></div>
                <div className="w-1 h-1  rounded-full bg-g2"></div>
                </div>

                <div className="flex flex-col items-center gap-1 ">
                <div className="w-1 h-1  rounded-full bg-g2"></div>
                <div className="w-1 h-1  rounded-full bg-g2"></div>
                </div>

                <div className="flex flex-col items-center gap-1 ">
                <div className="w-1 h-1  rounded-full bg-g2"></div>
                <div className="w-1 h-1  rounded-full bg-g2"></div>
                </div>
                
                
              </div>
              <div className="w-1/2 h-[150px] md:h-[210px]  flex flex-col font-Poppins justify-between my-2">
              <div className="">SS001</div>
              <div className="">Sofas</div>
              <div className="">Sofa, Chair, Home, Shop</div>
              </div>
              </div>
             
          </div>
          </div>
        {/* section ends */}
          </div>

       {/* last section*/}
       <div className="w-[80%] border-b my-8 mb-16 mx-auto border-g1 items-end"></div>

    <div className="w-[80%] h-max mx-auto my-5 flex flex-col gap-8">
     
       <div className="flex gap-3 items-center md:justify-between px-2 font-Poppins md:text-xl text-sm md:">
        <div>Description</div>
        <div className="pl-2 md:pl-0 text-g1">Additional Information</div>
        <div className=" text-g1">Reviews [5]</div>
      </div>

     <div className="font-Poppins p-4 md:p-0 flex flex-col gap-4 text-g1"> <div> 
      Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.  
      </div>
      <div>
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </div></div>
    
      <div className="w-full flex flex-col md:flex-row items-center gap-4">
      <div className="w-[100%] h-[50%px] flex justify-center items-center bg-w1 ">
            <Image
              src="/images/Cloud sofa three seater + ottoman_2 1.png"
              alt="herosofaimage"
              width={400}
              height={500}
              className="w-full h-full "
            />
          </div>
          <div className="w-[100%] h-[50%px] flex justify-center items-center bg-w1 ">
            <Image
              src="/images/Cloud sofa three seater + ottoman_2 1.png"
              alt="herosofaimage"
              width={400}
              height={500}
              className="w-full h-full "
            />
          </div>
      </div>


      <div>
        <Sec3 />
      </div>


    </div>






    </div>
  );
};

export default Productid;
