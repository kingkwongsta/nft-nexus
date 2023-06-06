"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import nftPlaceholder from "./../../../../public/nft-placeholder.png";

export default function Hero() {
  return (
    <div className="hero lg:flex mt-36 mx-36 mb-20">
      {/* LEFT CONTENT */}
      <div className="flex-auto basis-2/3 mr-12">
        <h1 className="text-6xl text-[#ffffff] font-semibold tracking-wider leading-none mb-10">
          Discover the Best NFTs on Etherum
        </h1>
        <h3 className="text-2xl text-[#ffffff] mb-12 font-normal leading-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam omnis,
          at modi
        </h3>
      </div>
      {/* RIGHT CONTENT */}
      <div className="hero-right sm:max-lg:invisible sm:max-lg:h-0 sm:mt-10 lg:mt-0 flex-auto basis-1/2 justify-center h-[400px] sm:max-lg:max-h-[300px] bg-zinc-700">
        <div className="hero-img rounded-lg pt-10 px-16 w-[500px] ">
          <Link href={`/collection/`}>
            <Image
              src={nftPlaceholder}
              width={300}
              height={300}
              alt="heroImage"
              className="mx-auto rounded-lg w-full max-h-[300px] max-w-[300px]"
            />
          </Link>
          <div className="bg-zinc-700 rounded-lg">
            <h3 className="ml-6 pt-5 text-2xl font-semibold">test test</h3>
            <h4 className="flex ml-6 pt-2 text-lg">hell hello</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
