import { Layout, CustomLink } from "../../components";
import Link from "next/link";
import Image from "next/image";

export default function ApexPain() {
  return (
    <Layout
      title={"Apex Pain | SEO-Optimized Healthcare Website Development"}
      description={
        "Apex Pain is a professional website built for a private interventional pain clinic based in Bangor. Developed with Next.js and Sanity CMS, optimized for SEO and performance, with ongoing content management and feature updates."
      }
      keywords="Apex Pain, healthcare website, medical SEO, NextJS developer, Sanity CMS, pain management clinic website, Bangor specialists, web performance optimization, healthcare content management"
    >
      <section>
        <Image
          src="/images/apex/apex-mockup.png"
          width={1920}
          height={1080}
          alt="homepage-apexpain"
        />

        <div className="h-fit overflow-hidden my-5">
          <h1 className="mx-4 md:mx-8 font-gilroyBold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50">
            Apex Pain Specialists
          </h1>
        </div>

        <div
          id="top-text_group"
          className="xl:flex mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72"
        >
          {/* Text Section 1 */}
          <div className="xl:w-3/4 xl:mr-6">
            <h2 className="font-gilroyBold text-[#EC9021] text-2xl xl:text-3xl">
              Helping people live pain-free with expert care and compassion.
            </h2>
            <div className="text-base leading-relaxed font-gilroyLight text-slate-200 2xl:text-xl xl:pb-12 pb-5">
              <p>
                Apex Interventional Pain Specialists is a leading provider of
                interventional pain management solutions, dedicated to improving
                the quality of life for their patients through innovative
                treatments and compassionate care based in Bangor, Maine. The platform presents the
                clinic’s services, medical expertise, and patient resources in a
                clean, accessible, and SEO-friendly layout.
              </p>
              <p className="mt-5">
                Built with <span className="font-gilroyBold">Next.js</span> for
                fast performance and{" "}
                <span className="font-gilroyBold">Sanity CMS</span> for flexible
                content updates, the site enables the client to easily manage
                pages, banners, and announcements. I also handle continuous
                improvements and feature rollouts—such as the{" "}
                <span className="font-gilroyBold">
                  Pain Awareness Month popup
                </span>{" "}
                and seasonal homepage banners—on request.
              </p>
            </div>
          </div>

          {/* Text Section 2 */}
          <div className="xl:ml-6">
            <h4 className="font-gilroyBold text-slate-100 text-2xl">
              MY ROLE <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-200 2xl:text-xl">
              <li>Fullstack Developer</li>
              <li>UI/UX Designer</li>
              <li>SEO & Performance Optimization</li>
              <li>Content Management Integration</li>
            </ul>
          </div>
        </div>

        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 mt-10">
          <Image
            src="/images/apex/apex-pain-screen-1.png"
            width={1980}
            height={1080}
            alt="apexpain-section-1"
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
                Designed the site to reflect medical professionalism and
                approachability, emphasizing trust and clarity for patients.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Implemented a modular content structure in{" "}
                <span className="font-gilroyBold">Sanity CMS</span> allowing the
                clinic to update pages, banners, and blog articles
                independently.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span> Built
                the front end using{" "}
                <span className="font-gilroyBold">Next.js</span> and{" "}
                <span className="font-gilroyBold">Tailwind CSS</span> for speed,
                accessibility, and mobile responsiveness.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Integrated structured metadata and optimized content delivery
                for improved{" "}
                <span className="font-gilroyBold">SEO performance</span>,
                targeting pain management keywords in the Bangor region.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span> Added
                a dynamic popup and promotional banner for{" "}
                <span className="font-gilroyBold">
                  Pain Awareness Month (September)
                </span>{" "}
                to highlight patient education efforts.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span>{" "}
                Continues to provide maintenance and updates as the clinic’s
                online presence expands.
              </li>
            </ul>
          </div>

          {/* Text Section 4 */}
          <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 mt-5">
            <h4 className="font-gilroyBold text-slate-100 text-2xl">
              TECH STACK <span className="text-[#EC9021]">.</span>
            </h4>
            <ul className="font-gilroyLight text-slate-50 2xl:text-xl">
              <li>NextJS</li>
              <li>Sanity CMS</li>
              <li>Tailwind CSS</li>
              <li>Figma</li>
              <li>Vercel</li>
              <li>SEO Optimization Tools</li>
            </ul>
          </div>
        </div>

        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72 text-slate-100 font-gilroyBold flex gap-x-5 mb-5 2xl:mb-10">
          <Link target="_blank" href="https://apex-pain.com/">
            <CustomLink
              liName={"View Live Site"}
              customCSS={"text-xl md:text-2xl"}
            />
          </Link>
        </div>

        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 space-y-10">
          <Image
            src="/images/apex/apex-1.png"
            width={1980}
            height={1080}
            alt="apexpain-screen-1"
          />
          <Image
            src="/images/apex/apex-2.png"
            width={1980}
            height={1080}
            alt="apexpain-screen-2"
          />
          <Image
            src="/images/apex/apex-3.png"
            width={1980}
            height={1080}
            alt="apexpain-screen-3"
          />
          <Image
            src="/images/apex/apex-4.png"
            width={1980}
            height={1080}
            alt="apexpain-screen-4"
          />
        </div>
      </section>
    </Layout>
  );
}
