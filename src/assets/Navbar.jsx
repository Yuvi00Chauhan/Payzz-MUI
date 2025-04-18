import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";


const Navbar = () => {


  return (
    <AppBar position="fixed" sx={{ bgcolor: "primary.dark" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={(e) => goHome(navigate, e)}
        >
          Payzz
        </Typography>

   
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" >Home</Button>
          <Button color="inherit" >About Us</Button>
          <Button color="inherit" >Contact Us</Button>
          <Button color="inherit" >Account</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
