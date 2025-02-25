import React from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
} from "@mui/material";

function Section2() {
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        mt: 10,
        position: "relative",
      }}
    >
      {/* Blur Circle Positioned at the Top */}
      <Box
        sx={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 230, 0, 0.28)",
          filter: "blur(100px)",
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ textAlign: "center", mt: "25vh" }}>
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            // borderTop: "1px dotted gray",
            fontFamily: "DM Sans, sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "1.9rem", sm: "2.8rem", md: "2.9rem" },
            lineHeight: { xs: "1.2", sm: "1.3", md: "1.4" },
          }}
        >
          Why Choose Us?
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
          Your journey to success starts here – explore, learn, and grow with
          us!
        </Typography>

        <Card
          sx={{
            height: "80vh",
            width: "100%",
            background: "rgba(26, 25, 25, 1)",
            color: "white",
            borderRadius: "1rem",
            p: 2,
            mb: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Comprehensive Curriculum
            </Typography>
            <Typography sx={{ mt: 2, textAlign: "center" }}>
              Our curriculum is designed to cover all the important topics and
              concepts of DSA to help you ace your interviews.
            </Typography>
          </CardContent>
        </Card>
        
      </Container>
    </Box>
  );
}

export default Section2;
