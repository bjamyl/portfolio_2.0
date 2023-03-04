import React from "react";
import { Layout } from "../components";

export default function About() {
  return (
    <Layout>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-slate-100 font-sans text-4xl hover:cursor-pointer">Some content</h1>
      </div>
    </Layout>
  );
}
