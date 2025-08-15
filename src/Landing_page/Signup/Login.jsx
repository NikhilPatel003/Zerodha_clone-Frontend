import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/auth/login",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5173";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Paper elevation={3} className="p-4" style={{ maxWidth: 400, width: "100%" }}>
        <Typography variant="h5" gutterBottom className="text-center">
          Login to Your Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              fullWidth
              required
              onChange={handleOnChange}
            />
          </Box>
          <Box mb={3}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={password}
              fullWidth
              required
              onChange={handleOnChange}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center" className="mt-3">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </Typography>
        <ToastContainer />
      </Paper>
    </div>
  );
};

export default Login;
