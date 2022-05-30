import { useEffect, useRef, useState } from "react"
import { HomeImgCard } from "../cmps/home-img-card"
import { MainFilter } from "../cmps/main-filter"
import { StayPreview } from "../cmps/stay-preview"
import { stayService } from "../services/stay.service"



export const Home = () => {

    const [stays, setStays] = useState(null)
    const [popularStays, setPopularStays] = useState(null)
    const cities = [{ name: 'New york', imgURL: 'https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg' },
    { name: 'Porto', imgURL: 'https://touristjourney.com/wp-content/uploads/2020/10/shutterstock_1706807566-scaled.jpg' },
    { name: 'Montreal', imgURL: 'https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx' },
    { name: 'Barcelona', imgURL: 'https://students.edmonds.edu/studyabroad/images/barca.jpg' }]


    useEffect(() => {
        getStays()
        document.documentElement.style.setProperty('--headerbackgroundColor', 'unset');
        document.documentElement.style.setProperty('--headerFontColor', '#fff');
        document.documentElement.style.setProperty('--verylightgray', 'unset');
        document.documentElement.style.setProperty('--bgc', 'unset');
        return () => {
            document.documentElement.style.setProperty('--bgc', '#F7F7F7');
            document.documentElement.style.setProperty('--verylightgray', '#ECECEC');
        }
    }, [])


    const getStays = async () => {
        const stays = await stayService.query()
        setStays(stays)
        getPopularStays()
    }

    const getPopularStays = async () => {
        const stays = await stayService.query()
        const NewYork = stays.find(stay => stay.address.city === 'New York')
        const Montreal = stays.find(stay => stay.address.city === 'Montreal')
        const Porto = stays.find(stay => stay.address.city === 'Porto')
        const Barcelona = stays.find(stay => stay.address.city === 'Barcelona')
        const popularStays = [NewYork, Montreal, Porto, Barcelona]
        setPopularStays(popularStays)
    }

    { if (!stays || !popularStays) return (<h1></h1>) }

    return (
        <article className="home-page-container" >
            <section className="main-page-head">

            </section>
            <section className="stock-margin">
                <div className="stock-margin-center home-page-card-container ">
                    <h1>Popular destinations</h1>
                    <div className="home-page-card-line" >
                        {cities.map(city =>
                            <HomeImgCard city={city} key={city.name} />
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


