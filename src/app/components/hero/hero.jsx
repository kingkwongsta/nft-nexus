"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import nftPlaceholder from "./../../../../public/nft-placeholder.png";
import { useSelector } from "react-redux";

export default function Hero({ nft }) {
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [storeLoading, setStoreLoading] = useState(true);
  const topNftEth = useSelector((state) => state.topNftEth);
  const data = [111, 222, 333, 444, 555];

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // Increment textIndex every second
  //       const randomIndex = Math.floor(
  //         Math.random() * topNftEth.topNftEthData.length
  //       );
  //       setCollectionIndex(randomIndex);
  //     }, 5000);

  //     return () => {
  //       // Cleanup: clear the interval when the component unmounts
  //       clearInterval(interval);
  //     };
  //   }, []); // Empty dependency array to run the effect only once on mount

  //When store data is fetched, allow data to render
  useEffect(() => {
    if (topNftEth.status == "succeeded") {
      setStoreLoading(false);
    }
  }, [topNftEth.status]);

  function showStore() {
    console.log(topNftEth.topNftEthData);
    console.log(topNftEth.topNftEthData[0].contract.name);
    console.log(storeLoading);
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
                  topNftEth.topNftEthData[0].contract.metadata
                    .cached_thumbnail_url
                }
                width={300}
                height={300}
                alt="heroImage"
                className="mx-auto rounded-lg w-full max-h-[300px] max-w-[300px]"
              />
            )}
          </Link>
          <div className="bg-zinc-700 rounded-lg">
            <h3 className="ml-6 pt-5 text-2xl font-semibold">
              {data[collectionIndex]}
            </h3>
            <h4 className="flex ml-6 pt-2 text-lg">
              {storeLoading
                ? "hello"
                : topNftEth.topNftEthData[0].contract.name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
