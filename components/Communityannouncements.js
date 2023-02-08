import React, { useState } from "react";
import Image from "next/image";

import Modal from "./Modal";

import community1 from "../public/images/about/community1.png";
import community2 from "../public/images/about/community2.png";

import { BsGlobe2 } from "react-icons/bs";

import { FiThumbsUp } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";

const Communityannouncements = () => {
  const [showMyModal, setShowMyModal] = useState(false);

  const [showAnnounceLogo, setShowAnnounceLogo] = useState("");
  const [showAnnounceDate, setShowAnnounceDate] = useState("");
  const [showPostedBy, setShowPostedBy] = useState("");
  const [showTextTitle, setShowTextTitle] = useState("");
  const [showTextBlurb, setShowTextBlurb] = useState("");
  const [showImageTop, setShowImageTop] = useState("");
  const [showImageBottom, setShowImageBottom] = useState("");

  const handleOnClose = () => setShowMyModal(false);

  return (
    <>
      <Modal
        onClose={handleOnClose}
        visible={showMyModal}
        announceLogo={showAnnounceLogo}
        announceDate={showAnnounceDate}
        postedBy={showPostedBy}
        textTitle={showTextTitle}
        textBlurb={showTextBlurb}
        imageTop={showImageTop}
        imageBottom={showImageBottom}
      />
      <div className="text-2xl font-medium underline decoration-violet-800/[.3] underline-offset-[6px]">
        Community Announcements
      </div>
      <div className="flex pt-3">
        {/**Announce 1 */}
        <div
          onClick={() => {
            setShowMyModal(true);
            setShowAnnounceLogo(
              "/../public/images/announcements/logoFaraway.png"
            );
            setShowAnnounceDate("Jan 9 2023");
            setShowPostedBy("Team Faraway");
            setShowTextTitle(
              "Mini Royale: Nations x Magic Eden Limited Edition Skin & Grand Prize"
            );
            setShowTextBlurb(
              "Mini Royale: Nations has partnered with Magic Eden to release a limited edition Season 4 Premium Hero skin! The Magic Eden Shadow Ronin is one of four skin variations of the all new Shadow Ronin Hero, live now in the Premium Samurai Drop until January 19. How to unlock the Shadow Ronin Go to faraway.gg/miniroyale Use $SOL to collect Shadow Ronin Shards in the weekly Premium Samurai Drop 20% of the Shadow Ronin Shards will also be accessible to Season 4 Premium Holders in Premium Contract quests from Jan 10 - Feb 6. Once you’ve collected all shards (120 total required), head to The Lab in miniroyale.io. Summon your Hero! You will receive 1 of 4 color variations of the Shadow Ronin skin. All Shadow Ronin Shards can be collected until January 16th. After this date, the Shadow Ronin will no longer be available, but don’t worry, you can always grab one in our Season 4 Premium Collection on Magic Eden."
            );
            setShowImageTop("/../public/images/announcements/Modal1A.png");
            setShowImageBottom("/../public/images/announcements/Modal1B.png");
          }}
          className="flex justify-center w-2/2 md:w-1/2 hover:opacity-50 hover:cursor-pointer "
        >
          <div className="rounded-lg m-4 outline outline-1 outline-violet-800/[.3] ">
            <Image
              className="justify-self-center w-full rounded-lg"
              src={community1}
              alt=""
            />
            <div className="pt-[6px] px-[6px] text-sm font-medium text-pink-600">
              Jan 9 2023{" "}
            </div>
            <div className="pt-[3px] pb-1 px-[6px] font-medium">
              Mini Royale: Nations x Magic Eden Limited Edition Skin & Grand
              Prize
            </div>
            <div className="flex justify-center md:justify-end mt-2 mb-2 md:mr-[14px] space-x-2">
              <div className="flex  items-center outline outline-1 outline-violet-800/30 mb-[6px] py-1 px-[10px] rounded-full space-x-1">
                <div>
                  <FiThumbsUp className="text-base mb-[3px]" size={19} />
                </div>
                <div>
                  <BiCommentDetail className="text-base mt-[2px]" size={19} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**Announce 2 */}
        <div
          onClick={() => {
            setShowMyModal(true);
            setShowAnnounceLogo(
              "/../public/images/announcements/logoFaraway.png"
            );
            setShowAnnounceDate("Jan 5 2023");
            setShowPostedBy("Team Faraway");
            setShowTextTitle(
              "Gear & Power Level are Live on Mini Royale: Nations!"
            );
            setShowTextBlurb(
              "Gear — game items that can be equipped for special functionality or to boost character stats — have been a staple of RPGs for decades. And now, we’re bringing gear to Mini Royale: Nations, with a web3 spin of course. But how do you deal with gear on-chain? How can you equip an NFT to another NFT? How will this parent-child relationship look and function in a marketplace? Without any examples to reference or work with, we built a system that we call NFT Imprinting — the ability for an on-chain item to “own” another. Pretty cool, right? When a player equips gear to a Hero in game, that gear is then merged into the metadata of the Hero. If the player rents out, sells, or sends that Hero to another wallet, the imprinted gear stays attached. NFT Imprinting is one of many features of the Faraway Platform. We’re excited to have this novel implementation finally out in the wild!Now, onto the details! There are 3 things to cover: Base Progression Stats, Gear, and Power Level 👇"
            );
            setShowImageTop("/../public/images/announcements/Modal2A.png");
            setShowImageBottom("/../public/images/announcements/Modal2B.png");
          }}
          className="hidden md:flex justify-center w-1/2 hover:opacity-50 hover:cursor-pointer"
        >
          <div className="rounded-lg m-4 outline outline-1 outline-violet-800/[.3] ">
            <Image
              className="justify-self-center w-full rounded-lg"
              src={community2}
              alt=""
            />
            <div className="pt-[6px] px-[6px] text-sm font-medium text-pink-600">
              Jan 5 2023{" "}
            </div>
            <div className="pt-[3px] pb-1 px-[6px] font-medium">
              Gear & Power Level are Live on Mini Royale: Nations! Check it!
            </div>
            <div className="flex justify-center md:justify-end mt-2 mb-2 md:mr-[14px] space-x-2">
              <div className="flex  items-center outline outline-1 outline-violet-800/30 mb-[6px] py-1 px-[10px] rounded-full space-x-1">
                <div>
                  <FiThumbsUp className="text-base mb-[3px]" size={19} />
                </div>
                <div>
                  <BiCommentDetail className="text-base mt-[2px]" size={19} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Communityannouncements;
