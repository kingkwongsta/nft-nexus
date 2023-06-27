"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Gallery from "../../components/collection/gallery";
import { RootState, collectionType, salesType } from "../../../shared/types";

export default function Page({ params }) {
  const path = usePathname();
  const cleanPath = path.replace("/collection/", "").replace("%20", " ");
  // const { asPath } = router;
  // // const routeName = asPath.split("/").filter(Boolean).pop();
  // const topNftEth = useSelector((state) => state.topNftEth);
  const reduxNftData: collectionType[] | null = useSelector(
    (state: RootState) => state.topNftEth
  );

  const nftIndex = reduxNftData.topNftEthData.findIndex(
    (obj) => obj.contract.name == cleanPath
  );

  function renderCollectionGallery() {
    return reduxNftData.reduxNftData[nftIndex].nfts
      .filter((item) => item.cached_file_url !== null)
      .map((nft, index) => {
        return <Gallery key={index} nft={nft} />;
      });
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
