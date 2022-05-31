import { NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { openModal } from "../store/actions/userActions"


export const UserMenuModal = (props) => {

    const dispatch = useDispatch()

    const toggleModal = (isLogin) => {
        dispatch(openModal(isLogin))
        closeSelf()
    }

    const closeSelf = () => {
        props.toggleModal()
    }

    return (<section className="user-menu-container">
        <li>
            <p onClick={() => toggleModal(false)} className="clickable noselect">Sign up</p>
        </li>
        <li>
            <p onClick={() => toggleModal(true)} className="clickable noselect" >Log in</p>
        </li>
        <li>
            <NavLink className='undecorate' onClick={closeSelf} to='/login' >Host your home</NavLink>
        </li>
    </section>
    )
}