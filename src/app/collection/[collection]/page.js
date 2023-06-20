"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Page({ params }) {
  const path = usePathname();
  const cleanPath = path.replace("/collection/", "").replace("%20", " ");
  // const { asPath } = router;
  // // const routeName = asPath.split("/").filter(Boolean).pop();
  const topNftEth = useSelector((state) => state.topNftEth);
  const nftIndex = topNftEth.topNftEthData.findIndex(
    (obj) => obj.contract.name == cleanPath
  );

  function renderCollectionGallery() {
    return topNftEth.topNftEthData[nftIndex].nfts.map((nft, index) => {
      return <Gallery key={index} nft={nft} />;
    });
  }
  function getState() {
    console.log(topNftEth);
    console.log("clean path: ", cleanPath);
    console.log(nftIndex);
  }

  return (
    <div>
      <p>hello worldz</p>
      <p>{cleanPath}</p>
      <button onClick={getState} className="m-5">
        click me
      </button>
    </div>
  );
}

function Gallery({ nft }) {
  return (
    <div>
      <h3>{nft.metadata.name}</h3>
    </div>
  );
}
