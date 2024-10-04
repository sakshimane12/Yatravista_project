import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../assets/carousel_img/carousel1.jpg'
import Carousel2 from '../assets/carousel_img/carousel2.jpg'
import Carousel3 from '../assets/carousel_img/carousel3.jpg'
import Carousel4 from '../assets/carousel_img/carousel4.jpg'

const CarouselSlide = () => {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className='rounded rounded-4' width='90%' height='350px' src={Carousel1}/>
                    <Carousel.Caption>
                        <h3>South East Asia</h3>
                        <h5 style={{color:'yellow'}}>Vietnam Cambodia</h5>
                        <h6>Da Nang | Hoi An | Hanoi | Ho Chi Minh City | Cu Chi | My Tho</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='rounded rounded-4' width='90%' height='350px' src={Carousel2}/>
                    <Carousel.Caption>
                        <h3>Rajastan</h3>
                        <h5 style={{color:'yellow'}}>Highlights of Rajastan</h5>
                        <h6>Jaipur | Pushkar | Chittorgarh | Udaipur</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='rounded rounded-4' width='90%' height='350px' src={Carousel3}/>
                    <Carousel.Caption>
                        <h3>Europe</h3>
                        <h5 style={{color:'yellow'}}>Best of Spain</h5>
                        <h6>Madrid | Toledo | Seville | Ronda | Mijas | Marbella</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='rounded rounded-4' width='90%' height='350px' src={Carousel4}/>
                    <Carousel.Caption>
                        <h3>Europe</h3>
                        <h5 style={{color:'yellow'}}>Best of Egypt</h5>
                        <h6>Cairo | Alexandria | Aswan | Nile Cruise | Edfu | Esna</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default CarouselSlide;