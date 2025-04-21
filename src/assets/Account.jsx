import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";

function Account() {
  const navigate = useNavigate();
  const user = {
    name: "Yuvraj Nirwan",
    email: "yuvi@example.com",
    phone: "+91-9876543210",
    joined: "March 2024",
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", alignItems: "center", justifyContent: "center", pt: 6 }}>
      <Card elevation={3} sx={{ width: "100%" }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            My Account
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={user.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={user.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phone" secondary={user.phone} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Member Since" secondary={user.joined} />
            </ListItem>
          </List>
          <Stack direction="row" spacing={2} justifyContent="space-between" mt={3}>
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
            <Button variant="outlined" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Account;
