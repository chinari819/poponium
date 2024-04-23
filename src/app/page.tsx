import Image from "next/image";
import "./globals.css";

import imglist from "@/components/imglist";
import Head from "next/head";

export default function Home() {
  const img = imglist();

  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chinari819" />
        <meta name="twitter:title" content="ポポニウム" />
        <meta name="twitter:description" content="ポポニウム" />
        <meta name="twitter:image" content="img/ieiri.jpg" />
      </Head>
      <div className="grid grid-cols-8">
        {img.map((imgSrc, index) => (
          <div key={index}>
            <a href="https://youtu.be/e6DFAePfAIc?si=ClFpB4SCP_nhFAqB" target="_blank">
              <img
                src={imgSrc}
                alt="popo"
                className="h-full w-full transition-transform duration-300 hover:scale-105 hover:rounded-xl"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
