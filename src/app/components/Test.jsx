"use client";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function Test() {
  const [loading, setLoading] = useState(true);
  const topNftEth = useSelector((state) => state.topNftEth);
  useEffect(() => {
    if (topNftEth.status == "succeeded") {
      setLoading(false);
    }
  }, [topNftEth.status]);

  const getStore = () => {
    console.log(topNftEth);
  };

  return (
    <div>
      <button className="m-5 px-4 py-2 rounded" onClick={getStore}>
        Get what is in store
      </button>
      {loading ? <p>LOADING...</p> : <p>got store data</p>}
    </div>
  );
}

export default Test;
