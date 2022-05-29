import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action";
import { MainFilter } from "./main-filter";
import { SmallFilter } from "./small-filter";
import { useEffect, useRef, useState } from "react"
import { UserMenuModal } from "./user-menu-modal";

// import { NavLink } from "../assets/imgs/";
export const AppHeader = () => {

    const [isSmallFilterShown, setIsSmallFilterShown] = useState(true)
    const [bigFilterStyle, setBigFilterStyle] = useState({ display: 'none' })
    const [smallFilterStyle, setsmallFilterStyle] = useState({ display: 'block' })
    const [menuModalShow, setMenuModalShow] = useState({ display: 'none' })

    const onPresentFilter = () => {

        setsmallFilterStyle({ display: 'none' })
        setBigFilterStyle({ display: 'block' })
    }

    const dispatch = useDispatch()

    const resetFilterBy = () => {
        dispatch(changeFilter({ location: '', from: null, to: null }))
    }

    const toggleModal=()=>{
        setMenuModalShow((menuModalShow==='none')? 'block' : 'none')
    }


    return (
        <header className="stock-margin">
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
                <div className="explore-filterr filterr big">
                    <div style={bigFilterStyle}>
                        <MainFilter />
                    </div>
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
                    <li>
                        <div className='user-menu noselect'>
                            <span>≡</span>
                            <img src={require("../assets/imgs/user-icon.png")} className='user-icon' />
                        </div>
                    </li>
                </div>
            </nav>
            {/* <div style={{display:menuModalShow}}>
                    <UserMenuModal/>
                </div> */}
        </header >
    )
}