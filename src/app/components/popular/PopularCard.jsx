"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PopularCard = ({ collection, nfts }) => {
  return (
    <div className="flex flex-col items-center max-w-[250px] rounded-lg border-[1px] drop-shadow-lg px-3 py-1">
      <Link href={`/collection/${collection.name}`}>
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
      </Link>
    </div>
  );
};

export default PopularCard;
