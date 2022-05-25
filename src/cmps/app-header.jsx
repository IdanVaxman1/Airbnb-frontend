import { NavLink } from "react-router-dom";
export const AppHeader = () => {
    return (
        <header>
            <nav className="main-nav">
                <div className="logo">
                    <li><NavLink to='/home'>logo</NavLink></li>
                </div>
                <div className="">
                    <li><NavLink to='/explore'>Explore</NavLink></li>
                    <li><NavLink to='/explore'>Become a host</NavLink></li>
                    <li><NavLink to='/Notifications'>🔔</NavLink></li>
                    <li><NavLink to='/Login'>Log-in</NavLink></li>
                </div>
            </nav>
        </header>
    )
}