import * as React from "react";
import { SVGProps } from "@/types";

function SVGComponent(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_2340_120)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8268 0.355611C12.2004 -0.0118882 12.7997 -0.0118882 13.1733 0.355611L23.9733 10.9796C24.3512 11.3514 24.3562 11.9593 23.9845 12.3372C23.6126 12.7152 23.0048 12.7202 22.6269 12.3484L21.3 11.0432V20C21.3 20.4418 20.9419 20.8 20.5 20.8H4.50003C4.05821 20.8 3.70003 20.4418 3.70003 20V11.0432L2.37326 12.3484C1.99529 12.7202 1.38747 12.7152 1.01566 12.3372C0.64385 11.9593 0.648842 11.3514 1.02681 10.9796L11.8268 0.355611ZM12.5 2.38661L19.7 9.4693V19.2H16.5V13.6C16.5 13.1582 16.1419 12.8 15.7 12.8H10.9C10.4582 12.8 10.1 13.1582 10.1 13.6V19.2H5.30003V9.4693L12.5 2.38661ZM11.7 19.2H14.9V14.4H11.7V19.2Z"
          fill={props.fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2340_120">
          <rect width={24} height={24} fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SVGComponent;
