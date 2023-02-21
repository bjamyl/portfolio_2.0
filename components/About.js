import React from "react";

export default function About() {
  return (
    <main
      data-scroll-container
      className="bg-[#1C1D1F] h-screen flex flex-col gap-12 justify-center"
    >
      <div className="h-2/4 flex flex-col justify-between">
        <div className="space-y-4">
          <h1
            data-scroll
            data-scroll-class="fadeIn"
            data-scroll-repeat="true"
            className="op-class mx-4 text-4xl font-sans text-slate-50 xl:mx-96 xl:text-6xl"
          >
            I add value to design <br /> through{" "}
            <span className="text-[#ED9022]">simplicity</span> &{" "}
            <span className="text-[#ED9022]">clarity</span>
          </h1>
          <p className="mx-4 font-body text-lg text-slate-50 xl:mx-96 xl:text-xl">
            I relish the challenge of turning ideas in unforgettable digital
            experiences. Every business has unique needs, and it is my job to
            understand those needs and design solutions that{" "}
            <span className="text-slate-400">scale</span> and{" "}
            <span className="text-slate-400">boost revenue</span>.
          </p>
        </div>
        <div className="mx-4 xl:mx-96">
          <div className="w-full h-1 bg-[#ED9022]"></div>
        </div>
      </div>
    </main>
  );
}
