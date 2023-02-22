import React from "react";
import Link from "next/link";

type Props = {};

export default function Component({}: Props) {
  return (
    <div className="relative mt-4 flex h-40 w-[97vw] flex-col border-r border-black bg-my-skin pl-4">
      <span className="mb-7 mt-3 flex h-6 items-center gap-3">
        <Link href="/" className="text-xs uppercase underline">
          Find out more about our brand story
        </Link>
        <svg
          width="32"
          height="8"
          viewBox="0 0 32 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z"
            fill="#150C07"
          />
        </svg>
      </span>
      <Link
        href="/"
        className="flex h-16 items-center justify-center border-t border-l border-b border-black bg-my-orange italic"
      >
        {" "}
        Contact Us
      </Link>
    </div>
  );
}
