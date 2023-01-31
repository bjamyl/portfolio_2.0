import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
export default function Navbar() {
  return (
    <nav className="fixed inset-0 z-20">
      <div className="m-4 flex items-center justify-between">
        <h2>jamilalhassan</h2>
        <Hamburger />
      </div>
    </nav>
  );
}
