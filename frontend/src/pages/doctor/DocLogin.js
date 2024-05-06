import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DocLogin = ({ onLogin }) => { // Pass onLogin function as props
  const [doc_id, setDoc_id] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/doctor", {
        doc_id,
        password,
      });
      if (res.status === 200) {
        // Handle successful login
        console.log(res.data); // Assuming response data contains useful information
        console.log("Login successful");
        navigate("/dochome"); // Navigate to dashboard on successful login
      } else if (res.status === 401) {
        // Handle other status codes if needed
        console.log("Login failed");
        navigate("/login");
      }
    } catch (err) {
      console.log("login failed");
      alert("Invalid user");
      setDoc_id("");
      setPassword("");
      // Handle error if the request fails
    }
  }

  return (
    <div className="container mt-5 col-md-5 col-sm-10 bg-light p-5">
      <h2 className="text-primary text-center">Doctor Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Doctor ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Doctor ID"
            value={doc_id}
            required
            onChange={(e) => setDoc_id(e.target.value)}
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

        <Button variant="primary w-100 mt-2" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default DocLogin;
