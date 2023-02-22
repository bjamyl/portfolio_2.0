import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";

export default function Menu({ toggle }) {
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

  //Initializing animation
  useEffect(() => {
    menuAnim.current = gsap.timeline({
      paused: true,
    });
    menuAnim.current = gsap
      .timeline()
      .from(topHalf.current, { autoAlpha: 0, x: -700, duration: 0.2 })
      .from(bottomHalf.current, { autoAlpha: 0, x: 700, duration: 0.2 })
      .from(home.current, { autoAlpha: 0, x: -50, duration: 0.2 })
      .from(work.current, { autoAlpha: 0, x: -50, duration: 0.2 },'-=0.1')
      .from(about.current, { autoAlpha: 0, x: -50, duration: 0.2 },'-=0.1')
      .from(contact.current, { autoAlpha: 0, x: -50, duration: 0.2 },'-=0.1')
      .from(linkedin.current, { autoAlpha: 0, x: -50, duration: 0.2 },'-=0.1')
      .from(twitter.current, { autoAlpha: 0, x: -50, duration: 0.2 }, '-=0.1')
      .from(dribble.current, { autoAlpha: 0, x: -50, duration: 0.2 },'-=0.1');
  }, []);

  useEffect(() => {
    toggle ? menuAnim.current.play() : menuAnim.current.reverse();
  }, [toggle]);

  return (
    <section className="h-screen w-screen fixed inset-0">
      <div className="relative w-full h-full">
        <div
          ref={topHalf}
          id="upper"
          className="invisible top-0  h-1/2 bg-[#1C1D1F]"
        ></div>
        <div
          ref={bottomHalf}
          id="lower"
          className="invisible bottom-0 h-1/2 bg-[#1C1D1F]"
        ></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center px-10 xl:px-20">
          <div className="h-2/4 flex flex-col justify-between">
            <ul className="text-slate-50  font-bold text-4xl space-y-6">
              <li
                className="hover:cursor-pointer font-sans hover:translate-y-5 invisible overflow-hidden xl:text-7xl"
                ref={home}
              >
                <span className="text-sm xl:text-3xl">01</span>HOME
              </li>
              <li
                className="hover:cursor-pointer font-sans invisible overflow-hidden xl:text-7xl"
                ref={work}
              >
                <span className="text-sm xl:text-3xl">02</span>WORK
              </li>
              <li
                className="hover:cursor-pointer font-sans invisible overflow-hidden xl:text-7xl"
                ref={about}
              >
                <span className="text-sm xl:text-3xl">03</span>ABOUT
              </li>
              <li
                className="hover:cursor-pointer font-sans invisible overflow-hidden xl:text-7xl"
                ref={contact}
              >
                <span className="text-sm xl:text-3xl">04</span>CONTACT
              </li>
            </ul>
            <ul className="flex gap-4">
              <li
                ref={linkedin}
                className="font-bold font-sans invisible  text-slate-50 underline"
              >
                LINKEDIN
              </li>
              <li
                ref={twitter}
                className="font-bold font-sans invisible  text-slate-50 underline"
              >
                TWITTER
              </li>
              <li
                ref={dribble}
                className="font-bold font-sans invisible  text-slate-50 underline"
              >
                DRIBBLE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
