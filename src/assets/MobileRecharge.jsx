import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

function MobileRecharge() {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    operator: "",
    state: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecharge = (e) => {
    e.preventDefault();
    // Placeholder: You can replace this with an API call
    console.log("Recharge data:", formData);
    alert("Recharge initiated!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Mobile Recharge
      </Typography>

      <Box component="form" onSubmit={handleRecharge} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          required
          name="mobileNumber"
          label="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter mobile number"
          margin="normal"
        />

        <FormControl fullWidth required margin="normal">
          <InputLabel id="operator-label">Select Operator</InputLabel>
          <Select
            labelId="operator-label"
            name="operator"
            value={formData.operator}
            label="Select Operator"
            onChange={handleChange}
          >
            <MenuItem value="">Select Operator</MenuItem>
            <MenuItem value="Airtel">Airtel</MenuItem>
            <MenuItem value="Jio">Jio</MenuItem>
            <MenuItem value="Vi">VI</MenuItem>
            <MenuItem value="BSNL">BSNL</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth required margin="normal">
          <InputLabel id="state-label">Select State</InputLabel>
          <Select
            labelId="state-label"
            name="state"
            value={formData.state}
            label="Select State"
            onChange={handleChange}
          >
            <MenuItem value="">Select State</MenuItem>
            {[
              ["AP", "Andhra Pradesh"], ["AR", "Arunachal Pradesh"], ["AS", "Assam"],
              ["BR", "Bihar"], ["CT", "Chhattisgarh"], ["GA", "Goa"], ["HR", "Haryana"],
              ["HP", "Himachal Pradesh"], ["JK", "Jammu and Kashmir"], ["JH", "Jharkhand"],
              ["KA", "Karnataka"], ["KL", "Kerala"], ["MP", "Madhya Pradesh"],
              ["MH", "Maharashtra"], ["MN", "Manipur"], ["ML", "Meghalaya"], ["MZ", "Mizoram"],
              ["NL", "Nagaland"], ["OR", "Odisha"], ["PB", "Punjab"], ["RJ", "Rajasthan"],
              ["SK", "Sikkim"], ["TN", "Tamil Nadu"], ["TG", "Telangana"], ["TR", "Tripura"],
              ["UT", "Uttarakhand"], ["UP", "Uttar Pradesh"], ["WB", "West Bengal"],
              ["AN", "Andaman and Nicobar Islands"], ["CH", "Chandigarh"], ["DN", "Dadra and Nagar Haveli"],
              ["DD", "Daman and Diu"], ["DL", "Delhi"], ["LD", "Lakshadweep"], ["PY", "Puducherry"]
            ].map(([code, name]) => (
              <MenuItem key={code} value={code}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          required
          name="amount"
          label="Amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
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

export default MobileRecharge;
