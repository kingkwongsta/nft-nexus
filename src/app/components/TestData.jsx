"use client";
import React, { useState, useEffect } from "react";

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
    nftData.map((item) => {
      return <NftCard key={item._id} nft={item.contract} />;
    });
  };

  return <div>{loading ? <p>Loading...</p> : renderNftCard()}</div>;
};

export default TestDataaaaa;

const NftCard = ({ nft }) => {
  console.log(nft);
  return <div>{nft.name}</div>;
};
