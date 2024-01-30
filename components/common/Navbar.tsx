import React from "react";
import Image from "next/image";
import PREVIEW_IMAGE from "@/utils/image";
import { Mixer } from "@/SVG";
import CustomAvatar from "./Avatar";
import { Input } from "../ui/input";

function Navbar() {
  return (
    <nav className="flex gap-4 justify-between items-center  pt-2">
      <Image
        src={PREVIEW_IMAGE("Logo", "logo")}
        height={40.2}
        width={75.762}
        alt="SRI"
      />

      <form className="relative w-full bg-sri-secondary flex  items-center rounded-3xl text-black">
        <Input
          type="text"
          placeholder="Search for a property"
          className="bg-transparent border-none focus-visible:ring-1 focus-visible:ring-sri-primary text-sm font-normal leading-normal rounded-3xl  pl-4"
        />
        <Mixer className="mr-3 absolute right-0 bg-sri-secondary" />
      </form>
      <CustomAvatar />
    </nav>
  );
}

export default Navbar;
