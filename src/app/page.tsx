"use client";
import { useEffect } from "react";
import Popular from "./components/popular/Popular";
import Test from "./components/Test";
import { useSelector, useDispatch } from "react-redux";
import { fetchInitialData } from "@/redux/features/top-nft-eth/topNftEthSlice";

export default function Home() {
  const topNftEth = useSelector((state) => state.topNftEth);

  return (
    <main className="flex flex-col items-center justify-center">
      <Popular />
    </main>
  );
}
