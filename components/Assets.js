import React from "react";
import Image from "next/image";

import image1 from "../public/images/characters/1.png";
import image2 from "../public/images/characters/2.png";
import image3 from "../public/images/characters/3.png";
import image4 from "../public/images/characters/4.png";
import image5 from "../public/images/characters/5.png";

import loot1 from "../public/images/characters/loot1.png";
import loot2 from "../public/images/characters/loot2.png";
import loot3 from "../public/images/characters/loot3.png";
import loot4 from "../public/images/characters/loot4.png";
import loot5 from "../public/images/characters/loot5.png";

const Assets = () => {
  return (
    <>
      {/*asset bar */}
      <div className="flex justify-center m-1 text-gray-200 mt-8">
        <div className="container max-w-7xl">
          <div class="flex justify-between px-8">
            <div className="flex space-x-2">
              <div className="text-2xl font-bold">Assets: Characters</div>
            </div>

            <div className="flex space-x-4 mr-2">
              <div className="hidden md:block rounded-full bg-violet-950 outline outline-1 outline-pink-600 px-4 py-[5px] mt-[6px] hover:cursor-pointer hover:opacity-50 ">
                Recently Listed
              </div>
              <div className="hidden md:block rounded-full bg-violet-950 outline outline-1 outline-violet-800/[.4] px-4 py-[6px] hover:cursor-pointer hover:opacity-50">
                Floor Price
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**characters */}
      <div className="flex justify-center mx-2 text-gray-200 mt-3">
        <div className="container max-w-7xl">
          <div className="flex items-center text-white justify-between space-x-6 mt-6 mx-8">
            <div className="rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={image1} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Hero #9617</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">2.75 SOL</div>
            </div>
            <div className="rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={image2} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Hero #8812</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">4.25 SOL</div>
            </div>
            <div className="rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={image3} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Hero #1597</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">8.00 SOL</div>
            </div>
            <div className="hidden md:block rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={image4} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Hero #3647</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">69.42 SOL</div>
            </div>
            <div className="hidden md:block rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={image5} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Hero #0024</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">3.50 SOL</div>
            </div>
          </div>
          <div className="h-4"></div>
        </div>
      </div>
      {/**LOOT ITEMS */}
      <div className="flex justify-center m-1 text-gray-200 mt-6">
        <div className="container max-w-7xl">
          <div class="flex justify-between px-8">
            <div className="flex space-x-2">
              <div className="text-2xl font-bold">Assets: Loot</div>
            </div>

            <div className="hidden space-x-4 mr-2">
              <div className="rounded-full bg-violet-950 outline outline-1 outline-pink-600 px-4 py-[6px]">
                Recently Listed
              </div>
              <div className="rounded-full bg-violet-950 outline outline-1 outline-violet-800/[.4] px-4 py-[6px] ">
                Floor Price
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**looty */}
      <div className="flex justify-center mx-2 text-gray-200">
        <div className="container max-w-7xl">
          <div className="flex items-center text-white justify-between space-x-6 mt-6 mx-8">
            <div className="rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={loot1} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Weapon #2114</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">1.25 SOL</div>
            </div>
            <div className="rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={loot2} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Weapon #2114</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">8.00 SOL</div>
            </div>
            <div className="rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={loot3} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Weapon #2114</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">6.969 SOL</div>
            </div>
            <div className="hidden md:block rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={loot4} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Weapon #2114</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">4.20 SOL</div>
            </div>
            <div className="hidden md:block rounded-lg overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] pb-3 hover:opacity-50 hover:cursor-pointer">
              <Image className="" src={loot5} alt="Logo" width="200" />
              <div className="text-md pt-1">Miniverse Weapon #2114</div>
              <div className="text-sm text-pink-600">Mini Royale: Nations</div>
              <div className="font-bold">1.25 SOL</div>
            </div>
          </div>
          <div className="h-16"></div>
        </div>
      </div>
    </>
  );
};

export default Assets;
