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

function GasBill() {
  const handleRecharge = (event) => {
    event.preventDefault(); // prevent page reload
    alert("Recharge Successful");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Gas Bill Payment
      </Typography>

      <Box component="form" onSubmit={handleRecharge} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          required
          id="connectionNumber"
          label="Connection Number"
          placeholder="Enter connection number"
          margin="normal"
        />

        <FormControl fullWidth required margin="normal">
          <InputLabel id="gas-provider-label">Select Gas Provider</InputLabel>
          <Select
            labelId="gas-provider-label"
            id="gasProvider"
            label="Select Gas Provider"
            defaultValue=""
          >
            <MenuItem value="">Select Provider</MenuItem>
            <MenuItem value="Adani">Adani</MenuItem>
            <MenuItem value="GAIL">GAIL</MenuItem>
            <MenuItem value="IOC">IOC</MenuItem>
            <MenuItem value="Indane">Indane</MenuItem>
            <MenuItem value="IGL">Indraprastha Gas Limited (IGL)</MenuItem>
            <MenuItem value="MGL">Mahanagar Gas Limited (MGL)</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          required
          id="amount"
          label="Amount"
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

export default GasBill;
