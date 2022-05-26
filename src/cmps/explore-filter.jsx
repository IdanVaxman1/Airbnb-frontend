import React from 'react';
// import Slider, { Range } from 'rc-slider'
import { useEffect, useRef, useState } from "react"
import { useDispatch} from 'react-redux'
import { changeFilter } from "../store/actions/stay.action"
import { NavLink } from "react-router-dom"

export const ExploreFilter = () => {

    const dispatch = useDispatch()
    const [exploreFilterBy, setExploreFilterBy] = useState({
        minPrice: 0,
        maxPrice: 2000,
        roomType:"Entire home/apt",
        amenities:[]
    })

    // useEffect(() => {
    //     dispatch(changeFilter(exploreFilterBy))
    // }, [exploreFilterBy])


    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        setExploreFilterBy({ ...exploreFilterBy, [field]: value })
    }

    const handleButtonChange = (amenity) =>{
        if(exploreFilterBy.amenities.includes(amenity)){
            setExploreFilterBy({...exploreFilterBy,amenities:exploreFilterBy.amenities.filter(amn=>amn!==amenity)})
        }
        else setExploreFilterBy({...exploreFilterBy,amenities:[...exploreFilterBy.amenities,amenity]})
    }

    const log = (value) =>{
        console.log(value)
    }

    const getClass = (amenity)=>{
        if(exploreFilterBy.amenities.includes(amenity)) return 'explore-filter-button small-border'
        return 'explore-filter-button'
    }

    return (
        <div className="center-h">
            {/* <Slider range allowCross={false} defaultValue={[0, 20]} onChange={log} /> */}
            <select name="roomType" >
                <option value="Entire home/apt">Entire place</option>
                <option value="Private room">Private room</option>
            </select>
            {/* add more type whn data ready */}
            <div className={getClass('Wifi')} onClick={()=>handleButtonChange('Wifi')}>Wifi</div>
            <div className={getClass('TV')} onClick={()=>handleButtonChange('TV')}>TV</div>
            <div className={getClass('Kitchen')} onClick={()=>handleButtonChange('kitchen')}>Kitchen</div>
            <div className={getClass('air conditioning')} onClick={()=>handleButtonChange('air conditioning')}>AC</div>
        </div>
    )
}