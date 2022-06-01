import { NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { openModal } from "../store/actions/userActions"
import { userService } from "../services/user.service"


export const UserMenuModal = (props) => {

    const dispatch = useDispatch()
    const loggedinUser = userService.getLoggedinUser()

    const toggleModal = (isLogin) => {
        dispatch(openModal(isLogin))
        closeSelf()
    }

    const closeSelf = () => {
        props.toggleModal()
    }

    return (<section className="user-menu-container">
        {!loggedinUser && <><li onClick={() => toggleModal(false)} className="clickable noselect">
            <p >Sign up</p>
        </li>
        <li onClick={() => toggleModal(true)} className="clickable noselect">
            <p  >Log in</p>
        </li></>}
        <li>
            <NavLink className='undecorate' onClick={closeSelf} to='/login' >Host your home</NavLink>
        </li>
        {loggedinUser && <li>
            <p onClick={userService.logout}>Log out</p>
        </li>}
    </section>
    )
}