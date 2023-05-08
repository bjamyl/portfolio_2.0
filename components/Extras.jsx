import gsap from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from "./Card";
import art from "./art";
gsap.registerPlugin(ScrollTrigger);

export default function Extras() {
  const headerTxt = useRef();
  const tl = useRef();
  const trigger = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger.current,
          start: "top 50%",
        },
      })
      .from(headerTxt.current, { autoAlpha: 0, y: 50, duration: 0.5 });
  }, []);

  return (
    <section className="my-20 flex flex-col gap-12 justify-center">
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <div ref={trigger} className="overflow-hidden h-fit 2xl:mb-10">
            <h2
              ref={headerTxt}
              className="invisible mx-4 md:mx-8 lg:mx-16 text-4xl xl:mx-20 xl:text-5xl font-gilroyBold text-slate-50 2xl:mx-72 2xl:text-6xl"
            >
              Some days I think I make
               <span className="text-[#ED9022]"> cool art sometimes...</span>{" "}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-14 2xl:grid-cols-2 2xl:gap-y-32 mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 2xl:gap-x-32">
            {art &&
              art.map((piece) => (
                <Card
                  key={piece.id}
                  title={piece.title}
                  description={piece.description}
                  image={piece.image}
                  image2={piece.image2}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
