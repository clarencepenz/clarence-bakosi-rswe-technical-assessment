import React from "react";

type Props = {
  text: string;
};

function EmptyTab({ text }: Props) {
  return (
    <div className="h-full flex justify-center items-center capitalize">
      No content in
      <span className="mx-1">
        {text}
      </span>
      to display
    </div>
  );
}

export default EmptyTab;
