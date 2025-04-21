import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import "./Features.css";

function Features() {
  const features = [
    {
      icon: "💸",
      title: "Instant Money Transfers",
      description: "Send and receive money in real-time with zero delays.",
    },
    {
      icon: "📲",
      title: "Mobile-Friendly Payments",
      description: "Seamless transactions from your mobile device, anywhere anytime.",
    },
    {
      icon: "🔐",
      title: "Secure Transactions",
      description: "Your data is protected with end-to-end encryption and secure authentication.",
    },
    {
      icon: "🧾",
      title: "Transaction History",
      description: "Track your expenses and payment history with detailed reports.",
    },
    {
      icon: "🌍",
      title: "Global Support",
      description: "Make international payments with ease and confidence.",
    },
    {
      icon: "🎁",
      title: "Rewards & Offers",
      description: "Enjoy cashback, discounts, and exclusive deals with every transaction.",
    },
  ];

  return (
    <Container className="feature-page" sx={{ py: 6 }}>
        <Container className="feature-content" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" className="feature-heading" gutterBottom>
        Why Choose Payzz?
      </Typography>
      <Grid container spacing={4} className="feature-list">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="feature-card" elevation={3}>
              <CardContent>
                <Box className="feature-icon" sx={{ fontSize: 40, mb: 1 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" className="feature-title" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="feature-description" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Container>
  );
}

export default Features;
