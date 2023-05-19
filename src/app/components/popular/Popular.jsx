"use client";
import React, { useState, useEffect } from "react";
import NftCard from "./NftCard";
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
      <Grid container className="grid grid-cols- gap-5">
        {nftData.map((item) => {
          return <NftCard key={item._id} nft={item.contract} />;
        })}
      </Grid>
    );
  };

  return <div>{loading ? <p>LOADING...</p> : renderNftCard()}</div>;
};

export default TestData;
