import "../styles/globals.css";
import TransitionLayout from "../components/TransitionLayout";
import { TransitionProvider } from "../context/TransitionContext";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Syne, Poppins } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
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
  const router = useRouter();
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", GA_ID, { page_path: url });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events, GA_ID]);
  return (
    <TransitionProvider>
      <TransitionLayout>
        <main className={`${syne.variable}  ${inter.variable}`}>
          {GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="gtag-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config('${GA_ID}', { page_path: window.location.pathname });`}
              </Script>
            </>
          )}
          <Analytics />
          <Component {...pageProps} />
        </main>
      </TransitionLayout>
    </TransitionProvider>
  );
}

export default MyApp;
