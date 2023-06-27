"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Gallery from "../../components/collection/gallery";
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

  // function renderCollectionGallery() {
  //   return topNftEth.topNftEthData[nftIndex].nfts.map((nft, index) => {
  //     return <Gallery key={index} nft={nft} />;
  //   });
  // }

  function getVariables() {
    console.log(reduxNftData);
    console.log("clean path: ", cleanPath);
    console.log(nftIndex);
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {reduxNftData ? renderCollectionGallery() : <p>loading</p>}
      </div>
    </div>
  );
}
