import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import contest from "../../assets/contestre.png";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  Grow,
} from "@mui/material";
import {
  CalendarIcon,
  StarIcon,
  ChevronRight,
  ChevronLeft,
  Trophy,
  Archive,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { keyframes } from "@emotion/react";

// Animation keyframes
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={contest || "/placeholder.svg"}
        alt="Contest"
        className="w-50 h-50"
        style={{ filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))" }}
      />
    </motion.div>
  );
};

const Contest = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate time left until the next Sunday at 8:00 AM
  useEffect(() => {
    const calculateTimeToNextSunday = () => {
      const now = new Date();
      const nextSunday = new Date(now);
      const currentDay = now.getDay();

      let daysUntilSunday = currentDay === 0 ? 7 : 7 - currentDay;
      if (currentDay === 0 && now.getHours() >= 8) {
        daysUntilSunday = 7;
      }

      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(8, 0, 0, 0);

      const timeDiff = nextSunday.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeToNextSunday());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeToNextSunday());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      icon: <StarIcon className="text-orange-500" size={24} />,
      title: "Enhance your rating",
      content:
        "Contests provide opportunities to tackle diverse problems, enhancing your problem-solving and coding skills.",
    },
    {
      icon: <StarIcon className="text-purple-500" size={24} />,
      title: "Learn new algorithms",
      content:
        "Each contest introduces you to new algorithms and data structures to expand your knowledge.",
    },
    {
      icon: <StarIcon className="text-blue-500" size={24} />,
      title: "Compete globally",
      content:
        "Participate with coders from around the world and see where you stand in global rankings.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, "0");
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
      }}
    >
      {/* Content Box with trophy image */}
      <Box
        sx={{
          width: "100%",
          padding: "2rem",
          backgroundImage: `radial-gradient(circle, rgba(80, 86, 94, 0.5), rgba(0, 0, 0, 0.9))`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Logo />

        {/* blurr efeect  */}
        <Box
          sx={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 230, 0, 0.3)",
            filter: "blur(100px)",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />

        {/* Heading.. */}

        <Typography
          variant="h5"
          sx={{
            mt: 2,
            color: "white",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "lighter",
              color: "white",
            }}
          >
            CodeCompete
          </span>{" "}
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "normal",
              color: "white",
            }}
          >
            Contest
          </span>
        </Typography>

        {/* Subheading */}

        <Typography
          sx={{
            color: "gray",
            mt: 2,
            textAlign: "center",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Unlock your potential with our weekly contests and improve your coding
          skills.
        </Typography>
      </Box>

      {/* Codecompete Contest Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ width: "100%", maxWidth: "1200px" }}
      >
        <Typography
          sx={{
            color: "#FFD700",
            mt: 4,
            mb: 3,
            fontFamily: "DM Sans, sans-serif",
            fontSize: { xs: "1.3rem", md: "1.8rem" },
            fontWeight: "bold",
            textAlign: "center",
            position: "relative",
            display: "inline-block",
            width: "100%",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "3px",
              background:
                "linear-gradient(90deg, transparent, #FFD700, transparent)",
              borderRadius: "3px",
            },
          }}
        >
          Weekly Rated Contest
        </Typography>

        {/* Main Contest Card */}
        <Box
          component={motion.div}
          whileHover={{ scale: isMobile ? 1 : 1.01 }}
          sx={{
            width: "100%",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            mb: 4,
            background: "rgba(255, 255, 255, 0.08)",
            // backdropFilter: "blur(12px)",
            // border: "1px solid rgba(255, 255, 255, 0.15)",
            // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            // zIndex: 1,
            // "--glow-color": "rgba(0, 255, 127, 0.5)",
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #FFD700, transparent)",
            },
          }}
        >
          <Grid container>
            {/* Left Side - Contest Details */}
            <Grid item xs={12} md={6} sx={{ p: { xs: 2, md: 4 } }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#FFD700",
                  fontFamily: "DM Sans, sans-serif",
                  mb: 1,
                  letterSpacing: "1px",
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                }}
              >
                CODECOMPETE CONTEST
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: { xs: "1.5rem", sm: "1.2rem", md: "1.6rem" },
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Codecompete Contest 1
              </Typography>

              {/* Timer Countdown - Responsive Layout */}
              <Box
                component={motion.div}
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 0 rgba(255,215,0,0)",
                    "0 0 10px rgba(255,215,0,0.3)",
                    "0 0 0 rgba(255,215,0,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                sx={{
                  backgroundColor: "rgba(144, 202, 249, 0.11)",
                  borderRadius: "8px",
                  p: 2,
                  mb: 3,
                  border: "1px solid rgba(255,215,0,0.3)",
                  width: "100%",
                  overflowX: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: isMobile ? "wrap" : "nowrap",
                    gap: isMobile ? 1 : 0,
                    minWidth: isMobile ? "300px" : "auto",
                  }}
                >
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <Box
                      key={unit}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mr: isMobile ? 0 : 1,
                        mb: isMobile ? 1 : 0,
                        flex: isMobile ? "1 0 40%" : "0 0 auto",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderRadius: "4px",
                          p: "4px 8px",
                          minWidth: "36px",
                          textAlign: "center",
                          mr: 0.5,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Roboto Mono', monospace",
                            fontWeight: "bold",
                            color: "#FFD700",
                            fontSize: "1.1rem",
                          }}
                        >
                          {formatTimeUnit(value)}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "DM Sans, sans-serif",
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "0.8rem",
                          textTransform: "uppercase",
                          mr: isMobile ? 0 : 1.5,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {unit}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "DM Sans, sans-serif",
                    color: "rgba(255,255,255,0.7)",
                    mt: 1,
                    fontSize: "0.9rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Starts in {formatTimeUnit(timeLeft.days)} days{" "}
                  {formatTimeUnit(timeLeft.hours)} hours
                </Typography>
              </Box>

              {/* Contest Details */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                  <CalendarIcon
                    size={18}
                    style={{
                      marginRight: "8px",
                      color: "#347aeb",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                      color: "white",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    Every Sunday, 8:00 AM - 10:00 PM IST
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                  <Box
                    component="span"
                    sx={{ mr: 1, color: "#347aeb", flexShrink: 0 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                      color: "white",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    4 Problems • 2 Hours Duration
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="span"
                    sx={{ mr: 1, color: "#347aeb", flexShrink: 0 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                        fill="currentColor"
                      />
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                      color: "white",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    500+ Registered Participants
                  </Typography>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  onClick={()=>navigate('/registerconetstpage')}
                  variant="contained"
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    fontFamily: "DM Sans, sans-serif",
                    backgroundColor: "#FFD700",
                    color: "#1a1919",
                    fontWeight: "bold",
                    px: 3,
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                    animation: `${pulse} 1.5s infinite`,
                    "&:hover": {
                      backgroundColor: "#ffcc00",
                      boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                    },
                  }}
                >
                  Register Now
                </Button>
                <Button
                  onClick={() => navigate("/viewcontest")}
                  variant="outlined"
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    fontFamily: "DM Sans, sans-serif",
                    borderColor: "#FFD700",
                    color: "#FFD700",
                    fontWeight: "bold",
                    px: 3,
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                    "&:hover": {
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      borderColor: "#ffcc00",
                    },
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Grid>

            {/* Right Side - Slider */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                backgroundColor: "rgba(250, 250, 250, 0.05)",
                p: { xs: 2, md: 4 },
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderLeft: { md: "1px solid rgba(255,255,255,0.1)" },
                borderTop: {
                  xs: "1px solid rgba(255,255,255,0.1)",
                  md: "none",
                },
              }}
            >
              <Box sx={{ position: "relative", minHeight: "220px" }}>
                <AnimatePresence mode="wait">
                  {slides.map(
                    (slide, index) =>
                      activeSlide === index && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                              ml: 1,
                            }}
                          >
                            {slide.icon}
                            <Typography
                              variant="h6"
                              sx={{
                                ml: 1,
                                fontFamily: "DM Sans, sans-serif",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: { xs: "1.1rem", md: "1.2rem" },
                              }}
                            >
                              {slide.title}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.08)",
                              borderRadius: "12px",
                              p: 3,
                              backdropFilter: "blur(5px)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "DM Sans, sans-serif",
                                color: "rgba(255,255,255,0.8)",
                                lineHeight: 1.6,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                              }}
                            >
                              {slide.content}
                            </Typography>
                          </Box>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </Box>

              {/* Slider Controls */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 3,
                }}
              >
                <Button
                  onClick={handlePrevSlide}
                  sx={{
                    minWidth: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <ChevronLeft size={20} />
                </Button>

                <Box sx={{ display: "flex", gap: 1 }}>
                  {slides.map((_, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      animate={{
                        width: activeSlide === index ? "24px" : "8px",
                        backgroundColor:
                          activeSlide === index
                            ? "#FFD700"
                            : "rgba(255,255,255,0.3)",
                      }}
                      sx={{
                        height: "4px",
                        borderRadius: "2px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </Box>

                <Button
                  onClick={handleNextSlide}
                  sx={{
                    minWidth: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <ChevronRight size={20} />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Upcoming Contests Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ width: "100%", marginTop: "2rem" }}
      >
        <Typography
          sx={{
            color: "#FFD700",
            mt: 4,
            mb: 4,
            fontFamily: "DM Sans, sans-serif",
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.8rem" },
            fontWeight: "bold",
            textAlign: "center",
            position: "relative",
            display: "inline-block",
            width: "100%",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "3px",
              background:
                "linear-gradient(90deg, transparent, #FFD700, transparent)",
              borderRadius: "3px",
            },
          }}
        >
          Upcoming Contests
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: 3,
            width: "100%",
            flexWrap: "wrap",
            px: { xs: 2, md: 4 },
            mb: 6,
          }}
        >
          {[2, 3, 4].map((contestNumber, index) => (
            <Grow in timeout={(index + 1) * 300} key={contestNumber}>
              <Box
                component={motion.div}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                sx={{
                  // width: { xs: "100%", sm: "80%", md: "30%" },
                  minWidth: { md: "300px" },
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  transition: "all 0.3s ease",
                  // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, #${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}, #${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)})`,
                  },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#4972c4",
                    fontFamily: "DM Sans, sans-serif",
                    mb: 1,
                    letterSpacing: "1px",
                  }}
                >
                  CODECOMPETE CONTEST
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontFamily: "DM Sans, sans-serif",
                    mb: 2,
                    fontSize: "1.2rem",
                  }}
                >
                  Codecompete Contest {contestNumber}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                  <CalendarIcon
                    size={18}
                    style={{ marginRight: "8px", color: "#347aeb" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "lighter",
                    }}
                  >
                    Every Sunday, 8:00 AM - 10:00 PM IST
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                  <Box component="span" sx={{ mr: 1, color: "#347aeb" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "lighter",
                    }}
                  >
                    4 Problems • 2 Hours Duration
                  </Typography>
                </Box>

                <Box sx={{ mt: "auto", width: "100%" }}>
                  <Button
                   onClick={() => navigate("/viewcontest")}
                    fullWidth
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      textTransform: "none",
                      fontFamily: "DM Sans, sans-serif",
                      borderColor: "#FFD700",
                      color: "#FFD700",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "rgba(255, 215, 0, 0.1)",
                        borderColor: "#ffcc00",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            </Grow>
          ))}
        </Box>
      </motion.div>

      {/* Contest Features */}
      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(to right, rgba(15,15,26,0.8), rgba(22,33,62,0.8))",
          py: 6,
          px: { xs: 2, md: 4 },
          mt: 4,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Typography
          sx={{
            color: "#FFD700",
            mb: 4,
            fontFamily: "DM Sans, sans-serif",
            fontSize: { xs: "1.3rem", md: "1.8rem" },
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Why Join Our Contests?
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            // maxWidth: "1200px",
            justifyContent: "center",
          }}
        >
          {[
            {
              icon: "🏆",
              title: "Win Exciting Prizes",
              description:
                "Top performers get certificates, swag, and premium memberships.",
            },
            {
              icon: "📈",
              title: "Improve Your Skills",
              description:
                "Regular practice with quality problems to enhance your coding abilities.",
            },
            {
              icon: "🌐",
              title: "Global Ranking",
              description:
                "See how you stack up against coders from around the world.",
            },
            // {
            //   icon: "💼",
            //   title: "Career Opportunities",
            //   description: "Get noticed by recruiters from top tech companies.",
            // },
          ].map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "1.5rem 1rem",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  width: "100%",
                  maxWidth: "280px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    mb: 1.5,
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                  }}
                >
                  {feature.description}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Past Contest */}
      <div className="w-full mx-auto mt-10 px-4 md:px-0 ">
      <Typography
          sx={{
            color: "#FFD700",
            mt: 4,
            mb: 4,
            fontFamily: "DM Sans, sans-serif",
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.8rem" },
            fontWeight: "bold",
            textAlign: "center",
            position: "relative",
            display: "inline-block",
            width: "100%",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "3px",
              background:
                "linear-gradient(90deg, transparent, #FFD700, transparent)",
              borderRadius: "3px",
            },
          }}
        >
          Previous Contests
        </Typography>
        
        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700/50">
                  <th className="text-left pb-3 pl-2">Contest</th>
                  <th className="text-left pb-3">Date</th>
                  <th className="text-left pb-3">Participants</th>
                  <th className="text-right pb-3 pr-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50 hover:bg-gray-700/20">
                  <td className="py-4 pl-2">
                    <div className="font-medium">Weekly Contest #41</div>
                    <div className="text-sm text-gray-400">Standard rated contest</div>
                  </td>
                  <td className="py-4">May 29, 2023</td>
                  <td className="py-4">1,248</td>
                  <td className="py-4 pr-2 text-right">
                    <button 
                      onClick={() => navigate("/participatecontest")}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center justify-end w-full">
                      View <ChevronRight className="ml-1" size={16} />
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50 hover:bg-gray-700/20">
                  <td className="py-4 pl-2">
                    <div className="font-medium">Weekly Contest #40</div>
                    <div className="text-sm text-gray-400">Standard rated contest</div>
                  </td>
                  <td className="py-4">May 22, 2023</td>
                  <td className="py-4">1,187</td>
                  <td className="py-4 pr-2 text-right">
                    <button 
                     onClick={() => navigate("/participatecontest")}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center justify-end w-full">
                      View <ChevronRight className="ml-1" size={16} />
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50 hover:bg-gray-700/20">
                  <td className="py-4 pl-2">
                    <div className="font-medium">May Challenge</div>
                    <div className="text-sm text-gray-400">Monthly extended contest</div>
                  </td>
                  <td className="py-4">May 15-20, 2023</td>
                  <td className="py-4">2,456</td>
                  <td className="py-4 pr-2 text-right">
                    <button 
                     onClick={() => navigate("/participatecontest")}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center justify-end w-full">
                      View <ChevronRight className="ml-1" size={16} />
                    </button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              onClick={()=> navigate("/practice/past")}
            className="px-6 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700/50 font-medium rounded-lg transition-all flex items-center">
              View All Past Contests
              <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
       
      
      <div className="absolute bottom-10 right-10 w-24 h-24 text-amber-400/20 z-0">
        <Trophy className="w-full h-full" />
      </div>
      </div>

    </Box>
  );
};

export default Contest;
