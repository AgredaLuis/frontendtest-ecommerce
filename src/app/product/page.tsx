"use client";
import React, { useState } from "react";

interface ImageObject {
  id: number;
  img: string;
}

const MyComponent: React.FC = () => {
  const [activeImg, setActiveImg] = useState<ImageObject | null>({
    id: 1,
    img: "/images/image-product-1.jpg",
  });

  const images: ImageObject[] = [
    { id: 1, img: "/images/image-product-1.jpg" },
    { id: 2, img: "/images/image-product-2.jpg" },
    { id: 3, img: "/images/image-product-3.jpg" },
    { id: 4, img: "/images/image-product-4.jpg" },
    // ... otras imágenes
  ];

  const handleImageClick = (id: number, img: string) => {
    setActiveImg({ id, img });
  };

  const handleMainImage = (id: number, img: string) => {
    setMainImage({ id, img });
  };

  const [mainImage, setMainImage] = useState<ImageObject | null>({
    id: 1,
    img: "/images/image-product-1.jpg",
  });

  return (
    <div className="flex">
      {images.map((image) => (
        <div
          key={image.id}
          className={`m-2 cursor-pointer ${
            activeImg?.id === image.id ? "border-2 border-red-700" : ""
          }`}
          onClick={() => {
            handleImageClick(image.id, image.img)
            handleMainImage(image.id, image.img)
          }}
        >
          <img src={image.img} alt={`Image ${image.id}`} />
        </div>
      ))}
      <div className="w-full border-2 border-green-800">
        <img src={mainImage?.img} alt="" />
      </div>
    </div>
  );
};

export default MyComponent;
