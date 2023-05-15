"use client";
import React, { useState, useEffect } from "react";

const NftCard = ({ nft }) => {
  console.log(nft);
  return <div>{nft.name}</div>;
};

const TestData = () => {
  console.log("run");
  const [nftData, setNftData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetch data is running");
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
    console.log("state date is: ", nftData);
    return nftData.map((item) => {
      return <NftCard key={item._id} nft={item.contract} />;
    });
  };

  return <div>{loading ? <p>LOADING...</p> : renderNftCard()}</div>;
};

export default TestData;
