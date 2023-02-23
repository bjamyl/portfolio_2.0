import React from "react";
import Card from "./Card";

export default function Works() {
  return (
    <section>
      <h1 className="mx-4 text-7xl md:text-8xl lg:mx-10 xl:mx-20 text-right text-slate-50 font-sans pt-20 z-50">
        <span className="text-xl md:text-2xl">02</span>WORK
      </h1>
      <div className="grid grid-cols-1 gap-y-8 2xl:grid-cols-2 2xl:space-y-20 mx-4 lg:mx-10 xl:mx-20 2xl:gap-x-20">
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
