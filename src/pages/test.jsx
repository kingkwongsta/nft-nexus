"use client";
import { useSelector } from "react-redux";

export default function Test() {
  const storeData = useSelector((state) => state.topNftEth.topNftEthData);

  return <h2>COOL STUFF</h2>;
}
