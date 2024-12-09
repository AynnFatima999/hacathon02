import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ISofa {
  name: string;
  price: string;
  image: string; // The image URL or path
}

const Sofasets: React.FC<ISofa> = ({ name, price, image }) => {
  return (
    <div className="w-[150px] h-[220px] md:h-[280px] md:w-[240px] flex flex-col shrink-0 mx-auto items-center justify-center cursor-pointer">
      {/* Image Section */}
    
      <div className="w-[150px] h-[180px] md:w-[250px] md:h-[180px] flex justify-start  ">
        <Image
          src={image}
          alt={`${name} image`}
          width={120}
          height={100}
          className="w-[120px] h-[120px] md:w-[180px] md:h-[160px] md:mx-auto md:-translate-y-4 translate-x-2"
        />
      </div> 

      {/* Details Section */}
      <div className="flex flex-col items-center text-center md:items-start gap-2 -translate-y-4">
        <h2 className=" text-xs md:text-sm font-md text-gray-600">{name}</h2>
        <p className="text-black font-semibold text-base">${price}</p>
      </div>
    </div>
  );
};

export default Sofasets;
