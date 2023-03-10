import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import { Power4 } from "gsap/dist/gsap";
import CustomLink from "./CustomLink";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const headerTxt = useRef();
  const trigger = useRef();
  const primTxt = useRef();
  const btn = useRef();
  const linkedin = useRef();
  const twitter = useRef();
  const email = useRef();
  const github = useRef();
  const tl = useRef();

  // Footer Links
  const links1 = [
    {
      id: 1,
      linkName: "LINKEDIN",
      address: "https://www.linkedin.com/in/jamil-banamwine-alhassan/",
      ref: linkedin,
    },
    {
      id: 2,
      linkName: "GITHUB",
      address: "https://github.com/bjamyl",
      ref: github,
    },
  ];

  const links2 = [
    {
      id: 1,
      linkName: "TWITTER",
      address: "https://twitter.com/MhylJay",
      ref: twitter,
    },
    {
      id: 2,
      linkName: "EMAIL",
      address: "mailto:alhassanjamil0@gmail.com",
      ref: email,
    },
  ];

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger.current,
          start: "start 50%",
          end: "bottom 35%",
          scrub: true,
        },
      })
      .from(headerTxt.current, {
        autoAlpha: 0,
        y: 50,
        duration: 0.7,
        ease: Power4.easeOut,
      })
      .from(
        primTxt.current,
        { autoAlpha: 0, opacity: 1, duration: 0.5, ease: Power4.easeOut },
        "-=0.25"
      )
      .from(btn.current, {
        autoAlpha: 0,
        y: -50,
        duration: 0.7,
        delay: 0.5,
        ease: Power4.easeOut,
      })
      .from(linkedin.current, {
        autoAlpha: 0,
        x: -60,
        duration: 0.7,
        ease: Power4.easeOut,
      })
      .from(
        github.current,
        { autoAlpha: 0, x: 60, duration: 0.7, ease: Power4.easeOut },
        "-=0.5"
      )
      .from(
        twitter.current,
        { autoAlpha: 0, x: -60, duration: 0.7, ease: Power4.easeOut },
        "-=0.5"
      )
      .from(
        email.current,
        { autoAlpha: 0, x: 60, duration: 0.7, ease: Power4.easeOut },
        "-=0.5"
      );
  }, []);

  return (
    <footer className="h-screen flex flex-col justify-between pt-28 pb-5">
      <section className="flex h-3/4 flex-col justify-between mx-4 text-slate-50 ">
        <div className="">
          <div
            ref={trigger}
            id="header-wrapper"
            className="h-fit overflow-hidden"
          >
            <h1
              ref={headerTxt}
              className="invisible font-sans text-center text-5xl md:text-8xl font-bold"
            >
              LET&apos;S WORK <br /> TOGETHER
            </h1>
          </div>
          <div className="flex  justify-center">
            <p
              ref={primTxt}
              className="invisible font-body md:w-[60%] text-center mt-5 xl:text-xl xl:w-[40%]"
            >
              I am currently looking for a remote fulltime, part-time or
              contract work. Don&apos;t hesitate to reach out, I will get back
              to you within the shortest possible time.{" "}
            </p>
          </div>
          <div className="flex items-center justify-center font-sans mt-10">
            <a href="mailto:alhassanjamil0@gmail.com">
              <button
                ref={btn}
                id="hello-btn"
                className="flex items-baseline hover:cursor-pointer text-2xl"
              >
                <CustomLink liName={"SAY HELLO"}/>
              </button>
            </a>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-around h-fit overflow-hidden">
            {links1.map((link) => (
              <a key={link.id} href={link.address}>
                <h3 ref={link.ref} className="invisible">
                  <CustomLink liName={link.linkName} customCSS={'text-2xl'}/>
                </h3>
              </a>
            ))}
          </div>
          <div className="flex items-center justify-around h-fit overflow-hidden">
          {links2.map((link) => (
              <a key={link.id} href={link.address}>
                <h3 ref={link.ref} className="invisible">
                  <CustomLink liName={link.linkName} customCSS={'text-2xl'}/>
                </h3>
              </a>
            ))}


          </div>
        </div>
      </section>
      <p className="font-body text-slate-50 text-center border-t-[0.5px] border-slate-300 mx-4 xl:mx-14 pt-5">
        &copy; {new Date().getFullYear()} All Rights Reserved. Designed & Coded by Jamil Alhassan
      </p>
    </footer>
  );
}
