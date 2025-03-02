import { useState } from "react";
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
import EmailIcon from "@mui/icons-material/Email";


const Section5 = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: isMobile ? 2 : 4,
        py: isMobile ? 6 : 8,
      }}
    >
      
      <Box
        sx={{
            width: { xs: "150px", sm: "280px" },
            height: { xs: "150px", sm: "280px" },
            borderRadius: "50%",
            backgroundColor: "rgba(255, 230, 0, 0.33)",
            filter: "blur(100px)",
            position: "absolute",
            // top: 70,
            left: "50%",
            transform: "translateX(-50%)",
          }}
      />

      
      <Box
        className=" tilt glow-card max-w-7xl mx-auto p-6 rounded-xl flex flex-col items-center text-center"
        onMouseMove={handleMouseMove}
        sx={{
          position: "relative", 
          width: "100%",
          maxWidth: "1080px",
          backdropFilter: "blur(100px)",
          backgroundColor: "rgba(255, 255, 255, 0.16)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          px: isMobile ? 2 : 6,
          py: isMobile ? 3.5 : 5,
          zIndex: 1, 
          overflow: "hidden",
          "--glow-color": "rgba(30, 144, 255, 0.5)",
        }}
      >
        <AvatarGroup
          max={4}
          sx={{
            mb: 3,
            "& .MuiAvatar-root": {
              width: isMobile ? 30 : 40,
              height: isMobile ? 30 : 40,
              border: "2px solid #333",
            },
          }}
        >
          <Avatar alt="Person 1" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80?height=56&width=56" />
          <Avatar alt="Person 2" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80?height=56&width=56" />
          
          <Avatar alt="Person 4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=56&width=56" />
          <Avatar alt="Person 5" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=56&width=56" />
        </AvatarGroup>

        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: isMobile ? "1.2rem" : "1.3rem",
            color: "white",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Still have questions?
        </Typography>

        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: isMobile ? "0.8rem" : "1rem",
            color: "white",
            opacity: 0.9,
            mb: 4,
            maxWidth: "90%",
            mx: "auto",
            fontWeight: isTablet ? "normal" : "medium",
          }}
        >
          Can't find the answer you're looking for? Please chat with our friendly team.
        </Typography>

        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={{
            borderColor: "#FFD700",
            color: "#FFD700",
            fontWeight: "bold",
            borderRadius: "20px",
            px: isMobile ? 3 : 4,
            py: 1.2,
            fontSize: isMobile ? "0.875rem" : "1rem",
            "&:hover": {
              borderColor: "#FFD700",
              backgroundColor: "rgba(255, 215, 0, 0.1)",
            },
          }}
        >
          Get in Touch
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            p: 2,
            backgroundColor: "#1a1a1a",
            color: "white",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center", pt: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <EmailIcon sx={{ fontSize: 64, color: "#FFD700" }} />
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6" component="p" align="center" sx={{ mb: 1 }}>
            Drop your question/query at codecompete@gmail.com.
          </Typography>
          <Typography variant="body1" component="p" align="center" sx={{ mb: 4, opacity: 0.8 }}>
            We will get back to you soon.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                backgroundColor: "#FFD700",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "20px",
                px: 4,
                "&:hover": {
                  backgroundColor: "#e6c300",
                },
              }}
            >
              Close
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Section5;
