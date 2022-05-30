import { useState ,useRef} from "react"
import { NavLink } from "react-router-dom"
import { LoginSignup } from "./login-signup"

export const UserMenuModal = () => {

    const [isModalShow, setIsModalShow] = useState('none')
    const [isLogin,setIsLogin] = useState(true)

    const toggleModal = (isLogin)=>{
        setIsModalShow((isModalShow === 'none') ? 'block' : 'none')
        setIsLogin(isLogin)
    }
 
    return (<section className="user-menu-container">
        <p onClick={()=>toggleModal(false)} className="clickable noselect">Sign up</p>
        <p className="clickable noselect" onClick={(()=>toggleModal(true))}>Log in</p>
        <NavLink to='/login' >host your home</NavLink>
        <div style={{display:isModalShow}} className='modal-center'>
            <LoginSignup toggleModal={toggleModal} isLogin={isLogin}/>
        </div>
    </section>
    )
}