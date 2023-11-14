"use client";
import Image from "next/image";
import { useState, FC } from "react";
import product1 from "../../public/images/image-product-1.jpg";
import product2 from "../../public/images/image-product-2.jpg";
import product3 from "../../public/images/image-product-3.jpg";
import product4 from "../../public/images/image-product-4.jpg";
import cart from "../../public/images/icon-cart.svg";
import Modal from "./Modal";
import { useCounterStore } from "../store/counterStore";
import shallow from 'zustand/shallow'

function ProductPage() {
  const [images, setImages] = useState({
    img1: product1,
    img2: product2,
    img3: product3,
    img4: product4,
  });

  const [showModal, setShowModal] = useState(false);

  const [activeImg, setActiveImg] = useState(images.img1);

  const [amount, setAmount] = useState(0);



  /* Actualizar shallow  */
  const productCart = useCounterStore((state) => ({
    count: state.count,
    title: state.title
  }), shallow)
  const {increment} = useCounterStore()

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
      <div className="flex flex-col gap-2 px-6">
        <h5 className="text-primary-orange font-semibold">SNEAKER COMPANY</h5>
        <h1 className="text-3xl font-semibold pb-3">
          Fall Limited Edition Sneakers
        </h1>
        <p className="mb-4  text-neutral-dark-grayish-blue ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber sole, they`ll withstand everything the
          weather can offer.
        </p>
        <div className="flex flex-row justify-between md:flex-col">
          <div className="flex items-center gap-4">
            <h6 className="text-xl font-bold">$125.00</h6>
            <span className="text-primary-orange bg-primary-pale-orange rounded-md px-2 font-bold">
              50%
            </span>
          </div>
          <span className="text-neutral-grayish-blue font-semibold line-through">
            $250.00
          </span>
        </div>

        <div className="flex flex-col items-center gap-5 md:flex-row pb-8">
          <div className="flex w-full justify-between items-center bg-neutral-light-grayish-blue rounded-md">
            <button
              className="btn py-2 px-6 rounded-lg text-bold"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="font-bold">{amount}</span>
            <button
              className="btn  py-2 px-6 rounded-lg text-bold"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="btn bg-primary-orange text-white font-bold rounded-xl py-3 px-8 w-full flex items-center justify-center hover:bg-primary-pale-orange" 
          onClick={() => increment(amount)}>
            <Image src={cart} alt="cart-icon" />
            <p>Add to Cart</p>
          </button>
        </div>
          <div>Global state cart : {productCart.count}</div>
      </div>
    </div>
  );
}

export default ProductPage;
