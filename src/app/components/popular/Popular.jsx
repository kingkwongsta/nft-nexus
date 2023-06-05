"use client";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import PopularTemp from "./PopularTemp";
import { useSelector, useDispatch } from "react-redux";

//main component to export
const Popular = () => {
  const [loading, setLoading] = useState(true);
  const topNftEth = useSelector((state) => state.topNftEth);

  //once store data changes status to succeeded, change loading state
  useEffect(() => {
    if (topNftEth.status == "succeeded") {
      setLoading(false);
    }
  }, [topNftEth.status]);

  const renderNftCard = () => {
    if (!topNftEth || !topNftEth.topNftEthData) {
      return <p>No data available</p>;
    } else {
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
          <div>
            <h2 className="text-4xl text-white text-[600] my-7">
              Popular NFT Collections
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-10">
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
            <h1>Hello World</h1>
          </div>
        </div>
      );
    }
  };
  // DEBUGGING: What is in state
  // function handleClick() {
  //   console.log(topNftEth.topNftEthData);
  //   setShow(!show);
  // }

  return (
    <div>
      {/* <button onClick={handleClick} className="m-5">
        What is in Store?
      </button> */}
      {loading ? <PopularTemp /> : renderNftCard()}
    </div>
  );
};

export default Popular;
