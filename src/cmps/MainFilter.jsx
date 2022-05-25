import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom";
export const MainFilter = () => {
    const [isHome, setIsHome] = useState(true)
    const [byLocation,setLocation] = useState('')
    const [byStart,setStart] = useState('2022-04-18')
    const [byEnd,setEnd] = useState('2022-04-22')

    
    return (
        <div className="center-h" style={{position:'fixed', background: 'white', width: '800px', top: '300px', left:'300px'}}>

            <input name="location" type="text" placeholder="Location" />

            <input type="date" id="start" name="trip-start"
                value="2022-04-18"
                min="2022-01-01" max="2022-12-31"></input>

            <input type="date" id="end" name="trip-end"
                value="2022-04-22"
                min="2022-01-01" max="2022-12-31"></input>

            <NavLink to='/explore'>search</NavLink>
        </div>
    )
}