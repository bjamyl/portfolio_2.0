import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import Menu from "./Menu";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  function showNull() {
    return null;
  }

  return (
    <nav className="fixed top-0 w-screen  z-10">
      {/* {toggle ? <Menu toggle={toggle} /> : null} */}
      <Menu toggle={toggle} />
      <div className="m-4 lg:mx-10 xl:my-10 xl:mx-20 flex items-center justify-between">
        <h2 className="text-slate-50 font-sans text-lg font-bold xl:text-xl  hover:cursor-pointer">
          <Link href="/">
            jamilalhassan<span className="text-[#EC9021]">.</span>
          </Link>
        </h2>
        <Hamburger
          color="white"
          onToggle={(toggle) => {
            if (toggle) {
              setToggle(true);
            } else {
              setToggle(false);
            }
          }}
        />
      </div>
    </nav>
  );
}
