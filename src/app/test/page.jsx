"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const storeData = useSelector((state) => state.topNftEth.topNftEthData);
  const [storeLoading, setStoreLoading] = useState(true);
  const [collectionData, setCollectionData] = useState();
  const loading = useSelector((state) => state.topNftEth.loading);
  const error = useSelector((state) => state.topNftEth.error);
  const status = useSelector((state) => state.topNftEth.status);

  useEffect(() => {
    if (status === "succeeded" && storeData !== null) {
      setStoreLoading(false);
      const filteredData = storeData.filter(
        (item) => item.contract.metadata.cached_thumbnail_url !== null
      );
      setCollectionData(filteredData);
    }
  }, [status, storeData]);

  function showStore() {
    console.log(storeData);
  }

  return (
    <div>
      <h2>COOL STUsssFF</h2>
      <button className="m-5 text-3xl text-[#000000]" onClick={showStore}>
        Show what is in Store
      </button>
    </div>
  );
}
