import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const features = [
  {
    title: "Topic-Wise Competitive Contests",
    description:
      "Tackle coding challenges tailored to specific topics. Know the focus in advance and sharpen your skills with targeted preparation.",
    icon: "🎯",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Fair & Flexible Competition",
    description:
      "Join contests at your convenience within a 24-hour window — with unique question sets to ensure fairness and zero cheating.",
    icon: "⏳",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Local & Global Leaderboards",
    description:
      "Compete with friends in private groups or climb the global ladder. Your performance is ranked and tracked in real time.",
    icon: "📊",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    title: "Engaging Community & Rewards",
    description:
      "Discuss problems, share insights, and win exciting prizes — all while learning and growing with a vibrant coding community.",
    icon: "🎁",
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

const FeatureHighlight = ({ activeIndex }) => {
  const activeFeature = features[activeIndex];
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        background: activeFeature.color,
        borderRadius: "24px",
        padding: "40px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        boxShadow: `0 20px 40px -10px ${activeFeature.color.split("0%")[0]}50)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)",
          zIndex: 1,
        }}
      />

      <motion.div
        style={{ zIndex: 2 }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          {activeFeature.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.1rem",
            mb: 4,
            maxWidth: { xs: "100%", md: "80%" },
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          {activeFeature.description}
        </Typography>

        <motion.div
          whileHover={{ x: 5 }}
          onClick={() => navigate("/")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          Learn more <FiArrowRight style={{ marginLeft: "8px" }} />
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          right: "40px",
          bottom: "40px",
          fontSize: "120px",
          opacity: 0.2,
          zIndex: 1,
        }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        {activeFeature.icon}
      </motion.div>
    </motion.div>
  );
};

function Section2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {!isMobile && (
          <>
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
              Why Choose{" "}
              <span style={{ color: theme.palette.primary.main }}>
                CodeCompete
              </span>
              ?
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
              We're redefining how developers prepare for technical interviews
              through gamified learning and real-world challenges.
            </Typography>
          </>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Feature selector - Hidden on mobile */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "280px",
                mb: { xs: 4, md: 0 },
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    background:
                      index === activeIndex
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(255,255,255,0.05)",
                    borderRadius: "12px",
                    padding: "16px",
                    cursor: "pointer",
                    borderLeft:
                      index === activeIndex
                        ? `4px solid ${theme.palette.primary.main}`
                        : "4px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background:
                          index === activeIndex
                            ? "white"
                            : "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color:
                          index === activeIndex
                            ? theme.palette.primary.main
                            : "white",
                        fontSize: "20px",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: index === activeIndex ? "bold" : "normal",
                        fontSize: "1rem",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          )}

          {/* Main feature display - Always visible */}
          <Box
            sx={{
              flex: 1,
              minHeight: { xs: "350px", md: "400px" },
              width: "100%",
            }}
          >
            <AnimatePresence mode="wait">
              <FeatureHighlight key={activeIndex} activeIndex={activeIndex} />
            </AnimatePresence>
          </Box>
        </Box>

        {/* Benefits section - Only 3 cards with floating particles */}
        <Box
          sx={{
            mt: 8,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {[
            {
              title: "Weekly Coding Contests",
              description:
                "Compete in timed challenges and climb the leaderboard",
              icon: "⏱️",
              color: "rgba(100, 210, 255, 0.1)",
            },
            {
              title: "DSA Problem Bank",
              description: "500+ categorized problems with detailed solutions",
              icon: "📚",
              color: "rgba(255, 150, 100, 0.1)",
            },
            {
              title: "Performance Analytics",
              description: "Track your progress with detailed statistics",
              icon: "📊",
              color: "rgba(150, 255, 150, 0.1)",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  background: benefit.color,
                  borderRadius: "16px",
                  p: 3,
                  height: "100%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      position: "absolute",
                      width: "6px",
                      height: "6px",
                      background: "white",
                      borderRadius: "50%",
                      zIndex: 0,
                      top: `${Math.random() * 80 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                    }}
                  />
                ))}

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: "16px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {benefit.icon}
                </motion.div>

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Box>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    height: "2px",
                    background: theme.palette.primary.main,
                    marginTop: "16px",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Section2;
