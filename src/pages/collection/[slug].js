"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const [collectionData, setCollectionData] = useState();

  const router = useRouter();

  const fetchData = async () => {
    try {
      const res = await fetch("api/web3/collection");
      const data = await res.json();
      setCollectionData(data);
      console.log(data);
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <p>Collection: {router.query.slug}</p>
    </div>
  );
}
