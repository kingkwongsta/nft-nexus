"use client";
import PopularCard from "./PopularCard";

//main component to export
const Popular = () => {
  const numCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const renderNftCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-10">
          {renderNftCard.map((x, index) => {
            return <PopularCard key={index} />;
          })}
        </div>
      </div>
    );
  };

  return <div>renderNftCard()</div>;
};

export default Popular;
