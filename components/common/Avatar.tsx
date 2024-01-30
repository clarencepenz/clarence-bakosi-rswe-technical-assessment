import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PREVIEW_IMAGE from "@/utils/image";

export default function CustomAvatar() {
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage
        src={PREVIEW_IMAGE("avatar", "avatar")}
        className="object-cover"
        alt="avatar"
      />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  );
}
