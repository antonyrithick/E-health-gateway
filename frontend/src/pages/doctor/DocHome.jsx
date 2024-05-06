// DoctorDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests
import { FaUserMd, FaNotesMedical, FaPrescriptionBottleAlt } from 'react-icons/fa'; 
import {Link} from "react-router-dom";// Importing icons from react-icons library
import img from "./bg.png";

const DoctorDashboard = () => {
  // State variables
  const [doctor, setDoctor] = useState(null);
  const [attendingPatients, setAttendingPatients] = useState([]);

  // Fetch doctor details from the backend when the component mounts
  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/doctorwho');
        setDoctor(response.data); // Assuming the API returns doctor details
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctorDetails();
  }, []);

  // Fetch attending patients from the backend when the component mounts
  useEffect(() => {
    const fetchAttendingPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/attending-patients');
        setAttendingPatients(response.data); // Assuming the API returns attending patient details
      } catch (error) {
        console.error('Error fetching attending patients:', error);
      }
    };

    fetchAttendingPatients();
  }, []);

  // Function to render attending patients list
  const renderAttendingPatients = () => {
    return attendingPatients.map((patient,index) => (
      <div key={index} className="card patient-card" style={{ backgroundColor: '#f8f9fa', border: 'none' }}>
        <div className="card-body">
          <h2 className='heading text-primary border border-2'>Slot Id : {index+1000}</h2>
          <h5 className="card-title">{patient.patient_name}</h5>
          <p className="card-text"><FaNotesMedical style={{ marginRight: '5px', color: '#007bff' }} /> Age: {patient.patient_age}</p>
          <p className="card-text text-danger">Condition: {patient.patient_condition}</p>
          <p className="card-text border border-3 rounded">AppointMent Date and Time :{patient.appointment_datetime}</p>
          {patient.prescription && (
            <div>
              <p className="card-text"><FaPrescriptionBottleAlt style={{ marginRight: '5px', color: '#28a745' }} /> Prescription: {patient.prescription}</p>
            </div>
          )}
          <button className="btn btn-primary btn-sm prescription-btn"><Link to="/addpriscription" className='text-light text-decoration-none'>Add Prescription</Link></button>
          {/* Add more patient details as needed */}
        </div>
      </div>
    ));
  };

  return (
    <>
      <img src={img} className='w-25 ms-5 ps-5' alt="bg" />
    <div className="container mt-5">
      <div className="jumbotron jumbotron-fluid bg-primary text-white mb-5">
        <div className="container">
          <h1 className="display-4"><FaUserMd style={{ marginRight: '10px',marginTop: '30px' }} /><span className='bg-success text-light rounded'> Welcome, </span>{doctor ? doctor.doc_name : 'Doctor'}</h1>
          {doctor && (
            <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title">Doctor Information</h5>
                <p className="card-text"><FaUserMd style={{ marginRight: '5px' }} /> Specialty: {doctor.spl}</p>
                <p className="card-text"><FaNotesMedical style={{ marginRight: '5px' }} /> Hospital: {doctor.hos_name}</p>
                {/* Add more doctor details as needed */}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <h2 className="mb-3">Attending Patients</h2>
          {attendingPatients.length > 0 ? (
            renderAttendingPatients()
          ) : (
            <p>No patients currently being attended.</p>
          )}
        </div>
        <div className="col-md-3">
          <div className="sticky-top pt-4">
            <button className="btn btn-success btn-block mb-3">Information send</button>
            {/* Add more options for the doctor */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DoctorDashboard;
