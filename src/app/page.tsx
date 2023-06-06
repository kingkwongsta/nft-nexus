"use client";
import { useEffect } from "react";
import Popular from "./components/popular/Popular";
import { useSelector, useDispatch } from "react-redux";
import { fetchInitialData } from "@/redux/features/top-nft-eth/topNftEthSlice";
import Test from "./components/Test";
import Hero from "./components/hero/hero";
import PopularTemp from "./components/popular/PopularTemp";

export default function Home() {
  const topNftEth = useSelector((state) => state.topNftEth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  return (
    <main className="bg-[#2B2B2B] flex flex-col items-center justify-center">
      <Test />
      <Hero nft={topNftEth} />
      {/* <Popular /> */}
    </main>
  );
}
