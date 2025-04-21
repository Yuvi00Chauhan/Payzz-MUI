import React from "react";
import {
  Container,
  Typography,
  Divider,
  Box,
} from "@mui/material";

function About() {
  return (
    <Container maxWidth="md" sx={{ pt: 10 }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          About Payzz
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Payzz is your all-in-one solution for fast, secure, and hassle-free recharges and bill payments.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Typography paragraph>
          Whether it’s mobile recharges, DTH services, broadband bills, or FASTag top-ups, we make it simple and instant.
          At Payzz, we prioritize user experience, data security, and seamless transactions.
        </Typography>
        <Typography paragraph>
          Our platform is built with speed and simplicity in mind, ensuring that you spend less time waiting and more time doing what you love.
        </Typography>
        <Typography paragraph>
          💡 Powered by modern tech.<br />
          🔒 Secured with best-in-class encryption.<br />
          💬 Backed by responsive support.
        </Typography>
        <Typography variant="subtitle1" fontWeight="medium" mt={4}>
          Thanks for choosing Payzz. Your convenience is our priority.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
