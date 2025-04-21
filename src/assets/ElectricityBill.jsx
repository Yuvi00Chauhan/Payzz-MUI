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

function ElectricityBill() {
  const handleRecharge = (event) => {
    event.preventDefault();
    alert("Electricity Bill Paid Successfully");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Electricity Bill Payment
      </Typography>

      <Box component="form" onSubmit={handleRecharge} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          required
          id="consumerNumber"
          name="consumerNumber"
          label="Consumer Number"
          placeholder="Enter consumer number"
          margin="normal"
        />

        <FormControl fullWidth required margin="normal">
          <InputLabel id="operator-label">Select Provider</InputLabel>
          <Select
            labelId="operator-label"
            id="operator"
            name="operator"
            label="Select Provider"
            defaultValue=""
          >
            <MenuItem value="">Select Provider</MenuItem>
            <MenuItem value="Tata Power">Tata Power</MenuItem>
            <MenuItem value="Adani Electricity">Adani Electricity</MenuItem>
            <MenuItem value="NPCL">Noida Power Company Limited (NPCL)</MenuItem>
            <MenuItem value="UPPCL">Uttar Pradesh Power Corporation Ltd (UPPCL)</MenuItem>
            <MenuItem value="Reliance Energy">Reliance Energy</MenuItem>
            <MenuItem value="MSEDCL">Maharashtra State Electricity Distribution Co. Ltd.</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          required
          id="billAmount"
          name="billAmount"
          label="Bill Amount"
          type="number"
          placeholder="Enter bill amount"
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Pay Bill
        </Button>
      </Box>
    </Container>
  );
}

export default ElectricityBill;
