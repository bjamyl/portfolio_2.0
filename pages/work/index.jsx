import React from "react";
import { Layout, Card } from "../../components";
import projects from "../../components/data";
import { useState } from "react";
import Link from "next/link";

export default function Works() {
  const [toggle, setToggle] = useState(1);

  // Loop through all projects and push them to the respective arrays
  const brand_projects = projects.filter((project) => {
    return project.description === "Brand Design";
  });

  const dev_projects = projects.filter((project) => {
    return project.description === "Development";
  });

  console.log(dev_projects);

  // Function to change index
  const toggleTab = (index) => {
    setToggle(index);
  };

  const displayContent = () => {
    if (toggle === 1) {
      return projects.map((project) => (
        <Link key={project.id} href={project.link}>
          <Card
            title={project.title}
            description={project.description}
            image={project.image}
            image2={project.image2}
          />
        </Link>
      ));
    } else if (toggle === 2) {
      return dev_projects.map((project) => (
        <Link key={project.id} href={project.link}>
          <Card
            title={project.title}
            description={project.description}
            image={project.image}
            image2={project.image2}
          />
        </Link>
      ));
    } else {
      return brand_projects.map((project) => (
        <Link key={project.id} href={project.link}>
          <Card
            title={project.title}
            description={project.description}
            image={project.image}
            image2={project.image2}
          />
        </Link>
      ));
    }
  };
  return (
    <Layout title={"Jamil Alhassan | Projects"}>
      <div className="pt-20">
        <h1 className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 text-4xl md:text-6xl lg:text-7xl 2xl:mx-72 2xl:text-9xl font-bold text-slate-50 font-gilroyBold">
          PROJECTS
        </h1>
      </div>
      <div>
        <ul className="font-gilroyLight xl:text-2xl text-slate-50 flex gap-4 mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 mt-5">
          <li
            onClick={() => toggleTab(1)}
            className={`${
              toggle === 1 ? "text-[#ed9022] font-gilroyBold" : null
            } hover:cursor-pointer`}
          >
            All <span className="text-sm xl:text-xl">(6)</span>
          </li>
          <li
            onClick={() => toggleTab(2)}
            className={`${
              toggle === 2 ? "text-[#ed9022] font-gilroyBold" : null
            } hover:cursor-pointer`}
          >
            Development <span className="text-sm xl:text-xl">(4)</span>
          </li>
          <li
            onClick={() => toggleTab(3)}
            className={`${
              toggle === 3 ? "text-[#ed9022] font-gilroyBold" : null
            } hover:cursor-pointer`}
          >
            Branding <span className="text-sm xl:text-xl">(2)</span>
          </li>
        </ul>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-y-14 2xl:grid-cols-2 2xl:space-y-0 mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72 2xl:gap-x-32">
        {displayContent()}
      </div>
    </Layout>
  );
}
