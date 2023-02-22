import { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap/dist/gsap";
import Image from "next/image";

export default function Card({ title, description, image }) {
  const slider = useRef();
  const photo = useRef();
  const headTxt = useRef();
  const desTxt = useRef();

  // Creating the timeline
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(slider.current, {
        width: 0,
        duration: 0.4,
        delay: 5,
        ease: Power3.easeInOut,
      })
      .to(photo.current, {
        scale: 1.03,
        duration: 0.5,
        ease: Power3.easeInOut,
      })
      .from(headTxt.current, { autoAlpha: 0, y: 10, duration: 0.2 }, "-=0.1")
      .from(desTxt.current, { autoAlpha: 0, y: 10, duration: 0.2 });
  }, []);

  return (
    <section className="" id="main">
      <div id="container" className="">
        <>
          <div
            id="img-container"
            className="w-full h-[250px] overflow-hidden relative"
          >
            <div
              ref={slider}
              className="w-full h-full absolute top-0 left-0 bg-[#1C1D1F] z-10"
            ></div>
            <img
              ref={photo}
              src={image}
              alt="image"
              className="absolute top-0 left-0"
            />
          </div>
        </>
        <div className="overflow-hidden h-fit">
          <h3
            ref={headTxt}
            className="font-sans invisible  text-slate-50 mx-4 text-2xl"
          >
            {title}
          </h3>
        </div>
        <div className="overflow-hidden h-fit">
          <p
            ref={desTxt}
            className="mx-4  invisible font-body text-slate-50 font-light text-lg"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
