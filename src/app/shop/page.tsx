import Header from "@/components/Header";
import Shopitems from "@/components/Shopitems";
import { ChevronRightIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Shop = () => {
  return (
    <>
      <Header />
      <section className="w-full h-[205px] md:w-[1110px] md:h-[310px] border mx-auto lg:mx-16 xl:mx-32 2xl:mx-64">
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
      {/* part 2 topnav*/}

      <div className="md:w-[1110px] h-[100px] mx-auto lg:mx-16 xl:mx-32 2xl:mx-64 w-[100%] bg-w2 flex flex-col md:flex-row items-center pt-8 md:pt-0 ">
        <div className="mx-auto w-[90%] md:w-[50%] flex items-center justify-center gap-4">
          <div className="flex justify-between items-center gap-2  text-black ">
            <img
              src="/images/system-uicons_filtering.png"
              alt="filter-icon"
              className="w-4 h-4 ml-2"
            />
            <div>Filter</div>
          </div>

          <div className="flex justify-between items-center  gap-2 md:gap-4  text-black">
            <img
              src="/images/ci_grid-big-round.png"
              alt="filter-icon"
              className="w-4 h-4"
            />
            <img
              src="/images/bi_view-list.png"
              alt="filter-icon"
              className="w-4 h-4"
            />
          </div>

          <div className="flex justify-between items-center gap-2 md:gap-4 text-black ">
            <div className="h-6 border-l border-black"></div>
            <div className="w-max text-sm">Showing 1–16 of 32 results</div>
          </div>
        </div>

        <div className="w-[80%] md:w-[50%] flex items-center gap-2 md:gap-4 text-center mx-auto mt-2 md:mt-0 ">
          <div className="font-Poppins w-[60px] h-[20] text-sm md:text-md ">
            Show
          </div>
          <div className="font-Poppins w-[30px] h-[20] text-sm md:text-md  text-g1 bg-white ">
            16
          </div>
          <div className="font-Poppins w-[80px] h-[20] text-sm md:text-md ">
            Sort by
          </div>
          <div className="font-Poppins w-[30px] h-[20] text-sm md:text-md ">
            <input
              type="text"
              placeholder="Default"
              className="w-[80px] h-[28px] rounded-sm px-4 py-2 font-Poppins mr-8"
            />{" "}
          </div>
        </div>
      </div>
      <Shopitems />
    </>
  );
};

export default Shop;
