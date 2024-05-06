import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Sidebar } from '../components/Sidebar';


const PatientPage = () => {
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, medicine: 'Paracetamol', dosage: '500mg', instructions: 'Take 1 tablet every 6 hours' },
    { id: 2, medicine: 'Amoxicillin', dosage: '250mg', instructions: 'Take 1 capsule three times a day' },
    { id: 3, medicine: 'Ibuprofen', dosage: '400mg', instructions: 'Take 1 tablet with food as needed for pain' }
  ]);

  const deletePrescription = (id) => {
    const updatedPrescriptions = prescriptions.filter(prescription => prescription.id !== id);
    setPrescriptions(updatedPrescriptions);
  };

  return (
    <div className='row'>
      <div className='col-2'>
        <Sidebar />
      </div>
      <div className='col-10'>
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', textAlign: 'center',marginTop:"-50px" }}>
            <Typography variant="h5" gutterBottom color="green">
              Patient Page with Doctor's Prescription List
            </Typography>
            <List>
              {prescriptions.map((prescription, index) => (
                <Slide direction="up" in={true} key={index} mountOnEnter unmountOnExit>
                  <ListItem>
                    <ListItemText
                      primary={prescription.medicine}
                      secondary={`Dosage: ${prescription.dosage}, Instructions: ${prescription.instructions}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" onClick={() => deletePrescription(prescription.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Slide>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
    </div>
  );
};

export default PatientPage;
