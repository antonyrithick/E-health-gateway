import React from 'react'
import img from "../images/home/image6.png";
import { Button,Avatar } from "@mui/material";
import { NavLink } from 'react-router-dom';
import "../css/sidebar.css";

export const Sidebar = () => {
  return (
    <div>
        <nav className="col-md-12 col-lg-12 d-md-block sidebar">
          <div className="sidebar-sticky border border-2 ms-2">
            <Avatar
              alt="Profile Picture"
              src={img}
              sx={{ width: 64, height: 64, margin: "20px auto" }}
            />

            <ul className="nav flex-column text-center">
              <li className="nav-item pt-4 text-decoration-none">
              <NavLink exact to="/dashboard" className="text-decoration-none" activeClassName="active">
               DashBoard  </NavLink>
              </li>
              <li className="nav-item pt-4 ">
              <NavLink exact to="/consulting" className="text-decoration-none" activeClassName="active">
               consulting  </NavLink>
              </li>
              <li className="nav-item pt-4">
              <NavLink exact to="/prescription" className="text-decoration-none" activeClassName="active">
               prescription  </NavLink>
              </li>
              {/* Add more sidebar items as needed */}
              <li className="nav-item">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "140px 30px" }}
                >
                  <a href="/" className="text-decoration-none text-white">
                    {" "}
                    Logout{" "}
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}
