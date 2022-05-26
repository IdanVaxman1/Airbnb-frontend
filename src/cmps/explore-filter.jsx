import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from "../store/actions/stay.action"
import { NavLink } from "react-router-dom"
export const MainFilter = () => {

    const dispatch = useDispatch()
    const [exploreexploreFilterBy, setExploreexploreFilterBy] = useState({
        minPrice: 0,
        maxPrice: 5000,
        roomType:"Entire home/apt",
        amenities:[]
    })
    const[wifi,toggleWifi]=useState()
    const[tv,toggleTv]=useState()
    const[ac,toggleAc]=useState()
    const[kitchen,toggleKitchen]=useState()

    useEffect(() => {
        dispatch(changeFilter(exploreFilterBy))
    }, [exploreFilterBy])


    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        setexploreFilterBy({ ...exploreFilterBy, [field]: value })
    }

    const handleButtonChange = (amenity) =>{
        


    }

    return (
        <div className="center-h">
            <p>price range</p>
            <select name="roomType" >
                <option value="Entire home/apt">Entire place</option>
                <option value="Private room">Private room</option>
            </select>
            {/* add more type whn data ready */}
            <div onClick={()=>handleButtonChange(wifi)}>Wifi</div>
            <div onClick={()=>handleButtonChange(tv)}>TV</div>
            <div onClick={()=>handleButtonChange(kitchen)}>Kitchen</div>
            <div onClick={()=>handleButtonChange(ac)}>AC</div>
        </div>
    )
}