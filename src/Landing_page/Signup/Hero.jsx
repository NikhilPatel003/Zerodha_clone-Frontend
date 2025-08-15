import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

function Hero() {
  return (
    <>
      <div
        className="container text-center"
        style={{ padding: "100px 0 50px 0" }}
      >
        <h1
          className="fs-3 mx-1"
          style={{ fontWeight: "500", lineHeight: "1.25" }}
        >
          Open a free demat and trading account online
        </h1>
        <p className="fs-4 mb-1">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <Signup />
    </>
  );
}

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/auth/signup",
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
      username: "",
    });
  };

  return (
    <div className="container" style={{marginBottom:"200px"}}>
      <div className="row px-5">
        <div className="col-6">
          <img src="/media/signup/account_open.svg" alt="" />
        </div>
        <div className="col-6 mt-5">
          <Typography variant="h5" gutterBottom className="text-center">
            Create an Account
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
            <Box mb={2}>
              <TextField
                label="Username"
                type="text"
                name="username"
                value={username}
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
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" align="center" className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
