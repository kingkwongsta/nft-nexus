"use client";
import PopularCard from "./PopularCard";

const TempCards = () => {
  return (
    <div className="flex flex-col items-center max-w-[250px] rounded-lg border-[1px] drop-shadow-lg px-3 py-1">
      <div className="min-w-[200px] min-h-[200px]">
        <Image
          className="object-cover h-[200px] mb-4 mt-2 rounded-md"
          src={collection.metadata.cached_thumbnail_url}
          width={200}
          height={200}
          alt={collection.name}
        />
      </div>
      <h2 className="text-lg font-medium mb-2">{collection.name}</h2>
    </div>
  );
};

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
