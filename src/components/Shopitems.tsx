import React from "react";
import Sofasets from "./Sofasets";
import FootDetail from "./FootDetail";

const Shopitems = () => {
  const products = [
    { id: "1", name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/images/Trenton modular sofa_3 1.png" },
    { id: "2", name: "Granite dining table", price: "Rs. 25,000.00", image: "/images/Granite dining table with dining chair 1.png" },
    { id: "3", name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/images/Outdoor bar table and stool 1.png" },
    { id: "4", name: "Plain with teak mirror", price: "Rs. 25,000.00", image: "/images/Plain console with teak mirror 1.png" },
    { id: "5", name: "Grain coffee table", price: "Rs. 25,000.00", image: "/images/Grain coffee table 1.png" },
    { id: "6", name: "Kent coffee table", price: "Rs. 225,000.00", image: "/images/Kent coffee table 1.png" },
    { id: "7", name: "Round coffee table_color 2", price: "Rs. 251,000.00", image: "/images/Round coffee table_color 2 1.png" },
    { id: "8", name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: "/images/Reclaimed teak coffee table 1.png" },
    { id: "9", name: "Granity Square table", price: "Rs. 258,800.00", image: "/images/Granite square side table 1.png" },
    { id: "10", name: "Asgaard sofa", price: "Rs. 250,000.00", image: "/images/Asgaard sofa 1.png" },
    { id: "11", name: "Maya sofa three seater", price: "Rs. 115,000.00", image: "/images/Maya sofa three seater 1.png" },
    { id: "12", name: "Outdoor sofa set", price: "Rs. 244,000.00", image: "/images/Outdoor sofa set 1.png" },
  ];

  return (
    <section className="w-full h-max md:w-[1110px] mx-auto lg:mx-16 xl:mx-32 2xl:mx-64 mb-8">
      <div className="flex flex-col items-center">
        <div className="w-[90%] h-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mx-auto mt-6 mb-0">
          {products.map((product) => (
            <Sofasets
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        <div className="w-[300px] h-[60px] mb-2 flex gap-3 items-center justify-center">
          <div className="w-10 h-8 text-sm md:text-md py-1 rounded-sm items-center text-center bg-y1">1</div>
          <div className="w-10 h-8 text-sm md:text-md py-1 rounded-sm bg-y2 items-center text-center">2</div>
          <div className="w-10 h-8 text-sm md:text-md py-1 rounded-sm bg-y2 items-center text-center">3</div>
          <div className="w-12 h-8 text-sm md:text-md py-1 rounded-sm bg-y2 items-center text-center">Next</div>
        </div>

        <FootDetail />
      </div>
    </section>
  );
};

export default Shopitems;
