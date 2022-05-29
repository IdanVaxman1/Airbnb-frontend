import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action";
import { MainFilter } from "./main-filter";
import { SmallFilter } from "./small-filter";
import { useEffect, useRef, useState } from "react"

// import { NavLink } from "../assets/imgs/";
export const AppHeader = () => {

    const [isSmallFilterShown, setIsSmallFilterShown] = useState(true)
    const [bigFilterStyle, setBigFilterStyle] = useState({ display: 'none' })
    const [smallFilterStyle, setsmallFilterStyle] = useState({ display: 'block' })

    useEffect(() => {
        window.addEventListener('scroll', changeCss, { passive: true });
    }, [])

    const changeCss = () => {
        const scrollValue = document.documentElement.scrollTop
        if (scrollValue<100 || scrollValue=== 0) {
            setBigFilterStyle({ visibility: 'visible' })
            setsmallFilterStyle({ visibility: 'hidden' })
        }
        else {
            setBigFilterStyle({ visibility: 'hidden' })
            setsmallFilterStyle({ visibility: 'visible' })
        }
    }


    const onPresentFilter = () => {

        setsmallFilterStyle({ display: 'none' })
        setBigFilterStyle({ display: 'block' })
    }




    const dispatch = useDispatch()

    const resetFilterBy = () => {
        dispatch(changeFilter({ location: '', from: null, to: null }))
    }


    return (
        <header className="stock-margin main-header">
            <nav className="stock-margin-center main-nav">
                <div className="logo" onClick={resetFilterBy}>
                    <NavLink to='/home'>
                        <div className="logo">
                            <li>
                                <img src={require("../assets/imgs/logo1.png")} alt="" />
                            </li>
                            <li>StayBnb</li>
                        </div>
                    </NavLink>
                </div>
                <div onClick={() => onPresentFilter()} >
                    <div className="explore-filterr filterr small">
                        <div style={smallFilterStyle} >
                            <SmallFilter />
                        </div>
                    </div>
                </div>
            <div className="">
                <li onClick={resetFilterBy}><NavLink to='/explore'>Explore</NavLink></li>
                <li><NavLink to='/explore'>Become a host</NavLink></li>
                <li><NavLink to='/Notifications'><span className="material-icons">notifications_active</span></NavLink></li>
                <li><NavLink to='/Login'>Log-in</NavLink></li>
            </div>
        </nav>
                <div className="explore-filterr filterr big">
                    <div style={bigFilterStyle}>
                        <MainFilter />
                    </div>
                </div>
        </header >
    )
}