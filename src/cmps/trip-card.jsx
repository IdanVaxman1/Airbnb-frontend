import { Link } from "react-router-dom";

export const TripCard = ({ trip }) => {



    // return <Link to={`/stay/${trip.stay._id}`}>
    return <section className="trip-card-container">
        <section className="trip-card">
            <div>
                <img src={trip.stay.img}></img>
            </div>
            <div className="trip-card-text">
                <div className="trip-card-name">
                    {trip.stay.address.country}
                </div>
                <div>
                    hosted by {trip.hostName}
                </div>
                <div>
                    {trip.checkIn.substring(0, 10)} - {trip.checkOut.substring(0, 10)}
                </div>
            </div>
        </section>
    </section>
    // </Link >

}
