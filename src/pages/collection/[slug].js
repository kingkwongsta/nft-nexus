"use client";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Page() {
//   const [collectionData, setCollectionData] = useState();
//   const router = useRouter();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const options = {
//       headers: {
//         collection: router.query.slug,
//       },
//     };
//     try {
//       const res = await fetch("/api/web3/collection", options);
//       const data = await res.json();
//       setCollectionData(data);
//       console.log(data);
//     } catch (error) {
//       return error;
//     }
//   };

//   function renderCollectionGallery() {
//     return collectionData.nfts.map((nft, index) => {
//       return <Gallery key={index} nft={nft} />;
//     });
//   }

//   return (
//     <div>
//       <p>Collection: {router.query.slug}</p>
//       {collectionData ? renderCollectionGallery() : <p>no data</p>}
//     </div>
//   );
// }

// function Gallery({ nft }) {
//   return (
//     <div className="card">
//       {nft.cached_file_url && (
//         <Image
//           className=""
//           src={nft.cached_file_url}
//           width="250"
//           height="250"
//           alt="bayc"
//         />
//       )}
//       <p className="text-lg my-2 mb-8">#{nft.token_id}</p>
//     </div>
//   );
// }

import { useRouter } from "next/router";

const Collection = ({ nfts }) => {
  const router = useRouter();

  // Render the component using the collection data

  return (
    <div>
      <h1>Collection: {nfts[0].metadata.name}</h1>
      {/* Render the collection details */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const collectionName = params.name;

  // Fetch the collection data based on the name
  const collection = await fetchCollectionData(collectionName);

  return {
    props: {
      nfts,
    },
  };
}

export default Collection;
