import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Stack, Button } from "@mui/material";

// import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const goHome = () => navigate("/home");
  const goFeatures = () => navigate("/feature");
  const goFAQ = () => navigate("/frequently-asked");
  const goAbout = () => navigate("/about");

  return (
    <Box
      component="footer"
      className="footer"
      sx={{
      
        bgcolor: "primary.dark",
        color: "white",
        py: 3,
        px: 4,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        mt: "auto",
        height: "20px",
        marginTop:"10px"
      }}
    >
      <Typography variant="body2" sx={{ flex: "1 1 auto" }}>
        &copy; {new Date().getFullYear()} Payzz.com
      </Typography>

      <Stack direction="row" spacing={2} sx={{top:"10px", bottom:"=10px"}}>
        <Button  color="inherit" 
         sx={{ textTransform: "none"}} onClick={goHome}>
          Home
        </Button>
        <Button  color="inherit" sx={{ textTransform: "none" }} onClick={goFeatures}>
          Features
        </Button>
        <Button  color="inherit" sx={{ textTransform: "none" }} onClick={goFAQ}>
          FAQs
        </Button>
        <Button  color="inherit" sx={{ textTransform: "none" }}onClick={goAbout}>
          About
        </Button>
      </Stack>
    </Box>
  );
}

export default Footer;
