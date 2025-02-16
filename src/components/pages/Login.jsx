import { useState } from "react";
import { Box, Button, Container, TextField, Typography, Paper, InputAdornment, IconButton } from "@mui/material";
import { Email, Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!isLogin) {
      if (!formData.email.includes("@")) {
        newErrors.email = "Enter a valid email address";
      }
      if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
        newErrors.username = "Username can only contain letters, numbers, and _";
      }
      if (formData.name.trim() === "") {
        newErrors.name = "Name is required";
      }
    } else {
      if (!formData.email.includes("@") && !/^[a-zA-Z0-9_]+$/.test(formData.username)) {
        newErrors.email = "Enter a valid email or username (only letters, numbers, and _ allowed)";
      }
    }
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(isLogin ? "Login Details:" : "Signup Details:", formData);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#121212",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 4,
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            boxShadow: "0px 4px 15px rgba(0, 255, 150, 0.3)",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            sx={{ letterSpacing: 1, color: "#00FF96" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            {!isLogin && (
              <>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: "#bbb" } }}
                  sx={{ input: { color: "#fff" }, bgcolor: "#2a2a2a", borderRadius: 2 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: "#bbb" } }}
                  sx={{ input: { color: "#fff" }, bgcolor: "#2a2a2a", borderRadius: 2 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: "#bbb" } }}
                  sx={{ input: { color: "#fff" }, bgcolor: "#2a2a2a", borderRadius: 2 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.username}
                  helperText={errors.username}
                />
              </>
            )}
            {isLogin && (
              <TextField
                label="Username / Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#bbb" } }}
                sx={{ input: { color: "#fff" }, bgcolor: "#2a2a2a", borderRadius: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                error={!!errors.email}
                helperText={errors.email}
              />
            )}
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#bbb" } }}
              sx={{ input: { color: "#fff" }, bgcolor: "#2a2a2a", borderRadius: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#00FF96",
                color: "#121212",
                fontWeight: "bold",
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1rem",
                transition: "0.3s",
                "&:hover": { bgcolor: "#00cc77" },
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            <Typography variant="body2" align="center" sx={{ marginTop: 2, color: "#bbb" }}>
              {isLogin ? "Don't have an account?" : "Already have an account?"} 
              <span 
                style={{ color: "#00FF96", cursor: "pointer", fontWeight: "bold" }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Auth;