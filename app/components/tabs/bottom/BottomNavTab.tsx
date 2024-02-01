import type { ReactNode } from "react";
import React from "react";

import { IconType } from "react-icons";
import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@/components/ui/tabs";
import cn from "@/lib/utils";

export type TabProps = {
  id: string;
  label: string;
  icon: IconType;
};

type Props = {
  defaultValue: string;
  triggers: TabProps[];
  activeTab: string;
  content: ReactNode;
  changeTab: (id: string) => void;
};

export default function BottomNavTab({
  defaultValue,
  triggers,
  content,
  activeTab,
  changeTab,
}: Props) {
  return (
    <Tabs
      defaultValue={defaultValue}
      className="w-full flex flex-col flex-col-reverse"
    >
      <TabsList className="flex justify-between py-8 px-4 rounded-none bg-white border-t border-t-sri-neutral-100">
        {triggers.map((t) => (
          <TabsTrigger
            key={t.id}
            value={t.label}
            onClick={() => changeTab(t.id)}
            className={cn(
              "flex flex-col text-black hover:text-sri-primary/90  cursor-pointer text-xs font-semibold leading-normal capitalize",
            )}
          >
            <t.icon fill={cn(activeTab === t.label ? "#6C1B9A" : "black")} />
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="min-h-[620px] w-[390px] max-w-[390px]">
        <TabsContent
          value={activeTab}
          className={cn("transition duration-300 ease-in mt-0 h-full")}
        >
          {content}
        </TabsContent>
      </div>
    </Tabs>
  );
}
