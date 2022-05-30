import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action";
import { MainFilter } from "./main-filter";
import { SmallFilter } from "./small-filter";
import { useEffect, useRef, useState } from "react"
import { UserMenuModal } from "./user-menu-modal";
import { useParams } from "react-router-dom";


export const AppHeader = () => {
    const { stayId } = useParams();
        console.log('stayId',stayId)

    const [isSmallFilterShown, setIsSmallFilterShown] = useState(true)
    const [bigFilterStyle, setBigFilterStyle] = useState({ display: 'none' })
    const [smallFilterStyle, setsmallFilterStyle] = useState({ display: 'block' })
    const [menuModalShow, setMenuModalShow] = useState({ display: 'none' })
    
    const param = useParams();
    console.log('param',JSON.stringify(param))


    useEffect(() => {
        window.addEventListener('scroll', changeCss, { passive: true });
    }, [])


    const changeCss = () => {
        const scrollValue = document.documentElement.scrollTop
        if (scrollValue) {
            setBigFilterStyle({ display: 'none' })
            setsmallFilterStyle({ display: 'block' })
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

    const toggleModal = () => {
        setMenuModalShow((menuModalShow === 'none') ? 'flex' : 'none')
    }


    return (
        <header className="stock-margin main-header">
            <div className="stock-margin-center ">
                <nav className="grid-3-col main-nav">
                    <div className="logo" onClick={resetFilterBy}>
                        <NavLink to='/home'>
                            <div className="logo">
                                <li>
                                    <img src={require("../assets/imgs/logo1.png")} alt="" />
                                </li>
                                <li>Staybnb</li>
                            </div>
                        </NavLink>
                    </div>
                    <div onClick={() => onPresentFilter()} className="small-filte-parent" >
                        <div className="explore-filterr filterr small">
                            <div style={smallFilterStyle} >
                                <SmallFilter />
                            </div>
                        </div>
                    </div>
                    <div className="nav-link-parent">
                        <li onClick={resetFilterBy}><NavLink to='/explore'>Explore</NavLink></li>
                        <li><NavLink to='/explore'>Become a host</NavLink></li>
                        <li>
                            <div className='user-menu noselect' onClick={toggleModal}>
                                <span>≡</span>
                                <img src={require("../assets/imgs/user-icon.png")} className='user-icon' />
                            </div>
                            <div style={{ display: menuModalShow }}>
                                <UserMenuModal />
                            </div>
                        </li>
                    </div>
                </nav>

                <div className="explore-filterr filterr big">
                    <div style={bigFilterStyle}>
                        <MainFilter />
                    </div>
                </div>
            </div>
        </header >
    )
}