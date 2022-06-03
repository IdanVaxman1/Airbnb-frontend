import { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmedResModal } from "./confirmed-res-modal";
import { ConfirmedResModalTrips } from "./confirmed-res-modal-trips";

export const TripCard = ({ trip }) => {

    const [resModalIsOpen, setResModalIsOpen] = useState (false)



    const toggleModalIsOpen = () => {
        
        setResModalIsOpen(!resModalIsOpen)
    }
    

    // onpenResModal={ModalIsOpen()}

    // return <Link to={`/stay/${trip.stay._id}`}>
    return <section onClick={toggleModalIsOpen} className="trip-card-container">
        {resModalIsOpen && <ConfirmedResModalTrips  reservation={trip}/>}
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
