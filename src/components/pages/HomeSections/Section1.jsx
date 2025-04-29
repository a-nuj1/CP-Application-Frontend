import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const features = [
  {
    title: "Master DSA Concepts",
    desc: "Explore a structured collection of problems and learning paths designed to enhance your algorithmic skills effectively.",
    path: "/practice/dsa",
  },
  {
    title: "Compete in Weekly Contests",
    desc: "Join exciting coding battles, challenge peers, and climb the leaderboard every week to prove your problem-solving skills.",
    path: "/contest",
  },
  {
    title: "Problems of the Day",
    desc: "Tackle daily coding challenges that are handpicked to boost your skills and keep you sharp for interviews.",
    path: "/practice/potd",
  },
  {
    title: "Global & Group Leaderboards",
    desc: "Compare your performance on the world stage and within your coding communities all in one place.",
    path: "/leaderboard"
  },
  {
    title: "Connect & Grow",
    desc: "Engage with a community of coders, participate in discussions, and collaborate on projects to grow as a programmer.",
    path: "/groups/discover"
  },
];

const glowColors = [
  "rgba(214, 88, 208, 0.5)",
  "rgba(0, 255, 127, 0.5)",
  "rgba(30, 144, 255, 0.5)",
  "rgba(255, 99, 71, 0.5)",
  "rgba(117, 230, 228, 0.5)",
];

function Section1() {

  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `radial-gradient(closest-side, rgba(255, 230, 0, 0.20), #000)`,
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top -350px center",
        color: "white",
        display: "flex",
        textAlign: "center",
        px: 3,
      }}
    >
      <Container>
      
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            mt: 8,
            mb: 1,
            fontFamily: "DM Sans, sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "1.9rem", sm: "2.8rem", md: "2.9rem" },
            lineHeight: { xs: "1.2", sm: "1.3", md: "1.4" },
          }}
        >
          Level Up Your DSA Skills:{" "}
          <span style={{ color: "#FFD700" }}>
            Your Ultimate Preparation Hub!
          </span>
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            color: "gray",
            mb: 10,
            padding: { xs: "0 1rem", sm: "0 2rem", md: "0 8rem" },
            fontSize: { xs: "0.89rem", sm: "0.89rem", md: "1.08rem" },
            opacity: 0.8,
          }}
        >
          Turn Your Learning into Competition – Master DSA Concepts with
          Structured Practice, Join Weekly Topic-Based Coding Contests, Dominate
          Local and Global Leaderboards, and Win Rewards for Your Coding
          Excellence!
        </Typography>

        {/* Cards */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className="glow-card"
                onMouseMove={handleMouseMove}
                sx={{
                  background: "rgba(26, 25, 25, 1)",
                  color: "white",
                  textAlign: "left",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 3,
                  borderRadius: "18px",
                  position: "relative",
                  overflow: "hidden",
                  "--glow-color": glowColors[index % glowColors.length], 
                }}
              >
                <CardContent sx={{ flex: 1, paddingLeft: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#ffffff",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b0b0b0",
                      fontFamily: "DM Sans, sans-serif",
                      mb: 2,
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </CardContent>
                <Button

                  onClick={() => navigate(feature.path)}
                  variant="outlined"
                  sx={{
                    borderColor: "#FFD700",
                    color: "#FFD700",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    width: "50%",
                    mx: 2,
                    mb: 2,
                    textTransform: "none",
                    fontFamily: "DM Sans, sans-serif",
                    "&:hover": { backgroundColor: "#FFD700", color: "#1a1919" },
                  }}
                >
                  View{" "}
                  <IoChevronForwardOutline style={{ fontSize: "1.2rem" }} />
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 230, 0, 0.3)",
          filter: "blur(100px)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}

export default Section1;
