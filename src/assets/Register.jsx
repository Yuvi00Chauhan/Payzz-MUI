import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/user-auth-login");

  const signup = (event) => {
    event.preventDefault();

    // ✅ Grab values from the form
    const form = event.target;
    const dob = form.dob.value;
    const pass = form.pass.value;
    const cpass = form.cpass.value;

    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 18) {
      alert("You must be at least 18 years old to register.");
      return;
    }

    if (pass !== cpass) {
      alert("Passwords do not match.");
      return;
    }

    alert("Registration successful!");
    navigate("/user-auth-login");
  };

  return (
    <Box marginTop={"80px"}>
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom align="center">
            Register with Payzz
          </Typography>

          <Box component="form" onSubmit={signup}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="fname" label="First Name" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField name="lname" label="Last Name" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField name="phone" label="Phone Number" type="tel" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" label="Email" type="email" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField name="pass" label="Password" type="password" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField name="cpass" label="Confirm Password" type="password" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button type="button" variant="outlined" fullWidth onClick={handleLogin}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Register;
