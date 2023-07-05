import Image from "next/image";
import { salesType } from "../../../shared/types";

interface InfoProps {
  salesInfo: salesType;
  nftInfo: Record<string, any>;
}

export default function Info({ salesInfo, nftInfo }: InfoProps) {
  const stat = [
    {
      metric: "Floor:",
      amount: `${salesInfo.statistics.floor_price} ETH`,
    },
    {
      metric: "Total Vol:",
      amount: `${Math.round(salesInfo.statistics.total_volume)} ETH`,
    },
    {
      metric: "Market Cap:",
      amount: `${Math.round(salesInfo.statistics.market_cap)} ETH`,
    },
    {
      metric: "Avg Sale(24h):",
      amount: `${
        Math.round(salesInfo.statistics.one_day_average_price * 10) / 10
      } ETH`,
    },
    {
      metric: "Owners:",
      amount: `${salesInfo.statistics.num_owners}`,
    },
    {
      metric: "Supply:",
      amount: `${Math.round(salesInfo.statistics.total_supply)}`,
    },
  ];
  function renderStats() {
    return stat.map((stat, index) => {
      return (
        <div
          className="flex justify-between bg-zinc-800 p-4 m-1 rounded-md"
          key={index}
        >
          <div className="text-[#FFFFFF] text-lg">{stat.metric}</div>
          <div className="text-[#FFFFFF] text-lg">{stat.amount}</div>
        </div>
      );
    });
  }
  return (
    <div className="max-w-[1200px] mt-[50px]">
      <div className="text-[#ffffff] text-4xl font-semibold mb-9 text-center min-[940]:mt-0">
        {salesInfo.name.replace(/([A-Z])/g, " $1").trim()}
      </div>
      <div className="flex flex-row p-5 bg-zinc-700">
        <div className="basis-1/4 ml-20 mr-[80px]">
          <Image
            className="min-w-[250px] min-h-[250px] rounded-md"
            src={nftInfo.contract.metadata.cached_thumbnail_url}
            width={200}
            height={200}
            alt="placeholder"
          />
        </div>
        <div className="basis-3/4 mr-20 items-center">
          <div className="stat-details-section grid grid-cols-2 gap-x-14 gap-y-4 text-xlg uppercase">
            {renderStats()}
          </div>
        </div>
      </div>
      <div className="mb-10 bg-zinc-700 py-4 px-10 min-[940]:px-8">
        <div>
          <div className="px-12 text-center text-xl text-[#ffffff]">
            {nftInfo.contract.metadata.description}
          </div>
        </div>
      </div>
    </div>
  );
}
