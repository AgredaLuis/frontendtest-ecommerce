"use client";
import { useState } from "react";
import { ImageObject } from "../../../types/Image";
import Modal from "../../../components/Modal";


const ProductViewSection = () => {
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

  const handleImageClick = (id: number, img: string) => {
    setActiveImg({ id, img });
  };

  const handleMainImage = (id: number, img: string) => {
    setMainImage({ id, img });
  };
  /* Imagen view  */
  return (
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

    
  {/* Start Modal  */}
  <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div className="flex flex-col w-[375px] gap-4 ">
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
  </div>
  )
}

export default ProductViewSection