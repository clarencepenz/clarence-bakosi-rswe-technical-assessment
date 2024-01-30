import * as React from "react";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import cn from "@/lib/utils";
import { CardProp, StyleProp } from "@/types";
import PREVIEW_IMAGE from "@/utils/image";

type ToolsCardProps = {
  data: CardProp;
  styles: StyleProp;
};

export default function ToolsCard({ data, styles }: ToolsCardProps) {
  return (
    <Card
      className={cn(
        "border-none outline-none bg-transparent shadow-none transition-colors hover:text-sri-primary/80 cursor-pointer",
        styles.cardW,
      )}
    >
      <CardContent className={cn("p-0", styles.cardH)}>
        <Image
          src={data.coverImage ?? PREVIEW_IMAGE("preview_image")}
          alt={data.title}
          height={styles.height}
          width={styles.width}
          className="h-full w-full rounded-[20px]"
        />
      </CardContent>
      <CardHeader className="px-0 pt-1 pb-4">
        <CardTitle className={cn("text-sm", styles.text_transform)}>
          {data.title}
        </CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
