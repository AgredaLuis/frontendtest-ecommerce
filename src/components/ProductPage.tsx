"use client";
import Image from "next/image";
import { useState, FC } from "react";
import product1 from "../../public/images/image-product-1.jpg";
import product2 from "../../public/images/image-product-2.jpg";
import product3 from "../../public/images/image-product-3.jpg";
import product4 from "../../public/images/image-product-4.jpg";
import Modal from "./Modal";
import ProductInfo from "@/containers/product-page/product-info";

function ProductPage() {
  const [images, setImages] = useState({
    img1: product1,
    img2: product2,
    img3: product3,
    img4: product4,
  });

  const [showModal, setShowModal] = useState(false);

  const [activeImg, setActiveImg] = useState(images.img1);

  const borderImg:string = 'border-2 border-transparent'

  return (
    <div className="flex flex-col justify-between gap-6 md:gap-12 md:flex-row md:items-center">
      <div className="flex flex-col gap-4">
        <Image
          src={activeImg}
          alt={`product-view-${activeImg}`}
          className="w-full h-full aspect-square object-cover md:rounded-xl cursor-pointer"
          onClick={() => setShowModal(true)}
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

        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <h1>Modal de fotos</h1>
          <Image
            src={activeImg}
            alt={`product-view-${activeImg}`}
            className="w-[375px] h-[375px]aspect-square object-cover md:rounded-xl cursor-pointer"
            onClick={() => setShowModal(true)}
          />
        </Modal>
      </div>
      {/* About ProductPage */}
      <ProductInfo />
    </div>
  );
}

export default ProductPage;
