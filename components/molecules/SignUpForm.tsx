"use client";

import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Link } from "../atoms";
import { useAuth, useUserCollection } from "@/hooks";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUserCredentials } = useAuth();
  const { createUser } = useUserCollection();

  const handleOnFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setFirstName(value);
  };

  const handleOnLastNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setLastName(value);
  };

  const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleOnPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserCredentials({ email, password }).then(() => {
      createUser({ email, name: `${firstName} ${lastName}` });
    });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            value={firstName}
            onChange={handleOnFirstNameChange}
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            value={lastName}
            onChange={handleOnLastNameChange}
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            value={email}
            onChange={handleOnEmailChange}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            value={password}
            onChange={handleOnPasswordChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        disabled={!email || !password}
      >
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="/signin">Already have an account? Sign in</Link>
        </Grid>
      </Grid>
    </Box>
  );
}
