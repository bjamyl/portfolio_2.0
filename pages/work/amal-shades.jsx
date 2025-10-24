import { Layout, CustomLink } from "../../components";
import Link from "next/link";
import Image from "next/image";

export default function AmalShades() {
  return (
    <Layout
      title={"Amal Shades | Fullstack E-commerce Development"}
      description={
        "Amal Shades is a modern e-commerce platform for eyeglasses. Built for a real client with Paystack integration, Sanity CMS, and a seller dashboard for managing orders and inventory."
      }
      keywords="Amal Shades, eyeglasses marketplace, NextJS e-commerce, Paystack integration, Sanity CMS, fullstack developer portfolio, eyewear store, photochromic lenses, anti-blue light lenses"
    >
      <section>
        <Image
          src="/images/amal/home-mock.png"
          width={1920}
          height={1080}
          alt="homepage-amal"
        />

        <div className="h-fit overflow-hidden my-5">
          <h1 className="mx-4 md:mx-8 font-gilroyBold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50">
            Amal Shades
          </h1>
        </div>

        <div
          id="top-text_group"
          className="xl:flex mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72"
        >
          {/* Text Section 1 */}
          <div className="xl:w-3/4 xl:mr-6">
            <h2 className="font-gilroyBold text-[#EC9021] text-2xl xl:text-3xl">
              A marketplace for eyewear lovers everywhere.
            </h2>
            <div className="text-base leading-relaxed font-gilroyLight text-slate-200 2xl:text-xl xl:pb-12 pb-5">
              <p>
                Amal Shades is a full-featured online store where customers can
                browse, customize, and purchase all types of eyeglasses—from
                stylish clear frames to lenses with photochromic and
                anti-blue-light treatments.
              </p>
              <p className="mt-5">
                The platform was developed for a real-world client, integrating
                a seller dashboard, secure payments via{" "}
                <span className="font-gilroyBold">Paystack</span>, and content
                management powered by{" "}
                <span className="font-gilroyBold">Sanity CMS</span>.
                Using React’s <span className="font-gilroyBold">Context API</span>,
                I implemented dynamic cart management that updates pricing based
                on selected lens treatments and add-ons in real time.
              </p>
            </div>
          </div>

          {/* Text Section 2 */}
          <div className="xl:ml-6">
            <h4 className="font-gilroyBold text-slate-100 text-2xl">
              MY ROLE <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-200 2xl:text-xl">
              <li>UI/UX Designer</li>
              <li>Fullstack Developer</li>
              <li>CMS Integration</li>
            </ul>
          </div>
        </div>

        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 mt-10">
          <Image
            src="/images/amal/section_1.png"
            width={1980}
            height={1080}
            alt="amal-dashboard"
          />
        </div>

        <div className="grid my-5 xl:grid-cols-2 2xl:my-10">
          {/* Text Section 3 */}
          <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 mt-5 xl:w-[700px]">
            <h4 className="font-gilroyBold text-slate-100 text-2xl">
              FEATURES IMPLEMENTED <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-50 2xl:text-xl">
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Designed and prototyped the user interface with Figma and
                Illustrator.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span> Built
                a responsive, production-grade front end with NextJS and
                Tailwind CSS, ensuring accessibility and scalability.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Integrated <span className="font-gilroyBold">Sanity CMS</span>{" "}
                for seamless product uploads, category management, and dynamic
                content delivery.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Developed a secure seller dashboard for tracking orders,
                payments, and inventory in real time.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Integrated <span className="font-gilroyBold">Paystack</span> for
                smooth, localized payments (including mobile money).
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Implemented smart cart logic allowing users to choose lens
                types (clear, photochromic, anti-blue light) with automatic
                price calculations.
              </li>
            </ul>
          </div>

          {/* Text Section 4 */}
          <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 mt-5">
            <h4 className="font-gilroyBold text-slate-100 text-2xl">
              TECH STACK <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-50 2xl:text-xl">
              <li>Figma</li>
              <li>Illustrator</li>
              <li>NextJS</li>
              <li>Sanity CMS</li>
              <li>Tailwind CSS</li>
              <li>Paystack</li>
              <li>Context API</li>
            </ul>
          </div>
        </div>

        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 text-slate-100 font-gilroyBold flex gap-x-5 mb-5 2xl:mb-10">
          <Link target="_blank" href="https://amal-shades.vercel.app/">
            <CustomLink
              liName={"View Live Site"}
              customCSS={"text-xl md:text-2xl"}
            />
          </Link>
        </div>

        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 space-y-10">
          <Image
            src="/images/amal/screen-2.png"
            width={1980}
            height={1080}
            alt="amal-screen-1"
          />
          <Image
            src="/images/amal/screen-4.png"
            width={1980}
            height={1080}
            alt="amal-screen-2"
          />
          <Image
            src="/images/amal/screen-6.png"
            width={1980}
            height={1080}
            alt="amal-screen-3"
          />
          <Image
            src="/images/amal/screen-5.png"
            width={1980}
            height={1080}
            alt="amal-screen-4"
          />
        </div>
      </section>
    </Layout>
  );
}
