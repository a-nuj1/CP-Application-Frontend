import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiUpload,
  FiArrowRight,
} from "react-icons/fi";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Enhanced floating particles animation
  const particles = [...Array(70)].map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
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
      {/* Enhanced Floating particles */}
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

      {/* Signup card */}
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
          maxWidth: "500px",
          zIndex: 1,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Rest of your signup form code remains the same */}
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
              Join CodeCompete
            </Typography>
          </motion.div>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            Start your competitive coding journey
          </Typography>
        </Box>

        {/* Avatar Upload */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Box
              sx={{
                position: "relative",
                cursor: "pointer",
                "&:hover .avatar-overlay": {
                  opacity: 1,
                },
              }}
              onClick={() => fileInputRef.current.click()}
            >
              <Avatar
                src={avatar}
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "rgba(255,255,255,0.1)",
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              >
                <FiUser size={40} />
              </Avatar>
              <Box
                className="avatar-overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <FiUpload size={24} />
              </Box>
            </Box>
          </motion.div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleAvatarUpload}
            accept="image/*"
            style={{ display: "none" }}
          />
        </Box>

        {/* Form */}
        <Box component="form" sx={{ mt: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <FiUser
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
              label="Email"
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
            transition={{ delay: 0.3 }}
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
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </IconButton>
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
            transition={{ delay: 0.4 }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              endIcon={<FiArrowRight />}
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
              Create Account
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                textAlign: "center",
                color: "rgba(255,255,255,0.6)",
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              Already have an account?{" "}
              <Link
                href="/login"
                underline="hover"
                sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
              >
                Login
              </Link>
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Signup;
