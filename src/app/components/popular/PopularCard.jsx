import Image from "next/image";

const PopularCard = ({ collection, nfts }) => {
  function getRandomImage() {
    const random_number = Math.floor(Math.random() * 40) + 1;
    return nfts[random_number].metadata;
  }
  console.log("hello");
  console.log(getRandomImage());
  return (
    <div className="flex flex-col items-center max-w-[250px] rounded-lg border-[1px] drop-shadow-lg px-3 py-1">
      <div className="min-w-[200px] min-h-[200px]">
        <Image
          className="object-cover h-[200px] mb-4 mt-2 rounded-md"
          src={collection.metadata.cached_thumbnail_url}
          width={200}
          height={200}
          alt="collection image"
        />
      </div>
      <h2 className="text-lg font-medium mb-2">{collection.name}</h2>
    </div>
  );
};

export default PopularCard;
