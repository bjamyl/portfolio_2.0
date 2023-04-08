import React from "react";
import Image from "next/image";

export default function XL() {
  return (
    <section>
      <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72">
        <Image
          src="/images/gameshop/gameshop-screen1.jpg"
          width={1980}
          height={1080}
          alt="gameshop-screen-1"
        />
      </div>
      <div className="xl:grid xl:grid-cols-2 mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 xl:space-x-10 xl:mt-10">
        <div className="">
          <Image
            src="/images/gameshop/gameshop-screen2.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-2"
          />
          <Image
            src="/images/gameshop/gameshop-screen3.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-3"
          />
        </div>
        <div className="">
          <Image
            src="/images/gameshop/gameshop-screen4.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-4"
          />

          <Image
            src="/images/gameshop/gameshop-screen5.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-5"
          />
        </div>
      </div>
    </section>
  );
}
