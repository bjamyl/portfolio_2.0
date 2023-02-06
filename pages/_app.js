import "../styles/globals.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Syne, Mulish, Raleway, Quicksand } from "@next/font/google";
gsap.registerPlugin(CSSPlugin);

const syne = Syne({
  subsets: ["latin"],
  variable: '--font-syne'
});

const mulish = Quicksand({
  subsets: ['latin'],
  variable: '--font-mulish'
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${syne.variable}  ${mulish.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
