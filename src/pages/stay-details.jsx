import { useEffect, useState } from "react"
import { stayService } from "../services/stay.service"
import { useParams } from "react-router-dom";



export const StayDetails = () => {

    const [stay, setStay] = useState(null)
    const { stayId } = useParams();


    useEffect(() => {
        getStay()      
    }, [])

    const getStay = async () => {
        const stay = await stayService.getById(stayId)
        setStay(stay)
    }


        { if (!stay) return (<h1>loading</h1>) }

    return <div className="">
        <h2>{stay.name}</h2>
        
    </div>



}