import { utilService } from "../services/util.service"
// import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"

export function ReservationPreview2({ reservation }) {

    { console.log('reservation stay', reservation) }
    // var date = reservation.checkIn



    return (
        <div className="reservation-card box-shadow">
            <div>
                {/* {JSON.stringify(reservation)} */}
                <div>
                    <h2>Property:</h2>
                    <h3>{reservation.stay.name}</h3>
                    <h2>checkIn:</h2>
                    <h3>
                        {reservation.checkIn.substring(0, 10)}
                    </h3>
                    {/* .toISOString().split('T')[0] */}
                </div>
                <div>
                    <h2>checkOut:</h2>
                    <h3>
                        {reservation.checkOut.substring(0, 10)}
                    </h3>
                </div>


            </div>
        </div>

    )

}

