
import { useEffect, useState } from "react"
import { ReservationPreview2 } from "../cmps/reservation2-preview"
import { reservationService } from "../services/reservation.service"
import { userService } from "../services/user.service"


export const Host = () => {

    const [reservations, setreservations] = useState(null)




    useEffect(() => {
        getReservations()
    }, [])

    let loggedinUser = userService.getLoggedinUser()
    const getReservations = async () => {
        const reservatios = await reservationService.query({userId:loggedinUser._id})
        console.log('reservatios from host',loggedinUser._id)
        setreservations(reservatios)
        // {hostId:loggedinUser._id}

    }






    { if (!reservations) return <h1>loading</h1> }

    return (<div className="stock-margin main-host-page">
        <div className="stock-margin-center">
            <div className="flex">
                <li>
                    <img src={loggedinUser.imgUrl} alt="" />
                </li>
                <li>
                    <h1>
                        Hello {loggedinUser.fullName}!
                    </h1>
                </li>
            </div>
            <div>
                <div className="reservations-container" >
                    {reservations.map(reservation =>
                        <ReservationPreview2  reservation={reservation} key={reservation._id} />
                    )}
                </div>


            </div>
        </div>
    </div>
    )
}


