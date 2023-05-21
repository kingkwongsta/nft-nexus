import { useRouter } from "next/router";

export default function Page({ collection }) {
  const router = useRouter();
  console.log(collection);
  return (
    <div>
      <p>Collection: {router.query.slug}</p>
    </div>
  );
}
