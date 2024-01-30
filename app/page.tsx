"use client";

import React from "react";
import { Search } from "@/SVG";
import BottomNavMenu from "@/app/components/tabs/bottom/BottomNavMenu";

export default function Home() {
  return (
    <main className="container-screen h-full bg-white px-0">
      <div className="flex justify-between items-center px-6 mb-2">
        <h2 className="text-3xl font-semibold leading-normal">App Store</h2>
        <Search className="cursor-pointer" />
      </div>
      <BottomNavMenu />
    </main>
  );
}
