import Popular from "./components/popular/Popular";
import Test from "./components/Test";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const topNftEth = useSelector((state) => state.topNftEth);

  return (
    <main className="flex flex-col items-center justify-center">
      <Popular />
    </main>
  );
}
