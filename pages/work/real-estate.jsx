import { Layout, XL } from "../../components";
import gsap, { Power4 } from "gsap/dist/gsap";
import { useRef, useEffect } from "react";
import { CustomLink } from "../../components";
import Link from "next/link";

import Image from "next/image";

export default function Real_estate() {
  const title = useRef();
  const photo = useRef();
  const desTxt = useRef();
  const leadTxt = useRef();
  const lagTxt = useRef();

  // Creating the timeline
  const timeline = useRef();
  //Initialting animation
  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .from(photo.current, {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        duration: 0.5,
        ease: Power4.easeInOut,
        delay: 1.2,
      })
      .to(photo.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      })
      .from(title.current, { autoAlpha: 0, y: 50, duration: 0.7 })
      .from(desTxt.current, {
        autoAlpha: 0,
        y: 20,
        duration: 0.7,
        ease: Power4.easeOut,
      })
      .from(
        leadTxt.current,
        { autoAlpha: 0, opacity: 1, duration: 0.7, ease: Power4.easeOut },
        "-=0.3"
      )
      .from(
        lagTxt.current,
        { autoAlpha: 0, opacity: 1, duration: 0.7, ease: Power4.easeOut },
        "-=0.3"
      );
  }, []);

  return (
    <Layout title={"Real Estate | Development"}>
      <section>
        <Image
          ref={photo}
          src="/images/real-estate.jpg"
          width={1920}
          height={1080}
          alt="real-estate"
        />
        <div className="h-fit overflow-hidden my-5">
          <h1
            ref={title}
            className="invisible mx-4 md:mx-8 font-gilroyBold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50"
          >
            Real Estate
          </h1>
        </div>
        <div
          id="top-text_group"
          className="xl:flex mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72"
        >
          {/* Text Section 1*/}
          <div className=" xl:w-3/4 xl:mr-6">
            <h2 className="font-gilroyBold  text-[#EC9021] text-2xl xl:text-3xl">
              Searching for your dream house made super easy
            </h2>
            <div className="text-base leading-relaxed font-gilroyLight  text-slate-200  2xl:text-xl xl:pb-12 pb-5">
              <p className="invisible" ref={leadTxt}>
                Real Estate is a website for browsing and purchasing listed
                properties. Users can create accounts and access a personalized
                dashboard to track their property inquiries. User accounts are
                authenticated with{" "}
                <span className="font-gilroyBold">JSON Web Tokens</span>.
              </p>
              <p ref={lagTxt} className="mt-5 invisible">
                I built this personal project to better solidify my
                understanding of{" "}
                <span className="font-gilroyBold">Django REST Framework</span>{" "}
                and{" "}
                <span className="font-gilroyBold">
                  authentication and authorization with JSON Web Tokens
                </span>
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
              <li>Fullstack Developer</li>
            </ul>
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 mt-10">
          <Image
            src="/images/realestate/real_estate-screen1.jpg"
            width={1980}
            height={1080}
            alt="realestate-screen-1"
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
                Designed the application using Figma and Photoshop
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span> Built
                a REST API to serve data through endpoints to the frontend.{" "}
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Implemented authentication using JWT authentication.{" "}
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
              <li>NextJS</li>
              <li>Django REST Framework</li>
              <li>Tailwind CSS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72  text-slate-100 font-gilroyBold flex gap-x-5 mb-5 2xl:mb-10">
          <Link target="_blank" href='https://myrealestateapp.vercel.app/' >
            <CustomLink
              liName={"View Live Site"}
              customCSS={"text-xl md:text-2xl"}
            />
          </Link>
          <Link target="_blank" href='https://github.com/bjamyl/real_estate_frontend'>
            
            <CustomLink liName={"GitHub"} customCSS={"text-xl md:text-2xl"} />
          </Link>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 space-y-10">
          <Image
            src="/images/realestate/real_estate-screen2.jpg"
            width={1980}
            height={1080}
            alt="realestate-screen-2"
          />
          <Image
            src="/images/realestate/real_estate-screen3.jpg"
            width={1980}
            height={1080}
            alt="realestate-screen-3"
          />
          <Image
            src="/images/realestate/real_estate-screen4.jpg"
            width={1980}
            height={1080}
            alt="realestate-screen-4"
          />
          <Image
            src="/images/realestate/real_estate-screen6.jpg"
            width={1980}
            height={1080}
            alt="realestate-screen-5"
          />
        </div>
      </section>
    </Layout>
  );
}
