import gsap from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headerText1 = useRef();
  const headerText2 = useRef();
  const bodyText1 = useRef();
  const trig = useRef();
  const tl = useRef();

  // Initializing animation
  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: trig.current,
          start: "top 50%",
        },
      })
      .from(headerText1.current, { autoAlpha: 0, y: 50, duration: 0.5 })
      .from(
        headerText2.current,
        { autoAlpha: 0, y: 50, duration: 0.5 },
        "-=0.25"
      )
      .from(bodyText1.current, { autoAlpha: 0, opacity: 1 })
  }, []);

  return (
    <main className="my-20 flex flex-col gap-12 justify-center">
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <div ref={trig} className="overflow-hidden h-fit">
            <h2
              ref={headerText1}
              className="invisible mx-4 md:mx-8 lg:mx-16 text-4xl xl:mx-20 xl:text-5xl font-sans text-slate-50 2xl:mx-72 2xl:text-6xl"
            >
              I add value to design
            </h2>
            <h2
              ref={headerText2}
              className="invisible mx-4 md:mx-8 lg:mx-16 text-4xl xl:mx-20 xl:text-5xl font-sans text-slate-50 2xl:mx-72 2xl:text-6xl"
            >
              through<span className="text-[#ED9022]">simplicity</span> &
              <span className="text-[#ED9022]">clarity</span>
            </h2>
          </div>
          <p
            ref={bodyText1}
            className="text-base invisible leading-relaxed mx-4 font-gilroyLight md:mx-8 lg:mx-16 xl:mx-20 text-slate-50 2xl:mx-72 2xl:text-xl"
          >
            I am a creative developer who relishes the challenge of turning
            ideas in unforgettable digital experiences. I have worked as an
            independent graphic designer for over 3 years and this love for
            beautiful and slick visuals resonates in my web applications. I
            specialize in front-end development but I like to get my hands dirty
            with backends too. My expertise also spans logo and flyer design,
            video ad development, and illustrations. <br />
            Every business has unique needs, and it is my job to understand
            those needs and design solutions that{" "}
            <span className="text-slate-400">scale</span> and{" "}
            <span className="text-slate-400">boost revenue</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
