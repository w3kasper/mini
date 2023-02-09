import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { BsStars } from "react-icons/bs";
import { TbActivityHeartbeat } from "react-icons/tb";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMedalOutline } from "react-icons/io5";
import { CiBookmarkRemove } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";

import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { GrSnapchat } from "react-icons/gr";

const Sidebar = () => {
  return (
    <>
      {/* MEDIUM SIDEBAR */}
      <div className="hidden md:block">
        <div className="flex flex-col w-[72px] h-screen text-gray-200 bg-violet-950 z-9 fixed border border-violet-950 border-r-violet-800/30">
          <div className="h-[15px]"></div>
          <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] ml-[12px] hover:cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <BsStars />
              </div>
            </div>
          </button>
          <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] ml-[12px] mt-2 hover:cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <TbActivityHeartbeat />
              </div>
            </div>
          </button>

          <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] ml-[12px] mt-2 hover:cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <AiOutlineUnorderedList />
              </div>
            </div>
          </button>

          <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] ml-[12px] mt-2 hover:cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <BiRocket />
              </div>
            </div>
          </button>

          <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] ml-[12px] mt-2 hover:cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <IoGameControllerOutline />
              </div>
            </div>
          </button>

          <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] ml-[12px] mt-2 hover:cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <IoMedalOutline />
              </div>
            </div>
          </button>

          <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] ml-[12px] mt-2 hover:cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <CiBookmarkRemove />
              </div>
            </div>
          </button>

          <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] ml-[12px] mt-2 hover:cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <MdOutlineContactSupport />
              </div>
            </div>
          </button>

          <div className="absolute bottom-10">
            <div className=" w-[72px] border border-violet-950 border-t-violet-800/40 mb-3"></div>
            <div className="grid grid-cols-1 gap-2 ">
              <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] outline outline-1 outline-violet-800/[.4] ml-[12px] hover:cursor-default">
                <div className="flex justify-center">
                  <AiOutlineTwitter />
                </div>
              </button>
              <button className=" bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] outline outline-1 outline-violet-800/[.4] ml-[12px] hover:cursor-default">
                <div className="flex justify-center">
                  <AiOutlineInstagram />
                </div>
              </button>
              <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] outline outline-1 outline-violet-800/[.4] ml-[12px] hover:cursor-default">
                <div className="flex justify-center">
                  <AiOutlineYoutube />
                </div>
              </button>
              <button className="bg-violet-950 rounded w-[44px] h-[44px] hover:bg-violet-800/[.15] outline outline-1 outline-violet-800/[.4] ml-[12px] hover:cursor-default">
                <div className="flex justify-center">
                  <GrSnapchat />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LARGE SIDEBAR */}
      <div className="hidden lg:block">
        <div className="flex flex-col items-center w-60 h-full text-gray-200 bg-violet-950 z-9 fixed border border-violet-950 border-r-violet-800/30">
          <div className="h-[95px]"></div>
          <button className="bg-violet-950 rounded w-52 h-[44px] hover:bg-violet-800/[.15] cursor-default">
            <div className="flex ">
              <div className="ml-4 mt-1">
                <BsStars />
              </div>
              <div className="text-left w-[130px] ml-4">Marketplace</div>
              <div className="text-sm mt-[5px]">
                <SlArrowDown />
              </div>
            </div>
          </button>
          <button className="bg-violet-950 rounded w-52 h-[44px] mt-2 hover:bg-violet-800/[.15] cursor-default">
            <div className="flex ">
              <div className="ml-4 mt-1">
                <TbActivityHeartbeat />
              </div>
              <div className="text-left w-[130px] ml-4">Insights</div>
              <div className="text-sm mt-[5px]">
                <SlArrowDown />
              </div>
            </div>
          </button>
          <button className="bg-violet-950 rounded w-52 h-[44px] mt-2 hover:bg-violet-800/[.15] cursor-default">
            <div className="flex ">
              <div className="ml-4 mt-1">
                <AiOutlineUnorderedList />
              </div>
              <div className="text-left w-[130px] ml-4">Magic Eden List</div>
              <div className="text-sm mt-[5px]">
                <SlArrowDown />
              </div>
            </div>
          </button>
          <button className="bg-violet-950 rounded w-52 h-[44px] mt-2 hover:bg-violet-800/[.15] cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <BiRocket />
              </div>
              <div className="text-left w-[130px] ml-4">Launchpad</div>
              <div className="text-sm mt-[5px]">
                <SlArrowDown />
              </div>
            </div>
          </button>
          <button className="bg-violet-950 rounded w-52 h-[44px] mt-2 hover:bg-violet-800/[.15]  cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <IoGameControllerOutline />
              </div>
              <div className="text-left w-[130px] ml-4">Eden Games</div>
              <div className="text-sm mt-[5px]">
                <SlArrowDown />
              </div>
            </div>
          </button>
          <button className="bg-violet-950 rounded w-52 h-[44px] mt-2 hover:bg-violet-800/[.15]  cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <IoMedalOutline />
              </div>
              <div className="text-left w-[130px] ml-4">Creators</div>
              <div className="text-sm mt-[5px]">
                <SlArrowDown />
              </div>
            </div>
          </button>
          <button className="bg-violet-950 rounded w-52 h-[44px] mt-2 hover:bg-violet-800/[.15]  cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <CiBookmarkRemove />
              </div>
              <div className="text-left w-[130px] ml-4">Intro to NFTs</div>
              <div className="text-sm mt-[5px]">
                <SlArrowDown />
              </div>
            </div>
          </button>
          <button className="bg-violet-950 rounded w-52 h-[44px] mt-2 hover:bg-violet-800/[.15] cursor-default">
            <div className="flex">
              <div className="ml-4 mt-1">
                <MdOutlineContactSupport />
              </div>
              <div className="text-left w-[130px] ml-4">Support</div>
              <div className="text-sm mt-[5px]">
                <SlArrowDown />
              </div>
            </div>
          </button>
          <div className="absolute bottom-10">
            <div className="border border-violet-950 border-t-violet-800/40 mb-3"></div>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-violet-950 rounded w-[100px] h-[28px] hover:bg-violet-800/[.15] outline outline-1 outline-violet-800/[.4] cursor-default">
                <div className="flex justify-center">
                  <AiOutlineTwitter />
                </div>
              </button>
              <button className=" bg-violet-950 rounded w-[100px] h-[28px] hover:bg-violet-800/[.15] outline outline-1 outline-violet-800/[.4] cursor-default">
                <div className="flex justify-center">
                  <AiOutlineInstagram />
                </div>
              </button>
              <button className="bg-violet-950 rounded w-[100px] h-[28px] hover:bg-violet-800/[.15] outline outline-1 outline-violet-800/[.4] cursor-default">
                <div className="flex justify-center">
                  <AiOutlineYoutube />
                </div>
              </button>
              <button className="bg-violet-950 rounded w-[100px] h-[28px] hover:bg-violet-800/[.15] outline outline-1 outline-violet-800/[.4] cursor-default">
                <div className="flex justify-center">
                  <GrSnapchat />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
