import { TopNftEthState } from "@/redux/features/top-nft-eth/topNftEthSlice";

export interface collectionType {
  _id: string;
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

export interface salesData {
  chain: string;
  contract_address: string;
  token_id: string;
  metadata_url: string;
  metadata: {
    image: string;
    name: string;
    attributes: {
      trait_type: string;
      value: string;
    }[];
  };
  file_information: null | string;
  file_url: string;
  animation_url: null | string;
  cached_file_url: string | null;
  cached_animation_url: null | string;
  creator_address: string;
  mint_date: string;
  updated_date: string;
  owner: string;
  rarity: {
    strategy: string;
    score: number;
    rank: number;
    collection_size: number;
    updated_date: string;
  };
  attributes: {
    trait_type: string;
    display_type: null | string;
    value: string;
    statistics: {
      total_count: number;
      prevalence: number;
    };
  }[];
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
