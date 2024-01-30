"use client";

import React, { useState } from "react";
import {
  Crosshair, Home, Mix, PieChart, Rocket,
} from "@/SVG";
import BottomNavTab from "./BottomNavTab";
import AppTab from "../apps/AppNavMenu";
import EmptyTab from "../../../../components/common/EmptyTab";

const TAB_LABELS = {
  listings: "listings",
  research: "research",
  engage: "engage",
  community: "community",
  apps: "apps",
} as const;

type TabNames = keyof typeof TAB_LABELS;

// Renders a tab content depending on the active tab
function TabContent({ activeTab }: { activeTab: TabNames }) {
  switch (activeTab) {
    // TODO: Add more tab content for each Tab when we add new features to the app;

    case "apps":
      return <AppTab />;
    default:
      return <EmptyTab text={activeTab} />;
  }
}

function BottomNavMenu() {
  const [activeTab, setActiveTab] = useState<TabNames>(TAB_LABELS.apps);

  // Generate tab list for the Bottom Nav Menu
  const tabs = [
    {
      id: TAB_LABELS.listings,
      label: TAB_LABELS.listings,
      icon: Rocket,
    },
    {
      id: TAB_LABELS.research,
      label: TAB_LABELS.research,
      icon: PieChart,
    },
    {
      id: TAB_LABELS.engage,
      label: TAB_LABELS.engage,
      icon: Crosshair,
    },
    {
      id: TAB_LABELS.community,
      label: TAB_LABELS.community,
      icon: Home,
    },
    {
      id: TAB_LABELS.apps,
      label: TAB_LABELS.apps,
      icon: Mix,
    },
  ];

  const changeTabStatus = (id: string) => {
    setActiveTab(id as TabNames);
  };

  return (
    <section className="flex text-sri-neutral-300 w-full h-full">
      <BottomNavTab
        defaultValue={TAB_LABELS.apps}
        activeTab={TAB_LABELS[activeTab]}
        triggers={tabs}
        content={<TabContent activeTab={activeTab} />}
        changeTab={changeTabStatus}
      />
    </section>
  );
}

export default BottomNavMenu;
