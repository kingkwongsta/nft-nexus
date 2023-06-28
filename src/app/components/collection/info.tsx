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
        <div className="flex justify-between bg-zinc-700 p-2" key={index}>
          <div className="text-[#FFFFFF]">{stat.metric}</div>
          <div className="text-[#FFFFFF]">{stat.amount}</div>
        </div>
      );
    });
  }
  return (
    <div className="container flex flex-wrap mb-16">
      <p>{nftInfo.response}</p>
      <div className="section-img flex grow justify-center">
        {/* <Image
          className="min-w-[250px] min-h-[250px]"
          src={nftData.contract.metadata.cached_thumbnail_url}
          width={200}
          height={200}
          alt="placeholder"
        /> */}
      </div>
      <div className="section-stats grow justify-center">
        <div className="stat-title text-4xl font-semibold mb-8 text-center mt-5 min-[940]:mt-0">
          {salesInfo.name.replace(/([A-Z])/g, " $1").trim()}
        </div>
        <div className="stat-details-section grid grid-cols-2 gap-x-14 gap-y-4 text-xlg uppercase">
          {renderStats()}
        </div>
      </div>
      <div className="section-info flex items-center justify-center grow mt-10 px-2 min-[940]:px-8">
        <div>
          <div className="px-12 text-center text-xl">
            {/* {nftData.contract.metadata.description} */}
          </div>
        </div>
      </div>
    </div>
  );
}
