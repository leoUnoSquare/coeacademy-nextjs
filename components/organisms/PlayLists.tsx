import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { usePlayListCollection } from "@/hooks";
import { IPlayListCollection } from "@/lib/types";

async function PlayLists() {
  const { getPlayLists } = usePlayListCollection();
  const playlists: IPlayListCollection[] = await getPlayLists();

  return (
    <Grid container spacing={4}>
      {playlists.map(({ id, title, link, description, owner, createdAt }) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {title}
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {owner.name}
                  </Typography>
                  <Typography
                    sx={{
                      flexGrow: 1,
                    }}
                    component="p"
                    variant="caption"
                    color="text.secondary"
                  >
                    {createdAt.toDate().toDateString()}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://source.unsplash.com/random?wallpapers"
                alt="Live from space album cover"
              />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>{description}</Typography>
            </CardContent>
            <CardActions className="flex justify-between">
              <Button size="small">Listen</Button>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PlayLists;
