import { useEffect, useRef } from "react";
import { Layout } from "../../components";
import Image from "next/image";
import gsap, { Power4 } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//Register plugin
gsap.registerPlugin(ScrollTrigger);

export default function Real_estate() {
  const title = useRef();
  const photo = useRef();
  const mainTrig = useRef();
  const tl1 = useRef();
  const tl2 = useRef();
  const desTxt = useRef();
  const secTrig = useRef();
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
      })
      .to(photo.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      })
      .from(title.current, { autoAlpha: 0, y: -50, duration: 0.7 });
  }, []);

  // Scrolltrigger animation 1 initialization
  useEffect(() => {
    tl1.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: mainTrig.current,
          start: "top 35%",
          end: "top 20%",
          scrub: true,
        },
      })
      .from(desTxt.current, { autoAlpha: 0, opacity: 1, duration: 0.5 });
  }, []);

  // Scrolltrigger animation 2 initialization
  useEffect(() => {
    tl2.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: secTrig.current,
          start: "top 35%",
          end: "top 10%",
          scrub: true,
        },
      })
      .from(leadTxt.current, { autoAlpha: 0, opacity: 1 })
      .from(lagTxt.current, { autoAlpha: 0, opacity: 1 });
  }, []);

  return (
    <Layout title={"Projects | Real Estate"}>
      <section>
        <img
          ref={photo}
          src="/images/real-estate.jpg"
          width={1920}
          height={1080}
          alt="real-estate"
        />
        <div className="h-fit overflow-hidden mt-10 mb-2">
          <h1
            ref={title}
            className="invisible mx-4 md:mx-8 font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50 font-sans"
          >
            Real Estate
          </h1>
        </div>
        {/* Text Section 1*/}
        <div className="h-fit overflow-hidden" ref={mainTrig}>
          <h2
            ref={desTxt}
            className="font-gilroyBold invisible mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 text-[#EC9021] text-2xl xl:text-3xl"
          >
            Searching for your dream house made super easy
          </h2>
          <div
            ref={secTrig}
            className="text-base leading-relaxed mx-4 font-gilroyLight md:mx-8 lg:mx-16 xl:mx-20 text-slate-50 2xl:mx-72 2xl:text-xl xl:pb-12 pb-5"
          >
            <p ref={leadTxt}>
              Real Estate is a website for browsing and purchasing listed
              properties. Users can create accounts and access a personalized
              dashboard to track their property inquiries. User accounts are
              authenticated with{" "}
              <span className="font-gilroyBold">JSON Web Tokens</span>.
            </p>
            <p ref={lagTxt} className="mt-5">
              I built this personal project to better solidify my understanding
              of <span className="font-gilroyBold">Django REST Framework</span>{" "}
              and{" "}
              <span className="font-gilroyBold">
                authentication and authorization with JSON Web Tokens
              </span>
            </p>
          </div>
        </div>
        {/* Text Section 2*/}
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 2xl:mt-10">
          <h4 className="font-gilroyBold  text-slate-100 text-2xl">
            MY ROLE <span className="text-[#EC9021]">.</span>
          </h4>
          <ul className="font-gilroyLight text-slate-50 2xl:text-xl">
            <li>UI Designer</li>
            <li>Fullstack Developer</li>
          </ul>
        </div>
        <div className="grid xl:grid-cols-2 2xl:mt-10">
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
      </section>
    </Layout>
  );
}
