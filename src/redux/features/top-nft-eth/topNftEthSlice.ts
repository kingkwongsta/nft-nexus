import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collectionType } from "@/shared/types";

export interface TopNftEthState {
  topNftEthData: collectionType[] | null;
  loading: boolean;
  error: string;
  status: "idle" | "loading" | "succeeded" | "failed"; // Add a status field to track the state of the async operation
}

export const fetchInitialData = createAsyncThunk(
  "topEthNft/fetchInitialData",
  async () => {
    const response = await fetch("api/web3/nft-top-eth");
    console.log("hello");
    const data = await response.json();
    return data;
  }
);

const initialState: TopNftEthState = {
  topNftEthData: [],
  loading: false,
  status: "idle", // Set initial status to "idle"
  error: "",
};

export const topNftEthSlice = createSlice({
  name: "topEth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.status = "loading"; // Update status to "loading" while the fetch is in progress
        state.loading = true;
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.status = "succeeded"; // Update status to "succeeded" when the fetch is successful
        state.topNftEthData = action.payload; // Update the state with the fetched data
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.status = "failed"; // Update status to "failed" if the fetch fails
        state.topNftEthData = [];
        state.error = action.error.message ?? "Unknown error occurred";
      });
  },
});

export default topNftEthSlice.reducer;
