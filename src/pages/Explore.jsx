import { storageService } from "../services/async-storage.service"
import { useEffect, useRef, useState } from "react"
import { stayService } from "../services/stay.service"
import { StayPreview } from "../cmps/StayPreview"
import { useSelector } from 'react-redux'
import { MainFilter } from "../cmps/MainFilter"


export function Explore() {
    const [headerFontColor, setHeaderFontColor] = useState('white')
    const [stays, setStays] = useState(null)
    const { filterBy } = useSelector((storeState) => storeState.stayModule)

    useEffect(() => {
        getStays()
        document.documentElement.style.setProperty('--headerFontColor', '#000');
    }, [])
    
    const getStays = async () => {
        const stays = await stayService.query(filterBy)
        setStays(stays)
    }


{if(!stays) return (<h1>loading</h1>)}
return (
    <section className="explore-main">


    <div className="card-container">
    {/* <MainFilter/> */}
           {stays.map(stay =>
                <StayPreview stay={stay} key={stay._id}/>
                )}
        </div>
                </section>
    )
}