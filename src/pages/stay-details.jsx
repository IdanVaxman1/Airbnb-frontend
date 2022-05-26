import { useEffect, useState } from "react"
import { stayService } from "../services/stay.service"
import { useParams } from "react-router-dom";
import { DetailsGallery } from "../cmps/details-gallery"
import { ReserveStay } from "../cmps/reserve-stay"



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
                <h4>({stay.reviews.length} reviews)·</h4>
                <h4>{stay.address.street}</h4>
                <h4></h4>
            </section>
            <section className="flex">
                <h4>Share</h4>
                <h4>Save</h4>
            </section>
        </section>
        <DetailsGallery />
        <section>
            <h2>{stay.name}</h2>
            <h5>{stay.capacity} guest · {stay.bedrooms} bedrooms · {stay.beds} beds · {stay.bathrooms} baths </h5>
        </section>
        <section className="features">
            <div className="feature-block">
                <div className="feature-logo"><span class="material-icons">home</span></div>
                <section>
                    <div><h4>Entire home</h4></div>
                    <div><h5>You’ll have the apartment to yourself.</h5></div>
                </section>
            </div>
            <div className="feature-block">
                <div className="feature-logo"><span class="material-icons ">location_on</span></div>
                <section>
                    <div><h4>Great location</h4></div>
                    <div><h5>Recent guests gave the location a 5-star rating.</h5></div>
                </section>
            </div>
            <div className="feature-block">
                <div className="feature-logo"><span class="material-icons">auto_awesome</span></div>
                <section>
                    <div><h4>Enhanced Clean</h4></div>
                    <div><h5>This host has committed to our 5-step enhanced cleaning process.</h5></div>
                </section>
            </div>

            <div className="feature-block">
                <div className="feature-logo"><span class="material-icons">event</span></div>
                <section>
                    <div><h4>Free cancellation up to 24 hours before check-in</h4></div>
                    <div><h5>feel free to be flexible.</h5></div>
                </section>
            </div>
        </section>
        <ReserveStay stay={stay}/>
    </div>



}