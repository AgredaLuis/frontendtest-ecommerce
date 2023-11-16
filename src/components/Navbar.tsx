"use client";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Avatar from "../../public/images/image-avatar.png";
import Menu from "../../public/images/icon-menu.svg";
import Close from "../../public/images/icon-close.svg";
import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Cart from "./Cart";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  /* Nota: optimizar height de componentes y reescribir desde enfoque movil first*/
  return (
    <nav className="w-full py-2 md:h-24 md:border-b-2  md:w-3/4 md:mx-auto">
      <div className="flex items-center h-full px-4">
        <div className="flex justify-center items-center h-full px-4 gap-x-4">
          <div className="md:hidden cursor-pointer" onClick={handleMenu}>
            <Image src={Menu} alt="menu-logo" width={40} height={30}></Image>
          </div>
          <Link href="/" className="md:w-3/5">
            <Image src={Logo} height={45} alt="logo-icon" />
          </Link>
        </div>
        <div className="relative flex w-full h-full items-center justify-between">
          <div>
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent duration-500 hover:border-primary-orange"
                >
                  Collection
                </Link>
              </li>
              <li className="text-md">
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent duration-500 hover:border-primary-orange"
                >
                  Men
                </Link>
              </li>
              <li className="text-md">
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent duration-500 hover:border-primary-orange"
                >
                  Women
                </Link>
              </li>
              <li className="text-md">
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent duration-500 hover:border-primary-orange"
                >
                  About
                </Link>
              </li>
              <li className="text-md">
                <Link
                  href="#"
                  className="pb-8 border-b-4 border-transparent duration-500 hover:border-primary-orange"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex items-center gap-x-4">
            {cartOpen && <Cart />}
            <li onClick={() => setCartOpen((prev) => !prev)}>
              <ShoppingCart />
            </li>
            <li>
              <Image
                src={Avatar}
                alt="avatar-image"
                width={50}
                height={50}
                className="cursor-pointer rounded-full border-2 border-transparent duration-500 hover:border-primary-orange"
              ></Image>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen ? (
        <div className={`fixed bg-black/70 z-10  w-full h-screen top-0`}>
          <div
            className={`
      ${
        menuOpen
          ? " fixed z-10 top-0 left-0 w-[65%] h-screen bg-white p-10 ease-in-out duration-500 transition-all md:hidden"
          : " fixed left-[-100%] top-0 sm:hidden p-10 ease-in-out duration-500 transition-all"
      }
    `}
          >
            <div className="fixed justify-start">
              <div>
                <Image
                  src={Close}
                  alt="close-icon"
                  className="cursor-pointer"
                  onClick={handleMenu}
                />
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
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
