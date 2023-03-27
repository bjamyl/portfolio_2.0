import { useRef, useEffect } from "react";
import DevCard from "./DevCard";
import DataCard from "./DataCard";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);
export default function Expertise() {
  const tl = useRef();
  const title = useRef();
  return (
    <section>
      <div className="h-fit overflow-hidden">
        <h3 className="mx-4 md:mx-8 font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-left lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50 font-sans">
          EXPERTISE
        </h3>
      </div>
      {/* Other content */}
      <div className="mx-4 md:mx-8">
        <h2 className="text-slate-50 font-sans text-xl">FULLSTACK DEVELOPMENT</h2>
        <h2 className="text-slate-50 font-sans text-xl">BRAND DESIGN</h2>
      </div>
    </section>
  );
}
