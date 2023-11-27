import { Box, Link, Typography } from "@mui/material";

export default function Copyright(props: any) {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Your soundtrack, your world: Playlists that define you!
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href={process.env.NEXTAUTH_URL}>
          PlayList Pulse
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
