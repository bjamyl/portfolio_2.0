import "../styles/globals.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../components";
import { Syne, Cormorant_Garamond, Poppins } from "@next/font/google";
gsap.registerPlugin(CSSPlugin);

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400"],
});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });

    router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [router]);

  return (
    <>
      {!loading ? (
        <main className={`${syne.variable}  ${inter.variable}`}>
          <Component {...pageProps} />
        </main>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp;
