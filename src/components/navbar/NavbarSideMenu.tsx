import React from "react";

import "./navbar-side-menu.css";

type Props = {
  sideMenuRef: React.RefObject<HTMLDivElement>;
};

export default function NavbarSideMenu({ sideMenuRef }: Props) {
  return (
    <div
      ref={sideMenuRef}
      className="navbar-side-menu absolute top-0 h-screen bg-black xl:hidden"
    ></div>
  );
}
