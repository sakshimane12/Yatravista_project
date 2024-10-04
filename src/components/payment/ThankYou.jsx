import React, { useState } from "react";
import payment from '../../assets/images/Payment.jpg'
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
    const [price, setPrice] = useState(15000);  // Default price
    const [departureDate, setDepartureDate] = useState("2024-10-15"); // Default departure date

    const navigate = useNavigate()
    
    return (
        <div className="container bg-white" style={{marginTop:'100px'}}>
            <div>
                <h3 style={{fontStyle:'italic'}}>"You are all set!! Thank you for booking with us--<br/>
                your adventure starts here" </h3>
            </div>
            <div>
                <img src={payment}/>
                <h3>Completed successfully</h3>
                <h4>Thank You..!!</h4>
            </div>
            
            <div className=" p-3 mb-5 rounded ">

                <button className="btn btn-info rounded m-2" type="submit" onClick={() => navigate("/home")}>Exit</button>
            </div>
            
        </div>  );
};

export default ThankYou;
