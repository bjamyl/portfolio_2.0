import React from "react";
import Card from "./Card";

export default function Works() {
  return (
    <section id="stick" data-scroll-container className="bg-[#1C1D1F] ">
      <h1
        data-scroll
        data-scroll-sticky
        data-scroll-target="#stick"
        className="mx-4 text-7xl text-center text-slate-50 font-sans pt-20 z-50"
      >
        <span className="text-xl">02</span>WORK
      </h1>
      <div className="flex flex-col gap-4">
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
