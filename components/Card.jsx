import { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap/dist/gsap";
import Image from "next/image";

export default function Card({ title, description, image }) {
  const slider = useRef();
  const photo = useRef();
  const headTxt = useRef();
  const desTxt = useRef();

  // Creating the timeline
  // const tl = useRef();
  // useEffect(() => {
  //   tl.current = gsap
  //     .timeline()
  //     .to(slider.current, {
  //       width: 0,
  //       duration: 0.4,
  //       delay: 5,
  //       ease: Power3.easeInOut,
  //     })
  //     .to(photo.current, {
  //       scale: 1.03,
  //       duration: 0.5,
  //       ease: Power3.easeInOut,
  //     })
  //     .from(headTxt.current, { autoAlpha: 0, y: 10, duration: 0.2 }, "-=0.1")
  //     .from(desTxt.current, { autoAlpha: 0, y: 10, duration: 0.2 });
  // }, []);

  return (
    <section  className="md:">
      <div id="container" className="">
        <>
          <div
            id="img-container"
            className="w-full h-[250px] md:h-[450px] lg:h-[500px] overflow-hidden relative"
          >
            {/* <div
              ref={slider}
              data-scroll
              data-scroll-repeat="false"
              data-scroll-class="slide"
              className="slider-class w-full absolute top-0 left-0 bg-[#1C1D1F] z-10"
            ></div> */}
            <Image
              ref={photo}
              src={image}
              alt="image"
              width={1980}
              height={1080}
              priority
              className="absolute top-0 left-0"
            />
          </div>
        </>
        <div className="overflow-hidden h-fit">
          <h3 ref={headTxt} className="font-sans   text-slate-50 mx-4 text-2xl">
            {title}
          </h3>
        </div>
        <div className="overflow-hidden h-fit">
          <p
            ref={desTxt}
            className="mx-4   font-body text-slate-50 font-light text-lg"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
