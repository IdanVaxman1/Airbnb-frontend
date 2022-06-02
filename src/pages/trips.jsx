import { useEffect, useRef, useState } from "react"
import { TripCard } from "../cmps/trip-card"
import { TripsHeader } from "../cmps/trips-header"
import { reservationService } from "../services/reservation.service"
import { tripsService } from "../services/trips.service"
import { userService } from "../services/user.service"




export const Trips = () => {

    
    
    const [trips, setTrips] = useState(null)
    useEffect(() => {
        let loggedinUser = userService.getLoggedinUser()
        getTrips(loggedinUser)
    },[])
    
    const getTrips = async (loggedinUser) => {
        console.log(loggedinUser)
        const trips = await reservationService.query({userId: loggedinUser._id})
        console.log(trips)
        const sortedTrips = trips.sort((a,b) => Date.parse(a.checkIn) - Date.parse(b.checkIn))
        setTrips(sortedTrips)
    }
    if(!trips) return <h1>Loding...</h1>
    return (
        <section className="trips stock-margin">
            <div className="stock-margin-center">
            <div>
                <TripsHeader />
            </div>
                <div className="trip-card-header "><h3>Where you've been</h3></div>
            <section className="trip-cards-container ">
                {trips.map(trip => <TripCard trip={trip} key={trip} />)}
            </section>
            </div>
                
        </section>
    );

}


