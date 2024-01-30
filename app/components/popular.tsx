import React from "react";
import { popularData as popular_data } from "@/constants/data";
import AppStoreContainer from "./app-store-container";

function Popular() {
  return (
    <AppStoreContainer title="popular" data={popular_data} />
  );
}

export default Popular;
