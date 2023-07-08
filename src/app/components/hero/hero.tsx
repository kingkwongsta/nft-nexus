"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import nftPlaceholder from "./../../../../public/nft-placeholder.png";
import { useSelector } from "react-redux";
import { RootState, collectionType, salesType } from "../../../shared/types";

export default function Hero() {
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [storeLoading, setStoreLoading] = useState(true);
  const [salesData, setSalesData] = useState<salesType[] | null>(null);

  const reduxNftData: collectionType[] | null = useSelector(
    (state: RootState) => state.topNftEth.topNftEthData
  );
  const loading: boolean = useSelector(
    (state: RootState) => state.topNftEth.loading
  );
  const error: string = useSelector(
    (state: RootState) => state.topNftEth.error
  );
  const status: "idle" | "loading" | "succeeded" | "failed" = useSelector(
    (state: RootState) => state.topNftEth.status
  );
  const reduxSalesData: salesType[] | null = useSelector(
    (state: RootState) => state.ethSales.salesData
  );

  const [collectionData, setCollectionData] = useState<
    collectionType[] | undefined
  >(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 20);
      setCollectionIndex(randomIndex);
    }, 4000);

    return () => {
      // Cleanup: clear the interval when the component unmounts
      clearInterval(interval);
    };
  }, [reduxNftData]);

  //When store data is fetched, allow data to render
  useEffect(() => {
    if (status === "succeeded" && reduxNftData !== null) {
      setStoreLoading(false);
      const filteredData = reduxNftData.filter(
        (item: collectionType) =>
          item.contract.metadata.cached_thumbnail_url !== null
      );
      setCollectionData(filteredData);
      if (reduxSalesData !== null) {
        setSalesData(reduxSalesData);
      }
    }
  }, [status, reduxNftData, reduxSalesData]);

  function showStore() {
    console.log(reduxNftData);
    console.log(collectionData);
    console.log(salesData);
  }

  return (
    <div className="flex flex-row max-w-[1120px]">
      {/* LEFT CONTENT */}
      <div className="basis-3/4 mr-12">
        <h1 className="text-5xl text-[#ffffff] font-[600] leading-tight font-semibold tracking-wider leading-none mb-10">
          Discover the world of NFTs
        </h1>
        <h3 className="text-xl text-[#ffffff] font-[400] leading-8 smb-12 font-normal leading-normal">
          Explore an array of top NFTs handpicked for your viewing pleasure,
          immersing yourself in the realms of art, collectibles, and digital
          wonders, all at your fingertips. Uncover unique creations, support
          artists, and embark on a journey where creativity meets the
          blockchain.
        </h3>
        {/* <button className="m-5 text-3xl text-[#ffffff]" onClick={showStore}>
          Show what is in Store
        </button> */}
      </div>
      {/* RIGHT CONTENT */}
      <div className="basis-1/4 justify-center">
        <div className="max-w-[400px] bg-zinc-700 rounded-xl lg:min-h-[400px]">
          <div className="hero-img rounded-lg pt-10 px-16 w-[500px] "></div>
          {collectionData && collectionData[collectionIndex]?.contract && (
            <Link
              href={{
                pathname: `/collection/${collectionData[collectionIndex]?.contract.name}`,
              }}
              as={`/collection/${collectionData[collectionIndex]?.contract.name}`}
            >
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
                    collectionData[collectionIndex]?.contract.metadata
                      ?.cached_thumbnail_url ?? "no img"
                  }
                  width={300}
                  height={300}
                  alt="heroImage"
                  className="mx-auto rounded-lg w-full max-h-[300px] max-w-[300px]"
                />
              )}
            </Link>
          )}
          <div className="bg-zinc-700 rounded-lg">
            <h3 className=" mt-3 text-2xl font-semibold text-center text-[#ffffff]">
              {storeLoading || !collectionData
                ? "loading"
                : collectionData[collectionIndex]?.contract.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
