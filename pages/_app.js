import "../styles/globals.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Syne, Cormorant_Garamond, Poppins } from "@next/font/google";
gsap.registerPlugin(CSSPlugin);

const syne = Syne({
  subsets: ["latin"],
  variable: '--font-syne'
});

const inter = Poppins({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100','200','300', '400']
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${syne.variable}  ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
