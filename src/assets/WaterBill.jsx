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

function WaterBill(){
    const handleRecharge=()=>alert("Recharge Successful");

    return(
        <Container  maxWidth="sm" sx={{mt:10}}> 
        <Typography variant="h4" align="center" gutterBottom>
            Water Bill Payment
        </Typography>
        <Box component="form" onSubmit={handleRecharge} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          required
          id="consumerId"
          name="consumerId"
          label="Consumer ID"
          placeholder="Enter consumer ID"
          margin="normal"
        />

        <FormControl fullWidth required margin="normal">
          <InputLabel id="water-provider-label">Select Water Board</InputLabel>
          <Select
            labelId="water-provider-label"
            id="provider"
            name="provider"
            label="Select Water Board"
            defaultValue=""
          >
            <MenuItem value="">Select Water Board</MenuItem>
            <MenuItem value="Delhi Jal Board">Delhi Jal Board</MenuItem>
            <MenuItem value="Bangalore Water Supply">Bangalore Water Supply & Sewerage Board</MenuItem>
            <MenuItem value="Mumbai Jal Board">Municipal Corporation of Greater Mumbai</MenuItem>
            <MenuItem value="Chennai Metro Water">Chennai Metro Water Supply</MenuItem>
            <MenuItem value="Hyderabad Water Board">Hyderabad Metropolitan Water Supply</MenuItem>
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

export default WaterBill;