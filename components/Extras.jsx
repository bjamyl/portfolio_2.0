import gsap from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import Card from "./Card";
export default function Extras() {
  return (
    <section className="my-20 flex flex-col gap-12 justify-center">
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <div className="overflow-hidden h-fit 2xl:mb-10">
            <h2 className=" mx-4 md:mx-8 lg:mx-16 text-4xl xl:mx-20 xl:text-5xl font-sans text-slate-50 2xl:mx-96 2xl:text-6xl">
              I dont fancy myself a top artist but I do think I make some cool
              digital art... <span className="text-[#ED9022]">sometimes</span>{" "}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-8 2xl:grid-cols-2 2xl:space-y-20 mx-4 lg:mx-10 xl:mx-20 2xl:gap-x-20">
            <Card
              title={"Real Estate"}
              description={"Development"}
              image={"/images/jonna.jpg"}
            />
            <Card
              title={"GameShop"}
              description={"Development"}
              image={"/images/shubam.jpg"}
            />
            <Card
              title={"Beyond October"}
              description={"Brand Design"}
              image={"/images/max.jpg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
