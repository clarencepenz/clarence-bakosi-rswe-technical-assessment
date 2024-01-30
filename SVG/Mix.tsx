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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.93873 6.39992C3.93873 4.76443 5.26454 3.43863 6.90003 3.43863C8.5355 3.43863 9.86133 4.76443 9.86133 6.39992C9.86133 8.03539 8.5355 9.36122 6.90003 9.36122C5.26454 9.36122 3.93873 8.03539 3.93873 6.39992ZM6.90003 1.99863C4.46926 1.99863 2.49873 3.96915 2.49873 6.39992C2.49873 8.83069 4.46926 10.8012 6.90003 10.8012C9.3308 10.8012 11.3013 8.83069 11.3013 6.39992C11.3013 3.96915 9.3308 1.99863 6.90003 1.99863ZM9.81254 17.6001L4.49997 20.539V14.6613L9.81254 17.6001ZM4.72213 13.1385C3.97565 12.7256 3.05997 13.2655 3.05997 14.1186V21.0817C3.05997 21.9349 3.97565 22.4747 4.72213 22.0617L11.0158 18.5801C11.7862 18.1539 11.7862 17.0464 11.0158 16.6201L4.72213 13.1385ZM13.78 14.4C13.78 13.7815 14.2815 13.28 14.9 13.28H21.3C21.9186 13.28 22.42 13.7815 22.42 14.4V20.8C22.42 21.4185 21.9186 21.92 21.3 21.92H14.9C14.2815 21.92 13.78 21.4185 13.78 20.8V14.4ZM15.22 14.72V20.48H20.98V14.72H15.22ZM22.0091 3.50896C22.2902 3.22778 22.2902 2.77191 22.0091 2.49072C21.728 2.20955 21.2722 2.20955 20.9909 2.49072L18.1 5.38163L15.2091 2.49077C14.928 2.20959 14.4721 2.20959 14.1909 2.49077C13.9097 2.77194 13.9097 3.22783 14.1909 3.50899L17.0818 6.39986L14.1909 9.29072C13.9097 9.57191 13.9097 10.0278 14.1909 10.309C14.4721 10.5901 14.928 10.5901 15.2091 10.309L18.1 7.4181L20.9909 10.309C21.2722 10.5902 21.728 10.5902 22.0091 10.309C22.2902 10.0278 22.2902 9.57194 22.0091 9.29077L19.1182 6.39986L22.0091 3.50896Z"
        fill={props.fill}
      />
    </svg>
  );
}
export default SVGComponent;
