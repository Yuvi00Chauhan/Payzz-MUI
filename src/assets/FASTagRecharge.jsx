import React from "react";
import { Container, Typography, TextField, FormControl, InputLabel, MenuItem, Select, Button, Box } from "@mui/material";

function FASTag(){
    const handleRecharge=()=>alert("Recharge successful")
    return (
        <Container maxWidth="sm" sx={{mt:10}}>
            <Typography variant="h4" align="center" gutterBottom>
                FASTag Recharge
            </Typography>

            <Box component="form" onSubmit={handleRecharge} sx={{mt:4}}>
                <TextField fullWidth required
                id="vehicle-number"
                label="Vehicle Number"
                placeholder="Enter vehicle no."
                margin="normal"/>
                <FormControl fullWidth required margin="normal">
                    <InputLabel id="operator-label">Select Provider Bank</InputLabel>
                    <Select labelId="operator-label" id="operator" label="Select Provider Bank" defaultValue="">
                       <MenuItem value="">Select Bank</MenuItem>
                       <MenuItem value="KMBK">Kotak Mahindra Bank</MenuItem>
                       <MenuItem value="PNB">Punjab National Bank</MenuItem>
                       <MenuItem value="KMBK">Kotak Mahindra Bank</MenuItem>
                       <MenuItem value="Indus">IndusInd Bank</MenuItem>
                       <MenuItem value="KMBK">Kotak Mahindra Bank</MenuItem>
                       <MenuItem value="Airtel">Airtel Payments Bank</MenuItem>
                       <MenuItem value="SBI">State Bank of India</MenuItem>
                       <MenuItem value="AU">AU Small Finance Bank</MenuItem>
                       <MenuItem value="Axis">Axis Bank</MenuItem>
                       <MenuItem value="Canara">Canara Bank</MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth required
                id="amount"
                label="Amount"
                type="number"
                placeholder="Enter amount"
                margin="normal"/>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt:2}}>Recharge</Button>
            </Box>
        </Container>
    );
}
export default FASTag;