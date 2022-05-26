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
<<<<<<< HEAD
            <span className="material-symbols-outlined">
home
</span>
            <NavLink to='/explore'>search</NavLink>
=======
            
            
            <div className="inpt-fillter search-symbol">
            <span className="material-symbols-sharp white">search
            <NavLink to='/explore'></NavLink></span>
            </div>
>>>>>>> 6fb307ee6ef9022a0d0eb27474b351b6d0cef239
        </div>
    )
}