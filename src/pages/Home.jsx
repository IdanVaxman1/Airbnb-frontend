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
        const NewYork =  [{url: 'https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg'},{name: 'new york'}]
        const Montreal =  [{url: 'https://www.mtl.org/sites/default/files/styles/playlist_banner_big/public/2020-11/44766.jpg?itok=_XT3mMhv'},{name: 'Montreal'}]
        const Porto =  [{url: 'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2019/09/14101152/Panoramic-view-of-Old-Porto-Oporto-city-and-Ribeira-over-Douro-river-from-Vila-Nova-de-Gaia-Portugal-Image.jpg'},{name: 'Portp'}]
        const Barcelona =  [{url: 'https://img.static-af.com/images/media/26743379-B7FE-440F-8E524E30B13E20D3'},{name: 'Barcelona'}]
        const popularStays = [NewYork, Montreal,Porto, Barcelona]
        setPopularStays(popularStays)
    }

    { if (!stays || !popularStays) return (<h1></h1>) }

    return (
        <article className="home-page-container" >
            <section className="main-page-head">

            </section>
            {/* <div className="home-filterr filterr">
                <MainFilter />
            </div> */}
            <section className="stock-margin">
                <div className="stock-margin-center home-page-card-container ">
                    <h1>Popular Destinations</h1>
                    <div className="home-page-card-line" >
                        
                        {popularStays.map(popularStay =>
                            <HomeImgCard popularStay={popularStay} key={popularStay[0].url} />
                        )}
                    </div>
                    {/* <div className="home-page-card-line" >
                        {popularStays.map(popularStay =>
                            <HomeImgCard popularStay={popularStay} key={popularStay._id} />
                        )}
                    </div>
                    <div className="home-page-card-line" >
                        {popularStays.map(popularStay =>
                            <HomeImgCard popularStay={popularStay} key={popularStay._id} />
                        )}
                    </div> */}
                </div>
            </section>
        </article>
    )
}


