import React from "react";
import { Container, Paper, Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #1f2937, #111827)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      {/* Hero Section */}
      <Container>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(to right, #f97316, #dc2626)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CODE COMPETE
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: "gray.400", maxWidth: "600px", mx: "auto" }}>
          Weekly DSA contests to test your skills, compete with friends, and climb the leaderboard!
        </Typography>
        <Button
          component={Link}
          to="/contest"
          variant="contained"
          sx={{ mt: 4, bgcolor: "#2563eb", "&:hover": { bgcolor: "#1e40af" } }}
        >
          Join the Contest
        </Button>
      </Container>

      {/* Features Section */}
      <Grid container spacing={3} sx={{ mt: 6, px: 4 }}>
        {[
          { title: "Upcoming Contests", desc: "Check the schedule and prepare for the next challenge." },
          { title: "Leaderboard", desc: "Track your progress and see how you rank among others." },
          { title: "Practice Mode", desc: "Sharpen your skills with topic-wise problems before the contest." },
        ].map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "#1e293b",
                color: "white",
                border: "1px solid #374151",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="gray.400">
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Section1;
