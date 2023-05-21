import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Collection: {router.query.slug}</p>;
}
