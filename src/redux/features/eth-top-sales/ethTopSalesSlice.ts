import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { salesType } from "@/shared/types";

export interface EthTopSalesState {
  salesData: salesType[] | null;
  loading: boolean;
  error: string;
  status: "idle" | "loading" | "succeeded" | "failed"; // Add a status field to track the state of the async operation
}

export const fetchInitialData = createAsyncThunk(
  "ethTopSales/fetchInitialData",
  async () => {
    const response = await fetch("api/web3/eth-top-sales");
    const data = await response.json();
    return data;
  }
);

const initialState: EthTopSalesState = {
  salesData: [],
  loading: false,
  status: "idle", // Set initial status to "idle"
  error: "",
};

export const ethTopSalesSlice = createSlice({
  name: "sales",
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
        state.salesData = action.payload; // Update the state with the fetched data
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.status = "failed"; // Update status to "failed" if the fetch fails
        state.salesData = [];
        state.error = action.error.message ?? "Unknown error occurred";
      });
  },
});

export default ethTopSalesSlice.reducer;
