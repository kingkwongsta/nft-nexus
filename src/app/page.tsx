import Image from "next/image";
import TestData from "./components/TestData";
import TestDataSSR from "./components/TestDataSSR";

export default function Home() {
  return (
    <main>
      <h2>Hello</h2>
      <TestDataSSR />
    </main>
  );
}
