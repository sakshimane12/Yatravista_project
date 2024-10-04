import Image from 'react-bootstrap/Image';
import Picture from '../assets/images/image.jpg'
import Adventure from '../assets/images/adventure.jpg'
import Beach from '../assets/images/beach.jpg'
import HikingTrekking from '../assets/images/hiking_trekking.jpg'
import HillStation from '../assets/images/hill_station.jpg'
import RiverCruise from '../assets/images/river_cruise.jpg'
import Safari from '../assets/images/safari.jpg'
import { useNavigate } from 'react-router-dom';


const Destinations = () => {

    const navigate = useNavigate()

    return(
        <div>
            <Image className='mb-3' src={Picture} style={{width:'100%',height:'250px',marginTop:'50px'}} fluid/>
            <div className='row' style={{marginTop:'-45px',border:''}}>
                <div  className='col'>
                    <button className='p-0' onClick={() => navigate('/adventureplaces')}>
                    <img style={{width:'90px',height:'120px'}} src={Adventure}/>
                    </button>
                    <p> Adventure</p>
                </div>
                <div className='col'>
                    <button className='p-0'>
                    <img style={{width:'90px',height:'120px'}} src={Beach}/>
                    </button>
                    <p>Beach</p>
                </div>
                <div className='col'>
                    <button className='p-0'>
                    <img style={{width:'90px',height:'120px'}} src={HikingTrekking}/>
                    </button>
                    <p>Hiking & Trekking</p>
                </div>
                <div className='col'>
                    <button className='p-0'>
                    <img style={{width:'90px',height:'120px'}} src={HillStation}/>
                    </button>
                    <p>Hill Station</p>
                </div>
                <div className='col'>
                    <button className='p-0'>
                    <img style={{width:'90px',height:'120px'}} src={RiverCruise}/>
                    </button>
                    <p>River Cruise</p>
                </div>
                <div className='col'>
                    <button className='p-0'>
                    <img style={{width:'90px',height:'120px'}} src={Safari}/>
                    </button>
                    <p>Safari</p>
                </div>
            </div>
        </div>
    )
}
export default Destinations;