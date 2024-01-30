import type { ReactNode } from "react";
import React from "react";

import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@/components/ui/tabs";
import cn from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export type TabProps = {
  id: string;
  label: string;
};

type Props = {
  defaultValue: string;
  triggers: TabProps[];
  activeTab: string;
  content: ReactNode;
  changeTab: (id: string) => void;
};

export default function AppsNavTab({
  defaultValue,
  triggers,
  content,
  activeTab,
  changeTab,
}: Props) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full h-full flex flex-col">
      <TabsList className="flex justify-between items-start  overflow-x-scroll no-scrollbar  pt-0 px-3 rounded-none bg-white border-b-2 border-b-sri-neutral-100 ">
        {triggers.map((t) => (
          <TabsTrigger
            key={t.id}
            value={t.label}
            onClick={() => changeTab(t.id)}
            className="flex flex-col text-black hover:text-sri-primary/90 cursor-pointer rounded-none min-w-[42px] px-2 pt-2 pb-0"
          >
            <span className="pb-2 text-xs  font-semibold leading-normal capitalize">
              {" "}
              {t.label}
            </span>
            {activeTab === t.label && (
              <Separator className="bg-sri-primary max-w-[42px] h-1 py-1" />
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="h-full w-[390px] max-w-[390px]">
        <TabsContent
          value={activeTab}
          className={cn("transition duration-300 ease-in mt-0 h-full ")}
        >
          {content}
        </TabsContent>
      </div>
    </Tabs>
  );
}
