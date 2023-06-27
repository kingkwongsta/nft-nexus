import Image from "next/image";
import { salesType } from "../../../shared/types";

interface InfoProps {
  salesInfo: salesType;
}

export default function Info({ salesInfo }: InfoProps) {
  return (
    <div>
      <p>{salesInfo.name}</p>
      <h1>test</h1>
    </div>
  );
}
