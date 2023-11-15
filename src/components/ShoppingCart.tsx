import React, { useEffect, useState } from "react";
import Image from "next/image";
import cart from "../../public/images/icon-cart.svg";
import { useGetFromStore } from "../hooks/zustandHooks";
import { useCounterStore } from "../store/counterStore";

const ShoppingCart = () => {
  const count = useGetFromStore(
    useCounterStore,
    (state: { count: number }) => state.count
  );

  const handleMount = () => {
    return count === 0;
  };

  return (
    <div className="relative md:px-10 cursor-pointer">
      <Image src={cart} alt="cart-icon"></Image>

      {handleMount() ? (
        <></>
      ) : (
        <>
          <span className="absolute w-4 h-3  bg-primary-orange rounded-full m-1 bottom-2 left-2 md:left-12 flex items-center justify-center">
            <p className="text-xs text-center text-white">{count}</p>
          </span>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
