import React from "react";
import ToolsCard from "@/components/common/ToolsCard";
import SectionTitle from "@/components/common/SectionTitle";
import { CardProp, StyleProp } from "@/types";

type Props = {
  title: "featured" | "popular";
  data: CardProp[];
};

const featuredStyles: StyleProp = {
  cardW: "w-[321px]",
  cardH: "h-[140px]",
  width: 382.638,
  height: 140,
  text_transform: "uppercase",
  space: "gap-4",
};

const popularStyles: StyleProp = {
  cardW: "w-[160px]",
  cardH: "h-[160px]",
  width: 160,
  height: 160,
  text_transform: "capitalize",
  space: "gap-3",
};

function AppStoreContainer({ title, data }: Props) {
  return (
    <div className="flex flex-col gap-y-4 pt-2">
      <SectionTitle title={title} />
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4 mx-6">
          {data.map((items) => (
            <ToolsCard
              key={items.id}
              data={items}
              styles={title === "featured" ? featuredStyles : popularStyles}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppStoreContainer;
