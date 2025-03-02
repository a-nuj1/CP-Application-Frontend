import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  { 
    question: "What is CodeCompete, and how does it help programmers?", 
    answer: "CodeCompete is a competitive coding platform designed to help programmers enhance their problem-solving skills through real-time contests, coding challenges, and structured learning resources. It provides a seamless experience for beginners and experienced coders to practice, compete, and improve."
  },
  { 
    question: "How can I participate in CodeCompete contests?", 
    answer: "To participate in CodeCompete contests, you need to sign up on the platform, navigate to the 'Contests' section, and register for upcoming competitions. Contests feature problems of different difficulty levels, and you can submit solutions in multiple programming languages. Leaderboards and rankings are updated in real-time."
  },
  { 
    question: "Does CodeCompete provide solutions or explanations for problems?", 
    answer: "Yes! After a contest ends, CodeCompete provides editorial solutions that explain optimal approaches and different ways to solve problems. Additionally, users can engage in discussion forums to share alternative solutions, understand tricky concepts, and improve their problem-solving skills."
  },
  { 
    question: "Can I track my progress and compare with others?", 
    answer: "Absolutely! CodeCompete features detailed performance analytics, allowing you to track your growth over time. You can compare your rankings on leaderboards, analyze your submission history, and identify areas for improvement. Personalized insights help you refine your strategies and enhance your coding abilities."
  },
  { 
    question: "Is there a way to practice specific topics on CodeCompete?", 
    answer: "Yes! CodeCompete offers topic-wise problem sets covering key areas such as Data Structures, Algorithms, System Design, and Competitive Programming techniques. Users can filter problems based on difficulty level, topic, and contest history, making it easier to practice weak areas and strengthen core concepts."
  },
  { 
    question: "What are the best strategies to improve in competitive programming?", 
    answer: "To improve in competitive programming, practice consistently by solving problems daily and participating in contests. Focus on mastering key algorithms and data structures, such as graphs, dynamic programming, and trees. Analyzing editorial solutions and optimizing your code for efficiency will help you become a better problem solver."
  },
  { 
    question: "Does CodeCompete offer mentorship or career guidance?", 
    answer: "Yes! CodeCompete provides structured mentorship programs where experienced programmers guide students and professionals on their coding journey. We also offer interview preparation resources, career guidance sessions, and networking opportunities to help users land job offers in top tech companies."
  }
];


function Section4() {
  const [openIndex, setOpenIndex] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <Container 
      maxWidth="md" 
      sx={{
        padding: "2rem",
        backgroundColor: "black",
        color: "white",
        mt: "3rem",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          mb: 8,
          fontFamily: "DM Sans, sans-serif",
          fontWeight: "bold",
          fontSize: { xs: "1.9rem", sm: "2.8rem", md: "2.9rem" },
          lineHeight: { xs: "1.2", sm: "1.3", md: "1.4" },
          textAlign: "center",
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ Items */}
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={openIndex[index] || false}
          sx={{
            backgroundColor: "black",
            color: "white",
            // mb: "1rem",
            borderBottom: "1.5px solid #444",
            textAlign: "center",
          }}
        >
          <AccordionSummary
            onClick={() => toggleAccordion(index)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.77rem",
            }}
          >
            {/* Question */}
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: "1rem", sm: "1.08rem" }, 
                color: "gray.800", 
                fontWeight: "400",
                flexGrow: 1,
                textAlign: "left",
                // bgcolor:"blue",
                pl: "0.3rem",
                // mb: "-1rem",
              }}
            >
              {faq.question}
            </Typography>

            {/* Icon (Add / Remove) */}
            <Box 
              sx={{
                width: { xs: "1.2rem", sm: "1.68rem" },
                height: { xs: "1.2rem", sm: "1.68rem" },
                borderRadius: "50%",
                border: "2px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                ml: "1rem",
                mt:{ xs: "0.4rem", sm: "0.1rem" },
              }}
            >
              {openIndex[index] ? (
                <RemoveIcon sx={{ fontSize: { xs: "1rem", sm: "1.4rem" }, color: "red" }} />
              ) : (
                <AddIcon sx={{ fontSize: { xs: "1rem", sm: "1.4rem" }, color: "red" }} />
              )}
            </Box>
          </AccordionSummary>

          {/* Answer */}
          <AccordionDetails
            sx={{
              // reduce top margin 
              pl: "0.3rem",
              // bgcolor:"blue",
              fontWeight:"200",
              fontFamily: "Poppins, sans-serif",
              marginTop: "-1rem",
              padding: "1rem",
              textAlign: "left",
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "zinc.300"}}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default Section4;
