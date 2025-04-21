import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQs() {
  return (
    <Container maxWidth="md" sx={{ my: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What is Payzz?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Payzz is a simple and secure platform to recharge mobile, DTH, broadband, and pay utility bills—all in one place.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Is Payzz secure to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. Payzz uses end-to-end encryption and secure payment gateways to protect your transactions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What payment methods are supported?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We support UPI, credit/debit cards, net banking, and wallets like Paytm, PhonePe, and Google Pay.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What should I do if my recharge fails?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If your recharge fails, don’t worry. Your money will be refunded within 2-3 business days. You can also contact our support team for help.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default FAQs;
