import { useNavigate } from "react-router-dom";

const BookingSummary = ({ selectedPlace, departureDate, price, travelerDetails }) => {
  const { firstName, lastName, email, phone, dob, gender } = travelerDetails;
  const navigate = useNavigate();

  return (
    <div className="border border-dark p-3 rounded w-25">
      <h4 className="text-center">Booking Summary</h4>
      
      {/* Traveler Details */}
      <h5 className="text-center mt-3">Traveler Details</h5>
      <p><strong>Name:</strong> {firstName} {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Date of Birth:</strong> {dob}</p>
      <p><strong>Gender:</strong> {gender}</p>

      {/* Travel Info */}
      <h5 className="text-center mt-3">Travel Info</h5>
      <p><strong>Place:</strong> {selectedPlace}</p>
      <p><strong>Departure Date:</strong> {departureDate}</p>
      <p><strong>Price:</strong> ${price}</p>

      <button 
        className="btn btn-success w-100"
        onClick={() => navigate("/payment", { state: { price } })}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default BookingSummary;
