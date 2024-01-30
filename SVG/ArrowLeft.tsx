import * as React from "react";
import { SVGProps } from "@/types";

function SVGComponent(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2112 4.1801C8.4798 3.92827 8.9017 3.94189 9.15352 4.2105L14.1535 9.54383C14.3939 9.80026 14.3939 10.1993 14.1535 10.4558L9.15352 15.7891C8.9017 16.0577 8.4798 16.0713 8.2112 15.8195C7.94259 15.5676 7.92898 15.1457 8.1808 14.8772L12.7533 9.99979L8.1808 5.12242C7.92898 4.85381 7.94259 4.43191 8.2112 4.1801Z"
        fill="black"
      />
    </svg>
  );
}
export default SVGComponent;
