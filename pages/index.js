import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Maincontent from "../components/Maincontent";
import Imageslider from "../components/Imageslider";
import About from "../components/About.js";
import Assets from "../components/Assets.js";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-violet-950 w-full h-full">
        <Sidebar />
        <div className="flex">
          <div className="static w-0 md:w-[72px] lg:w-[294px]"></div>
          <div className="bg-violet-950 w-full">
            <Imageslider />
          </div>
        </div>

        <div className="flex">
          <div className="static w-0 md:w-[72px] lg:w-[294px]"></div>
          <div className="bg-violet-950 w-full">
            <About className="" />
          </div>
        </div>

        <div className="flex">
          <div className="static w-0 md:w-[72px] lg:w-[294px]"></div>
          <div className="bg-violet-950 w-full">
            <Assets className="" />
          </div>
        </div>
      </div>
    </>
  );
}
