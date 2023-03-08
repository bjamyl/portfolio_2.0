import "../styles/globals.css";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../components";
import { Syne, MuseoModerno, Poppins } from "@next/font/google";
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
    <main className={`${syne.variable}  ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
