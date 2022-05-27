import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action"
import { NavLink } from "react-router-dom"
export const MainFilter = () => {
    
    const dispatch = useDispatch()
    let [filterBy, setFilterBy] = useState({ location: '', from: '2022-06-18', to: '2022-06-20' })
    
    // filterBy=useSelector((storeState) => storeState.stayModule.filterBy)
    // console.log(filterBy)
    
    const dispatchFilter = () => {
        dispatch(changeFilter(filterBy))
    }

    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        setFilterBy({ ...filterBy, [field]: value })
    }

    return (
        <div className="total-filter">

            <div className="inpt-fillter">
                <input name="location" value={filterBy.location} type="text" placeholder="Anywhere" onChange={handleChange} />
            </div>
            <div className="inpt-fillter">

                <input type="date" id="start" name="from" onChange={handleChange}
                    value={filterBy.from}
                    min="2022-01-01" max="2022-12-31"></input>
            </div>
            <div className="inpt-fillter">
                <input type="date" id="to" name="to" onChange={handleChange}
                    value={filterBy.to}
                    min="2022-01-01" max="2022-12-31"></input>
            </div>

            <div onClick={dispatchFilter} style={{cursor:'pointer'}}>
                <div  className="inpt-fillter search-symbol">
                    <span className="material-symbols-sharp white">search
                        <NavLink to='/explore'></NavLink></span>
                </div>
            </div>
        </div>
    )
}