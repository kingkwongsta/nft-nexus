"use client";
import { Suspense } from "react";
import Image from "next/image";

const NftCard = ({ nft }) => {
  console.log(nft);
  return (
    <div>
      <div>
        <Image
          src={nft.metadata.cached_thumbnail_url}
          width={200}
          height={200}
          alt="collection image"
        />
      </div>
      <h2>{nft.name}</h2>
    </div>
  );
};

async function RenderNftCard() {
  // let response, jsonData

  // try {
  //   response = await fetch("api/web3/nft-top-eth");
  //   jsonData = await response.json();
  // } catch (error) {
  //   console.error(error);
  // }

  const response = await fetch("api/web3/nft-top-eth");
  const jsonData = await response.json();

  return (
    <>
      {jsonData.map((item) => {
        return <NftCard key={item._id} nft={item.contract} />;
      })}
    </>
  );
}

export default function TestDataSSR() {
  return (
    <div className="">
      <Suspense fallback={<h2>No Data</h2>}>
        <RenderNftCard />
      </Suspense>
    </div>
  );
}
