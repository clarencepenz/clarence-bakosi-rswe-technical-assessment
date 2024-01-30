import * as React from "react";
import { SVGProps } from "@/types";

function SVGComponent(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10.4C16 13.4928 13.4928 16 10.4 16C7.3072 16 4.8 13.4928 4.8 10.4C4.8 7.30721 7.3072 4.80001 10.4 4.80001C13.4928 4.80001 16 7.30721 16 10.4ZM14.8941 16.0255C13.6624 17.0109 12.1 17.6 10.4 17.6C6.42355 17.6 3.2 14.3765 3.2 10.4C3.2 6.42356 6.42355 3.20001 10.4 3.20001C14.3764 3.20001 17.6 6.42356 17.6 10.4C17.6 12.1 17.0109 13.6624 16.0254 14.8942L20.5658 19.4343C20.8781 19.7467 20.8781 20.2533 20.5658 20.5658C20.2533 20.8781 19.7467 20.8781 19.4342 20.5658L14.8941 16.0255Z"
        fill="black"
      />
    </svg>
  );
}
export default SVGComponent;
