import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidetable = () => {
  return (
    <section className="w-full h-[980px] md:w-[1110px] md:h-[600px] mx-auto lg:16px xl:mx-32px 2xl:mx-64px bg-w2">
      <div className="w-[80%] h-[90%] mx-auto justify-center flex flex-col gap-2 md:flex-row pt-12 md:pt-0">
        <div className="w-[100%] h-[50%] md:h-[100%] my-auto mx-auto flex-col ">
          {" "}
          <div className="w-[100%] h-[50%px] flex justify-center items-center ">
            <Image
              src="/images/Granite square side table 1.png"
              alt="herosofaimage"
              width={400}
              height={500}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mt-6 md:mr-10"
            />
          </div>
          <div className="w-[240px] h-[80px]  md:w-[380px] md:h-[90px] mx-auto -translate-y-16 items-center justify-center font-Poppins text-xl md:text-2xl text-start font-medium ">
            Rocket single seater <br />
            <Link href="/">
              <span className="inline-block mt-4 text-sm font-md mx-auto border-b border-black">
                Shop Now
              </span>
            </Link>
          </div>
        </div>

        <div className="w-[100%] h-[50%] md:h-[100%] my-auto mx-auto flex-col ">
          {" "}
          <div className="w-[100%] h-[50%px] flex justify-center items-center ">
            <Image
              src="/images/Cloud sofa three seater + ottoman_3 1.png"
              alt="herosofaimage"
              width={400}
              height={500}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mt-6 "
            />
          </div>
          <div className="w-[240px] h-[80px]  md:w-[380px] md:h-[90px] mx-auto -translate-y-16 items-center justify-center font-Poppins text-xl md:text-2xl text-start font-medium ">
            Rocket single seater <br />
            <Link href="/">
              <span className="inline-block mt-4 text-sm font-md mx-auto border-b border-black">
                Shop Now
              </span>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Sidetable;
