import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What is CodeCompete, and how does it help programmers?",
    answer:
      "CodeCompete is a competitive coding platform designed to help programmers enhance their problem-solving skills through real-time contests, coding challenges, and structured learning resources. It provides a seamless experience for beginners and experienced coders to practice, compete, and improve.",
    icon: "🚀",
  },
  {
    question: "How can I participate in CodeCompete contests?",
    answer:
      "To participate in CodeCompete contests, you need to sign up on the platform, navigate to the 'Contests' section, and register for upcoming competitions. Contests feature problems of different difficulty levels, and you can submit solutions in multiple programming languages. Leaderboards and rankings are updated in real-time.",
    icon: "🏆",
  },
  {
    question:
      "Does CodeCompete provide solutions or explanations for problems?",
    answer:
      "Yes! After a contest ends, CodeCompete provides editorial solutions that explain optimal approaches and different ways to solve problems. Additionally, users can engage in discussion forums to share alternative solutions, understand tricky concepts, and improve their problem-solving skills.",
    icon: "📚",
  },
  {
    question: "Can I track my progress and compare with others?",
    answer:
      "Absolutely! CodeCompete features detailed performance analytics, allowing you to track your growth over time. You can compare your rankings on leaderboards, analyze your submission history, and identify areas for improvement. Personalized insights help you refine your strategies and enhance your coding abilities.",
    icon: "📊",
  },
  {
    question: "Is there a way to practice specific topics on CodeCompete?",
    answer:
      "Yes! CodeCompete offers topic-wise problem sets covering key areas such as Data Structures, Algorithms, System Design, and Competitive Programming techniques. Users can filter problems based on difficulty level, topic, and contest history, making it easier to practice weak areas and strengthen core concepts.",
    icon: "🎯",
  },
  {
    question:
      "What are the best strategies to improve in competitive programming?",
    answer:
      "To improve in competitive programming, practice consistently by solving problems daily and participating in contests. Focus on mastering key algorithms and data structures, such as graphs, dynamic programming, and trees. Analyzing editorial solutions and optimizing your code for efficiency will help you become a better problem solver.",
    icon: "🧠",
  },
  {
    question: "Does CodeCompete offer mentorship or career guidance?",
    answer:
      "Yes! CodeCompete provides structured mentorship programs where experienced programmers guide students and professionals on their coding journey. We also offer interview preparation resources, career guidance sessions, and networking opportunities to help users land job offers in top tech companies.",
    icon: "👨‍🏫",
  },
];

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        sx={{
          background: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          mb: 2,
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 20px ${theme.palette.primary.main}20`,
          },
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 3,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                flexShrink: 0,
              }}
            >
              {faq.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: "bold",
                fontSize: isMobile ? "1rem" : "1.1rem",
              }}
            >
              {faq.question}
            </Typography>
          </Box>
          {isOpen ? (
            <FiChevronUp
              style={{ color: theme.palette.primary.main, fontSize: "1.2rem" }}
            />
          ) : (
            <FiChevronDown
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2rem" }}
            />
          )}
        </Box>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 0,
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                <Typography>{faq.answer}</Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </motion.div>
  );
};

function Section4() {
  const theme = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <Container maxWidth="md">
        <Box sx={{ position: "relative", textAlign: "center", mb: 6 }}>
          {/* Blur Circle effect */}
          
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "5%",
              left: "30%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 230, 0, 0.3)",
              filter: "blur(100px)",
              zIndex: -1,
              pointerEvents: "none",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: "bold",
              color: "white",
              fontSize: { xs: "2.2rem", md: "3rem" },
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "700px",
              mx: "auto",
              mb: 6,
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            Find answers to common questions about CodeCompete and how to get
            the most out of our platform.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Section4;
