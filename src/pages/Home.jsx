import { useEffect, useRef, useState } from "react"
import { HomeImgCard } from "../cmps/home-img-card"
import { stayService } from "../services/stay.service"
import { useDispatch, useSelector } from 'react-redux'
import { showLargeFilter, showSmallFilter, LogoChangeToWhite } from "../store/actions/headerAction";



export const Home = () => {



    const [topRated, setTopRated] = useState(null)
    const cities = [{ name: 'New york', imgURL: 'https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg' },
    { name: 'Porto', imgURL: 'https://touristjourney.com/wp-content/uploads/2020/10/shutterstock_1706807566-scaled.jpg' },
    { name: 'Montreal', imgURL: 'https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx' },
    { name: 'Barcelona', imgURL: 'https://students.edmonds.edu/studyabroad/images/barca.jpg' }]


    useEffect(() => {
        getTopRated()
        dispatchFiltertoShow()
        dispatchLogoIsWhite()
        document.documentElement.style.setProperty('--headerbackgroundColor', 'unset');
        document.documentElement.style.setProperty('--headerFontColor', '#fff');
        document.documentElement.style.setProperty('--verylightgray', 'unset');
        document.documentElement.style.setProperty('--bgc', 'unset');
        
        return () => {
            document.documentElement.style.setProperty('--bgc', '#F7F7F7');
            document.documentElement.style.setProperty('--verylightgray', '#ECECEC');
            dispatchFiltertoHide()
            dispatch(LogoChangeToWhite(false))
        }
    }, [])

    const dispatch = useDispatch()
    
    const dispatchFiltertoShow = () => {
        dispatch(showLargeFilter())
    }
    const dispatchFiltertoHide = () => {
        dispatch(showSmallFilter())
    }
    const dispatchLogoIsWhite = () => {
        dispatch(LogoChangeToWhite(true))
    }

    const getTopRated = async () => {
        const topStays = await stayService.getTopRated()
        setTopRated([topStays])
    }

    { if (!topRated) return (<h1></h1>) }

    return (
        <article className="home-page-container" >
            <section className="main-page-head">

            </section>
            <section className="stock-margin">
                <div className="stock-margin-center home-page-card-container ">
                    <h1>Popular destinations</h1>
                    <div className="home-page-card-line">
                        {cities.map(city =>
                            <HomeImgCard city={city} key={city.name} />
                        )}
                    </div>
                    <h1>Top rated</h1>
                    <div className="home-page-card-line" >
                        {topRated[0].map(stay =>
                            <HomeImgCard stay={stay} key={stay._id} />
                        )}
                    </div>
                </div>
            </section>
        </article>
    )
}


