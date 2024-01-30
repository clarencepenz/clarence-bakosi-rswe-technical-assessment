import React from "react";
import { ArrowLeft } from "@/SVG";

type Props = {
  title: string;
};

function SectionTitle({ title }: Props) {
  return (
    <div className="flex items-center gap-1 px-6">
      <h3 className="font-semibold capitalize leading-normal text-xl">
        {title}
      </h3>
      <ArrowLeft />
    </div>
  );
}

export default SectionTitle;
