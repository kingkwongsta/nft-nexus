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
          className="flex justify-between bg-zinc-800	min-w-[250px] px-4 py-3 rounded-md"
          key={index}
        >
          <div className="text-[#FFFFFF] capitalize text-lg">{stat.metric}</div>
          <div className="text-[#FFFFFF] capitalize text-lg">{stat.amount}</div>
        </div>
      );
    });
  }
  return (
    <div className="max-w-[1200px] grid grid-cols-3 gap-3 mb-[60px] px-[150px] pt-[20px] pb-[30px] rounded-md">
      <div className="col-span-3 text-[#ffffff] text-[40px] mb-4 font-semibold text-center">
        {salesInfo.name.replace(/([A-Z])/g, " $1").trim()}
      </div>

      <Image
        className="col-span-1 rounded-md"
        src={nftInfo.contract.metadata.cached_thumbnail_url}
        width={200}
        height={200}
        alt="placeholder"
      />

      <div className="col-span-2 flex items-center justify-center">
        <div className="stat-details-section grid grid-cols-2 gap-x-14 gap-y-4 text-xlg uppercase">
          {renderStats()}
        </div>
      </div>
    </div>
  );
}
