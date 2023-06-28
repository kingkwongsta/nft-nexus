import Image from "next/image";
export default function Gallery({ nft }) {
  return (
    <div className="card mx-5 my-2">
      {nft.cached_file_url && (
        <Image
          className=""
          src={nft.cached_file_url}
          width="250"
          height="250"
          alt="bayc"
        />
      )}
      <p className="text-lg text-[#ffffff] my-2 mb-8">#{nft.token_id}</p>
    </div>
  );
}
