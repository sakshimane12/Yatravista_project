
const Card = ({data}) => {
    
    return(
        <div className="card mb-3" style={{maxWidth:'350px'}}>
            <div className="card-body">
                <h5>{data.name}</h5>
                <p className="card-text text-dark">{data.review}</p>
            </div>
        </div>
    )
}
export default Card;