import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action"
import { NavLink } from "react-router-dom"
export const MainFilter = () => {

    const dispatch = useDispatch()
    const [filterBy, setFilterBy] = useState({ location: '', from: '2022-04-18', to: '2022-04-22' })

    // useEffect(() => {
    //     loadFilterFromRedux()
    // }, [])

    useEffect(() => {
        dispatch(changeFilter(filterBy))
    }, [filterBy])

    // const loadFilterFromRedux = () => {
    //     filterBy = useSelector((storeState) => storeState.stayModule.state.FilterBy)
    // }

    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        setFilterBy({ ...filterBy, [field]: value })
    }

    
    return (
        <div>
            

            <input name="location" value={filterBy.location} type="text" placeholder="Location" onChange={handleChange}/>

            <input type="date" id="start" name="from" onChange={handleChange}
                value={filterBy.from}
                min="2022-01-01" max="2022-12-31"></input>

            <input type="date" id="to" name="to" onChange={handleChange}
                value={filterBy.to}
                min="2022-01-01" max="2022-12-31"></input>


            <NavLink to='/explore'>search</NavLink>
        </div>
    )
}