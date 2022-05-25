import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom";
export const MainFilter = () => {

    const [filterBy,setFilterBy] = useState({location:'',from:'2022-04-18',to:'2022-04-22'})
    useEffect(() => {
        console.log(filterBy)
        // send filter to reducer
    }, [filterBy])


    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        setFilterBy({...filterBy,[field]:value})
      }

    return (
        <div className="center-h" style={{position:'fixed', background: 'white', width: '800px', top: '300px', left:'300px'}}>

            <input name="location" value={filterBy.location} type="text" placeholder="Location" onChange={handleChange} />

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