import { utilService } from "../services/util.service"
// import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"

export function ReservationPreview2({ reservation }) {

    { console.log('reservation', reservation) }
    var date = reservation.checkIn



    return (
        <div className="reservation-card box-shadow">
            <div>

                <div>
                    <h2>Property:</h2>
                    <h3>{reservation.stay.name}</h3>
                    <h2>checkIn:</h2>
                    <h3>
                        {reservation.checkIn}
                    </h3>
                    {/* .toISOString().split('T')[0] */}
                </div>
                <div>
                    <h2>checkOut:</h2>
                    <h3>
                        {reservation.checkOut}
                    </h3>
                </div>


            </div>
        </div>

    )

}

