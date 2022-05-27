import { useEffect, useState } from "react"
import { stayService } from "../services/stay.service"
import { useParams } from "react-router-dom";
import { DetailsGallery } from "../cmps/details-gallery"
import { ReserveStay } from "../cmps/reserve-stay"
import { MainFilter } from "../cmps/main-filter";
import { StaydetailsHeader } from "../cmps/StaydetailsHeader";
import { StayDeatailsBellow } from "../cmps/stay-deatails-bellow";



export const StayDetails = () => {

    const [stay, setStay] = useState(null)
    const { stayId } = useParams();


    useEffect(() => {
        getStay()

        document.documentElement.style.setProperty('--headerFontColor', '#000');
        document.documentElement.style.setProperty('--headerbackgroundColor', '#F7F7F7');
    }, [])



    const getStay = async () => {
        const stay = await stayService.getById(stayId)
        setStay(stay)
    }


    { if (!stay) return (<h1>loading</h1>) }

    return <div className="main-stay-details-container">
        <div className="details-container">
            <div className="explore-filterr">
                <MainFilter />
            </div>
            <StaydetailsHeader stay={stay} />
            <DetailsGallery stay={stay} />
            <div className="stay-bellow-container">
                <StayDeatailsBellow stay={stay} />
                <ReserveStay stay={stay} />
            </div>
        </div>
    </div>



}