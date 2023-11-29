import { Copyright } from "@/components/atoms";

import { Box } from "@mui/material";
import AppHeader from "../components/AppHeader";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box className="flex flex-col h-[100vh]">
      <AppHeader />
      <main>{children}</main>
      <Box sx={{ flexGrow: 1 }} />
      <Copyright />
    </Box>
  );
}
