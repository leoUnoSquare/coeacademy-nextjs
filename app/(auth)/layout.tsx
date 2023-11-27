import Image from "next/image";
import LoginBackground from "@/public/login-bg.png";

import { CssBaseline, Grid, Paper } from "@mui/material";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={6}
        md={8}
        lg={7}
        display={{ xs: "none", sm: "grid" }}
      >
        <Image
          src={LoginBackground}
          alt="Login Background Image"
          style={{ height: "100vh", backgroundRepeat: "no-repeat" }}
        />
      </Grid>
      <Grid
        className="bg-zinc-50"
        item
        xs={12}
        sm={6}
        md={4}
        lg={5}
        component={Paper}
        elevation={6}
        square
      >
        {children}
      </Grid>
    </Grid>
  );
}
