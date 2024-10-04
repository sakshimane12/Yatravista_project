import {Link,Outlet} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from '../assets/images/yatravista.jpg'

const TourNavBar = () => {


    return(
        <div>
        
            <nav className='navbar navbar-expand-lg bg-light fixed-top mb-5 p-0'  data-bs-theme='white' >
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link active' style={{fontFamily:'sans-serif'}} to='/home'><img style={{height:'60px',width:'140px'}} src={logo}/></Link>
                        </li>
                    </ul>
                
                    <div style={{marginLeft:'10%',width:'130%',height:'40px'}} className='search-box'>
                    <CiSearch />
                        <input style={{}} className='rounded-3 border border-1' type='text' placeholder='Search...' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-target="#menu1" data-bs-toggle="collapse" aria-controls="menu1" aria-expanded="false" aria-label="Toggler Button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='menu1'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                    <Link className='nav-link'><IoIosNotificationsOutline size={'20px'} />Notification</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/signuplogin'><FaRegUser size={'15px'}/> SignUp/Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}
export default TourNavBar;
