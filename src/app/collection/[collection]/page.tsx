"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Gallery from "../../components/collection/gallery";
import Info from "@/app/components/collection/info";
import { RootState, collectionType, salesType } from "../../../shared/types";
import Navbar from "@/app/components/Navbar";
import { salesData } from "../../../shared/types";

export default function Page() {
  const path = usePathname();
  let cleanPath: string = "";
  if (path !== null) {
    cleanPath = path.replace("/collection/", "").replace("%20", " ");
  }
  const reduxNftData: collectionType[] | null = useSelector(
    (state: RootState) => state.topNftEth.topNftEthData
  );

  const reduxSalesData: salesType[] | null = useSelector(
    (state: RootState) => state.ethSales.salesData
  );

  let nftIndex: number = 0;
  let salesIndex: number = 0;

  function getNFTProps() {
    //filter data for individual NFT of Collection
    let nftCollection: Record<string, any> = {};
    let salesCollection: Record<string, any> = {};
    if (reduxNftData && reduxNftData.length > 0) {
      nftIndex = reduxNftData.findIndex(
        (obj) => obj.contract.name === cleanPath
      );
      if (nftIndex !== -1) {
        nftCollection = reduxNftData[nftIndex];
      }
    }
    //filter data for collection's sales data
    if (reduxSalesData && reduxSalesData.length > 0) {
      salesIndex = reduxSalesData.findIndex((obj) => obj.name === cleanPath);
      if (salesIndex !== -1) {
        salesCollection = reduxSalesData;
      }
    }
    return {
      nftItem: nftCollection,
      salesItem: salesCollection[salesIndex],
    };
  }

  function renderCollectionGallery() {
    const { nftItem } = getNFTProps();
    return (
      nftItem.nfts
        //remove any items without a valid image
        .filter(
          (item: { cached_file_url: string }) => item.cached_file_url !== null
        )
        .map((nft: salesData, index: number) => {
          return <Gallery key={index} nft={nft} />;
        })
    );
  }

  function renderCollectionInfo() {
    const { nftItem, salesItem } = getNFTProps();
    return <Info salesInfo={salesItem} nftInfo={nftItem} />;
  }

  return (
    <div className="bg-zinc-950">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="">
          {reduxSalesData ? renderCollectionInfo() : <p>loading</p>}
        </div>
        <div className="flex flex-wrap justify-evenly justify-items-center">
          {reduxNftData ? renderCollectionGallery() : <p>loading</p>}
        </div>
      </div>
    </div>
  );
}
