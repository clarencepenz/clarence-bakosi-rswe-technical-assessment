"use client";

import React, { useState } from "react";
import {
  Crosshair, Home, Mix, PieChart, Rocket,
} from "@/SVG";
import AppStore from "@/app/components/app-store";
import AppsNavTab from "./AppsNavTab";
import EmptyTab from "../../../../components/common/EmptyTab";

const TAB_LABELS = {
  all: "all",
  tools: "tools",
  calculators: "calculators",
  forms: "forms",
  GPTs: "GPTs",
} as const;

type TabNames = keyof typeof TAB_LABELS;

// Renders a tab content depending on the active tab
function TabContent({ activeTab }: { activeTab: TabNames }) {
  // TODO: Add more tab content for each Tab when we add new features to the app. Eg. case "GPTs"";
  switch (activeTab) {
    case "tools":
      return <AppStore />;
    default:
      return <EmptyTab text={activeTab} />;
  }
}

function AppNavMenu() {
  const [activeTab, setActiveTab] = useState<TabNames>(TAB_LABELS.tools);

  // Generate tab list for the Apps Nav Menu
  const tabs = [
    {
      id: TAB_LABELS.all,
      label: TAB_LABELS.all,
      icon: Rocket,
    },
    {
      id: TAB_LABELS.tools,
      label: TAB_LABELS.tools,
      icon: PieChart,
    },
    {
      id: TAB_LABELS.calculators,
      label: TAB_LABELS.calculators,
      icon: Crosshair,
    },
    {
      id: TAB_LABELS.forms,
      label: TAB_LABELS.forms,
      icon: Home,
    },
    {
      id: TAB_LABELS.GPTs,
      label: TAB_LABELS.GPTs,
      icon: Mix,
    },
  ];

  const changeTabStatus = (id: string) => {
    setActiveTab(id as TabNames);
  };

  return (
    <section className="flex flex-col h-full w-full">
      <AppsNavTab
        defaultValue={TAB_LABELS.tools}
        activeTab={TAB_LABELS[activeTab]}
        triggers={tabs}
        content={<TabContent activeTab={activeTab} />}
        changeTab={changeTabStatus}
      />
    </section>
  );
}

export default AppNavMenu;
