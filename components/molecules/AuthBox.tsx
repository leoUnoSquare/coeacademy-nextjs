import React from "react";
import { Avatar, Box, Container, Typography } from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Copyright } from "../atoms";

interface Props {
  children: React.ReactNode;
  formTitle: "Sign In" | "Sign Up" | "Reset Password";
}

export default function AuthBox({ children, formTitle }: Props) {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mb: 3 }} component="h1" variant="h4">
          🎧 {process.env.SITE_TITLE} 🎧
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          {formTitle}
        </Typography>
      </Box>
      {children}
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
