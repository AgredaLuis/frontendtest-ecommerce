"use client";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Avatar from "../../../public/images/image-avatar.png";
import Menu from "../../../public/images/icon-menu.svg";
import Close from "../../../public/images/icon-close.svg";
import Cart from "../../../public/images/icon-cart.svg";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  /* Nota: optimizar height de componentes y reescribir desde enfoque movil first*/
  return (
    <nav className="w-full h-16 md:h-24 md:border-b-2  md:border-black-lightbox md:w-3/4 md:mx-auto">
      <div className="flex items-center h-full px-4 2xl:px-16">
        <div className="flex justify-center items-center px-4 gap-x-4">
          <div className="md:hidden cursor-pointer" onClick={handleMenu}>
            <Image src={Menu} alt="menu-logo" width={25} height={25}></Image>
          </div>
          <Link href="/" className="p-2">
            <Image src={Logo} height={25} alt="logo-icon" />
          </Link>
        </div>
        <div className="flex  w-full h-full items-center justify-between ">
          <div>
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent hover:border-primary-orange"
                >
                  Collection
                </Link>
              </li>
              <li className="text-md">
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent hover:border-primary-orange"
                >
                  Men
                </Link>
              </li>
              <li className="text-md">
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent hover:border-primary-orange"
                >
                  Women
                </Link>
              </li>
              <li className="text-md">
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent hover:border-primary-orange"
                >
                  About
                </Link>
              </li>
              <li className="text-md">
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent hover:border-primary-orange"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex items-center gap-x-4 sm:gap-x-8">
            <li>
              <Image src={Cart} alt="cart-icon" className="cursor-pointer"></Image>
            </li>
            <li>
              <Image
                src={Avatar}
                alt="avatar-image"
                width={50}
                height={50}
                className="cursor-pointer rounded-full hover:border-2 border-primary-orange"
              ></Image>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed top-0  left-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 sm:hidde p-10 ease-in duration-500"
        }
      >
        <div className="fixed w-full justify-start">
          <div onClick={handleMenu} className="cursor-pointer">
            <Image src={Close} alt="close-icon" />
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href="#">
                <li className="font-kumbh font-bold py-4 cursor-pointer">
                  Collection
                </li>
              </Link>
              <Link href="#">
                <li className="font-kumbh font-bold py-4 cursor-pointer">
                  Men
                </li>
              </Link>
              <Link href="#">
                <li className="font-kumbh font-bold py-4 cursor-pointer">
                  Women
                </li>
              </Link>
              <Link href="#">
                <li className="font-kumbh font-bold py-4 cursor-pointer">
                  About
                </li>
              </Link>
              <Link href="#">
                <li className=" font-kumbh font-bold py-4 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
