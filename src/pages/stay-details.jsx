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

    
    return <div className="">
        <h2>details</h2>
        {/* <h2>{stays[0].name}</h2> 
        <section className="details-location flex">
            <h4>{stays[0].address.street}</h4>
            <h4>({stays[0].reviews.length} reviews)</h4>
        </section> */}
    </div>



}