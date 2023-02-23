import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children, title, description, keywords }) {
  return (
    <div className="bg-[#1C1D1F]">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Jamil Alhassan | Fullstack Engineer, Data Analyst & Graphic Designer",
  description: "This is my portfolio website",
  keywords:
    "portfolio, software engineer, data analyst, fullstack developer, javascript, python",
};
