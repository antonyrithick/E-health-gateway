import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Sidebar } from '../components/Sidebar';

const ConsultationPage = () => {
  const [isCallActive, setIsCallActive] = useState(false);

  const startCall = () => {
    setIsCallActive(true);
    // Add logic to start the video call
  };

  const endCall = () => {
    setIsCallActive(false);
    // Add logic to end the video call
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
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Patient Consultation
            </Typography>
            {isCallActive ? (
              <div>
                <video style={{ width: '100%', height: 'auto' }} controls>
                  <source src="video-source-url" type="video/mp4" />
                  please wait .,,doctor doesn't connect the conference
                </video>
                <Button variant="contained" color="secondary" onClick={endCall}>
                  End Call
                </Button>
              </div>
            ) : (
              <Button variant="contained" color="primary" onClick={startCall}>
                Start Call
              </Button>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
    </div>
  );
};

export default ConsultationPage;
