import { useEffect, useState } from "react"
import { storageService } from "../services/async-storage.service"



export const StayDetails = () => {

    const [stays, setStays] = useState(null)
  
    useEffect(() => {
        getStays()
    }, [])
    
    const getStays = async () => {
        const stays = await storageService.query()
        setStays(stays)
        console.log('details' , stays);
    }

    return <div className="center">
        <h2>details</h2>
        <h2>{stays[0].name}</h2> 
        <ul>
            <li>{stays[0].address.street}</li>
            <li>({stays[0].reviews.length} reviews)</li>
            <li></li>
        </ul>
    </div>



}