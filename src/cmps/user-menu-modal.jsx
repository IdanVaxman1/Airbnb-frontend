import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from "../store/actions/userActions"


export const UserMenuModal = (props) => {

    const dispatch = useDispatch()

    const toggleModal = (isLogin) => {
        dispatch(openModal(isLogin))
        closeSelf()
    }

    const closeSelf = ()=>{
        props.toggleModal()
    }

    return (<section className="user-menu-container">
        <p onClick={() => toggleModal(false)} className="clickable noselect">Sign up</p>
        <p onClick={(() => toggleModal(true))} className="clickable noselect" >Log in</p>
        <NavLink onClick={closeSelf}  to='/login' >host your home</NavLink>
    </section>
    )
}