"use client";
import PopularCard from "./PopularCard";

//main component to export
const Popular = () => {
  const renderNftCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-10">
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
  };

  return (
    <div>
      {/* <button onClick={handleClick} className="m-5">
        What is in Store?
      </button> */}
      {loading ? <p>LOADING...</p> : renderNftCard()}
    </div>
  );
};

export default Popular;
