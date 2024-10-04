import React, { useState } from "react";
import new_york from '../../assets/places_img/newyork.jpg'
import rome from '../../assets/places_img/rome.jpg'
import tokyo from '../../assets/places_img/tokyo.jpg'
import kashmir from '../../assets/places_img/kashmir.jpg'
import Footer from "../Footer";
import adventure from '../../assets/places_img/adventure1.jpg'
import people from '../../assets/people_img/adv_ppl.jpg'
import { useNavigate } from "react-router-dom";

const placesData = [
    {
      country: "India",
      place: "Kashmir",
      image: kashmir,
      price: 1200,
    },
    {
      country: "Italy",
      place: "Rome",
      image: rome,
      price: 900,
    },
    {
      country: "Japan",
      place: "Tokyo",
      image: tokyo,
      price: 1500,
    },
    {
      country: "USA",
      place: "New York",
      image: new_york,
      price: 1100,
    },
  ];
  

const AdventurePlaces = ({ onViewTour }) => {

  const navigate = useNavigate()

    const [maxPrice, setMaxPrice] = useState(2000);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPrice);
    const [filteredData, setFilteredData] = useState(placesData);
  
    const handlePriceFilter = () => {
      const filtered = placesData.filter((place) => place.price <= selectedMaxPrice);
      setFilteredData(filtered);
    };

    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleViewTour = (place) => {
      setSelectedPlace(place);
      navigate('/details', { state: { selectedPlace: place } }); // Pass selected place as state
    };
    
  
    return (
      <>
      <div className="container my-4">
        <div className="d-flex mb-3 flex-row justify-content-between">
        <div style={{position:'relative'}}>

          <img style={{width:'130%', height:'350px'}} src={adventure}/>

          <div style={{position:'absolute',top:'55%',left:'25%',color:'white'}}>
            <h3>Adventure</h3>
              <small style={{position:'relative'}}>Adventure ignites the spirit, inviting exploration and discovery. 
                Whether trekking mountains or diving into the ocean's depths, each journey offers thrilling
                experiences, unforgettable memories, and personal growth beyond limits.
              </small>
          </div>
        </div>
        <div>
          <img style={{width:'70%', height:'350px'}} src={people}/>
        </div>
      </div>
  
        <div className="d-flex flex-row align-items-center mb-4">

          <label className="mb-2">
            Max Price: <strong>{selectedMaxPrice}</strong>
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max={maxPrice}
            value={selectedMaxPrice}
            onChange={(e) => setSelectedMaxPrice(parseInt(e.target.value))}
            style={{ width: "200px" }} 
          />
          <button className="btn btn-primary ms-3" onClick={handlePriceFilter}>
            Filter
          </button>
        </div>
  
        <div className="row">
          {filteredData.map((place, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="card text-center h-100">
                <img
                  src={place.image}
                  className="card-img-top"
                  alt={place.place}
                  style={{ borderRadius: "8px", height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{place.country}</h5>
                  <p className="card-text">{place.place}</p>
                  <p className="card-text"><strong>Price: {place.price}</strong></p>
                  <button 
                      className="btn btn-info"
                      onClick={() => handleViewTour(place)}>View Tour
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
      </>
    );
  };

export default AdventurePlaces;