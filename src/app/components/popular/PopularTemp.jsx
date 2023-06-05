import Image from "next/image";
import nftPlaceholder from "./../../../../public/nft-placeholder.png";

const TempCards = () => {
  return (
    <div className="flex flex-col items-center min-h-[270.6px] min-w-[250px] max-w-[250px] rounded-lg border-[1px] bg-[#3B3B3B] border-[#3B3B3B]">
      <div className="min-w-[200px] min-h-[200px] flex justify-center items-center">
        <Image
          className="invert opacity-25"
          src={nftPlaceholder}
          alt="nft-placeholder"
          width={100}
          height={100}
        />
      </div>
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
        <div className="grid grid-cols-4 gap-10">
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
