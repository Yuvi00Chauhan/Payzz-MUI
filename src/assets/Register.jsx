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

function Register() {
  const signup = (event) => {
    event.preventDefault();

    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const dob = event.target.dob.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const cpass = event.target.cpass.value;

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
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="88vh" >
      <Container
        // maxWidth="sm"
        // sx={{
        //   flexGrow: 1,
        //   mt: 8,
        // }}
      >
        <div className="card" elevation={3} >
          <Typography variant="h4" gutterBottom align="center">
            Register with Payzz
          </Typography>
          <Box component="form" onSubmit={signup}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="fname"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lname"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="pass"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="cpass"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button type="button" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </Box>
  );
}

export default Register;
