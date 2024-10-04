import CarouselSlide from "./CarouselSlide";
import Destinations from "./Destinations";
import Footer from "./Footer";
import Review from "./Review";

const Home = () => {
    return(
        <div>
            <Destinations/>
            <CarouselSlide/><hr/>
            <Review/>
            <div className="p-3" style={{backgroundColor:'lightyellow'}}>
                <h3>About YatraVista</h3>
                <p style={{textAlign:'justify'}}>
                    <b>Find the best travel packages at Yatra Vista</b><br/>
                    <small>Booking a travel package when it comes to travelling to new parts of the 
                    country or the world is a practice that has slowly gained a lot of popularity. 
                    Today, whenever it is about planning a holiday trip, many people have a preferred 
                    travel portal in India that is best for their specific needs. Owing to the faith 
                    bestowed in our travel services by our patrons, Veena World has established its niche 
                    and is counted among the top 10 travel agencies in India. </small><br/>
                    <b>What makes us one of the best travel companies in India?</b><br/>
                    <small>We, at YatraVista, know that there is nothing better than the experiences and memories 
                    you are able to create when you travel to new places with our holiday packages. With YatraVista 
                    packages, you can head out and indulge in the exploration of an unknown destination 
                    or revisit your favourite spots in places that hold a lot of memories, you can meet new people 
                    from various walks of life, and mark another spot on the map that you have covered; there is 
                    nothing better than travel.</small>
                </p>
            </div><hr/>
            <Footer/>
            
        </div>
    )
}
export default Home;