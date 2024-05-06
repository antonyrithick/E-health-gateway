// Dashboard.js

import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import book from "../images/home/book.png";
import Checkup from "./Checkup";
import { Sidebar } from "../components/Sidebar";
import BookAppointment from "./BookAppointment";


const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-2">
        <Sidebar />
        </div>

        {/* Main content */}
        <main className="col-10 px-4">
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                  <Typography variant="h4" color="blue" gutterBottom>
                    Your Path to Better Health Begins Here, Welcome!
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                      Welcome to our Patient Dashboard! Your personalized health
                    hub designed to streamline your healthcare journey. From
                    scheduling appointments to accessing medical records, our
                    dashboard puts you in control of your health
                  </Typography>
                  <div className="d-flex justify-content-evenly">
                  <img
                    src={book}
                    alt="Welcome"
                    className="img-fluid"
                    width={400}
                    height={250}
                  />
                  <BookAppointment />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Checkup />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
