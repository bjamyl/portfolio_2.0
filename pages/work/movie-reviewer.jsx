import { Layout, CustomLink } from "../../components";
import Link from "next/link";
import Image from "next/image";

export default function Moviereviewer() {
  return (
    <Layout title={"Movie Reviewer | Development"}>
      <section>
        <Image
          src="/images/gameshop/movies.jpg"
          width={1920}
          height={1080}
          className="object-cover"
          alt="gameshop"
        />
        <div className="h-fit overflow-hidden my-5">
          <h1 className=" mx-4 md:mx-8 font-gilroyBold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50">
            Movie Reviewer
          </h1>
        </div>
        <div
          id="top-text_group"
          className="xl:flex mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72"
        >
          {/* Text Section 1*/}
          <div className=" xl:w-3/4 xl:mr-6">
            <h2 className="font-gilroyBold  text-[#EC9021] text-2xl xl:text-3xl">
              Share your thoughts on every movie with the world.
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
              <li>Backend Developer</li>
            </ul>
          </div>
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
              <li>Django REST Framework</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72  text-slate-100 font-gilroyBold flex gap-x-5 mb-5 2xl:mb-10">
          <Link
            target="_blank"
            href="https://github.com/bjamyl/gameshop_frontend_next"
          >
            <CustomLink liName={"GitHub"} customCSS={"text-xl md:text-2xl"} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
