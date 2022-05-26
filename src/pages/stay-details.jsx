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

    return <div className="details-container">
        <h2>{stay.name}</h2>
        <section className="details-header">
            <section className="flex">
                <h4>{stay.reviewScores.value / 2}<span class="material-icons">star</span></h4>
                <h4>({stay.reviews.length} reviews)</h4>
                <h4>{stay.address.street}</h4>
                <h4></h4>
            </section>
            <section className="flex">
                <h4>Share</h4>
                <h4>Save</h4>
            </section>
        </section>
        {/* <DetailsGallery /> */}
        <section>
            <h2>{stay.name}</h2>
            <h5>{stay.capacity} guest · {stay.bedrooms} bedrooms · {stay.beds} beds · {stay.bathrooms} baths </h5>
        </section>
        <section>
            <div><span class="material-icons-outlined"></span></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    </div>



}