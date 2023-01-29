import React from "react";
import Image from "next/image";

import gameprofilepic from "../public/images/about/gameprofilepic.png";
import community1 from "../public/images/about/community1.png";
import community2 from "../public/images/about/community2.png";

import { BsGlobe2 } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";

import { BsPersonCircle } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiGamepadLine } from "react-icons/ri";
import { TbTournament } from "react-icons/tb";

const About = () => {
  return (
    <>
      {/** this is the wrapper*/}
      <div className="flex justify-center text-gray-200 mt-6">
        <div className="container max-w-7xl">
          {/** About the game write up*/}
          <div className="flex">
            <div className="w-12/12 mx-8 lg:w-10/12 lg:ml-8">
              <div className="text-4xl font-bold">Mini Royale: Nations</div>
              <div className="flex flex-rows space-x-2 mt-4">
                <div className="rounded-full bg-violet-950 outline outline-1 outline-violet-800/[.4] text-lg px-4 py-1">
                  FPS
                </div>
                <div className="rounded-full bg-violet-950 outline outline-1 outline-violet-800/[.4] text-lg px-4 py-1">
                  Battle Royale
                </div>
                <div className="mt-[9px] pl-3 hover:cursor-pointer hover:opacity-50">
                  <BsGlobe2 size={19} />
                </div>
                <div className="mt-[7px] hover:cursor-pointer hover:opacity-50">
                  <RiTwitterFill size={24} />
                </div>
                <div className="mt-[7px] hover:cursor-pointer hover:opacity-50">
                  <FaDiscord size={23} />
                </div>
              </div>
              <div className="mt-6">
                Mini Royale: Nations is a browser-based first-person-shooter set
                on top of a land strategy game. Players can earn mintable items
                through Battle Pass and Quests, join or create Clans to
                participate in Clan Wars, fuse weapons and characters for ultra
                rare skins, and more. Play now at miniroyale.io
              </div>
              <div className="text-lg underline decoration-violet-800/[.3] underline-offset-4 mt-6">
                About Mini Royale: Nations
              </div>
              <div className="mt-4 mb-10">
                Mini Royale: Nations (MRN) is a community-owned skill-based
                shooter with different PvP and PvE game modes for every type of
                player. The core shooter game is set on top of a land
                control-oriented, social strategy game with a deep emphasis on
                clans, alliances and social mechanics.
              </div>
              {/**COMMUNITY ANOUNCEMENTS */}
              <div className="text-2xl font-medium underline decoration-violet-800/[.3] underline-offset-[6px]">
                Community Announcements
              </div>
              <div className="flex pt-3">
                {/**Announce 1 */}
                <div className="flex justify-center w-2/2 md:w-1/2">
                  <div className="rounded-lg m-4 outline outline-1 outline-violet-800/[.3] hover:opacity-50 hover:cursor-pointer">
                    <Image
                      className="justify-self-center w-full rounded-lg"
                      src={community1}
                      alt=""
                    />
                    <div className="pt-[6px] px-[6px] text-sm font-medium text-pink-600">
                      Jan 9 2023{" "}
                    </div>
                    <div className="pt-[3px] pb-1 px-[6px] font-medium">
                      Mini Royale: Nations x Magic Eden Limited Edition Skin &
                      Grand Prize
                    </div>
                    <div class="flex justify-center md:justify-end mt-2 mb-2 mr-2 space-x-2">
                      <div>
                        <BsGlobe2 className="text-base p-[2px]" size={22} />
                      </div>

                      <div>
                        <FiThumbsUp className="text-base p-[2px]" size={22} />
                      </div>
                      <div>
                        <BiCommentDetail
                          className="text-base p-[2px]"
                          size={22}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/**Announce 2 */}
                <div className="hidden md:flex justify-center w-1/2">
                  <div className="rounded-lg m-4 outline outline-1 outline-violet-800/[.3] hover:opacity-50 hover:cursor-pointer">
                    <Image
                      className="justify-self-center w-full rounded-lg"
                      src={community2}
                      alt=""
                    />
                    <div className="pt-[6px] px-[6px] text-sm font-medium text-pink-600">
                      Jan 5 2023{" "}
                    </div>
                    <div className="pt-[3px] pb-1 px-[6px] font-medium">
                      Gear & Power Level are Live on Mini Royale: Nations! Check
                      it!
                    </div>
                    <div class="flex justify-center md:justify-end mt-2 mb-2 mr-2 space-x-2">
                      <div>
                        <BsGlobe2 className="text-base p-[2px]" size={22} />
                      </div>

                      <div>
                        <FiThumbsUp className="text-base p-[2px]" size={22} />
                      </div>
                      <div>
                        <BiCommentDetail
                          className="text-base p-[2px]"
                          size={22}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/**SIDE NOTES */}
            <div className="hidden md:block lg:w-4/12">
              {/**FEATURED COLLECTION */}
              <div className="m-[15px] xl:m-[40px] mt-[28px] rounded-md bg-violet-950 outline outline-1 outline-violet-800/[.3] hover:opacity-50 hover:cursor-pointer">
                <Image
                  className="justify-self-center w-full rounded-lg"
                  src={gameprofilepic}
                  alt=""
                />

                <div className="text-center text-xl font-medium pt-2 underline decoration-violet-800/[.3] underline-offset-[6px]">
                  Featured Collection
                </div>
                <div className="text-center text-base font-light pt-2 pb-4 px-4">
                  Mini Royale: Nations Season 4: Samarai Jackpot
                </div>
              </div>

              {/**Game Notes */}
              <div className="m-[15px] xl:m-[40px] pt-[6px] rounded-lg bg-violet-950 outline outline-1 outline-violet-800/[.3]">
                <div className="flex mt-[10px]">
                  <div className="w-1/5 ">
                    <div class="flex justify-center">
                      <BsPersonCircle className="text-base p-[2px]" size={20} />
                    </div>
                  </div>
                  <div className="w-4/5 text-sm ml-2">Free-To-Play</div>
                </div>

                <div className="flex mt-[6px]">
                  <div className="w-1/5">
                    <div class="flex justify-center">
                      <IoIosPeople className="text-base p-[2px]" size={20} />
                    </div>
                  </div>
                  <div className="w-4/5 text-sm ml-2">Online PVP/Co-op</div>
                </div>

                <div className="flex mt-[6px]">
                  <div className="w-1/5">
                    <div class="flex justify-center">
                      <BsStars className="text-base p-[2px]" size={20} />
                    </div>
                  </div>
                  <div className="w-4/5 text-sm ml-2">NFT Rewards</div>
                </div>

                <div className="flex mt-[6px]">
                  <div className="w-1/5">
                    <div class="flex justify-center">
                      <RiMoneyDollarCircleLine
                        className="text-base p-[2px]"
                        size={20}
                      />
                    </div>
                  </div>
                  <div className="w-4/5 text-sm ml-2">Token Enabled</div>
                </div>

                <div className="flex mt-[6px]">
                  <div className="w-1/5">
                    <div class="flex justify-center">
                      <RiGamepadLine className="text-base p-[2px]" size={20} />
                    </div>
                  </div>
                  <div className="w-4/5 text-sm ml-2">Controller Support</div>
                </div>

                <div className="flex mt-[6px]">
                  <div className="w-1/5">
                    <div class="flex justify-center">
                      <TbTournament className="text-base p-[2px]" size={20} />
                    </div>
                  </div>
                  <div className="w-4/5 text-sm ml-2">Tournament Play</div>
                </div>

                <div className="mt-[12px] flex border-b-[1px] border-violet-800/[.3] mx-4 "></div>
                <div className="font-light px-4 pt-2 text-sm text-center">
                  Languages
                </div>
                <div className="flex mt-[12px] font-light px-4 text-xs">
                  <div className="w-1/2">
                    <div class="flex justify-center ">-English-</div>
                  </div>
                  <div className="w-1/2">
                    <div class="flex justify-center ">-Russian-</div>
                  </div>
                </div>
                <div className="flex mt-[6px]  font-light px-4 text-xs">
                  <div className="w-1/2">
                    <div class="flex justify-center ">-German-</div>
                  </div>
                  <div className="w-1/2">
                    <div class="flex justify-center ">-Mandarin-</div>
                  </div>
                </div>
                <div className="flex mt-[6px]  font-light px-4 pb-[12px] text-xs">
                  <div className="w-1/2">
                    <div class="flex justify-center ">-Japanese-</div>
                  </div>
                  <div className="w-1/2">
                    <div class="flex justify-center ">-Brazilian-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
