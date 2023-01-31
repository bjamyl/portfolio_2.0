import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
export default function Navbar() {
  return (
    <nav className="fixed inset-0 z-20">
      <div className="m-4 flex items-center justify-between">
        <h2 className="text-slate-50 text-lg font-bold xl:text-xl">jamilalhassan<span className="text-[#EC9021]">.</span></h2>
        <Hamburger color="white" />
      </div>
    </nav>
  );
}
