"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";

const NftCard = ({ nft }) => {
  console.log(nft);
  return (
    <Grid item md>
      <Paper>
        <Image
          src={nft.metadata.cached_thumbnail_url}
          width={200}
          height={200}
          alt="collection image"
        />
        <h2>{nft.name}</h2>
      </Paper>
    </Grid>
  );
};

const TestData = () => {
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
