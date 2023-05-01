import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap/dist/gsap";
import { useRouter } from "next/router";

export default function Menu({ toggle, setToggle }) {
  // Declaring the refs for the items to be animated
  const topHalf = useRef();
  const bottomHalf = useRef();
  const home = useRef();
  const work = useRef();
  const about = useRef();
  const contact = useRef();
  const linkedin = useRef();
  const twitter = useRef();
  const dribble = useRef();
  const menuAnim = useRef();
  const bg = useRef();
  const container = useRef();

  //Initializing animation
  useEffect(() => {
    menuAnim.current = gsap.timeline({
      paused: true,
    });
    menuAnim.current = gsap
      .timeline()
      .from(bg.current, { autoAlpha: 0, opacity: 1, duration: 0.06 })
      .from(
        container.current,
        { autoAlpha: 0, opacity: 1, duration: 0.06 },
        "-=0.05"
      )
      .from(topHalf.current, { autoAlpha: 0, x: -700, duration: 0.2 })
      .from(bottomHalf.current, { autoAlpha: 0, x: 700, duration: 0.2 })
      .from(home.current, { autoAlpha: 0, x: -50, duration: 0.2 })
      .from(work.current, { autoAlpha: 0, x: -50, duration: 0.2 }, "-=0.1")
      .from(about.current, { autoAlpha: 0, x: -50, duration: 0.2 }, "-=0.1")
      .from(contact.current, { autoAlpha: 0, x: -50, duration: 0.2 }, "-=0.1")
      .from(linkedin.current, { autoAlpha: 0, x: -50, duration: 0.2 }, "-=0.1")
      .from(twitter.current, { autoAlpha: 0, x: -50, duration: 0.2 }, "-=0.1")
      .from(dribble.current, { autoAlpha: 0, x: -50, duration: 0.2 }, "-=0.1");
  }, []);

  useEffect(() => {
    toggle ? menuAnim.current.play() : menuAnim.current.reverse();
  }, [toggle]);

  //Getting the router path
  const router = useRouter();
  router;

  const links = [
    {
      id: 1,
      linkName: "LINKEDIN",
      address: "https://www.linkedin.com/in/jamil-banamwine-alhassan/",
      ref: linkedin,
    },
    {
      id: 2,
      linkName: "TWITTER",
      address: "https://twitter.com/MhylJay",
      ref: twitter,
    },
    {
      id: 3,
      linkName: "GITHUB",
      address: "https://github.com/bjamyl",
      ref: dribble,
    },
  ];
  const menuData = [
    {
      id: 1,
      linkName: "HOME",
      num: "01",
      address: "/",
      ref: home,
    },
    {
      id: 2,
      linkName: "WORK",
      num: "02",
      address: "/work",
      ref: work,
    },
    {
      id: 3,
      linkName: "CONTACT",
      num: "04",
      address: "/contact",
      ref: contact,
    },
  ];

  return (
      <section ref={container} className="h-screen w-screen fixed top-0 z-50 ">
        <div ref={bg} className="invisible relative w-full h-full">
          <div
            ref={topHalf}
            id="upper"
            className="invisible top-0  h-1/2 bg-[#1C1D1F] z-40"
          ></div>
          <div
            ref={bottomHalf}
            id="lower"
            className="invisible bottom-0 h-1/2 bg-[#1C1D1F]"
          ></div>
          <div className="absolute top-0 w-full h-full flex flex-col justify-center px-10 xl:px-20 2xl:mx-64">
            <div className="h-2/4 flex flex-col justify-between">
              <ul className="text-slate-50  font-gilroyBold text-4xl space-y-6">
                {menuData.map((menuItem) => (
                  <li
                    onClick={() => setToggle(false)}
                    className={`hover:cursor-pointer font-gilroyBold invisible overflow-hidden xl:text-7xl ${
                      router.pathname === menuItem.address
                        ? "text-[#ed9022]"
                        : ""
                    }`}
                    key={menuItem.id}
                    ref={menuItem.ref}
                  >
                    <Link href={menuItem.address}>
                      <span className="text-sm xl:text-3xl">
                        {menuItem.num}
                      </span>
                      {menuItem.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-4">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="hover:cursor-pointer hover:text-[#ed9022] font-bold font-gilroyLight invisible  text-slate-50 underline"
                    ref={link.ref}
                  >
                    <a href={link.address} target="_blank" rel="noreferrer">
                      {link.linkName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}
