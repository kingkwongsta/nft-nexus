"use client";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import Grid from "@mui/material/Unstable_Grid2";

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
      console.log(jsonData);
      setNftData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const renderNftCard = () => {
    return (
      <div className="grid grid-cols-3 gap-5">
        {nftData.map((item) => {
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

  return <div>{loading ? <p>LOADING...</p> : renderNftCard()}</div>;
};

export default Popular;
