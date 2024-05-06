import React from 'react';
import { Container, Grid, Paper, Typography, Button, Avatar, List, ListItem, ListItemText } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import doc1 from "../images/Doctors/doc1.png";

const Dashboard = () => {
  // Dummy data for central checkup
  const centralCheckupData = [
    { date: '2024-03-28', doctor: 'Dr. Smith', department: 'Cardiology', status: 'Completed' },
    { date: '2024-04-05', doctor: 'Dr. Johnson', department: 'Dermatology', status: 'Upcoming' },
  ];

  // Dummy data for available doctors
  const availableDoctors = [
    { name: 'Dr. Rithick', department: 'general MBBS .,MD',img: "../images/home/image2.png", timing:'6:00 PM - 10:00PM'},
    { name: 'Dr. Smith', department: 'Cardiology', img: "../images/Doctors/doc1.png", timing: '9:00 AM - 5:00 PM' },
    { name: 'Dr. Johnson', department: 'Dermatology', img: "../images/home/image3.png", timing: '10:00 AM - 6:00 PM' },
    { name: 'Dr. Martinez', department: 'Ophthalmology', img: "../images/home/image5.png", timing: '8:00 AM - 4:00 PM' },
    // Add more doctors as needed
  ];

  return (
    <div>
      {/* Welcome Banner */}
      <br/>

      {/* Sidebar */}
      {/* Add sidebar code here */}

      {/* Main content */}
      <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={6} >
              <Paper style={{ padding: 20 ,backgroundColor:"#F1EAD1"}}>
                <Typography variant="h5" gutterBottom>
                  Central Checkup
                </Typography>
                <div className='container bg-light'>
                <Typography variant='h6'>Patient details</Typography>
                  <Typography>Name : kajal</Typography>
                  <Typography>age : 28</Typography>
                </div>
                <List>
                  {centralCheckupData.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText sx={{backgroundColor:"#85FA96",color:"red"}}
                        primary={item.doctor}
                        secondary={
                          <React.Fragment>
                            <Typography variant="body2" color="green">
                              {item.department}
                            </Typography>
                            <Typography variant="body2" color="blue">
                              {item.date} - {item.status}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" color="primary">
                  View All Checkups
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: 20 }}>
                <Typography variant="h5" gutterBottom>
                  Available Doctors
                </Typography>
                <Grid container spacing={4}>
                  {availableDoctors.map((doctor, index) => (
                    <Grid item xs={12} key={index}>
                      <Paper style={{ padding: 20 ,backgroundColor:"#0799CA",color:"white"}}>
                        <Grid container alignItems="center">
                          <Grid item>
                            <Avatar alt={doctor.name} src={doc1} sx={{ width: 80, height: 80 }} />
                          </Grid>
                          <Grid item xs sx={{margin:"10px"}}>
                            <Typography variant="subtitle1" gutterBottom>
                              {doctor.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {doctor.department}
                            </Typography>
                            <Typography variant="body2" color="textLight">
                              Timing: {doctor.timing}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
