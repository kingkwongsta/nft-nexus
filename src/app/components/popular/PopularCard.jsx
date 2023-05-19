import Image from "next/image";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const PopularCard = ({ nft }) => {
  console.log(nft);
  return (
    <Grid item md={3}>
      <Paper elevation={1} className="flex flex-col items-center">
        <div className="min-w-[200px] min-h-[200px]">
          <Image
            className="object-cover h-[200px] mb-4 mt-6 rounded-md"
            src={nft.metadata.cached_thumbnail_url}
            width={200}
            height={200}
            alt="collection image"
          />
        </div>
        <h2 className="text-lg font-medium mb-2">{nft.name}</h2>
      </Paper>
    </Grid>
  );
};

export default PopularCard;
