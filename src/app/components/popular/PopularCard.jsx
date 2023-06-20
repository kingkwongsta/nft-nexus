"use client";
import Image from "next/image";
import Link from "next/link";

const PopularCard = ({ collection, nfts }) => {
  return (
    <div className="flex flex-col items-center min-w-[250px] max-w-[250px] rounded-lg border-[1px] px-3 py-1 bg-[#3B3B3B] border-[#3B3B3B]">
      {/* <Link href={`/collection/${collection.name}`}> */}
      <Link
        href={{
          pathname: "{`/collection/${collection.name}`}",
        }}
        as={`/collection/${collection.name}`}
      >
        <div className="min-w-[200px] min-h-[200px]">
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
