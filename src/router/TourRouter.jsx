import { BrowserRouter,Routes,Route } from "react-router-dom";
import TourNavBar from "./TourNavBar";
import SignUpLogin from "../components/user/SignUpLogin";
import Home from "../components/Home";
import AdventurePlaces from "../components/places/AdventurePlace";

import Details from "../components/Details";
import Payment from "../components/payment/Payment";
import ThankYou from "../components/payment/ThankYou";



const TourRouter = () => {

 

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TourNavBar/>}>
                    <Route index  element={<Home/>}/>
                      <Route path="/signuplogin" element={<SignUpLogin/>}/>
                      <Route path="/adventureplaces" element={<AdventurePlaces />}/>
                      <Route path= '/details' element={<Details/>}/>
                      <Route path="/payment" element={<Payment/>}/>
                      <Route path="/thankyou" element={<ThankYou/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default TourRouter;