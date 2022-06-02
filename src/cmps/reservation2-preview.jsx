import { utilService } from "../services/util.service"
// import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"

export function ReservationPreview2({ reservation }) {

    { console.log('reservation stay', reservation) }
    // var date = reservation.checkIn



    return (<>
        
                    
                    <td>{reservation.user.username}</td>
                   
                    <td style={{ textAlign: 'left'}}>
                        {reservation.stay.name}
                    </td>
                   
                    <td>
                        {reservation.adults + reservation.childrens}
                    </td>
                  
                    <td>
                        {reservation.checkIn.substring(0, 10)}
                    </td>
                  
                    <td>
                        {reservation.checkOut.substring(0, 10)}
                    </td>
                 
                    <td>
                        ${reservation.totalPrice}
                    </td>
                    <td>
                        <button>Add a review</button>
                    </td>
                    <td>
                        <button>Cancel</button>
                    </td>
                   
               

    </>
    )

}

