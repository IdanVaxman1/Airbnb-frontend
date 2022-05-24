import { NavLink } from "react-router-dom";
export const AppHeader = () => {
    return (
        <header>
            <section className="center">
                <nav>
                    <NavLink to='/home'>home---</NavLink>
                    <NavLink to='/explore'>explore---</NavLink>
                </nav>
            </section>
        </header>
    )
}