import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { HiOutlineX } from "react-icons/hi";
import logo from "../public/images/announcements/logoFaraway.png";
import modal1A from "../public/images/announcements/modal1A.png";
import modal1B from "../public/images/announcements/modal1B.png";
import modal2A from "../public/images/announcements/modal2A.png";
import modal2B from "../public/images/announcements/modal2B.png";

const Modal = ({
  visible,
  onClose,
  announceLogo,
  announceDate,
  postedBy,
  textTitle,
  textBlurb,
  imageTop,
  imageBottom,
}) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  //used to define imageTop for vercel
  const [showImageTop, setShowImageTop] = useState("");
  useEffect(() => {
    if (imageTop === "/../public/images/announcements/Modal1A.png") {
      setShowImageTop(modal1A);
    } else if (imageTop === "/../public/images/announcements/Modal2A.png") {
      setShowImageTop(modal2A);
    }
  }, [imageTop]);

  const [showImageBottom, setShowImageBottom] = useState("");
  useEffect(() => {
    if (imageBottom === "/../public/images/announcements/Modal1B.png") {
      setShowImageBottom(modal1B);
    } else if (imageBottom === "/../public/images/announcements/Modal2B.png") {
      setShowImageBottom(modal2B);
    }
  }, [imageBottom]);

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-20 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-start overflow-y-auto"
    >
      <div className=" bg-violet-950 outline outline-1 outline-violet-800/30 text-gray-200 rounded-lg w-2/2 m-7 sm:m-16 lg:w-2/5">
        {/**image and date */}
        {/**console.log(community1)*/}
        <div className="flex justify-between pt-6">
          <div className="flex justify-center items-center space-x-3 px-3 sm:px-6 ">
            <div className="outline outline-1 outline-violet-800/30 rounded-full p-1 md:p-2">
              <Image
                className="rounded-full"
                src={logo}
                alt="Picture of the logo"
                width={38}
                height={38}
              />{" "}
            </div>
            <div className="">
              <div className="hidden md:flex font-light">{postedBy}</div>
              <div className="hidden md:flex text-pink-600 font-semibold">
                {announceDate}
              </div>
            </div>
          </div>
          {/**socails and x */}
          <div className="flex items-center space-x-1 md:space-x-3 pr-3 sm:pr-8">
            <div className="flex w-[80px] h-10 ">
              <div className="flex justify-center items-center outline outline-1 outline-violet-800/30 rounded-full w-full space-x-2 bg-violet-950 hover:cursor-pointer hover:bg-violet-800/30">
                <div className="pb-[2px]">
                  <FiThumbsUp className="text-gray-200" size={20} />
                </div>
                <div className="text-lg">25</div>
              </div>
            </div>

            <div className="">
              <div className="hidden md:flex justify-center items-center w-10 h-10 outline outline-1 outline-violet-800/30 rounded-full bg-violet-950 hover:bg-violet-800/30">
                <BiCommentDetail className="text-gray-200" size={20} />
              </div>
            </div>

            <div className="">
              <div className="hidden md:flex justify-center items-center w-10 h-10 outline outline-1 outline-violet-800/30 rounded-full hover:bg-violet-800/30">
                <FiShare2 className="text-gray-200" size={20} />
              </div>
            </div>

            <div onClick={onClose} className="">
              <div className="flex justify-center items-center w-10 h-10 outline outline-1 outline-violet-800/30 rounded-full hover:cursor-pointer hover:bg-violet-800/30">
                <HiOutlineX className="text-gray-200" size={24} />
              </div>
            </div>
          </div>
        </div>
        {/**title */}
        <div className="flex justify-center">
          <div className="text-lg md:text-2xl px-8 pt-2 pb-1">{textTitle}</div>
        </div>
        <div className="flex md:hidden text-pink-600 font-semibold px-8">
          {announceDate}
        </div>
        {/** IMAGE/TEXTBOX*/}
        <div className="flex justify-center py-2 px-4">
          <Image
            className="m-4 rounded-lg w-full"
            src={showImageTop}
            alt="Picture of the top"
            width={1000}
            height={1000}
          />{" "}
        </div>
        <div className="text-justify px-4 md:px-6 xl:px-10 py-2">
          {textBlurb}
        </div>
        <div className="flex justify-center py-2 px-4">
          <Image
            className="m-4 rounded-lg w-full"
            src={showImageBottom}
            alt="Picture of the bottom"
            width={1000}
            height={1000}
          />{" "}
        </div>
        {/** Comments */}
        <div className="flex justify-center px-16">
          <div className="flex outline outline-1 outline-violet-800/30 rounded-full space-x-3 p-2">
            <div className="flex space-x-2">
              <div className="flex w-[80px] h-10 ">
                <div className="flex justify-center items-center outline outline-1 outline-violet-800/30 rounded-full w-full space-x-2 bg-violet-950 hover:cursor-pointer hover:bg-violet-800/30">
                  <div className="pb-[2px]">
                    <FiThumbsUp className="text-gray-200" size={20} />
                  </div>
                  <div className="text-lg">25</div>
                </div>
              </div>

              <div className="">
                <div className="flex justify-center items-center w-10 h-10 outline outline-1 outline-violet-800/30 rounded-full bg-violet-950 hover:bg-violet-800/30">
                  <BiCommentDetail className="text-gray-200" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**blank row */}
        <div className="flex justify-center py-4">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
