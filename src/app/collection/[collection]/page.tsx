"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Gallery from "../../components/collection/gallery";
import Info from "@/app/components/collection/info";
import { RootState, collectionType, salesType } from "../../../shared/types";

export default function Page() {
  const path = usePathname();
  const cleanPath = path.replace("/collection/", "").replace("%20", " ");
  const reduxNftData: collectionType[] | null = useSelector(
    (state: RootState) => state.topNftEth.topNftEthData
  );

  const nftIndex = reduxNftData
    ? reduxNftData.findIndex((obj) => obj.contract.name === cleanPath)
    : [];
  const reduxSalesData: salesType[] | null = useSelector(
    (state: RootState) => state.ethSales.salesData
  );
  const salesIndex = reduxSalesData
    ? reduxSalesData.findIndex((obj) => obj.name === cleanPath)
    : [];

  function renderCollectionGallery() {
    if (reduxNftData && reduxNftData.length > 0) {
      const nftIndex = reduxNftData.findIndex(
        (obj) => obj.contract.name === cleanPath
      );
      if (nftIndex !== -1) {
        return reduxNftData[nftIndex].nfts
          .filter(
            (item: { cached_file_url: string }) => item.cached_file_url !== null
          )
          .map((nft, index: number) => {
            return <Gallery key={index} nft={nft} />;
          });
      }
    }
    return null; // fallback value
  }

  function renderCollectionInfo() {
    if (reduxSalesData && reduxSalesData.length > 0) {
      const salesIndex = reduxSalesData.findIndex(
        (obj) => obj.name === cleanPath
      );
      if (salesIndex !== -1) {
        console.log(reduxSalesData[salesIndex]);
        return <Info salesInfo={reduxSalesData[salesIndex] as salesType} />;
      }
    }
    return null; // fallback value
  }

  function getVariables() {
    console.log(reduxNftData);
    console.log("clean path: ", cleanPath);
    console.log(nftIndex);
  }

  return (
    <div className="bg-[#2B2B2B] flex flex-col items-center justify-center">
      {reduxSalesData ? renderCollectionInfo() : <p>loading</p>}
      <div className="grid grid-cols-4 gap-4">
        {reduxNftData ? renderCollectionGallery() : <p>loading</p>}
      </div>
    </div>
  );
}
