import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { isFirefox } from "react-device-detect";

export default function Layout({ children, title, description, keywords }) {
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
    <div className="bg-[#1C1D1F]">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Jamil Alhassan Portfolio | Software Developer",
  description: "Portfolio website of Jamil Banamwine Alhassan",
  keywords:
    "portfolio, software engineer, data analyst, fullstack developer, javascript, python",
};
