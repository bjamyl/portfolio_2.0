import { Layout } from "../../components";
import Image from "next/image";

export default function Beyond() {
  return (
    <Layout title={"Beyond October | Brand Design"}>
      <section>
        <Image
          src="/images/beyond.png"
          width={1920}
          height={1080}
          alt="beyond-october"
        />
        <div className="h-fit overflow-hidden my-5">
          <h1 className="mx-4 md:mx-8 font-gilroyBold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50">
            Beyond October
          </h1>
        </div>
        <div
          id="top-text_group"
          className="xl:flex mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72"
        >
          {/* Text Section 1*/}
          <div className=" xl:w-3/4 xl:mr-6">
            <h2 className="font-gilroyBold  text-[#EC9021] text-2xl xl:text-3xl">
              Every month is breast cancer awareness month. It is beyond
              october...
            </h2>
            <div className="text-base leading-relaxed font-gilroyLight  text-slate-200  2xl:text-xl xl:pb-12 pb-5">
              <p className="mt-5">
                Beyond October is an NGO based in Ghana that is dedicated to
                increasing breast cancer awareness...
              </p>
            </div>
          </div>
          {/* Text Section 2*/}
          <div className="xl:ml-6">
            <h4 className="font-gilroyBold  text-slate-100 text-2xl">
              MY ROLE <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-200 2xl:text-xl">
              <li>Graphic Designer</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
