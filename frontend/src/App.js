import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BookAppointment from "./pages/BookAppointment";
import Profile from "./components/Profile";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ConsultingPage from "./pages/Consulting";
import Prescription from "./pages/Prescription";
import "@fortawesome/fontawesome-free/css/all.css";
import DocLogin from "./pages/doctor/DocLogin";
import DocHome from "./pages/doctor/DocHome";
import AddPriscription from "./pages/doctor/AddPriscription";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic (e.g., set isLoggedIn to true)
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic (e.g., set isLoggedIn to false)
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="pb-5">
          <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {isLoggedIn ? (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/consulting" element={<ConsultingPage />} />
            <Route path="/prescription" element={<Prescription />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/dashboard"
              element={<Login onLogin={handleLogin} />}
            />
            <Route
              path="/consulting"
              element={<Login onLogin={handleLogin} />}
            />
            <Route
              path="/prescription"
              element={<Login onLogin={handleLogin} />}
            />
            <Route
              path="/book-appointment"
              element={<Login onLogin={handleLogin} />}
            />
            <Route path="/profile" element={<Login onLogin={handleLogin} />} />
          </Routes>
        )}

        <Routes>
          <Route path="/doclogin" element={<DocLogin />}/>
          <Route path="/dochome" element={<DocHome />}/>
          <Route path="/addpriscription" element={<AddPriscription />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
