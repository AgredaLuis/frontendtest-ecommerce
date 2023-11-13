"use client";
import Image from "next/image";
import { useState } from "react";
import product1 from "../../../public/images/image-product-1.jpg";
import product2 from "../../../public/images/image-product-2.jpg";
import product3 from "../../../public/images/image-product-3.jpg";
import product4 from "../../../public/images/image-product-4.jpg";


function ProductPage() {
  const [images, setImages] = useState({
    img1: product1,
    img2: product2,
    img3: product3,
    img4: product4,
  });

  const [activeImg, setActiveImg] = useState(images.img1);

  const [amount, setAmount] = useState(0)

  return (
    <div className="flex flex-col justify-between gap-12 md:flex-row md:items-center">
      <div className="flex flex-col gap-4">
        <Image
          src={activeImg}
          alt={`product-view-${activeImg}`}
          className="wfull h-full aspect-square object-cover rounded-xl cursor-pointer"
        />
        <div className="flex flex-row justify-between">
          <Image
            src={images.img1}
            alt="product-view-1"
            className="w-20 h-20 rounded-lg cursor-pointer"
            onClick={() => setActiveImg(images.img1)}
          />
          <Image
            src={images.img2}
            alt="product-view-2"
            className="w-20 h-20 rounded-lg cursor-pointer"
            onClick={() => setActiveImg(images.img2)}
          />
          <Image
            src={images.img3}
            alt="product-view-3"
            className="w-20 h-20 rounded-lg cursor-pointer"
            onClick={() => setActiveImg(images.img3)}
          />
          <Image
            src={images.img4}
            alt="product-view-4"
            className="w-20 h-20 rounded-lg cursor-pointer"
            onClick={() => setActiveImg(images.img4)}
          />
        </div>
      </div>
      {/* About ProductPage */}
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-primary-orange font-bold">SNEAKER COMPANY</p>
          <h1 className="font-bold text-4xl">Fall Limited Edition Sneakers</h1>
          <p className="font-normal">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber sole, they`ll withstand everything the
            weather can offer.
          </p>
          <div className="flex flex-row justify-between md:flex-col">
            <div className="flex items-center gap-6">
              <h6 className="text-lg font-bold">$125.00</h6>
              <span className="text-primary-orange bg-primary-pale-orange font-bold">50%</span>
            </div>
            <span className="text-neutral-dark-grayish-blue line-through">$250</span>
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex w-full justify-between items-center">
              <button className="btn bg-gray-200 py-4 px-6 rounded-lg text-bold" onClick={() => setAmount((prev) => prev - 1 )}>-</button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button className="btn bg-gray-200 py-4 px-6 rounded-lg text-bold" onClick={() => setAmount((prev) => prev + 1 )}>+</button>
          </div>
            <button className="btn bg-primary-orange text-white font-bold rounded-xl py-3 px-8 w-full">(cardIcon) Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
