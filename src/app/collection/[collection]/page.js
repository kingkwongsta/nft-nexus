"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Page({ params }) {
  const path = usePathname();
  // const { asPath } = router;
  // // const routeName = asPath.split("/").filter(Boolean).pop();
  const topNftEth = useSelector((state) => state.topNftEth);

  function renderCollectionGallery() {
    return collectionData.nfts.map((nft, index) => {
      return <Gallery key={index} nft={nft} />;
    });
  }
  function getState() {
    console.log(topNftEth);
    console.log(path);
    // console.log(topNftEth.topNftEthData.findIndex(obj=> obj.contract.name == ""))
  }

  return (
    <div>
      <p>hello worldz</p>
      {/* <p>{routeName}</p> */}
      <button onClick={getState} className="m-5">
        click me
      </button>
    </div>
  );
}

function Gallery() {
  return (
    <div className="card">
      {nft.cached_file_url && (
        <Image
          className=""
          src={nft.cached_file_url}
          width="250"
          height="250"
          alt="bayc"
        />
      )}
      <p className="text-lg my-2 mb-8">#{nft.token_id}</p>
    </div>
  );
}
