import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FiLogIn, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Floating particles animation
  const particles = [...Array(70)].map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    // delay: Math.random() * 2
  }));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at 50% 100%, rgba(30,30,30,0.9) 0%, #0a0a0a 100%)",
        position: "relative",
        overflow: "hidden",
        p: isMobile ? 2 : 4,
      }}
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: `${particle.x + (Math.random() * 20 - 10)}vw`,
            y: `${particle.y + (Math.random() * 20 - 10)}vh`,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            // delay: particle.delay,
          }}
          style={{
            position: "absolute",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: "rgba(255,215,0,0.5)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
      ))}

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: isMobile ? "2rem 1.5rem" : "3rem 2.5rem",
          width: "100%",
          maxWidth: "450px",
          zIndex: 1,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Logo/Title */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: theme.palette.primary.main,
                fontFamily: '"DM Sans", sans-serif',
                mb: 1,
              }}
            >
              CodeCompete
            </Typography>
          </motion.div>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            Level up your coding skills
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" sx={{ mt: 3 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TextField
              fullWidth
              label="Email or Username"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <FiMail
                    style={{ marginRight: 10, color: "rgba(255,255,255,0.5)" }}
                  />
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.5)",
                },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <FiLock
                    style={{ marginRight: 10, color: "rgba(255,255,255,0.5)" }}
                  />
                ),
                endAdornment: (
                  <Box
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{ cursor: "pointer" }}
                  >
                    {showPassword ? (
                      <FiEyeOff style={{ color: "rgba(255,255,255,0.5)" }} />
                    ) : (
                      <FiEye style={{ color: "rgba(255,255,255,0.5)" }} />
                    )}
                  </Box>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.5)",
                },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              endIcon={<FiLogIn />}
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "none",
                // "&:hover": {
                //   boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                // },
              }}
            >
              Login
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typography
              variant="body2"
              sx={{
                mt: 3,
                textAlign: "center",
                color: "rgba(255,255,255,0.6)",
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              Don't have an account?{" "}
              <Link
                href="/signup"
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Sign up
              </Link>
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Login;
