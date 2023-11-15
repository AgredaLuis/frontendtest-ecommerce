import React, { FC } from "react";
import { useCounterStore } from "../store/counterStore";
import { ImageObject } from "../types/Image";
import Image from "next/image";

const Cart: React.FC = () => {
  const image: ImageObject = {
    id: 1,
    img: "/images/image-product-1-thumbnail.jpg",
  };

  const { title, count, price } = useCounterStore();
  const { clear } = useCounterStore();

  const handleCart = () => {
    return count === 0;
  };
  return (
    <article className="absolute bg-white rounded-xl shadow-2xl w-[330px] mx-auto mt-1 p-5 right-0 top-16">
      <h3 className="m-1 pb-2 border-b-2 font-bold">Cart</h3>

      {handleCart() ? (
        <div className="p-10 flex justify-center items-center">
          <p className="font-kumbh font-semibold text-neutral-dark-grayish-blue"> Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col w-full pt-3 gap-x-4 items-center">
          <div className="flex w-full gap-x-5 items-center">
          <img
            className="w-10 h-10"
            src={image.img}
            alt={`product-imagen-${image.id}`}
          />
          <div className="flex flex-col">
            <p className="text-sm text-neutral-grayish-blue">{title}</p>
            <span className="text-neutral-grayish-blue text-sm font-kumbh ">
              ${price}.00 x {count} ={" "}
              <span className="text-black font-bold font-kumbh">
                ${price * count}.00
              </span>
            </span>
          </div>
          <svg
            className="fill-current text-neutral-grayish-blue cursor-pointer"
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => clear()}
          >
            <path
              d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
              id="a"
            />
          </svg>
          </div>
          <button className="bg-primary-orange py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full duration-500  hover:bg-primary-pale-orange">
            Checkout
          </button>
        </div>
      )}
    </article>
  );
};

export default Cart;
