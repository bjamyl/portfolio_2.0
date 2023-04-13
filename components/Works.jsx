import { useEffect, useRef, useState } from "react";
import gsap, { Power4 } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "./Card";
import projects from "./data";
import Link from "next/link";

// Register scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const [hover, setHover] = useState(false);
  const text = useRef();

  const tl = useRef();
  const trigger = useRef();
  const underline = useRef();

  //Hover animation timeline
  const hoverAnim = useRef();

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

  const featured_projects = projects.slice(0,4)

  return (
    <section ref={trigger}>
      <div className="h-fit overflow-hidden mb-10">
        <h1
          ref={text}
          className="mx-4 md:mx-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-right lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50 font-gilroyBold"
        >
          WORKS
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-y-14 2xl:grid-cols-2 2xl:gap-y-32 mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 2xl:gap-x-32">
        {featured_projects &&
          featured_projects.map((project) => (
            <Link key={project.id} href={project.link} >
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                image2={project.image2}
              />
            </Link>
          ))}
      </div>
      <Link href="/work">
        <div className="mt-10 font-gilroyBold text-slate-50 flex justify-center text-xl xl:mt-16 md:text-2xl hover:cursor-pointer">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex flex-col"
          >
            <h3 className="flex">
              All Projects <FiArrowUpRight />
            </h3>
            <div ref={underline} className="w-[0px] h-[1px] bg-slate-50"></div>
          </div>
        </div>
      </Link>
    </section>
  );
}
