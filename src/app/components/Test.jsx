"use client";
import { useSelector } from "react-redux";

function Test() {
  const topNftEth = useSelector((state) => state.topNftEth);

  const getStore = () => {
    console.log(topNftEth);
  };

  return (
    <button className="m-5 px-4 py-2 rounded" onClick={getStore}>
      Get what is in store
    </button>
  );
}

export default Test;
