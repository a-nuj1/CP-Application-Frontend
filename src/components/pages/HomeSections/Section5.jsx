import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiX } from "react-icons/fi";

const Section5 = () => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Floating avatar animation variants
  const avatarVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        y: { type: "spring", stiffness: 100 }
      }
    }),
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: isMobile ? 2 : 4,
        py: isMobile ? 6 : 8,
        overflow: "hidden"
      }}
    >
      {/* Animated glow effect */}
      {loaded && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            width: isMobile ? "150px" : "280px",
            height: isMobile ? "150px" : "280px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 230, 0, 0.33)",
            filter: "blur(100px)",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0
          }}
        />
      )}

      {/* Main card */}
      {loaded && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glow-card"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1080px",
            backdropFilter: "blur(16px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            borderRadius: "16px",
            padding: isMobile ? "1.5rem" : "2.5rem",
            zIndex: 1,
            overflow: "hidden"
          }}
        >
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: 'white',
                borderRadius: '50%',
                zIndex: 0,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
            />
          ))}

          {/* Animated border gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(255,215,0,0.1) 0%, rgba(30,144,255,0.1) 50%, rgba(255,215,0,0.1) 100%)',
              zIndex: -1,
              borderRadius: '16px'
            }}
          />

          <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            {/* Animated avatars */}
            <AvatarGroup
              max={4}
              sx={{
                mb: 3,
                justifyContent: "center",
                "& .MuiAvatar-root": {
                  width: isMobile ? 36 : 48,
                  height: isMobile ? 36 : 48,
                  border: "2px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    borderColor: theme.palette.primary.main
                  }
                }
              }}
            >
              {[
                "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80?height=56&width=56",
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80?height=56&width=56",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=56&width=56",
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=56&width=56"
              ].map((src, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={["visible", "float"]}
                  variants={avatarVariants}
                >
                  <Avatar 
                    alt={`Person ${i+1}`} 
                    src={src} 
                  />
                </motion.div>
              ))}
            </AvatarGroup>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: "bold",
                  mb: 2,
                  color: "white",
                  fontSize: isMobile ? "1.4rem" : "1.8rem"
                }}
              >
                Still have questions?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  mb: 4,
                  maxWidth: "90%",
                  mx: "auto",
                  fontSize: isMobile ? "0.9rem" : "1.1rem"
                }}
              >
                Can't find the answer you're looking for? Our team is ready to help!
              </Typography>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                startIcon={<FiMail />}
                sx={{
                  borderColor: "#FFD700",
                  color: "#FFD700",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  px: isMobile ? 3 : 4,
                  py: 1.5,
                  fontSize: isMobile ? "0.875rem" : "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                    borderColor: "#FFD700"
                  }
                }}
              >
                Contact Our Team
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      )}

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            backgroundColor: "#1a1a1a",
            color: "white",
            border: "1px solid rgba(255,255,255,0.1)",
            overflow: "hidden",
            position: "relative"
          }
        }}
      >
        {/* Dialog background elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 50% 100%, rgba(30,30,30,0.9) 0%, #0a0a0a 100%)",
            zIndex: 0
          }}
        />
        
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <DialogTitle sx={{ textAlign: "center", pt: 4 }}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(255,215,0,0.1)",
                  mb: 2
                }}
              >
                <FiMail style={{ fontSize: "2.5rem", color: "#FFD700" }} />
              </Box>
            </motion.div>
            <Button
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                minWidth: 0,
                color: "rgba(255,255,255,0.6)",
                "&:hover": {
                  color: "white"
                }
              }}
            >
              <FiX />
            </Button>
          </DialogTitle>
          <DialogContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography 
                variant="h6" 
                align="center" 
                sx={{ mb: 1, fontWeight: "bold" }}
              >
                Drop us a message
              </Typography>
              <Typography 
                variant="body1" 
                align="center" 
                sx={{ mb: 4, opacity: 0.8 }}
              >
                Email us at{" "}
                <Box 
                  component="span" 
                  sx={{ 
                    color: "#FFD700",
                    fontWeight: "bold"
                  }}
                >
                  codecompete@gmail.com
                </Box>
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <motion.div whileHover={{ scale: 1.03 }}>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFD700",
                      color: "#000",
                      fontWeight: "bold",
                      borderRadius: "12px",
                      px: 4,
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "#e6c300",
                      }
                    }}
                  >
                    Got It
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Section5;