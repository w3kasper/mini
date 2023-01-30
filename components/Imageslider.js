import React, { useState, useEffect } from "react";
import Image from "next/image";

import slider0 from "../public/images/slider/0.png";
import slider1 from "../public/images/slider/1.png";
import slider2 from "../public/images/slider/2.png";
import slider3 from "../public/images/slider/3.png";
import slider4 from "../public/images/slider/4.png";
import slider5 from "../public/images/slider/5.png";

import nextButton from "../public/images/slider/next.svg";
import prevButton from "../public/images/slider/prev.svg";

import YoutubeEmbed from "./YoutubeEmbed";

import { RxDotFilled } from "react-icons/rx";
import { RxDot } from "react-icons/rx";

const featuredImages = [slider0, slider1, slider2, slider3, slider4, slider5];
let count = 0;

const Imageslider = () => {
  //
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageType, setImageType] = useState(true);

  const setCountTo0 = () => {
    count = 0;
    setCurrentIndex(count);
    setImageType(true);
  };

  const setCountTo1 = () => {
    count = 1;
    setCurrentIndex(count);
    setImageType(false);
  };

  const setCountTo2 = () => {
    count = 2;
    setCurrentIndex(count);
    setImageType(false);
  };

  const setCountTo3 = () => {
    count = 3;
    setCurrentIndex(count);
    setImageType(false);
  };

  const setCountTo4 = () => {
    count = 4;
    setCurrentIndex(count);
    setImageType(false);
  };

  const setCountTo5 = () => {
    count = 5;
    setCurrentIndex(count);
    setImageType(false);
  };

  const setCountToPlay = () => {
    count = 0;
    setCurrentIndex(count);
    setImageType(false);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);

    if (count == 0) {
      setImageType(true);
    } else {
      setImageType(false);
    }
  };

  const handleOnPrevClick = () => {
    const imagesLength = featuredImages.length;
    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);

    if (count == 0) {
      setImageType(true);
    } else {
      setImageType(false);
    }
  };

  const renderImage = () => (
    <div className="grid cols-1 justify-items-stretch">
      <Image
        className="justify-self-center w-[1280px] px-8 pb-[8px] md:pb-2 pt-24 aspect-w-16 aspect-h-9"
        src={featuredImages[currentIndex]}
        alt=""
      />
    </div>
  );

  const renderYoutube = () => (
    <div className="grid cols-1 justify-items-stretch">
      <video
        src={require("../video/video1.mp4")}
        className="justify-self-center w-[1280px] px-8 pb-[8px] md:pb-2 pt-24 aspect-w-16 aspect-h-9"
        controls
      />
    </div>
  );
  //console.log(count);
  return (
    <>
      <div className="grid cols-1 justify-items-stretch">
        {imageType ? renderYoutube() : renderImage()}
      </div>
      <div className="hidden">
        <button onClick={handleOnPrevClick}>
          <Image
            src={prevButton}
            className="opacity-40 hover:opacity-100"
            alt="/"
          />
        </button>
        <button onClick={handleOnNextClick}>
          <Image
            src={nextButton}
            className=" opacity-40 hover:opacity-100"
            alt="/"
          />
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <div className="container max-w-7xl">
          <div className="text-white flex justify-center">
            <button onClick={setCountTo0}>
              <RxDotFilled
                size={30}
                className="text-gray-200 opacity-40 hover:opacity-100"
              />
            </button>
            <button onClick={setCountTo1}>
              <RxDotFilled
                size={30}
                className="text-gray-200 opacity-40 hover:opacity-100"
              />
            </button>
            <button onClick={setCountTo2}>
              <RxDotFilled
                size={30}
                className="text-gray-200 opacity-40 hover:opacity-100"
              />
            </button>
            <button onClick={setCountTo3}>
              <RxDotFilled
                size={30}
                className="text-gray-200 opacity-40 hover:opacity-100"
              />
            </button>
            <button onClick={setCountTo4}>
              <RxDotFilled
                size={30}
                className="text-gray-200 opacity-40 hover:opacity-100"
              />
            </button>
            <button onClick={setCountTo5}>
              <RxDotFilled
                size={30}
                className="text-gray-200 opacity-40 hover:opacity-100"
              />
            </button>
          </div>
        </div>
      </div>

      {/**DEAFUL SLIDER */}
      {/** 
      <div className="grid cols-1 justify-items-stretch">
        <Image
          className="justify-self-center w-[1280px] p-8 pt-24"
          src={slider0}
          alt=""
        />
      </div>

      {/*about bar */}
      <div className="flex justify-center m-1">
        <div className="container max-w-7xl">
          <div class="flex justify-between px-8">
            <div className="pt-[10px] px-[18px] md:pt-2 md:px-6 h-[40px] text-pink-600 outline outline-1 outline-pink-600 rounded text-sm md:text-base">
              FARAWAY STUDIOS
            </div>

            <div className=" md:hidden">
              <button className="px-6 h-[40px] rounded bg-pink-600 text-white hover:brightness-50 text-sm md:text-base">
                EXPLORE COLLECTION
              </button>
            </div>

            <div className="hidden md:block">
              <button className="px-6 h-[40px] rounded bg-pink-600 text-white hover:brightness-50">
                EXPLORE COLLECTION
              </button>
              <button
                className="ml-4 px-6 h-[40px] rounded bg-pink-600 text-white hover:brightness-50"
                onClick={setCountToPlay}
              >
                PLAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imageslider;
