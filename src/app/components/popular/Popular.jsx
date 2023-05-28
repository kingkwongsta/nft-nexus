"use client";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import { useSelector } from "react-redux";

//main component to export
const Popular = () => {
  const [nftData, setNftData] = useState();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const topNftEth = useSelector((state) => state.topNftEth);

  useEffect(() => {
    // fetchData();
    setLoading(false);
  }, [topNftEth]);

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
  function handleClick() {
    console.log(topNftEth.topNftEthData);
    setShow(!show);
  }

  const renderNftCard = () => {
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
        <div className="grid grid-cols-3 gap-10">
          {topNftEth.topNftEthData
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
      </div>
    );
  };

  //JSX To Return
  return (
    <div>
      {" "}
      <button onClick={handleClick} className="m-5">
        What is in Store?
      </button>
      {/* {loading ? <p>LOADING...</p> : <p>Store has been updated</p>} */}
      {/* {loading ? <p>LOADING...</p> : renderNftCard()} */}
      {show ? <p>LOADING...</p> : renderNftCard()}
    </div>
  );
  // return <div>{loading ? <p>LOADING...</p> : "hello"}</div>;
};

export default Popular;
