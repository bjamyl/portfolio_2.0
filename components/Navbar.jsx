import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Menu from "./Menu";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="fixed inset-0 z-20">
      <Menu toggle={toggle} />
      <div className="m-4 lg:mx-10 xl:my-10 xl:mx-20 flex items-center justify-between">
        <h2 className="text-slate-50 font-sans text-lg font-bold xl:text-xl z-10 hover:cursor-pointer">
          jamilalhassan<span className="text-[#EC9021]">.</span>
        </h2>
        <Hamburger
          color="white"
          onToggle={(toggle) => {
            if (toggle) {
              console.log(toggle);
              setToggle(true);
            } else {
              console.log(toggle);
              setToggle(false);
            }
          }}
        />
      </div>
    </nav>
  );
}
