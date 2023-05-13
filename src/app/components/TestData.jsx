"use client";
import React, { useState, useEffect } from "react";

const TestData = () => {
  const [nftData, setNftData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/web3/nft-top-eth");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {nftData.map((item) => (
            <li key={item._id}>{item.nfts.contract.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestData;
