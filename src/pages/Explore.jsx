import { storageService } from "../services/async-storage.service"
import { useEffect, useRef, useState } from "react"
import { stayService } from "../services/stay.service"
import { StayPreview } from "../cmps/stay-preview"
// import { stayService } from "../services/stay.service"
import { useSelector } from 'react-redux'
import { MainFilter } from "../cmps/main-filter"
import TextField from '@material-ui/core/TextField'
import { ExploreFilter } from "../cmps/explore-filter"



export function Explore() {
    const [headerFontColor, setHeaderFontColor] = useState('white')
    const [stays, setStays] = useState(null)
    const { filterBy } = useSelector((storeState) => storeState.stayModule)

    useEffect(() => {
        getStays()
        document.documentElement.style.setProperty('--headerFontColor', '#000');
        document.documentElement.style.setProperty('--headerbackgroundColor', '#F7F7F7');
        window.addEventListener('scroll', changeCss);

        return () => {

            document.documentElement.style.setProperty('--headerbackgroundColor', 'unset');
            document.documentElement.style.setProperty('--headerFontColor', '#fff');
        }

    }, [filterBy])

    const changeCss = () => {
        var bodyElement = document.querySelector("body");
        var navElement = document.querySelector(".explore-filterr");
        // this.scrollY > 5 ? navElement.style.visibility = 'hidden' : navElement.style.visibility = 'visible';
      }

    const getStays = async () => {
        const stays = await stayService.query(filterBy)
        setStays(stays)
    }

    const onChangeExploreFilter = async (exploreFilterBy) => {
        const stays = await stayService.query(filterBy, exploreFilterBy)
        setStays(stays)
    }

    { if (!stays) return (<h1>loading</h1>) }
    return (
        <div className="stock-margin">
            <div className="stock-margin-center">
                {/* <div className="explore-filterr filterr">
                    <MainFilter />
                </div> */}
                <div>
                    <ExploreFilter stays={stays} onChangeExploreFilter={onChangeExploreFilter} />
                </div>
                <section >
                    <div className="card-container" >
                        {stays.map(stay =>
                            <StayPreview stay={stay} key={stay._id} />
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}