"use client";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";

//main component to export
const Popular = () => {
  const [nftData, setNftData] = useState();
  const [loading, setLoading] = useState(true);

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
    return (
      <div className="grid grid-cols-3 gap-10">
        {nftData
          .filter(
            (item) => item.contract.metadata.cached_thumbnail_url !== null
          )
          .map((item) => {
            return <PopularCard key={item._id} collection={item.contract} />;
          })}
      </div>
    );
  };

  //JSX To Return
  return <div>{loading ? <p>LOADING...</p> : renderNftCard()}</div>;
  // return <div>{loading ? <p>LOADING...</p> : "hello"}</div>;
};

export default Popular;
