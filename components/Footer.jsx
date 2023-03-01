import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="h-screen flex flex-col justify-between pt-28 pb-5">
      <section className="flex h-3/4 flex-col justify-between mx-4 text-slate-50 ">
        <div className="">
          <h1 className="font-sans text-center text-7xl md:text-8xl font-bold">
            LET'S WORK <br /> TOGETHER
          </h1>
          <div className="flex  justify-center">
            <p className="font-body text-center mt-5 xl:text-xl xl:w-[40%]">
              I am currently looking for a remote fulltime, part-time or
              contract work. Don't hesitate to reach out, I will get back to you
              within the shortest possible time.{" "}
            </p>
          </div>
          <div className="flex items-center justify-center font-sans mt-10">
            <button className="flex items-baseline border-b-2 hover:cursor-pointer text-2xl">
              SAY HELLO
              <p>
                <FiArrowUpRight />
              </p>{" "}
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-around">
            <h3 className="font-sans text-2xl border-b-2">LINKEDIN</h3>
            <h3 className="font-sans text-2xl border-b-2">GITHUB</h3>
          </div>
          <div className="flex items-center justify-around">
            <h3 className="font-sans text-2xl  border-b-2">TWITTER</h3>
            <h3 className="font-sans text-2xl border-b-2">EMAIL</h3>
          </div>
        </div>
      </section>
      <p className="font-body text-slate-50 text-center">
        Designed and Built by Jamil
      </p>
    </footer>
  );
}
