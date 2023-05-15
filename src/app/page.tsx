import Image from "next/image";
import TestData from "./components/TestData";
import TestDataSSR from "./components/TestDataSSR";
import Test from "./components/Test";

export default function Home() {
  return (
    <main>
      <h2>Hello</h2>
      {/* <Test /> */}
      <TestDataSSR />
    </main>
  );
}
