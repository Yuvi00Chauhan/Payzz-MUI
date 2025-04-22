import React from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate=useNavigate();
      const goToRegister=()=>navigate("/register")
  const handleLogin = (event) => {
    event.preventDefault();
    alert("Logged in successfully!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            required
            type="email"
            label="Email"
            placeholder="Enter your email"
            margin="normal"
          />

          <TextField
            fullWidth
            required
            type="password"
            label="Password"
            placeholder="Enter your password"
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            
            sx={{ mt: 3 }}
          >
            Login
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
            onClick={goToRegister}
            sx={{ mt: 3, marginLeft:36 }}
          >
            New User?
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
