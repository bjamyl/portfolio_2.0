import { useRef, useEffect, useState } from "react";
import gsap, { Power4 } from "gsap/dist/gsap";
import Image from "next/image";

export default function Card({ title, description, image, image2 }) {
  const slider = useRef();
  const photo = useRef();
  const photo2 = useRef();
  const headTxt = useRef();
  const desTxt = useRef();
  const timeline = useRef();
  const hoverTrig = useRef();
  const trig = useRef(); // Container to trigger the animation

  const [hover, setHover] = useState(false); //State to detect if the image is hovered or not

  useEffect(() => {
    timeline.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: trig.current,
          start: "top 50%",
        },
      })
      .to(slider.current, { width: 0, duration: 0.4, ease: Power4.easeInOut })
      .to(photo.current, {
        scale: 1.02,
        duration: 0.5,
        ease: Power4.easeInOut,
      })
      .from(headTxt.current, { autoAlpha: 0, y: 10, duration: 0.2 }, "-=0.1")
      .from(desTxt.current, { autoAlpha: 0, y: 10, duration: 0.2 });
  }, []);

  //Hover animation timeline
  const hoverAnim = useRef();

  useEffect(() => {
    hoverAnim.current = gsap.timeline({
      paused: true,
    });

    hoverAnim.current = gsap
      .timeline()
      .to(photo.current, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 0.5,
        ease: Power4.easeInOut,
        scale: 1.1,
      })
      .to(photo2.current, { scale: 1.02, duration: 0.5 },'-=0.25');
  }, []);

  useEffect(() => {
    hover ? hoverAnim.current.play() : hoverAnim.current.reverse();
  }, [hover]);

  return (
    <section ref={trig} className="">
      <div className="">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="hover:cursor-pointer w-full h-[250px] md:h-[450px] lg:h-[500px] 2xl:h-[700px] overflow-hidden relative"
        >
          <div
            ref={slider}
            data-scroll
            data-scroll-repeat="false"
            data-scroll-class="slide"
            className="h-full w-full absolute top-0 left-0 bg-[#1C1D1F] z-40"
          ></div>
          <Image
            ref={photo}
            src={image}
            alt="image"
            fill
            style={{ objectFit: "cover" }}
            className="image-main  absolute top-0 left-0 object-fill z-30"
          />
          <Image
            ref={photo2}
            src={image2}
            alt="image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute top-0 left-0 object-fill z-10"
          />
        </div>
      </div>
      {/* text-section */}
      <div className="flex justify-between items-baseline mt-5">
        <div className="overflow-hidden h-fit">
          <h3
            ref={headTxt}
            className="text-upper invisible font-gilroyBold text-slate-50 text-xl md:text-2xl"
          >
            {title}
          </h3>
        </div>
        <div className="overflow-hidden h-fit">
          <p
            ref={desTxt}
            className="invisible font-gilroyLight  text-slate-100 font-light text-lg text-opacity-60"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
