"use client";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import PopularTemp from "./PopularTemp";
import { useSelector } from "react-redux";

//main component to export
const Popular = () => {
  const [loading, setLoading] = useState(true);
  const topNftEth = useSelector((state) => state.topNftEth);

  //once store data changes status to succeeded, change loading state
  useEffect(() => {
    if (topNftEth.status == "succeeded") {
      setLoading(false);
    }
  }, [topNftEth.status]);

  const renderNftCard = () => {
    if (!topNftEth || !topNftEth.topNftEthData) {
      return <p>No data available</p>;
    } else {
      //randomize order of nftData
      const shuffledNFTData = [...topNftEth.topNftEthData];
      for (let i = shuffledNFTData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNFTData[i], shuffledNFTData[j]] = [
          shuffledNFTData[j],
          shuffledNFTData[i],
        ];
      }
      return (
        <div>
          <div className="flex flex-wrap">
            {shuffledNFTData
              .filter(
                (item) => item.contract.metadata.cached_thumbnail_url !== null
              )
              .filter((item, index) => index < 20)
              .map((item) => {
                return (
                  <PopularCard
                    key={item._id}
                    collection={item.contract}
                    nfts={item.nfts}
                  />
                );
              })}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="my-6">
      <h2 className="text-4xl text-white font-[500] my-7">
        Popular NFT Collections
      </h2>
      {loading ? <PopularTemp /> : renderNftCard()}
    </div>
  );
};

export default Popular;
