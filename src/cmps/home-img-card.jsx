import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action"


export const HomeImgCard = ({ city }) => {
    const dispatch = useDispatch()

    const dispatchFilter = () => {
        dispatch(changeFilter({location: city.name, from:null,to:null}))
    }
    return <div className="home-page-card">
        <NavLink to='/explore' onClick={dispatchFilter}>
        <img className="img-cover" src={city.imgURL}></img>
        <h1>{city.name}</h1>
        </NavLink>
    </div>
}