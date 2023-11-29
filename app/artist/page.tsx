import { Suspense } from "react";
import ArtistList from "./ArtistList";
import Loading from "./loading";
import ArtistListLarge from "./ArtistListLarge";
import { Typography } from "@mui/material";

export default async function ArtistPage() {
  return (
    <div className="mt-[80px]">
      <Typography variant="h3" component="h3" gutterBottom align="center">
        Artists
      </Typography>

      <div className="flex justify-center gap-10">
        <Suspense fallback={<Loading />}>
          <ArtistList />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <ArtistListLarge />
        </Suspense>
      </div>

    </div>
  );
}
