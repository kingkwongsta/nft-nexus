"use client";
import { useSelector, useDispatch } from "react-redux";

export default function About() {
  const topNftEth = useSelector((state) => state.topNftEth);

  return <div>About</div>;
}
