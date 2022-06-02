import { useEffect, useRef, useState } from "react"
import { TripCard } from "../cmps/trip-card"
import { TripsHeader } from "../cmps/trips-header"
import { tripsService } from "../services/trips.service"




export const Trips = () => {
    
    const [trips, setTrips] = useState(null)
    useEffect(() => {
        setTrips(tripsService.query())
    },[])
    
    // const getTrips = async () => {
    //     const trips = await tripsService.query()
    //     setTrips(trips)
    // }
    if(!trips) return <h1>Loding</h1>
    return (
        <section className="trips">
            <div>
                <TripsHeader />
            </div>
            <section>
                <div className="trip-card-header"><h3>Where you've been</h3></div>
                {trips.map(trip => <TripCard trip={trip} />)}
            </section>
        </section>
    );

}


