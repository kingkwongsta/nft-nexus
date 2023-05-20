import Image from "next/image";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const PopularCard = ({ collection, nfts }) => {
  function getRandomImage() {
    const random_number = Math.floor(Math.random() * 40) + 1;
    return nfts[random_number].metadata;
  }
  console.log(getRandomImage());
  console.log(collection);
  return (
    <Grid item xs={8} sm={5} md={4} lg={2}>
      <Paper elevation={1} className="flex flex-col items-center max-w-[250px]">
        <div className="min-w-[200px] min-h-[200px]">
          <Image
            className="object-cover h-[200px] mb-4 mt-6 rounded-md"
            src={collection.metadata.cached_thumbnail_url}
            width={200}
            height={200}
            alt="collection image"
          />
        </div>
        <h2 className="text-lg font-medium mb-2">{collection.name}</h2>
      </Paper>
    </Grid>
  );
};

export default PopularCard;
