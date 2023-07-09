// "use client";
import Image from "next/image";
import Link from "next/link";

const PopularCard = ({ collection, nfts }) => {
  return (
    <div className="mx-5 my-5 flex flex-col items-center min-h-[280px] min-w-[250px] max-w-[250px] rounded-lg px-3 py-1">
      {/* <Link href={`/collection/${collection.name}`}> */}
      <Link
        href={{
          pathname: "{`/collection/${collection.name}`}",
        }}
        as={`/collection/${collection.name}`}
      >
        <div className="min-w-[200px] min-h-[200px] mt-[25px]">
          <Image
            className="object-cover h-[200px] mb-4 mt-2 rounded-md"
            src={collection.metadata.cached_thumbnail_url}
            width={200}
            height={200}
            alt={collection.name}
          />
        </div>
        <h2 className="text-lg text-center font-medium mb-2 text-[#ffffff]">
          {collection.name}
        </h2>
      </Link>
    </div>
  );
};

export default PopularCard;
