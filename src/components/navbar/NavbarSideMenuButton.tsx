"use client";

import { useRef } from "react";
import "./navbar-side-menu-button.css";

type Props = {
  handleSideMenuOpen: () => void;
};

function MenuButton({ handleSideMenuOpen }: Props) {
  const MenuButton = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={MenuButton}
      onClick={() => {
        const isOpened = MenuButton.current?.getAttribute("aria-expanded");
        if (isOpened === "false") {
          MenuButton.current?.setAttribute("aria-expanded", "true");
        } else {
          MenuButton.current?.setAttribute("aria-expanded", "false");
        }
        handleSideMenuOpen();
      }}
      className="navbar-side-menu-button"
      aria-controls="hamburger-menu"
      aria-expanded="false"
    >
      <svg
        fill="black"
        className="hamburger fill-black"
        viewBox="0 0 100 100"
        width="24"
      >
        <rect
          className="line top"
          width="80"
          height="10"
          x="10"
          y="25"
          rx="5"
        ></rect>
        <rect
          rx="5"
          className="line middle"
          width="80"
          height="10"
          x="10"
          y="45"
        ></rect>
        <rect
          rx={5}
          className="line bottom"
          width="80"
          height="10"
          x="10"
          y="65"
        ></rect>
      </svg>
    </button>
  );
}

export default MenuButton;
