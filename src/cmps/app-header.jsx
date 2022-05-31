import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action";
import { MainFilter } from "./main-filter";
import { SmallFilter } from "./small-filter";
import { useEffect, useRef, useState } from "react"
import { UserMenuModal } from "./user-menu-modal";
import { showLargeFilter, showSmallFilter, LogoChangeToWhite } from "../store/actions/headerAction";
import whiteLogo from "../assets/imgs/logo-white.png";
import redLogo from "../assets/imgs/logo1.png";



export const AppHeader = () => {

    const LargeFilterShow = useSelector((storeState) => storeState.headerModule.isLargeFilterShown)
    const smallFilterShow = useSelector((storeState) => storeState.headerModule.isSmallFilterShown)
    const isLogoWhite = useSelector((storeState) => storeState.headerModule.isLogoWhite)

    const [isSmallFilterShown, setIsSmallFilterShown] = useState(true)
    const [bigFilterStyle, setBigFilterStyle] = useState({ display: 'none' })
    const [smallFilterStyle, setsmallFilterStyle] = useState({ display: 'block' })
    const [menuModalShow, setMenuModalShow] = useState('none')
    const [logoColor, setLogoColor] = useState({ color: 'red' })
    const [logoImgSrc, setogoImgSrc] = useState("../assets/imgs/logo1.png")

    const dispatch = useDispatch()
    useEffect(() => {
        window.addEventListener('scroll', changeCss, { passive: true });
        updateLogoColor()
    }, [])

    useEffect(() => {
        if (smallFilterShow) setsmallFilterStyle({ display: 'block' })
    }, [smallFilterShow])

    useEffect(() => {
        updateLogoColor()
    }, [isLogoWhite])

    const updateLogoColor = () => {
        if (isLogoWhite) {
            setLogoColor({ color: 'white' })
            setogoImgSrc(whiteLogo)
            document.documentElement.style.setProperty('--headerbackgroundColor', 'unset');
            document.documentElement.style.setProperty('--bgc', '#unset');
            document.documentElement.style.setProperty('--headerFontColor', '#fff');
            document.documentElement.style.setProperty('--headerbackgroundColor', '#unset');
        }
        else {
            setLogoColor({ color: 'red' })
            setogoImgSrc(redLogo)
            document.documentElement.style.setProperty('--headerbackgroundColor', '#F7F7F7');
            document.documentElement.style.setProperty('--bgc', '#F7F7F7');
            document.documentElement.style.setProperty('--headerFontColor', '#000');
            document.documentElement.style.setProperty('--headerbackgroundColor', '#F7F7F7');
        }
    }

    const changeCss = () => {
        const scrollValue = document.documentElement.scrollTop
        if (scrollValue) {
            setBigFilterStyle({ display: 'none' })
            setsmallFilterStyle({ display: 'block' })
            dispatch(showSmallFilter())
        }
    }

    const onPresentFilter = () => {
        setsmallFilterStyle({ display: 'none' })
        setBigFilterStyle({ display: 'block' })
        dispatch(showLargeFilter())
    }

    const resetFilterBy = () => {
        dispatch(changeFilter({ location: '', from: null, to: null }))
    }

    const toggleModal = () => {
        setMenuModalShow((menuModalShow === 'none') ? 'flex' : 'none')
    }

    return (
        <header className="stock-margin main-header">
            <div className="left"></div>
            <div className="stock-margin-center flex-col">
                <nav className="grid-3-col main-nav">
                    <div className="logo" onClick={resetFilterBy}>
                        <NavLink to='/home'>
                            <div className="logo">
                                <li>
                                    <img src={logoImgSrc} alt="" />
                                </li>
                                <li style={logoColor}>Staybnb</li>
                            </div>
                        </NavLink>
                    </div>
                    <div onClick={() => onPresentFilter()} className="small-filte-parent" >
                        <div className="explore-filterr filterr small">
                            <div style={smallFilterStyle} >
                                {smallFilterShow && <SmallFilter />}
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
                                <UserMenuModal toggleModal={toggleModal} />
                            </div>
                        </li>
                    </div>
                </nav>
                <div className="explore-filterr filterr big">
                    <div>
                        {LargeFilterShow && <MainFilter />}
                        {/* style={bigFilterStyle} */}
                    </div>
                </div>

            </div>
            <div className="right"></div>
        </header >
    )
}