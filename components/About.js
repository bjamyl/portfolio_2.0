import Works from "./Works";

export default function About() {
  return (
    <>
      <main className="bg-[#1C1D1F] h-screen flex flex-col gap-12 justify-center">
        <div className="h-2/4 flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="op-class mx-4 md:mx-8 lg:mx-16 text-4xl xl:mx-20 xl:text-5xl font-sans text-slate-50 2xl:mx-96 2xl:text-6xl">
              I add value to design <br /> through{" "}
              <span className="text-[#ED9022]">simplicity</span> &{" "}
              <span className="text-[#ED9022]">clarity</span>
            </h1>
            <p className="mx-4 font-light md:mx-8 lg:mx-16 xl:mx-20 font-body text-lg text-slate-50 2xl:mx-96 2xl:text-xl">
              I am a creative developer who relishes the challenge of turning
              ideas in unforgettable digital experiences. I have worked as an
              independent graphic designer for over 3 years and this love for
              beautiful and slick visuals resonates in my web applications. I
              specialize in front-end development but I like to get my hands
              dirty with backends too. My expertise also spans logo and flyer
              design, video ad development, and illustrations.
            </p>
            <p className="mx-4 font-light md:mx-8 lg:mx-16 font-body text-lg text-slate-50 2xl:mx-96 2xl:text-xl">
              Every business has unique needs, and it is my job to understand
              those needs and design solutions that{" "}
              <span className="text-slate-400">scale</span> and{" "}
              <span className="text-slate-400">boost revenue</span>.
            </p>
          </div>
          <div className="mx-4 xl:mx-96">
            <div className="w-full h-1 bg-[#ED9022]"></div>
          </div>
        </div>
      </main>
    </>
  );
}
