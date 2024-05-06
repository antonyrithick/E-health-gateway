import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => { // Pass onLogin function as props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      if (res.status === 200) {
        // Handle successful login
        console.log(res.data); // Assuming response data contains useful information
        console.log("Login successful");
        setIsLoggedIn(true);
        onLogin(); // Call the onLogin function passed as props
        navigate("/dashboard"); // Navigate to dashboard on successful login
      } else if (res.status === 401) {
        // Handle other status codes if needed
        console.log("Login failed"+isLoggedIn);
        navigate("/login");
      }
    } catch (err) {
      console.log("login failed");
      alert("Invalid user");
      setEmail("");
      setPassword("");
      // Handle error if the request fails
    }
  }

  return (
    <div className="container mt-5 col-md-5 col-sm-10 bg-light p-5">
      <h2 className="text-primary text-center">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="success mt-2" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
