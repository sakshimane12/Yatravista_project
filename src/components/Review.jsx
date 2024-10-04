import React from "react";
import Card from "./Card";
import data from './Review_data';
const Review = () => {

    const reviews = data

    return(
        <div className='container w-100'>
            <h3 className="text-center m-3 w-25">Customer Review</h3>
            <div className="row ">
                {reviews.map((data, index) => (
                    <div className="col-12 col-md-3" key={index}>
                        <Card data={data}/>
                    </div>
                ))}
            </div>
        </div>
        
    )
}
export default Review;