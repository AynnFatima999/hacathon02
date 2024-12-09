import Image from 'next/image'
import React from 'react'
interface ISofa {
    name: string;
    price: string;
    image: string; // The image URL or path
  }
  
  const Sofa: React.FC<ISofa> = ({ name, price, image }) => {
    return (
      <div className="w-[280px] h-[280px] md:h-[286px] md:w-[240px] flex flex-col gap-4 mx-auto p-4 cursor-pointer">
        {/* Image Section */}
        <div className="w-[230px] h-[180px] md:w-[250px] md:h-[200px] flex justify-center shrink-0 ">
          <Image
            src={image}
            alt={`${name} image`}
            width={200}
            height={200}
            className="w-[200px] h-[180px] md:w-[220px] md:h-[200px] mx-auto md:-translate-y-10 -translate-x-2"
          />
        </div>
  
        {/* Details Section */}
        <div className="flex flex-col items-center md:items-start gap-2 -translate-y-4">
          <h2 className="text-sm font-md  text-gray-600">{name}</h2>
          <p className="text-black font-semibold text-base">${price}</p>
        </div>
      </div>
    );
  };
  

export default Sofa
