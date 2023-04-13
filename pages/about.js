import { Layout } from "../components";
import Image from "next/image";

export default function About() {
  return (
    <Layout title={"Jamil Alhassan | About Me"}>
      <div className="pt-20">
        <h1 className="mx-4 md:mx-8 lg:mx-10 xl:mx-20 text-4xl md:text-6xl lg:text-7xl 2xl:mx-72 2xl:text-9xl font-bold text-slate-50 font-gilroyBold">
          ABOUT ME
        </h1>
        <div className="h-screen mx-4 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-72">
          <div>
            <Image src="/images/dev.jpg" width={1920} height={1080} alt='dev-image' className="my-5 xl:my-10" />
            <p className="font-gilroyLight text-slate-100">
              My name is Jamil Banamwine Alhassan.....
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
