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
      <g clipPath="url(#clip0_2340_115)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 0C12.9418 0 13.3 0.358173 13.3 0.8V2.89099C17.6075 3.3496 21.0067 6.84819 21.3109 11.2H23.7C24.1418 11.2 24.5 11.5582 24.5 12C24.5 12.4418 24.1418 12.8 23.7 12.8H21.2821C20.835 16.999 17.499 20.335 13.3 20.7821V23.2C13.3 23.6418 12.9418 24 12.5 24C12.0582 24 11.7 23.6418 11.7 23.2V20.8109C7.34819 20.5067 3.8496 17.1075 3.39099 12.8H1.3C0.858173 12.8 0.5 12.4418 0.5 12C0.5 11.5582 0.858173 11.2 1.3 11.2H3.36218C3.67402 6.73866 7.23866 3.17402 11.7 2.86218V0.8C11.7 0.358173 12.0582 0 12.5 0ZM13.3 19.2515V15.2C13.3 14.7582 12.9418 14.4 12.5 14.4C12.0582 14.4 11.7 14.7582 11.7 15.2V19.2864C8.18827 18.9902 5.36755 16.2669 4.9215 12.8H9.3C9.74182 12.8 10.1 12.4418 10.1 12C10.1 11.5582 9.74182 11.2 9.3 11.2H4.88672C5.19203 7.57859 8.07859 4.69203 11.7 4.38672V8.8C11.7 9.24182 12.0582 9.6 12.5 9.6C12.9418 9.6 13.3 9.24182 13.3 8.8V4.4215C16.7669 4.86755 19.4902 7.68827 19.7864 11.2H15.7C15.2582 11.2 14.9 11.5582 14.9 12C14.9 12.4418 15.2582 12.8 15.7 12.8H19.7515C19.3194 16.1586 16.6586 18.8194 13.3 19.2515Z"
          fill={props.fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2340_115">
          <rect width={24} height={24} fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SVGComponent;
