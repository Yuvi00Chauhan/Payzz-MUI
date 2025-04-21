import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
 const navigate = useNavigate();
  const goHome=()=>{
    navigate("/home")
  }
  const goAccount=()=>{
    navigate("/account")
  }
  const goAbout=()=>{
    navigate("/about")
  }
  const goContact=()=>{
    navigate("/contact")
  }
  return (
    <AppBar position="fixed" sx={{ bgcolor: "primary.dark" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={goHome}
        >
          Payzz
        </Typography>

   
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" onClick={goHome}>Home</Button>
          <Button color="inherit"onClick={goAbout} >About Us</Button>
          <Button color="inherit" onClick={goContact} >Contact Us</Button>
          <Button color="inherit" onClick={goAccount}>Account</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
