import { useState, useEffect } from "react";
import contest from "../../assets/contestre.png";
import { Box, Typography, Button, Grid } from "@mui/material";
import { CalendarIcon, StarIcon } from "lucide-react";

export const Logo = () => {
  return (
    <img
      src={contest || "/placeholder.svg"}
      alt="Contest"
      className="w-50 h-50"
    />
  );
};

const Contest = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  useEffect(() => {
    const calculateTimeToNextSunday = () => {
      const now = new Date();
      const nextSunday = new Date(now);
      const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, etc.

      // Calculate days until next Sunday
      const daysUntilSunday = currentDay === 0 ? 7 : 7 - currentDay;
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(8, 0, 0, 0); // 8 AM

      // If it's already Sunday and past 8 AM, set to next Sunday

      //NEED FIX HERE
      // TO DO

      if (currentDay === 0 && now.getHours() >= 8) {
        nextSunday.setDate(nextSunday.getDate() + 7);
      }

      const timeDiff = nextSunday.getTime() - now.getTime();

      // Convert to days, hours, minutes, seconds
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Set initial time
    setTimeLeft(calculateTimeToNextSunday());

    // Update every second
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, "0");
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

      {/* Weekly Rated Contest Heading */}

      <Typography
        sx={{
          color: "#b7c4c3",
          mt: 4,
          mb: 3,
          fontFamily: "DM Sans, sans-serif",
          alignSelf: "flex-start",
          ml: { xs: 10, md: 30 },
          fontSize: { xs: "1rem", sm: "1.1rem", md: "2rem" },
        }}
      >
        Rated Weekly (Contest)
      </Typography>

      {/* Contest Information Box */}
      <Box
        onMouseMove={handleMouseMove}
        className="tilt glow-card"
        sx={{
          width: "70%",
          height:"auto",
          borderRadius: "12px",
          overflow: "hidden",
          mb: 4,
          background: "rgba(255, 255, 255, 0.11)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          zIndex: 1,
          "--glow-color": "rgba(0, 255, 127, 0.5)",
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
              }}
            >
              CodeCompete contest
            </Typography>

            {/* Contest Info */}

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "white",
                fontFamily: "DM Sans, sans-serif",
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                mb: 2,
              }}
            >
              Weekly Contest 1
            </Typography>

            {/* Timer Countdown Box */}

            <Box
              sx={{
                backgroundColor: "rgba(144, 202, 249, 0.11)",
                borderRadius: "8px",
                p: 1,
                display: "inline-block",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: "medium",
                }}
              >
                Starts in {formatTimeUnit(timeLeft.days)}d :{" "}
                {formatTimeUnit(timeLeft.hours)}h :{" "}
                {formatTimeUnit(timeLeft.minutes)}m :{" "}
                {formatTimeUnit(timeLeft.seconds)}s
              </Typography>
            </Box>

            {/* calendar Icon and texts */}

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <CalendarIcon
                size={18}
                style={{ marginRight: "8px", color: "#347aeb" }}
              />
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "white",
                }}
              >
                Every Sunday, 8:00 AM - 10:00 PM IST
              </Typography>
            </Box>

            {/* problem Heading */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                cursor: "pointer",
              }}
            >
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
                  fontFamily: "DM Sans, sans-serif",
                  color: "white",
                }}
              >
                Problems
              </Typography>
            </Box>

            {/* View Details Button */}
            <Button
              variant="outlined"
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                fontFamily: "DM Sans, sans-serif",
                borderColor: "#FFD700",
                color: "#FFD700",
                "&:hover": {
                  backgroundColor: "#FFD700",
                  color: "#1a1919",
                },
                px: 3,
              }}
            >
              View details
            </Button>
          </Grid>

          {/* Right Side - Slider */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: "rgba(250, 250, 250, 0.11)",
              p: { xs: 2, md: 4 },
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ position: "relative", minHeight: "180px" }}>
              {slides.map((slide, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    opacity: activeSlide === index ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    pointerEvents: activeSlide === index ? "auto" : "none",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", mb: 2, ml: 1 }}
                  >
                    {slide.icon}
                    <Typography
                      variant="h6"
                      sx={{
                        ml: 1,
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: "medium",
                      }}
                    >
                      {slide.title}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.11)",
                      borderRadius: "8px",
                      p: 3,
                      backdropFilter: "blur(5px)",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "DM Sans, sans-serif",
                        color: "white",
                      }}
                    >
                      {slide.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Slider Controls */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              {slides.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "24px",
                    height: "4px",
                    backgroundColor: activeSlide === index ? "#FFD700" : "#ddd", // Ensures only one is highlighted
                    mx: 0.5,
                    borderRadius: "2px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "space-between",
                px: 2,
              }}
            >

            </Box>

          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default Contest;
