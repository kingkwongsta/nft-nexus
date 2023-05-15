"use client";
import React, { useState, useEffect } from "react";
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
    return nftData.map((item) => {
      return <NftCard key={item._id} nft={item.contract} />;
    });
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      {loading ? <p>LOADING...</p> : renderNftCard()}
    </div>
  );
};

export default TestData;
