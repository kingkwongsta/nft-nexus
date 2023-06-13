export interface collectionType {
  topNftEthData: {
    total: number;
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
  };
}

export interface RootState {
  topNftEth: collectionType[];
  loading: boolean;
  status: string;
  error: string;
}
