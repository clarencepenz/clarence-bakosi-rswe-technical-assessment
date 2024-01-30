"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";

import Featured from "./featured";
import Popular from "./popular";

export default function AppStore() {
  return (
    <section className="bg-white">
      <Featured />
      <Separator className="h-[1px] my-3 bg-sri-neutral-100" />
      <Popular />
    </section>
  );
}
