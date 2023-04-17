import { Layout, CustomLink } from "../../components";
import gsap, { Power4 } from "gsap/dist/gsap";
import { useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

export default function UserCatalog() {
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
    <Layout title={"User Product Catalog API | Development"}>
      <section>
        <Image
          ref={photo}
          src="/images/user_catalog.jpg"
          width={1920}
          height={1080}
          alt="gameshop"
        />
        <div className="h-fit overflow-hidden my-5">
          <h1
            ref={title}
            className="invisible mx-4 md:mx-8 font-gilroyBold text-4xl md:text-6xl lg:text-7xl xl:text-8xl lg:mx-10 xl:mx-20 2xl:mx-72 text-slate-50"
          >
            User Product Catalog API
          </h1>
        </div>
        <div
          id="top-text_group"
          className="xl:flex mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72"
        >
          {/* Text Section 1*/}
          <div className=" xl:w-3/4 xl:mr-6">
            <h2 className="font-gilroyBold  text-[#EC9021] text-2xl xl:text-3xl">
              Feature-packed API perfect for small businesses
            </h2>
            <div className="text-base leading-relaxed font-gilroyLight  text-slate-200  2xl:text-xl xl:pb-12 pb-5">
              <p>
                The Product Catalog API is a robust API with{" "}
                <span className="font-gilroyBold">
                  JWT authenticated endpoints, featuring password reset, account
                  verification and password reset functionality.
                </span>
              </p>
              <p className="mt-5">
                The application is containerized with{" "}
                <span className="font-gilroyBold">Docker</span> and set up with
                two microservices;{" "}
                <span className="font-gilroyBold">Celery</span> and{" "}
                <span className="font-gilroyBold">Redis</span>. Celery handles
                the asynchronous task queues of sending emails with Redis acting
                as the message broker to boost response times and overall API
                performance.
                <span className="font-gilroyBold"></span>. A complete
                documentation on how to use the API was written and published
                with Postman.
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
        <div className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 mt-10">
          <Image
            src="/images/gameshop/gameshop-screen1.jpg"
            width={1980}
            height={1080}
            alt="gameshop-screen-1"
          />
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
                Containerized Django API using Docker with authenticated JWT
                endpoints.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span> Set up
                asynchronous task queues with Celery and Redis as the message
                broker to send emails and boost response times.
              </li>
              <li>
                <span className="text-[#EC9021] font-gilroyBold">-</span> Wrote
                and published documentation for the API using Postman.
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
              <li>Docker</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
              <li>Celery</li>
            </ul>
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-72  text-slate-100 font-gilroyBold flex gap-x-5 mb-5 2xl:mb-10">
          <Link target="_blank" href="https://documenter.getpostman.com/view/22954466/2s8YeuLBAn">
            <CustomLink
              liName={"Read Documentation"}
              customCSS={"text-xl md:text-2xl"}
            />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/bjamyl/product_catalog_api"
          >
            <CustomLink liName={"GitHub"} customCSS={"text-xl md:text-2xl"} />
          </Link>
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
