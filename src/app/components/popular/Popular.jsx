"use client";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import { useSelector } from "react-redux";

//main component to export
const Popular = () => {
  const [nftData, setNftData] = useState();
  const [loading, setLoading] = useState(true);
  const topNftEth = useSelector((state) => state.topNftEthData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("api/web3/nft-top-eth");
      const jsonData = await response.json();
      setNftData(jsonData);
      setLoading(!loading);
    } catch (error) {
      console.error(error);
    }
  };

  const renderNftCard = () => {
    //randomize order of nftData
    const shuffledNFTData = [...nftData];
    for (let i = shuffledNFTData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNFTData[i], shuffledNFTData[j]] = [
        shuffledNFTData[j],
        shuffledNFTData[i],
      ];
    }

    return (
      <div className="grid grid-cols-3 gap-10">
        {shuffledNFTData
          .filter(
            (item) => item.contract.metadata.cached_thumbnail_url !== null
          )
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
    );
  };

  //JSX To Return
  return <div>{loading ? <p>LOADING...</p> : renderNftCard()}</div>;
  // return <div>{loading ? <p>LOADING...</p> : "hello"}</div>;
};

export default Popular;
