import React from "react";
import { Grid, Typography, Box } from "@mui/material";

function Section1() {
  return (
    <Grid container spacing={2} sx={{ height: "100vh", padding: "2rem", position: "relative" }}>
      {/* Left Section (0.5fr) */}
      <Grid 
        item xs={12} md={4} 
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Welcome to CodeCompete
          </Typography>
          <Typography variant="body1">
            Code, Compete, and Improve Your Skills.
          </Typography>
        </Box>
      </Grid>

      {/* Vertical Gradient Line */}
      <Box
  sx={{
    position: "absolute",
    left: "34.3%", 
    top: "5%",
    bottom: "5%",
    width: "1px", 
    background: "linear-gradient(to top, #ff7e5f, #feb47b)", 
    zIndex: 10,
    transform: "translateX(-50%)", 
    display: { xs: "none", md: "none", lg: "block" }, 
  }}
/>

      {/* Right Section (1fr) */}
      <Grid 
        item xs={12} md={8} 
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Compete in exciting challenges, sharpen your coding skills, and join a thriving community!
          </Typography>
          <Typography variant="body2">
            Participate in contests, join coding groups, and discuss coding problems.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Section1;
