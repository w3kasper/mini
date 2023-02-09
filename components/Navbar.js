import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/images/logo/me.svg";
import logosmall from "../public/images/logo/mesmall.svg";
import minilogo from "../public/images/logo/minime.svg";
import mobilelogo from "../public/images/logo/minimewhite.svg";
import { SlArrowDown } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWallet } from "react-icons/fa";

//https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

const style = {
  logo_wrapper: `flex w-[228px] h-[70px] p-4 `,
};

const Navbar = () => {
  return (
    <>
      <div className="flex w-full text-gray-200 z-10 bg-violet-950 justify-between h-[70px] fixed">
        <div className="flex space-x-4">
          <div className="hidden md:block mt-[16px]">
            <Image src={logo} width={200} className="pl-4" alt="" />
          </div>
          <div className="block md:hidden">
            <div className="flex space-x-2 pt-2 ">
              <RxHamburgerMenu
                size={40}
                className="mt-[10px] hover:cursor-default hover:opacity-50"
              />
              <Image
                src={mobilelogo}
                width={60}
                className="p-1 hover:cursor-default hover:opacity-50"
                alt=""
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className=" ml-6 w-[0px]  lg:w-[160px] h-10 rounded self-center bg-violet-950 outline outline-1 outline-violet-800/[.3] hover:cursor-default hover:opacity-50 ">
              <div className="flex justify-center mt-[12px] ">
                <div className="flex mt-2 space-x-4">
                  <div className="">
                    <Image src={minilogo} width={20} className="" alt="" />
                  </div>
                  <div className="text-sm w-[65px]">All chains</div>
                  <div className="text-sm w-[20px] mt-[4px]">
                    <SlArrowDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex p-[13px]">
            <div className="flex md:w-[500px] h-10 rounded-full bg-violet-100/20 self-center">
              <div className="p-2">
                <FiSearch size={25} className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className=" md:w-[180px] h-[70px] p-[16px]">
            <div className="hidden md:block">
              <div className="flex rounded bg-pink-600 p-[8px] hover:cursor-default hover:opacity-50">
                <div className="flex text-sm px-1">
                  <FaWallet
                    size={16}
                    className="text-gray-200 mr-[8px] mt-[2px]"
                  />
                  Connect Wallet
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <div className="flex space-x-4">
                <div className="p-2 rounded-full bg-violet-100/20 outline-2 outline-pink-600 hover:cursor-default hover:opacity-50">
                  <FiSearch size={25} className="text-gray-200" />
                </div>
                <div className="p-2 rounded-full bg-pink-600 hover:cursor-default hover:opacity-50">
                  <FaWallet size={25} className="text-gray-200 p-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
