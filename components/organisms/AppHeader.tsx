import { geolocation } from '@vercel/edge';
import { headers } from 'next/headers'
import { AppBar, Toolbar, Container, Box, Typography } from "@mui/material";

import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { AddPlayListButton, AppSearch, UserDropdown } from "../molecules";

export const runtime = 'edge';

export default function AppHeader() {
  const headerList = headers();
  const {city} = geolocation({headers: headerList})
  return (
    <AppBar position="fixed">
      {`you are in `+ city}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GraphicEqIcon sx={{ mr: 2 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pulse
          </Typography>

          <AppSearch />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ ml: { xs: 0, md: 2 } }}>
            <AddPlayListButton />
            <UserDropdown />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
