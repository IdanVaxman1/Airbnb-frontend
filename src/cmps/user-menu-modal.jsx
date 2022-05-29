import { useState ,useRef} from "react"
import Slider from 'rc-slider'
import { NavLink } from "react-router-dom";

export const UserMenuModal = () => {

    // const [minPrice, setMinPrice] = useState(0)
    // const [maxPrice, setMaxPrice] = useState(1200)
    // const timeOutId = useRef()

    return (<section className="user-menu-modal center">
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/login'>sign up</NavLink>
        <NavLink to='/login'>host your home</NavLink>
    </section>
    )
}