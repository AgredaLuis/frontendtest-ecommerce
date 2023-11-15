"use client";
import { useState } from "react";
import { ImageObject } from "../types/Image";
import Modal from "./Modal";
import { useCounterStore } from "../store/counterStore";

const ProductPage: React.FC = () => {
  /* Modal function  */
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    // Solo abrir el modal en pantallas md o más grandes
    if (window.innerWidth >= 768) {
      setShowModal(true);
    }
    if (window.innerWidth <= 768) {
      setShowModal(false);
    }
  };

  /* modal */

  /* Imagen view function */

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

  const [mainImage, setMainImage] = useState<ImageObject | null>({
    id: 1,
    img: "/images/image-product-1.jpg",
  });

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
      setMainImage(images[slideIndex - 1]);
      setActiveImg(images[slideIndex - 1]);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
      setMainImage(images[slideIndex - 1]);
      setActiveImg(images[slideIndex - 1]);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      setMainImage(images[slideIndex - 1]);
      setActiveImg(images[slideIndex - 1]);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
      setMainImage(images[slideIndex - 1]);
      setActiveImg(images[slideIndex - 1]);
    }
  };

  /* Imagen view  */

  /* Product info  function */
  const handleImageClick = (id: number, img: string) => {
    setActiveImg({ id, img });
  };

  const handleMainImage = (id: number, img: string) => {
    setMainImage({ id, img });
  };

  const [amount, setAmount] = useState(0);

  const handlePlus = () => {
    if (amount >= 99) {
      setAmount(99);
    } else {
      setAmount((prev) => prev + 1);
    }
  };
  const handleMinus = () => {
    if (amount <= 0) {
      setAmount(0);
    } else {
      setAmount((prev) => prev - 1);
    }
  };
  const handleAddToCart = () => {
    increment(amount);
    setAmount(0);
  };

  const { increment } = useCounterStore();

  /* product info */

  return (
    <div className="flex flex-col justify-between gap-6 sm:gap-12 md:flex-row md:items-center">
      {/* Start Product View */}
      <div className="flex flex-col gap-4 w-2.4">
        <div className="relative z-0">
          <img
            src={mainImage?.img}
            alt={`product-view-${activeImg}`}
            className=" aspect-square object-cover md:rounded-xl md:cursor-pointer"
            onClick={handleClick}
          />
          <ul className="md:hidden">
            <li className="">
              <button
                className="bg-white rounded-full p-4 shadow absolute left-4 top-1/2 -translate-y-2 z-0"
                onClick={prevSlide}
              >
                <svg
                  className=""
                  width="15"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                className=" bg-white rounded-full p-4 shadow absolute right-4 top-1/2 -translate-y-2 z-0"
                onClick={nextSlide}
              >
                <svg width="15" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-between">
          {images.map((image) => (
            <div
              key={image.id}
              className={`hidden md:block w-20 h-18 rounded-xl cursor-pointer duration-500 hover:opacity-60  ${
                activeImg?.id === image.id
                  ? " border-4 border-primary-orange opacity-50"
                  : "border-4 border-transparent overflow-hidden"
              }`}
              onClick={() => {
                handleImageClick(image.id, image.img);
                handleMainImage(image.id, image.img);
              }}
            >
              <img
                className="rounded-md"
                src={image.img}
                alt={`Image ${image.id}`}
              />
            </div>
          ))}
        </div>
        {/* End Product View */}

        
      </div>
      {/* Start Modal  */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="relative flex flex-col gap-4 ">
            <div>
              <img
                src={mainImage?.img}
                alt={`product-view-${activeImg}`}
                className=" mx-auto aspect-square object-cover md:rounded-xl cursor-pointer"
              />
            </div>
            <div className="flex flex-row justify-between">
              {images.map((image) => (
                <div
                  key={image.id}
                  className={` w-20 h-18 rounded-xl cursor-pointer duration-500 hover:opacity-60  ${
                    activeImg?.id === image.id
                      ? " border-4 border-primary-orange opacity-50"
                      : "border-4 border-transparent overflow-hidden"
                  }`}
                  onClick={() => {
                    handleImageClick(image.id, image.img);
                    handleMainImage(image.id, image.img);
                  }}
                >
                  <img
                    className="rounded-md"
                    src={image.img}
                    alt={`Image ${image.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Modal>

        {/* Start Modal  */}

      {/* Start Product-INfo*/}
      <div className="flex flex-col gap-2 px-6">
        <h5 className="text-primary-orange font-bold">SNEAKER COMPANY</h5>
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
              onClick={handleMinus}
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
              onClick={handlePlus}
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
            className="btn bg-primary-orange text-xs text-white font-bold rounded-xl py-3 px-8 flex w-full items-center justify-center gap-2 duration-500 hover:bg-primary-pale-orange"
            onClick={handleAddToCart}
          >
            <svg
              className="fill-current"
              width="25"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
            </svg>
            <p className="font-kumbh">Add to Cart</p>
          </button>
        </div>
      </div>
      {/* End Product Info */}
    </div>
  );
};

export default ProductPage;
