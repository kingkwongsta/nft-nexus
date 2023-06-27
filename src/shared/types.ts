import { TopNftEthState } from "@/redux/features/top-nft-eth/topNftEthSlice";

export interface collectionType {
  total: number;
  nfts: Array<{
    cached_file_url: string;
  }>;
  contract: {
    name: string;
    symbol: string;
    metadata: {
      banner_url: string;
      cached_banner_url: string;
      cached_thumbnail_url: string;
      description: string;
      thumbnail_url: string;
    };
  };
}

export interface salesType {
  data_pulled: string;
  name: string;
  response: string;
  statistics: {
    average_price: number;
    floor_price: number;
    market_cap: number;
    num_owners: number;
    total_volume: number;
    one_day_average_price: number;
    total_supply: number;
  };
}

export interface RootState {
  ethSales: any;
  topNftEth: TopNftEthState;
}

export interface TopNftEth {
  topNftEthData: collectionType[];
  loading: boolean;
  status: string;
  error: string;
}
