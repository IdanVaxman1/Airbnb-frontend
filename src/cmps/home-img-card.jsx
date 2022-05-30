import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action"


export const HomeImgCard = ({ popularStay }) => {
    const dispatch = useDispatch()

    const dispatchFilter = () => {
        dispatch(changeFilter({ location: popularStay.address.city, from: null, to: null }))
    }
    return <div className="home-page-card">
        <NavLink to='/explore' onClick={dispatchFilter}>
            <img className="img-cover" src={popularStay[0].url}></img>
            <h1>{popularStay[1].name}</h1>
        </NavLink>
    </div>
}