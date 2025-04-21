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


function DTHrecharge() {
    function handleRecharge(e) {
        e.preventDefault();
        console.log("Recharge submitted");
      }
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        DTH Recharge
      </Typography>

      <Box component="form" onSubmit={handleRecharge} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          required
          id="DthNo"
          label="Subscriber ID"
          placeholder="Enter Subscriber ID"
          margin="normal"
        />

        <FormControl fullWidth required margin="normal">
          <InputLabel id="operator-label">Select Operator</InputLabel>
          <Select labelId="operator-label" id="operator" label="Select Operator" defaultValue="">
            <MenuItem value="">Select Operator</MenuItem>
            <MenuItem value="Tata Play">Tata Play</MenuItem>
            <MenuItem value="Jio TV">Jio TV</MenuItem>
            <MenuItem value="Airtel TV">Airtel TV</MenuItem>
            <MenuItem value="Videocon">Videocon</MenuItem>
            <MenuItem value="Sun Direct">Sun Direct</MenuItem>
            <MenuItem value="Dish TV">Dish TV</MenuItem>
            <MenuItem value="Reliance Digital TV">Reliance Digital TV</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          required
          id="amount"
          label="Amount"
          type="number"
          placeholder="Enter amount"
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Recharge Now
        </Button>
      </Box>
    </Container>
  );
}

export default DTHrecharge;
