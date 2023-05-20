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
        <div className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          Hello
        </div>
      ) : (
        <div className=" transition duration-5000">World</div>
      )}

      <button className="m-5 px-4 py-2 rounded" onClick={toggleImage}>
        Toggle Image
      </button>
    </div>
  );
}

export default Test;
