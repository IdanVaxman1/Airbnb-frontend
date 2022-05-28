import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action";
// import { NavLink } from "../assets/imgs/";
export const AppHeader = () => {
    const dispatch = useDispatch()

    
    const resetFilterBy = ()=>{
        dispatch(changeFilter({location: '', from: null, to: null}))
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
                <div className="">
                    <li onClick={resetFilterBy}><NavLink to='/explore'>Explore</NavLink></li>
                    <li><NavLink to='/explore'>Become a host</NavLink></li>
                    <li><NavLink to='/Notifications'><span className="material-icons">notifications_active</span></NavLink></li>
                    <li><NavLink to='/Login'>Log-in</NavLink></li>
                </div>
            </nav>
        </header>
    )
}