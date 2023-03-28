import { Works, Hero, About, Layout, Extras } from "../components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Works />
      <Extras/>
    </Layout>
  );
}
