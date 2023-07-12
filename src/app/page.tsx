"use client";
import { useEffect } from "react";
import Popular from "./components/popular/Popular";
import { useSelector, useDispatch } from "react-redux";
import { fetchInitialData as initialEthNFT } from "@/redux/features/top-nft-eth/topNftEthSlice";
import { fetchInitialData as initialEthSales } from "@/redux/features/eth-top-sales/ethTopSalesSlice";
import Hero from "./components/hero/hero";
import { RootState } from "../shared/types";
import { useAppDispatch } from "@/shared/hooks";
import Navbar from "./../app/components/Navbar";

import Test from "./components/Test";

export default function Home() {
  const topNftEth = useSelector((state: RootState) => state.topNftEth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialEthNFT());
    dispatch(initialEthSales());
  }, [dispatch]);

  return (
    <main className="bg-zinc-950">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <Popular />
      </div>
    </main>
  );
}
