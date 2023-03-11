import "../styles/globals.css";
import TransitionLayout from "../components/TransitionLayout";
import { TransitionProvider } from "../context/TransitionContext";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Syne, Poppins } from "@next/font/google";
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
  return (
    <TransitionProvider>
      <TransitionLayout>
        <main className={`${syne.variable}  ${inter.variable}`}>
          <Component {...pageProps} />
        </main>
      </TransitionLayout>
    </TransitionProvider>
  );
}

export default MyApp;
