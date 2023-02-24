import { Gradient } from "../assets/gradient";
import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";

const gradient = new Gradient();
// https://whatamesh.vercel.app/
export default function Hero() {
  const ref = useRef();
  const headerText = useRef();
  const secText = useRef();

  // Creating the timeline
  const timeline = useRef();
  //Initialting animation
  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .from(headerText.current, { autoAlpha:0, y: -50, duration: 0.7 })
      .from(secText.current, { autoAlpha:0, y: -50, duration: 0.7 });
  }, []);

  useEffect(() => {
    if (ref.current) {
      console.log(ref);
      gradient.initGradient("#gradient-canvas");
    }
  }, [ref]);

  return (
    <main className="h-screen overflow-y-hidden">
      <div className="h-full relative">
        <canvas
          className="absolute"
          id="gradient-canvas"
          data-transition-in
        ></canvas>
        <div className="absolute w-full h-full flex flex-col items-center justify-center">
          <div
            ref={ref}
            className=" h-[60%] w-full flex flex-col justify-between "
          >
            <h2 ref={headerText} className="font-sans invisible mx-4 lg:mx-10 xl:mx-20 text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl font-bold text-slate-50">
              SOFTWARE DEVELOPER
            </h2>
            <div> 
              <div></div>
            <p ref={secText} className="invisible font-body  mx-4 lg:mx-10 xl:mx-20 2xl:mx-20 text-slate-50 text-lg 2xl:text-2xl">
              Hello, Jamil here<span className="text-[#EC9021]">.</span> <br />I
              am a freelance fullstack developer based in in Ghana.
            </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
