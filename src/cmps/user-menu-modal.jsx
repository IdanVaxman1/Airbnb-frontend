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

    const onLogout = () => {
        userService.logout()
        closeSelf()
    }

    return (<section className="user-menu-container">
        {!loggedinUser && <><li onClick={() => toggleModal(false)} className="clickable noselect">
            <p >Sign up</p>
        </li>
            <li onClick={() => toggleModal(true)} className="clickable noselect">
                <p  >Log in</p>
            </li></>}
        <li>
            <NavLink className='undecorate'  to='/trips' >Trips</NavLink>
        </li>
        <li>
            <NavLink className='undecorate' onClick={closeSelf} to='/login' >Host your home</NavLink>
        </li>
        {loggedinUser && <li>
            <p onClick={onLogout}>Log out</p>
        </li>}
    </section>
    )
}