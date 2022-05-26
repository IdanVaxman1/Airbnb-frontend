import { NavLink } from "react-router-dom";
// import { NavLink } from "../assets/imgs/";
export const AppHeader = () => {
    return (
        <header>
            <nav className="main-nav">
                <div className="logo">
                    <NavLink to='/home'>
                        <div className="logo">
                            <a>
                                <img src={require("../assets/imgs/logo1.png")} alt="" />
                            </a>
                            <li>StayBnb</li>
                        </div>
                    </NavLink>
                </div>
                <div className="">
                    <li><NavLink to='/explore'>Explore</NavLink></li>
                    <li><NavLink to='/explore'>Become a host</NavLink></li>
                    <li><NavLink to='/Notifications'><span class="material-icons">notifications_active</span></NavLink></li>
                    <li><NavLink to='/Login'>Log-in</NavLink></li>
                </div>
            </nav>
        </header>
    )
}