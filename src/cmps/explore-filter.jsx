import React from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
import { useEffect, useRef, useState } from "react"
import { useDispatch } from 'react-redux'

export const ExploreFilter = (props) => {
    const timeOutId = useRef()

    const dispatch = useDispatch()
    const [exploreFilterBy, setExploreFilterBy] = useState({
        minPrice: 0,
        maxPrice: 2000,
        roomType: "Entire home/apt",
        amenities: []
    })

    useEffect(() => {
        props.onChangeExploreFilter(exploreFilterBy)
    }, [exploreFilterBy])


    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        setExploreFilterBy({ ...exploreFilterBy, [field]: value })
    }

    const handleButtonChange = (amenity) => {
        if (exploreFilterBy.amenities.includes(amenity)) {
            setExploreFilterBy({ ...exploreFilterBy, amenities: exploreFilterBy.amenities.filter(amn => amn !== amenity) })
        }
        else setExploreFilterBy({ ...exploreFilterBy, amenities: [...exploreFilterBy.amenities, amenity] })
    }

    const handlePriceRange = (value) => {
        if (timeOutId.current) clearTimeout(timeOutId.current)
        timeOutId.current = setTimeout(setExploreFilterBy, 500, { ...exploreFilterBy, minPrice: value[0], maxPrice: value[1] })
    }

    const getClass = (amenity) => {
        if (exploreFilterBy.amenities.includes(amenity)) return 'mini-filter small-border'
        return 'mini-filter'
    }

    return (
        <div className='secondery-filter'>
            <div className='slider'>
                <Slider range allowCross={false} defaultValue={[0, 1200]} min={0} max={1200} onChange={handlePriceRange} />
            </div>
            <p>{exploreFilterBy.minPrice}$ - {exploreFilterBy.maxPrice}$</p>
            <div className='room-type-filter'>
                <select name="roomType" onChange={handleChange}>
                    <option value="Entire home/apt">Entire place</option>
                    <option value="Private room">Private room</option>
                    <option value="Hotel room">Hotel Room</option>
                    <option value="Shared room">Shared room</option>
                </select>
            </div>


            <div >
                <div className='amn-container'>
                    <div className="enity-filter">
                        <div className={getClass('Wifi')} onClick={() => handleButtonChange('Wifi')}>Wifi</div>
                    </div>
                    <div className="enity-filter">
                        <div className={getClass('TV')} onClick={() => handleButtonChange('TV')}>TV</div>
                    </div>
                    <div className="enity-filter">
                        <div className={getClass('Kitchen')} onClick={() => handleButtonChange('Kitchen')}>Kitchen</div>
                    </div>
                    <div className="enity-filter">
                        <div className={getClass('Air conditioning')} onClick={() => handleButtonChange('Air conditioning')}>AC</div>
                    </div>
                </div>


            </div>
        </div>
    )
}