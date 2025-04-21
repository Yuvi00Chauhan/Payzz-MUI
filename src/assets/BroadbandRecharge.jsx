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

  function BroadbandRecharge(){
    const handleRecharge=()=>alert("Recharge Successful");
    return(
        <Container maxWidth="sm"sx={{mt:10}}>
            <Typography variant="h4" align="center" gutterBottom>Broadband Recharge</Typography>
            <Box component="form" onSubmit={handleRecharge} sx={{mt:4}}>
                <TextField fullWidth required
                id="broadband-recharge"
                label="Broadband Number"
                placeholder="Enter Your Broadband Number"
                margin="normal"/>
                <FormControl fullWidth required margin="normal">
                    <InputLabel id="provider-label">Select ISP</InputLabel>
                    <Select labelId="provider-label"
                    id="operator"
                    label="Select ISP"
                    defaultValue="">
                        <MenuItem value="">Select ISP</MenuItem>
                        <MenuItem value="Airtel">Airtel</MenuItem>
                        <MenuItem value="Jio">Jio</MenuItem>
                        <MenuItem value="BSNL">BSNL</MenuItem>
                        <MenuItem value="ACT">ACT</MenuItem>
                        <MenuItem value="Hathway">Hathway</MenuItem>
                        <MenuItem value="Excitel">Excitel</MenuItem>
                    </Select>
                </FormControl>
<TextField fullWidth required
id="amount"
label="Amount"
type="number"
placeholder="Enter Amount"
margin="normal"/>
 <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Recharge
        </Button>
            </Box>
        </Container>
    );
  }
  export default BroadbandRecharge;