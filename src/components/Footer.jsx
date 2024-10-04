import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";
import { FiMail } from "react-icons/fi";

const Footer = () =>{
    return(
        <div className="">
            <div className="row">
                <div className="col-12 col-md-3">
                    <h5><HiOutlineBuildingOffice2 /> Our Offices</h5>
                    <small>Located across the country, ready to assist in planning & booking your perfect vacation.</small>
                    <p><a href="https://www.google.com/maps">Locate Us</a></p>
                </div>
                <div className="col-12 col-md-3">
                    <h5><PiPhoneCall /> Call Us</h5>
                    <small>Request a quote, or just chat about your next vacation. We're always happy to help!</small>
                    <h6>1800 23 4567</h6>
                </div>
                <div className="col-12 col-md-3">
                    <h5><FiMail /> Write Us</h5>
                    <small>Be it an enquiry, feedback or a simple suggestion, write to us.</small>
                    <h6><a style={{color:'black'}} href="https://www.gmail.com">customer@yatravista.com</a></h6>
                </div>
                <div className="col-12 col-md-3">
                    <h5>Contact with us</h5>
                    <small>Reviews, podcasts, blogs and more...</small>
                    <p>
                        <a className="p-1" href="https://www.facebook.com"><FaFacebook /></a>
                        <a style={{color:'darkblue'}} className="p-1" href="https://www.linkedin.com/"><FaLinkedin /></a>
                        <a style={{color:'red'}} className="p-1" href="https://www.youtube.com/"><FaYoutube /></a>
                        <a style={{color:'darkmagenta'}} className="p-1" href="https://www.instagram.com/"><FaInstagram /></a>
                    </p>
                </div>
            
            </div>
            <div className="footer text-bg-dark row p-2 text-start">
                <div className="col">
                    <small>© 2019 - 24 YatraVista Pvt Ltd. All Rights Reserved.</small>
                </div>
                <div className="col">
                    <a style={{color:'white', textDecoration:'none'}} href="">Privacy Policy</a>
                </div>
                <div className="col">
                    <a style={{color:'white',textDecoration:'none'}} href="">Terms & Conditions</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;