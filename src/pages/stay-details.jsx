import { useEffect, useState } from "react"
import { storageService } from "../services/async-storage.service"
import { useParams } from "react-router-dom";



export const StayDetails = () => {

    const [stays, setStays] = useState(null)
    const { id } = useParams();


    useEffect(() => {
        
    }, [])
    
    return <div className="center">
        <h2>details</h2>
        {/* <h2>{stays[0].name}</h2>  */}
        <ul>
            {/* <li>{stays[0].address.street}</li>
            <li>({stays[0].reviews.length} reviews)</li> */}
            <li></li>
        </ul>
    </div>



}