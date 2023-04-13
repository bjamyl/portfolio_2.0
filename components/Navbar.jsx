import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import Menu from "./Menu";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 w-screen z-50">
      <Menu toggle={toggle} setToggle={setToggle} />
      <div className="m-4 lg:mx-10 xl:my-10 xl:mx-20 2xl:mx-72 flex items-center justify-between">
        <h2 className="text-slate-50 font-gilroyBold text-lg font-bold xl:text-xl z-50  hover:cursor-pointer">
          <Link href="/">
            jamilalhassan<span className="text-[#EC9021]">.</span>
          </Link>
        </h2>
        <h3 className="z-50">
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
        </h3>
      </div>
    </nav>
  );
}
