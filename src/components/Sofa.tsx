import Image from 'next/image'
import React from 'react'
interface ISofa {
    name: string;
    price: string;
    image: string; // The image URL or path
  }
  
  const Sofa: React.FC<ISofa> = ({ name, price, image }) => {
    return (
      <div className="w-[280px] h-[280px] md:h-[320px] flex flex-col gap-2 mx-auto md:border md:rounded-lg md:shadow-lg p-4">
        {/* Image Section */}
        <div className="w-[230px] h-[200px] md:w-[250px] md:h-[200px] flex justify-center shrink-0 ">
          <Image
            src={image}
            alt={`${name} image`}
            width={200}
            height={200}
            className="w-[200px] h-[180px] md:w-[260px] md:h-[240px] mx-auto md:-translate-y-10 -translate-x-2"
          />
        </div>
  
        {/* Details Section */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-sm font-md  text-gray-600">{name}</h2>
          <p className="text-black font-semibold text-base">${price}</p>
        </div>
      </div>
    );
  };
  

export default Sofa
