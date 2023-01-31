// import React from "react";
// import { Gradient } from "../assets/gradient";
// import { useEffect } from "react";

// export default function Hero() {
//   useEffect(() => {
//     const gradient = new Gradient();
//     gradient.initGradient("#gradient-canvas");
//   }, []);

//   return (
//     <main className="min-h-screen flex flex-col relative bg-slate-900">
//       <div className="relative z-10 flex flex-col flex-1 justify-center max-w-6xl p-10">
//         <h1 className="text-7xl font-bold text-white">
//           Woah, look at this whatamesh gradient.
//         </h1>
//       </div>
//       <canvas
//         id="gradient-canvas"
//         className="fixed inset-0"
//         data-transition-in
//       />
//     </main>
//   );
// }

import { Gradient } from "../assets/gradient";
import { useEffect, useRef } from "react";

const gradient = new Gradient();
// https://whatamesh.vercel.app/
export default function Hero() {
  const ref = useRef();

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
        <div
          ref={ref}
          className="absolute h-full w-full flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl xl:text-9xl font-bold text-slate-50">Graphics</h2>
          <h2 className="text-4xl xl:text-9xl font-bold text-slate-50">Code</h2>
          <h2 className="text-4xl xl:text-9xl font-bold text-slate-50">Data</h2>
          <p className="mx-4 text-slate-50 text-center place-self-">
            Hi, I’m Jamil. I am a fullstack developer, graphic designer and data
            analyst based in Ghana
          </p>
        </div>
      </div>
    </main>
  );
}
