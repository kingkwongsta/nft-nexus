"use client";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import { useSelector, connect } from "react-redux";

//main component to export
const Popular = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const topNftEth = useSelector((state) => state.topNftEth);

  useEffect(() => {
    if (topNftEth) {
      setLoading(false);
    }
    console.log("store has been updated");
  }, [topNftEth]);

  function handleClick() {
    console.log(topNftEth.topNftEthData);
    setShow(!show);
  }

  const renderNftCard = () => {
    // //randomize order of nftData
    // const shuffledNFTData = [...topNftEth.topNftEthData];
    // for (let i = shuffledNFTData.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [shuffledNFTData[i], shuffledNFTData[j]] = [
    //     shuffledNFTData[j],
    //     shuffledNFTData[i],
    //   ];
    // }

    return (
      <div>
        <div className="grid grid-cols-3 gap-10">
          {topNftEth ? (
            topNftEth.topNftEthData
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
              })
          ) : (
            <p>no store data</p>
          )}
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
      {loading ? <p>LOADING...</p> : renderNftCard()}
      {/* {show ? renderNftCard() : <p>LOADING...</p>} */}
    </div>
  );
  // return <div>{loading ? <p>LOADING...</p> : "hello"}</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.topNftEth, // Example: mapping 'data' from the Redux store to 'data' prop
  };
};

export default connect(mapStateToProps)(Popular);
