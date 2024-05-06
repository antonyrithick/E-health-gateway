// BookAppointment.js

import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientCondition: '',
    doctorType: '',
    appointmentDateTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/menu', formData);
      if (response.status === 200) {
        alert("Appointment booked successfully! you slot is :"+formData.appointmentDateTime);
        // Show confirmation message to the user
      }
      else{
        alert("your time slot is not availabe please choose another time");
      }
    } catch (error) {
      console.error("Error occurred while booking appointment:", error);
      alert("booking appointment is not availabe please try after some time");
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <div className='container book bg-light border border-2'>
  <h2 className='text-primary text-center mb-4'>Book Appointment</h2>
  <form onSubmit={handleSubmit}>
    <div className='row'>
      <div className='col-md-6'>
        <div className='form-group'>
          <label>Patient Name</label>
          <input
            type='text'
            className='form-control'
            name='patientName'
            value={formData.patientName}
            onChange={handleChange}
            placeholder='Enter Name'
            required
          />
        </div>
      </div>
      <div className='col-md-6'>
        <div className='form-group pt-2'>
          <label>Patient Age</label>
          <input
            type='number'
            className='form-control'
            name='patientAge'
            value={formData.patientAge}
            onChange={handleChange}
            placeholder='Enter Age'
            required
          />
        </div>
      </div>
    </div>
    <div className='form-group pt-2'>
      <label>Patient Condition</label>
      <input
        type='text'
        className='form-control'
        name='patientCondition'
        value={formData.patientCondition}
        onChange={handleChange}
        placeholder='Enter Condition'
        required
      />
    </div>
    <div className='form-group pt-2'>
      <label>Doctor Type</label>
      <select
        className='form-select'
        name='doctorType'
        value={formData.doctorType}
        onChange={handleChange}
        required
      >
        <option value=''>Select Doctor Type</option>
        <option value='General'>General</option>
        <option value='Pediatrician'>Pediatrician</option>
        <option value='Dentist'>Dentist</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <div className='form-group pt-2'>
      <label>Appointment Date and Time</label>
      <input
        type='datetime-local'
        className='form-control'
        name='appointmentDateTime'
        value={formData.appointmentDateTime}
        onChange={handleChange}
        required
      />
    </div>
    <button type='submit' className='btn w-50 m-4 btn-primary'>Book</button>
  </form>
</div>

  );
};

export default BookAppointment;
