import { useEffect, useRef, useState } from "react"
import { HomeImgCard } from "../cmps/home-img-card"
import { MainFilter } from "../cmps/main-filter"
import { StayPreview } from "../cmps/stay-preview"
import { stayService } from "../services/stay.service"



export const Home = () => {

    const [stays, setStays] = useState(null)
    const [popularStays, setPopularStays] = useState(null)


    useEffect(() => {
        getStays()
        document.documentElement.style.setProperty('--headerbackgroundColor', 'unset');
        document.documentElement.style.setProperty('--headerFontColor', '#fff');
        document.documentElement.style.setProperty('--verylightgray', 'unset');
        return () => {
            document.documentElement.style.setProperty('--verylightgray', '#ECECEC');
        }
    }, [])

    const getStays = async () => {
        const stays = await stayService.query()
        setStays(stays)
        getPopularStays()
    }

    const getPopularStays = async () => {
        const NewYork =  stays.find(stay => stay.address.city === 'New York')
        const Montreal = stays.find(stay => stay.address.city === 'Montreal')
        const Porto = stays.find(stay => stay.address.city === 'Porto')
        const Barcelona = stays.find(stay => stay.address.city === 'Barcelona')
        const popularStays = [NewYork, Montreal, Porto, Barcelona]
        console.log('popularStays', popularStays)
        setPopularStays(popularStays)
    }

    { if (!stays || !popularStays) return (<h1>loading</h1>) }


    return (
        <article className="home-page-container" >
            <section className="main-page-head">

            </section>
            <div className="home-filterr">
                <MainFilter />
            </div>
            <section className="stock-margin">
                <div className="stock-margin-center home-page-card-container ">
                    <h1>Popular Destinations</h1>
                    <div className="home-page-card-line" >
                        {popularStays.map(popularStay =>
                            <HomeImgCard popularStay={popularStay} key={popularStay._id} />
                        )}
                    </div>
                    <div className="home-page-card-line" >
                        {popularStays.map(popularStay =>
                            <HomeImgCard popularStay={popularStay} key={popularStay._id} />
                        )}
                    </div>
                    <div className="home-page-card-line" >
                        {popularStays.map(popularStay =>
                            <HomeImgCard popularStay={popularStay} key={popularStay._id} />
                        )}
                    </div>
                </div>
            </section>
        </article>



    )
}


