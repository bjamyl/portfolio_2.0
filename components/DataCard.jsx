import React from "react";

export default function DataCard() {
  return (
    <div className="mt-5">
      <div className="flex font-sans gap-4 align-center">
        <h3 className="text-slate-50 text-3xl">
          <span className="text-[#ED9022] text-2xl">01</span> DEVELOPMENT
        </h3>
      </div>
      <p className="font-gilroyLight text-slate-50 mt-2">
        I do fullstack developement; working on both ends of an application
        using some of the most popular frameworks and technologies to deliver
        worldclass products
      </p>
      <h3 className="font-sans text-[#ed9022] text-xl">Tech Stack</h3>
      <ul className="text-slate-50 font-gilroyLight grid grid-cols-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>Django</li>
        <li>Laravel</li>
        <li>Nextjs</li>
        <li>Reactjs</li>
        <li>React Native</li>
      </ul>
    </div>
  );
}
