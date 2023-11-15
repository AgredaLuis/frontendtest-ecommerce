"use client";
import Image from "next/image";
import { useState, FC } from "react";
import product1 from "../../public/images/image-product-1.jpg";
import product2 from "../../public/images/image-product-2.jpg";
import product3 from "../../public/images/image-product-3.jpg";
import product4 from "../../public/images/image-product-4.jpg";
import Modal from "./Modal";
import { useCounterStore } from "../store/counterStore";
import shallow from "zustand/shallow";

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
  const productCart = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
    }),shallow
  );
  const { increment } = useCounterStore();

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
          <div className="flex w-full py-2 justify-between items-center bg-neutral-light-grayish-blue rounded-md">
            <button
              className="btn py-2 px-6 rounded-lg text-bold"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              <svg
                className="fill-current text-primary-orange duration-500 hover:text-primary-pale-orange"
                width="12"
                height="4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </svg>
            </button>
            <span className="font-bold">{amount}</span>
            <button
              className="btn py-2 px-6 rounded-lg text-bold"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              <svg
                className="fill-current text-primary-orange duration-500 hover:text-primary-pale-orange"
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </svg>
            </button>
          </div>
          <button
            className="btn bg-primary-orange text-white font-bold rounded-xl py-3 px-8 w-full flex items-center justify-center gap-2 duration-500 hover:bg-primary-pale-orange"
            onClick={() => increment(amount)}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white"
              />
            </svg>
            <p className="text-sm md:text-base">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
