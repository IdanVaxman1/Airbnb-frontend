import { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmedResModal } from "./confirmed-res-modal";

export const TripCard = ({ trip }) => {

    const [resModalIsOpen, setResModalIsOpen] = useState (false)



    const onpenResModal = () => {
        setResModalIsOpen(true)
    }



    // return <Link to={`/stay/${trip.stay._id}`}>
    return <section onClick={onpenResModal} className="trip-card-container">
        {resModalIsOpen && <ConfirmedResModal reservation={trip}/>}
        <section className="trip-card">
            <div>
                <img src={trip.stay.img}></img>
            </div>
            <div className="trip-card-text">
                <div>

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
            </div>
        </section>
    </section>
    // </Link >

}
