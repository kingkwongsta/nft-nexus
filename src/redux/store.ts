import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counter/counterSlice";
// import pokemonReducer from "./features/pokemon/pokemonSlice";
import topNftEthReducer from "./features/top-nft-eth/topNftEthSlice";

export const store = configureStore({
  reducer: {
    topNftEth: topNftEthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
