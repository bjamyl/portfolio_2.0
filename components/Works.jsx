import React from "react";
import Card from "./Card";

export default function Works() {
  return (
    <section data-scroll id="stick"  className="bg-[#1C1D1F] ">
      <h1
        
        className="mx-4 text-7xl md:text-8xl lg:mx-10 xl:mx-20 text-right text-slate-50 font-sans pt-20 z-50"
      >
        <span className="text-xl md:text-2xl">02</span>WORK
      </h1>
      <div data-scroll className="flex flex-col gap-10">
        <Card
          title={"Real Estate"}
          description={"Development"}
          image={"/images/m.webp"}
        />
        <Card
          title={"GameShop"}
          description={"Development"}
          image={"/images/j.webp"}
        />
        <Card
          title={"Beyond October"}
          description={"Brand Design"}
          image={"/images/s.webp"}
        />
      </div>
    </section>
  );
}
