import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from 'next/script'
import styles from "../styles/Home.module.css";
import { isTablet } from "../utils/agents";

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    detectMobile();
    window.addEventListener("resize", detectMobile);
  }, []);

  const detectMobile = () => {
    const isMobile = isTablet();
    setMobile(isMobile);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/script/fluid.js" strategy="lazyOnload" />

      <main className={styles.main}>
        <canvas></canvas>
        <Image
          className={styles.logo}
          src="https://uploads-ssl.webflow.com/6290ef4dfec30d2f6dbbf4e4/6290ef88112ee95d61b837cf_Group%2011283.svg"
          alt="Party Round Logo"
          width={mobile ? 164 : 300}
          height={mobile ? 164 : 300}
        />
      </main>
    </div>
  );
}
