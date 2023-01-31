import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";

export default function Home() {
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
