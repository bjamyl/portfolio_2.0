import React from "react";

export default function About() {
  return (
    <main
      data-scroll-container
      className="bg-[#1C1D1F] h-screen flex flex-col gap-12  justify-center"
    >
      <p className="mx-4 text-4xl font-body text-slate-50 xl:mx-96">
        Hi, I am Jamil and I am a fullstack web developer but I tend to do a lot
        more heavy lifting on the frontend with a focus on adding value to
        design through simplicity and clarity
      </p>
      <p className="mx-4 text-4xl font-body text-slate-50 xl:mx-96 ">
        I turn design into pixel-perfect, responsive web applications. I have
        been working as a freelance graphic designer for the past 3 years, and
        in that time I worked closely with small business owners to craft unique
        brand identities that tell their story and grow their brand.
      </p>
    </main>
  );
}
