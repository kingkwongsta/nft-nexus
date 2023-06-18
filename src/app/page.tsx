"use client";
import { useEffect } from "react";
import Popular from "./components/popular/Popular";
import { useSelector, useDispatch } from "react-redux";
import { fetchInitialData } from "@/redux/features/top-nft-eth/topNftEthSlice";
import Hero from "./components/hero/hero";
import { RootState } from "../shared/types";
import { useAppDispatch } from "@/shared/hooks";
import { motion } from "framer-motion";

export default function Home() {
  const topNftEth = useSelector((state: RootState) => state.topNftEth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  return (
    <main>
      {/* <Hero />
      <Popular /> */}
    </main>
  );
}
