"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import nftPlaceholder from "./../../../../public/nft-placeholder.png";
import { useSelector } from "react-redux";
import { RootState, collectionType } from "../../../types/types";

export default function Hero() {
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [storeLoading, setStoreLoading] = useState(true);
  const topNftEth = useSelector((state: RootState) => state.topNftEth);

  const [collectionData, setCollectionData] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 20);
      setCollectionIndex(randomIndex);
    }, 4000);

    return () => {
      // Cleanup: clear the interval when the component unmounts
      clearInterval(interval);
    };
  }, [topNftEth.topNftEthData]);

  //When store data is fetched, allow data to render
  useEffect(() => {
    if (topNftEth.status == "succeeded") {
      setStoreLoading(false);
      setCollectionData(
        topNftEth.topNftEthData.filter(
          (item: collectionType) =>
            item.contract.metadata.cached_thumbnail_url !== null
        )
      );
    }
  }, [topNftEth.status]);

  function showStore() {
    console.log(topNftEth.topNftEthData);
    console.log(collectionIndex);
    console.log(collectionData);
    console.log(topNftEth.status);
  }

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
        <button className="m-5 text-3xl text-[#ffffff]" onClick={showStore}>
          Show what is in Store
        </button>
      </div>
      {/* RIGHT CONTENT */}
      <div className="hero-right sm:max-lg:invisible sm:max-lg:h-0 sm:mt-10 lg:mt-0 flex-auto basis-1/2 justify-center h-[400px] sm:max-lg:max-h-[300px] bg-zinc-700">
        <div className="hero-img rounded-lg pt-10 px-16 w-[500px] ">
          <Link href={`/collection/`}>
            {storeLoading ? (
              <Image
                src={nftPlaceholder}
                width={300}
                height={300}
                alt="heroImage"
                className="mx-auto rounded-lg w-full max-h-[300px] max-w-[300px]"
              />
            ) : (
              <Image
                src={
                  collectionData[collectionIndex].contract.metadata
                    .cached_thumbnail_url
                }
                width={300}
                height={300}
                alt="heroImage"
                className="mx-auto rounded-lg w-full max-h-[300px] max-w-[300px]"
                transition={{
                  duration: 2000,
                  easing: "ease-in-out",
                  opacity: 0.5,
                }}
              />
            )}
          </Link>
          <div className="bg-zinc-700 rounded-lg">
            <h3 className="ml-6 pt-5 text-2xl font-semibold">test test</h3>
            <h4 className="flex ml-6 pt-2 text-lg">
              {storeLoading
                ? "hello"
                : collectionData[collectionIndex].contract.name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
