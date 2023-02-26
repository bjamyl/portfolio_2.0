import { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from "./Card";
import Tile from "./Tile";
gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const text = useRef();

  const tl = useRef();
  const trigger = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger.current,
          start: "top 50%",
        },
      })
      .from(text.current, {
        autoAlpha: 0,
        y: 100,
        duration: 0.7,
        ease: Power4.easeOut,
      });
  }, []);

  return (
    <section ref={trigger}>
      <div className="h-fit overflow-hidden mb-10">
        <h1
          ref={text}
          className="mx-4 text-7xl text-right  md:text-8xl lg:mx-10 xl:mx-20 text-slate-50 font-sans"
        >
          <span className="text-xl  md:text-2xl  ">02</span>
          WORK
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-y-8 2xl:grid-cols-2 2xl:space-y-20 mx-4 lg:mx-10 xl:mx-20 2xl:gap-x-20">
        <Card
          title={"Real Estate"}
          description={"Development"}
          image={"/images/jonna.jpg"}
        />
        <Card
          title={"GameShop"}
          description={"Development"}
          image={"/images/shubam.jpg"}
        />
        <Card
          title={"Beyond October"}
          description={"Brand Design"}
          image={"/images/max.jpg"}
        />
      </div>
      {/* <div className="space-y-10 md:space-y-20 xl:space-y-24 2xl:space-y-28">
        <Tile description={"Development"} title={"Real Estate"} />
        <Tile description={"Development"} title={"GameShop"} />
        <Tile description={"Brand Design"} title={"Beyond October"} />
      </div> */}
    </section>
  );
}
