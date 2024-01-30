import React from "react";
import { featuredData as featured_data } from "@/constants/data";
import AppStoreContainer from "./app-store-container";

function Featured() {
  return (
    <AppStoreContainer title="featured" data={featured_data} />
  );
}

export default Featured;
