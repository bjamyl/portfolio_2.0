import { Works, Hero, About, Layout, Extras } from "../components";
import { useEffect } from "react";
import { isFirefox, } from "react-device-detect";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const value = isFirefox ? 2 : 10;

  

 
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: value,
      smoothTouch: false,
      touchMultiplier: value,
      infinite: false,
    });

    //get scroll value
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Works />
      <Extras/>
    </Layout>
  );
}
