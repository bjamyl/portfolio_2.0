import { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from "./Card";
import projects from "./data";
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
          className="mx-4 font-bold text-7xl text-right md:text-8xl lg:mx-10 xl:mx-20 text-slate-50 font-sans"
        >
          WORKS
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-y-8 2xl:grid-cols-2 2xl:space-y-32 mx-4 lg:mx-10 xl:mx-20 2xl:gap-x-20">
        {projects &&
          projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
      </div>
    </section>
  );
}
