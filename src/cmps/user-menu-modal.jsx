import { useState ,useRef} from "react"
import { NavLink } from "react-router-dom"
import { Signup } from "./login-signup"

export const UserMenuModal = () => {

    const [isModalShow, setIsModalShow] = useState('none')
    const [isLogin,setIsLogin] = useState(true)
    // const [maxPrice, setMaxPrice] = useState(1200)
    // const timeOutId = useRef()

    const toggleModal = (isLogin)=>{
        setIsModalShow((isModalShow === 'none') ? 'block' : 'none')
        setIsLogin(isLogin)
    }
 
    return (<section className="user-menu-container">
        <p onClick={()=>toggleModal(false)} className="clickable">Sign up</p>
        <p className="clickable" onClick={(()=>toggleModal(true))}>Log in</p>
        <NavLink to='/login' >host your home</NavLink>
        <div style={{display:isModalShow}} className='modal-center'>
            <Signup toggleModal={toggleModal} isLogin={isLogin}/>
        </div>
    </section>
    )
}