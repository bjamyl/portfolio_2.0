import { useState, useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import { FiArrowUpRight } from "react-icons/fi";

export default function CustomLink({ liName, customCSS }) {
  const [hover, setHover] = useState(false);
  const underline = useRef();

  //Hover animation timeline
  const hoverAnim = useRef();

  useEffect(() => {
    hoverAnim.current = gsap.timeline({
      paused: true,
    });

    hoverAnim.current = gsap
      .timeline()
      .to(underline.current, { width: "70%", duration: 0.5 });
  }, []);

  useEffect(() => {
    hover ? hoverAnim.current.play() : hoverAnim.current.reverse();
  }, [hover]);

  return (
    <div
      className={`font-gilroyBold text-slate-50 flex justify-center ${customCSS} hover:cursor-pointer`}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex flex-col"
      >
        <h3 className="flex">
          {liName}
        </h3>
        <div ref={underline} className="w-[0px] h-[1px] bg-slate-50"></div>
      </div>
    </div>
  );
}
