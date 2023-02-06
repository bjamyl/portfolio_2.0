import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const options = {
    smooth: true,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  };
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <div ref={ref} data-scroll-container>
        <Head>
          <title>
            Jamil Alhassan | Fullstack Engineer, Data Analyst & Graphic Designer
          </title>
          <meta name="description" content="This is my portfolio website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <section data-scroll-section data-scroll data-scroll-speed="4">
          <Hero />
        </section>
        <section data-scroll-section>
          <About />
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
}
