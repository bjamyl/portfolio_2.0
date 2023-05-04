import React from "react";
import Image from "next/image";
import { CustomLink, Layout } from "../../components";
import Link from "next/link";

export default function Portfolio() {
  return (
    <Layout title={"Portfolio V1.0 | Development"}>
      <section>
        <Image
          src="/images/portfolio-v1.jpg"
          width={1920}
          height={1080}
          alt="portfolio"
        />
        <div className="h-fit overflow-hidden my-5">
          <h1 className=" mx-4 md:mx-8 font-gilroyBold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50">
            Portfolio V1.0
          </h1>
        </div>
        <div
          id="top-text_group"
          className="xl:flex mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72"
        >
          {/* Text Section 1*/}
          <div className=" xl:w-3/4 xl:mr-6">
            <h2 className="font-gilroyBold  text-[#EC9021] text-2xl xl:text-3xl">
              My first portfolio website built in 2021
            </h2>
            <div className="text-base leading-relaxed font-gilroyLight  text-slate-200  2xl:text-xl xl:pb-12 pb-5">
              <p className="">
                I started to learn web development in 2020, and in 2021, I built
                my first portfolio site to showcase my skills and projects to
                potential clients and hiring managers. Fast forward to 2023, I
                have learnt a lot over the past years and anytime I look back at
                this site and the websites I am able to put up today, I am
                immensly proud of how far I have come as a developer.
              </p>
            </div>
          </div>
          {/* Text Section 2*/}
          <div className="xl:ml-6">
            <h4 className="font-gilroyBold  text-slate-100 text-2xl">
              MY ROLE <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-200 2xl:text-xl">
              <li>UI Designer</li>
              <li>Frontend Developer</li>
            </ul>
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 mt-10">
          <Image
            src="/images/portfolio/portfolio-1.jpg"
            width={1980}
            height={1080}
            alt="portfolio-screen-1"
          />
        </div>
        <div className="grid my-5 xl:grid-cols-2 2xl:my-10">
          {/* Text Section 3*/}
          <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 mt-5 xl:w-[700px]">
            <h4 className="font-gilroyBold  text-slate-100 text-2xl">
              FEATURES IMPLEMENTED <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-50 2xl:text-xl">
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Designed the site UI using Figma, Photoshop and Illustrator
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span> Built
                the application using React JS.{" "}
              </li>
            </ul>
          </div>
          {/* Text Section 3*/}
          <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 mt-5">
            <h4 className="font-gilroyBold  text-slate-100 text-2xl">
              TECH STACK <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-50 2xl:text-xl">
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>React JS</li>
              <li>SCSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72  text-slate-100 font-gilroyBold flex gap-x-5 mb-5 2xl:mb-10">
          <Link target="_blank" href="https://jamilb.netlify.app/">
            <CustomLink
              liName={"View Live Site"}
              customCSS={"text-xl md:text-2xl"}
            />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/bjamyl/portfolio"
          >
            <CustomLink liName={"GitHub"} customCSS={"text-xl md:text-2xl"} />
          </Link>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 space-y-10">
          <Image
            src="/images/portfolio/portfolio-2.jpg"
            width={1980}
            height={1080}
            alt="portfolio-screen-2"
          />
          <Image
            src="/images/portfolio/portfolio-3.jpg"
            width={1980}
            height={1080}
            alt="portfolio-screen-3"
          />
          <Image
            src="/images/portfolio/portfolio-4.jpg"
            width={1980}
            height={1080}
            alt="portfolio-screen-4"
          />
          <Image
            src="/images/portfolio/portfolio-5.jpg"
            width={1980}
            height={1080}
            alt="portfolio-screen-5"
          />
          <Image
            src="/images/portfolio/portfolio-6.jpg"
            width={1980}
            height={1080}
            alt="portfolio-screen-6"
          />
        </div>
      </section>
    </Layout>
  );
}
