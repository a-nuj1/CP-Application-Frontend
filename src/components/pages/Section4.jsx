import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const faqs = [
  "What's the best way to prepare for coding interviews?",
  "How should I approach system design interview questions?",
  "Are the Striver's SDE sheet questions enough for interview preparation?",
  "How do I get the most out of your website or TUF community?",
  "What are the essential things to cover in core coding subjects?",
  "Do you offer any mentorship or career guidance programs?",
];

function Section4() {
  return (
    <Container maxWidth="md" sx={{ padding: "2rem", backgroundColor: "black", color: "white", mt: "3rem", fontFamily: "Poppins, sans-serif" }}>
      <Typography variant="h4" paddingBottom="1.5rem" fontWeight="bold" textAlign="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((question, index) => (
        <Accordion key={index} sx={{ backgroundColor: "black", color: "white", borderBottom: "1px solid #444", marginBottom: "1.5rem" }}>
          <AccordionSummary 
            expandIcon={<AddIcon sx={{ color: "red", fontSize: "1.8rem", border: "2px solid red", borderRadius: "50%", padding: "0.15rem" }} />}>
            <Typography variant="h6" fontWeight="" sx={{ fontSize: "1.2rem" }}>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ fontSize: "1rem" }}>This is the answer to the question.</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default Section4;
