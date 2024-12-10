import React, { useState } from "react";

const ProductGallery = () => {
  // Array of images (mock data)
  const images = [
    { src: "/images/Asgaard sofa 1.png", alt: "Product 1" },
    { src: "/images/Trenton modular sofa_3 1.png", alt: "Product 2" },
    { src: "/images/Maya sofa three seater 1.png", alt: "Product 3" },
    { src: "/images/Outdoor sofa set 1.png", alt: "Product 4" },
  ];

  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  // Handle the click event on the small images
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="md:h-[60%] flex flex-col md:flex-row gap-6 justify-center items-center pt-6 pl-3  ">
      {/* Right side - Large image */}
      <div className="md:hidden flex justify-center items-center mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-[400px] h-[250px] bg-y3 "
        />
      </div>

      {/* Left side - Small images */}
      <div className="flex flex-row md:flex-col gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleImageClick(image.src)} // Change large image on click
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-[60px] h-[60px] md:w-[100px] md:h-[86px] bg-y3  rounded-sm"
            />
          </div>
        ))}
      </div>

      {/* Right side - Large image for desktops*/}
        <div className="hidden md:flex w-[300px] h-[400px] md:w-[400px] md:h-[400px]">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full h-full bg-y3 "
        />
      </div>
    </div>
  );
};

export default ProductGallery;
