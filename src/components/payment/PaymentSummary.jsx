const PaymentSummary = ({ paymentMethod, cardDetails, upiId, bank }) => {
    return (
      <div className="card mt-4 p-3 mb-3">
        <h4>Payment Summary</h4>
        {paymentMethod === 'card' && (
          <>
            <p><strong>Payment Method:</strong> Credit/Debit Card</p>
            <p><strong>Card Number:</strong> ** ** ** {cardDetails.cardNumber.slice(-4)}</p>
            <p><strong>Name on Card:</strong> {cardDetails.cardName}</p>
            <p><strong>Expiry Date:</strong> {cardDetails.expiryMonth}/{cardDetails.expiryYear}</p>
          </>
        )}
        {paymentMethod === 'upi' && (
          <>
            <p><strong>Payment Method:</strong> UPI</p>
            <p><strong>UPI ID:</strong> {upiId}</p>
          </>
        )}
        {paymentMethod === 'netbanking' && (
          <>
            <p><strong>Payment Method:</strong> Net Banking</p>
            <p><strong>Bank:</strong> {bank}</p>
          </>
        )}
      </div>
    );
  };
  
  export default PaymentSummary;