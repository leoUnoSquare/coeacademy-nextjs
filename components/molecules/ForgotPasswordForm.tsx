"use client";

import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Link } from "../atoms";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendPasswordResetEmail(auth, email);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={handleOnEmailChange}
            id="email"
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        disabled={!email}
      >
        Reset password
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="/signin">Already have an account? Sign in</Link>
        </Grid>
        <Grid item>
          <Link href="/signup">{"Don't have an account? Sign Up"}</Link>
        </Grid>
      </Grid>
    </Box>
  );
}
