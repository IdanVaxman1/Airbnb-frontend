import { storageService } from "../services/async-storage.service"
import { useEffect, useRef, useState } from "react"
import { stayService } from "../services/stay.service"
import { StayPreview } from "../cmps/stay-preview"
// import { stayService } from "../services/stay.service"
import { useSelector } from 'react-redux'
import { MainFilter } from "../cmps/main-filter"
import TextField from '@material-ui/core/TextField';



export function Explore() {
    const [headerFontColor, setHeaderFontColor] = useState('white')
    const [stays, setStays] = useState(null)
    const { filterBy } = useSelector((storeState) => storeState.stayModule)

    useEffect(() => {
        getStays()
        document.documentElement.style.setProperty('--headerFontColor', '#000');
    }, [filterBy])

    const getStays = async () => {
        const stays = await stayService.query(filterBy)
        setStays(stays)
    }


    

    { if (!stays) return (<h1>loading</h1>) }
    return (
        <div>

            <div className="explore-filterr">
                <MainFilter />
            </div>
            <section className="explore-main">

                <div className="card-container" >
                    {stays.map(stay =>
                        <StayPreview stay={stay} key={stay._id} />
                    )}
                </div>
            </section>
        </div>
    )
}