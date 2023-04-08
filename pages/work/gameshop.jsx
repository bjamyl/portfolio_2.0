import { Layout, XL } from "../../components";
import gsap, { Power4 } from "gsap/dist/gsap";
import { useRef, useEffect } from "react";

import Image from "next/image";

export default function Gameshop() {
  const title = useRef();
  const photo = useRef();

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
      .from(title.current, { autoAlpha: 0, y: -50, duration: 0.7 });
  }, []);

  return (
    <Layout title={"Projects | GameShop"}>
      <section>
        <Image
          ref={photo}
          src="/images/gameshop-main.jpg"
          width={1920}
          height={1080}
          alt="real-estate"
        />
        <div className="h-fit overflow-hidden my-5">
          <h1
            ref={title}
            className="invisible mx-4 md:mx-8 font-gilroyBold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50"
          >
            Gameshop
          </h1>
        </div>
        <div
          id="top-text_group"
          className="xl:flex mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72"
        >
          {/* Text Section 1*/}
          <div className=" xl:w-3/4 xl:mr-6">
            <h2 className="font-gilroyBold  text-[#EC9021] text-2xl xl:text-3xl">
              A marketplace for gamers all over the world.
            </h2>
            <div className="text-base leading-relaxed font-gilroyLight  text-slate-200  2xl:text-xl xl:pb-12 pb-5">
              <p>
                GameShop is an e-commerce web app for searching and purchasing
                everything related to gaming from gaming consoles to controllers
                and even mouse pads.
                <span className="font-gilroyBold">JSON Web Tokens</span>.
              </p>
              <p className="mt-5">
                A very useful and sometimes overlooked structure in React for
                passing data around is{" "}
                <span className="font-gilroyBold">Context</span>. In this
                project, I used Context primarily to handle the complex state
                management of shopping carts all through to checkout.
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
            src="/images/gameshop/gameshop-screen1.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-1"
          />
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
                Designed the application using Figma, Illustrator and Photoshop.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span> Built
                and deployed a REST API for serving products data to the front
                end through various API endpoints{" "}
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Developed a responsive front-end application using NextJS;
                translating the design into pixel-perfect code.{" "}
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Implemented multiple payment gateways with support for mobile
                money using Stripe and Paystack
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
              <li>Illustrator</li>
              <li>NextJS</li>
              <li>Django REST Framework</li>
              <li>Tailwind CSS</li>
              <li>PostgreSQL</li>
              <li>Paystack</li>
              <li>Stripe</li>
            </ul>
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 space-y-10">
          <Image
            src="/images/gameshop/gameshop-screen2.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-1"
          />
          <Image
            src="/images/gameshop/gameshop-screen3.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-1"
          />
          <Image
            src="/images/gameshop/gameshop-screen4.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-1"
          />
          <Image
            src="/images/gameshop/gameshop-screen5.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-1"
          />
        </div>
      </section>
    </Layout>
  );
}
