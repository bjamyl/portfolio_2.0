import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

export default function Home() {
  const ref = useRef()
  return (
    <div>
      <Head>
        <title>Jamil Alhassan | Fullstack Engineer, Data Analyst & Graphic Designer</title>
        <meta name="description" content="This is my portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
}
