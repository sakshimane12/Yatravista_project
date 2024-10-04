import React, { useState } from "react";
import BookingSummary from './BookingSummary';
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Details = () => {
  const location = useLocation();
  const { selectedPlace } = location.state || {}; // Access passed state

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: ''
  });

  const [travelInfo, setTravelInfo] = useState({
    departureDate: '',
    selectedPlace: '', 
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTravelInfoChange = (e) => {
    const { name, value } = e.target;
    setTravelInfo({
      ...travelInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Traveller Added");
  };

  return (
    <>
    <div>
      <div className="text-center mb-4 mt-4">
        {selectedPlace ? (
          <img 
            src={selectedPlace.image}
            alt={selectedPlace.place} 
            className="img-fluid" 
            style={{ maxHeight: '200px', width: '100%' }}
          />
        ) : (
          <p>Select a tour to view details</p>
        )}
      </div>

      <div className="text-center mb-4">
        <h4>Select Departure Date</h4>
        <div className="mx-auto" style={{ width: '25%' }}>
          <input 
            type="date" 
            className="form-control" 
            name="departureDate" 
            value={travelInfo.departureDate} 
            onChange={handleTravelInfoChange} 
            required 
          />
        </div>
      </div>

      <div className="container d-flex justify-content-between mt-3">  
        <div className="border border-dark p-3 rounded w-50">
          <h2 className="text-center">Travellers Details</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label className="form-label">First Name</label>
              <input 
                className="form-control"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input 
                className="form-control"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                className="form-control"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone No</label>
              <input 
                className="form-control"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input 
                className="form-control"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender :</label>
              <input 
                className="ms-2"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              <label className="ms-1" htmlFor="male">Male</label>

              <input 
                className="ms-2"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                required
              />
              <label className="ms-1" htmlFor="female">Female</label>
            </div>
            {/* Traveler Details Form */}
            {/* ... (rest of the form fields) */}
            <button className="btn btn-primary w-100" type="submit">Add Traveller</button>
          </form>
        </div>

        {/* Summary Section */}
        <BookingSummary 
          travelerDetails={formData}  
          selectedPlace={selectedPlace ? selectedPlace.place : ''} 
          departureDate={travelInfo.departureDate} 
          price={selectedPlace ? selectedPlace.price : ''}
        />
      </div>

      {/* Cancellation Policy Section */}
      <div className="container mt-4">
        <h4 className="text-center">Cancellation Policy</h4>
        <p>
          Please note that cancellation of your booking is subject to our cancellation policy. Cancellations made 30 days or more before the scheduled departure date will be fully refunded. Cancellations made between 15 to 29 days before the departure will incur a 50% charge. No refunds will be given for cancellations made less than 15 days prior to the departure date. We recommend reviewing the full terms and conditions for more detailed information regarding cancellations.
        </p>
      </div>
    </div>
    <hr/>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Details;
