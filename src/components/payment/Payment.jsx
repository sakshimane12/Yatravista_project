import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentSummary from "./PaymentSummary";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { price } = location.state || {}; // Get the price from the state

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");
  const [bank, setBank] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (paymentMethod === "card") {
      setCardDetails({
        ...cardDetails,
        [name]: value,
      });
    } else if (paymentMethod === "upi") {
      setUpiId(value);
    } else if (paymentMethod === "netbanking") {
      setBank(value);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (paymentMethod === "card") {
      alert("Processing card payment", cardDetails);
    } else if (paymentMethod === "upi") {
      alert("Processing UPI payment", upiId);
    } else if (paymentMethod === "netbanking") {
      alert("Processing Net Banking payment", bank);
    }
  
    
  };

  return (
    <div style={{marginTop:'100px'}} className="container">
      <div className="card p-4 ">
        <h2 className="text-center mb-4">Payment Page</h2>
        <h4 className="text-center">Total Price: ${price}</h4> {/* Display the price */}
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <div className="mb-3 w-50">
              <h4>Choose Payment Method</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  onChange={handlePaymentMethodChange}
                  id="cardOption"
                />
                <label className="form-check-label" htmlFor="cardOption">
                  Credit/Debit Card
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  onChange={handlePaymentMethodChange}
                  id="upiOption"
                />
                <label className="form-check-label" htmlFor="upiOption">
                  UPI
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  value="netbanking"
                  onChange={handlePaymentMethodChange}
                  id="netbankingOption"
                />
                <label className="form-check-label" htmlFor="netbankingOption">
                  Net Banking
                </label>
              </div>
            </div>
{/* Card Payment */}
            <div className="w-50">
              {paymentMethod === "card" && (
                <div className="card-details">
                  <h4 className="mb-3">Card Details</h4>
                  <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name on Card</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cardName"
                      value={cardDetails.cardName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Expiry Month</label>
                      <input
                        type="text"
                        className="form-control"
                        name="expiryMonth"
                        value={cardDetails.expiryMonth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Expiry Year</label>
                      <input
                        type="text"
                        className="form-control"
                        name="expiryYear"
                        value={cardDetails.expiryYear}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">CVV</label>
                    <input
                      type="password"
                      className="form-control"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
{/* UPI Payment */}
              {paymentMethod === "upi" && (
                <div className="upi-details">
                  <h4 className="mb-3">UPI Details</h4>
                  <div className="mb-3">
                    <label className="form-label">UPI ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="upiId"
                      value={upiId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              {/* Net Banking */}
              {paymentMethod === "netbanking" && (
                <div className="netbanking-details">
                  <h4 className="mb-3">Net Banking</h4>
                  <div className="mb-3">
                    <label className="form-label">Select Bank</label>
                    <select
                      className="form-select"
                      name="bank"
                      value={bank}
                      onChange={handleInputChange}
                      required>
                      <option value="">Choose...</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="axis">Axis Bank</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className="w-25">
              <button className="btn btn-secondary" onClick={() => navigate('/adventureplaces')}>Change Destination</button>
            </div>
          </div>
          <div className="d-grid mt-3 p-3">
            <button type="submit" className="btn btn-primary" onClick={() => navigate("/thankyou")}>
              Pay Now
            </button>
            <button type="reset" className="btn btn-warning mt-3">Cancel</button>
          </div>
        </form>
        </div>
        {/* Payment Summary */}
        <PaymentSummary
          paymentMethod={paymentMethod}
          cardDetails={cardDetails}
          upiId={upiId}
          bank={bank}
        />
      </div>
  );
};

export default Payment;
