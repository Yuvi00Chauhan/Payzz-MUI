import React from "react";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Box,
} from "@mui/material";

function CableTV() {
  const handleRecharge = () => alert("Recharge Successful");
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cable TV Recharge
      </Typography>
      <Box component="form" onSubmit={handleRecharge} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          required
          id="cable-recharge"
          label="Suscriber ID"
          placeholder="Enter Your Suscriber ID"
          margin="normal"
        />
        <FormControl fullWidth required margin="normal">
          <InputLabel id="provider-label">Select provider</InputLabel>
          <Select
            labelId="provider-label"
            id="operator"
            label="Select provider"
            defaultValue=""
          >
            <MenuItem value="">Select ISP</MenuItem>
            <MenuItem value="Airtel">Den</MenuItem>
            <MenuItem value="Jio">Siti</MenuItem>
            <MenuItem value="BSNL">Hathway</MenuItem>
            <MenuItem value="ACT">GTPL</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          required
          id="amount"
          label="Amount"
          type="number"
          placeholder="Enter Amount"
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Recharge
        </Button>
      </Box>
    </Container>
  );
}
export default CableTV;
