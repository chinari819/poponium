import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import imglist from "@/components/imglist";

export default function Home() {
  const img = imglist();

  return (
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
  );
}
