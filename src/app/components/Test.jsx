"use client";
import { useState } from "react";
import Cat from "./../../../public/cat.avif";
import Cat2 from "./../../../public/cat2.avif";

function Test() {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleImage = () => {
    setIsImage1Visible(!isImage1Visible);
  };

  return (
    <div className="relative w-200 h-200">
      {isImage1Visible ? (
        //   <img
        //     src={Cat}
        //     alt="Image 1"
        //     className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        //   />
        // ) : (
        //   <img
        //     src={Cat2}
        //     alt="Image 2"
        //     className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        //   />
        <div className="bg-orange-500 transition ease-in-out delay-5000 duration-5000 hover:ease-in">
          Hello
        </div>
      ) : (
        <div className="bg-slate-600 transition ease-in-out delay-5000 duration-5000 hover:ease-in">
          World
        </div>
      )}

      <button className="m-5 px-4 py-2 rounded" onClick={toggleImage}>
        Toggle Image
      </button>
    </div>
  );
}

export default Test;
