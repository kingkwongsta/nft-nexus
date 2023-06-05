"use client";

const TempCards = () => {
  return (
    <div className="flex flex-col items-center max-w-[250px] rounded-lg border-[1px] drop-shadow-lg px-3 py-1">
      <div className="min-w-[200px] min-h-[200px]"></div>
      <h2 className="text-lg font-medium mb-2"></h2>
    </div>
  );
};

//main component to export
const PopularTemp = () => {
  const numCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const renderNftCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-10">
          {numCards.map((x, index) => {
            return <TempCards key={index} />;
          })}
        </div>
      </div>
    );
  };

  return <div>{renderNftCard()}</div>;
};

export default PopularTemp;
