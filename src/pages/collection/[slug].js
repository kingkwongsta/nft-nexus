"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import Providers from "./../../redux/provider";
import Test from "./../../app/components/Test";

export default function Page() {
  const router = useRouter();

  function renderCollectionGallery() {
    return collectionData.nfts.map((nft, index) => {
      return <Gallery key={index} nft={nft} />;
    });
  }
  function getState() {
    console.log(topNftEth);
  }

  return (
    <div>
      {/* <p>Collection: {router.query.slug}</p> */}
      {/* {collectionData ? renderCollectionGallery() : <p>no data</p>} */}
      {/* <p>{topNftEth[0].contract.name}</p> */}
      <p>hello worldz</p>
      <button onClick={getState} className="m-5">
        click me
      </button>
      <Providers>
        <Test />
      </Providers>
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
