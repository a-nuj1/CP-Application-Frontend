import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Typography, Box, Container, Card, CardContent } from "@mui/material";
import vanillaTilt from "vanilla-tilt";

const glowColors = [
  "rgba(214, 88, 208, 0.5)",
  "rgba(0, 255, 127, 0.5)",
  "rgba(30, 144, 255, 0.5)",
  "rgba(255, 99, 71, 0.5)",
  "rgba(117, 230, 228, 0.5)",
];

function useTypingEffect(text, speed) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayText("");

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
}

function Section2() {


  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };
  useEffect(() => {
    const tilt = document.querySelector(".tilt");
    vanillaTilt.init(tilt, {
      max: 2,
      speed: 10,
      // glare: true,
      // "max-glare": 0.50,
      // "glare-prerender": false,
      reverse: true,
    });
  });


  const javaCode = `PPublic class Main {
    public static void main(String[] args) {
        int result = sum(10);
        System.out.println(result);
    }
    
    public static int sum(int k) {
        if (k > 0) {
            return k + sum(k - 1);
        } else {
            return 0;
        }
    }
}`;

  const typedText = useTypingEffect(javaCode, 30);

  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        mt: 10,
        position: "relative",
        vh:"90"
      }}
    >
      {/* Blur Effect at the Top */}
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

      <Container sx={{ textAlign: "center", mt: "15vh", width: "100%" }}>
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            fontFamily: "DM Sans, sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "1.9rem", sm: "2.8rem", md: "2.9rem" },
            lineHeight: { xs: "1.2", sm: "1.3", md: "1.4" },
          }}
        >
          Why Choose Us?
        </Typography>


        {/* TO DO - Check this section again !  */}

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            color: "gray",
            mb: 5,
            px: { xs: "1rem", sm: "2rem", md: "8rem" },
            fontSize: { xs: "0.89rem", sm: "0.89rem", md: "1.08rem" },
            opacity: 0.8,
          }}
        >
          Your journey to success starts here – explore, learn, and grow with us!
        </Typography>

        <Card
        className="tilt glow-card"
        onMouseMove={handleMouseMove}
          sx={{
            width: "100%",
            height: "80vh",
            background: "rgba(26, 25, 25, 1)",
            color: "white",
            borderRadius: "1rem",
            p: 3,
            mb: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            "--glow-color": glowColors[1],
          }}
        >
          {/* First CardContent */}
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold",  }}>
              Comprehensive Curriculum
            </Typography>
            <Typography sx={{ mt: 2, textAlign: "center" }}>
              Our curriculum covers all essential topics and concepts of DSA to help
              you ace your interviews.
            </Typography>
          </CardContent>

          {/* Responsive Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "start",
              width: "100%",
              height:"auto",
              mt: 4,
              gap: 2,
            }}
          >
            {/* Left Section - Text */}
            <CardContent
              sx={{
                flex: 1,
                textAlign: "center",
                px: { xs: 1, sm: 3 }
                ,
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#ff9800", fontWeight: "bold" }}
              >
                Coding Practice
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", }}>
                Code On CODECOMPETE
              </Typography>
              <Typography sx={{ mt: 2, color: "gray" }}>
                Whether you're fine-tuning your code or exploring new languages,
                Quick Compiler simplifies the coding process, making it faster
                and more accessible for every developer.
              </Typography>
            </CardContent>

            {/* Right Section - Code Display */}
            <CardContent
              sx={{
                flex: 1,
                width: "100%",
                px: { xs: 2, sm: 3 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #333",
                  
                  p: { xs: 0, sm: 3, md: 4 },
                  backgroundColor: "#1e1e1e",
                }}
              >
                <SyntaxHighlighter
                  language="java"
                  style={dark}
                  customStyle={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "0.65rem", 
                    background: "transparent",
                    padding: "10px",
                    border: "none",
                    boxShadow: "none",
                    whiteSpace: "pre-wrap",
                    overflowX: "hidden",
                    wordBreak: "break-word", 
                  }}
                >
                  {typedText || "// Typing..."}
                </SyntaxHighlighter>
              </Box>
            </CardContent>
          </Box>
        </Card>


      </Container>
    </Box>
  );
}

export default Section2;
