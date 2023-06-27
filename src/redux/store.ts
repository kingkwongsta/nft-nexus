import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counter/counterSlice";
// import pokemonReducer from "./features/pokemon/pokemonSlice";
import topNftEthReducer from "./features/top-nft-eth/topNftEthSlice";
import ethSalesReducer from "./features/eth-top-sales/ethTopSalesSlice";

export const store = configureStore({
  reducer: {
    topNftEth: topNftEthReducer,
    ethSales: ethSalesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
