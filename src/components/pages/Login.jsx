import { useState } from "react";
import { Box, Button, Container, TextField, Typography, Paper, InputAdornment, IconButton } from "@mui/material";
import { Email, Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../../assets/logo.png"; // Importing logo

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!isLogin) {
      if (!formData.email.includes("@")) newErrors.email = "Enter a valid email address";
      if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) newErrors.username = "Username can only contain letters, numbers, and _";
      if (formData.name.trim() === "") newErrors.name = "Name is required";
    } else {
      if (!formData.email.includes("@") && !/^[a-zA-Z0-9_]+$/.test(formData.username)) {
        newErrors.email = "Enter a valid email or username (only letters, numbers, and _ allowed)";
      }
    }
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) console.log(isLogin ? "Login Details:" : "Signup Details:", formData);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#000000" }}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={10} sx={{ padding: 4, borderRadius: 4, backgroundColor: "rgba(0, 0, 0, 0.7)", color: "#ffffff", backdropFilter: "blur(10px)", boxShadow: "none", textAlign: "center" }}>
          <img src={logo} alt="Logo" style={{ width: "80px", marginBottom: "15px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
          <Typography variant="h5" align="center" fontWeight="bold" sx={{ letterSpacing: 1, color: "#B044E0" }}>{isLogin ? "Login" : "Sign Up"}</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            {!isLogin && (
              <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth sx={customTextFieldStyles} InputProps={{ startAdornment: (<InputAdornment position="start"><Person sx={{ color: "#4F98F1" }} /></InputAdornment>) }} error={!!errors.name} helperText={errors.name} />
            )}
            {!isLogin && (
              <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth sx={customTextFieldStyles} InputProps={{ startAdornment: (<InputAdornment position="start"><Email sx={{ color: "#4F98F1" }} /></InputAdornment>) }} error={!!errors.email} helperText={errors.email} />
            )}
            {!isLogin && (
              <TextField label="Username" name="username" value={formData.username} onChange={handleChange} fullWidth sx={customTextFieldStyles} InputProps={{ startAdornment: (<InputAdornment position="start"><Person sx={{ color: "#4F98F1" }} /></InputAdornment>) }} error={!!errors.username} helperText={errors.username} />
            )}
            {isLogin && (
              <TextField label="Username / Email" name="email" value={formData.email} onChange={handleChange} fullWidth sx={customTextFieldStyles} InputProps={{ startAdornment: (<InputAdornment position="start"><Person sx={{ color: "#4F98F1" }} /></InputAdornment>) }} error={!!errors.email} helperText={errors.email} />
            )}
            <TextField label="Password" type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} fullWidth sx={customTextFieldStyles} InputProps={{ startAdornment: (<InputAdornment position="start"><Lock sx={{ color: "#4F98F1" }} /></InputAdornment>), endAdornment: (<InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)} edge="end">{showPassword ? <VisibilityOff sx={{ color: "#4F98F1" }} /> : <Visibility sx={{ color: "#4F98F1" }} />}</IconButton></InputAdornment>) }} error={!!errors.password} helperText={errors.password} />
            <Button type="submit" variant="contained" fullWidth sx={buttonStyles}>{isLogin ? "Login" : "Sign Up"}</Button>
            <Typography variant="body2" align="center" sx={{ marginTop: 2, color: "#bbb" }}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span style={{ color: "#B044E0", cursor: "pointer", fontWeight: "bold", marginLeft: 5 }} onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

const customTextFieldStyles = { input: { color: "#fff" }, bgcolor: "#1a1a1a", borderRadius: 2, "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#5593F0" }, "&:hover fieldset": { borderColor: "#B044E0" }, "&.Mui-focused fieldset": { borderColor: "#B044E0" } } };
const buttonStyles = { bgcolor: "linear-gradient(90deg, #4F98F1, #B044E0)", color: "#ffffff", fontWeight: "bold", borderRadius: 3, textTransform: "none", fontSize: "1rem", transition: "0.3s", "&:hover": { opacity: 0.9 } };

export default Auth;
