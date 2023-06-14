// "use client";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { useSelector } from "react-redux";

// export default function Page() {
//   const router = useRouter();
//   const topNftEth = useSelector((state) => state.topNftEth);

//   function renderCollectionGallery() {
//     return collectionData.nfts.map((nft, index) => {
//       return <Gallery key={index} nft={nft} />;
//     });
//   }
//   function getState() {
//     console.log(topNftEth);
//   }

//   return (
//     <div>
//       <p>hello worldz</p>
//       <button onClick={getState} className="m-5">
//         click me
//       </button>
//     </div>
//   );
// }

// function Gallery() {
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
