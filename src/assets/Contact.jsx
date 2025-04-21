import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log("Contact Form Submitted:", { name, email, message });
    alert("Thank you for reaching out! We'll get back to you shortly.");
    event.target.reset();
  };

  return (
    <Container maxWidth="sm" className="contact-container">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Have questions or feedback? We'd love to hear from you!
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="contact-form"
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          multiline
          rows={5}
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submit-button"
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
