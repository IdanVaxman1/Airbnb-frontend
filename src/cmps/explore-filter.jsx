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
        maxPrice: 1200,
        roomType: "",
        amenities: []
    })
    const [priceIsShown, setPriceIsShown] = useState(false)
    const [typeIsShown, setTypeIsShown] = useState(false)

    const onShown = (type) => {
        setPriceIsShown(false)
        setTypeIsShown(false)
        if (type === 'Price') {
            setPriceIsShown(!priceIsShown)
            // setTypeIsShown(!typeIsShown)
        }
        else{
            // setPriceIsShown(!priceIsShown)
            setTypeIsShown(!typeIsShown)

        }

    }

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
            {priceIsShown && <div className='slider'>
                <Slider range allowCross={false} defaultValue={[0, 1200]} min={0} max={1200} onChange={handlePriceRange} />
                <p>{exploreFilterBy.minPrice}$ - {exploreFilterBy.maxPrice}$</p>
            </div>}
            {typeIsShown && <div className='room-type-filter'>
                <select name="roomType" onChange={handleChange}>
                    <option value="">show all</option>
                    <option value="Entire home/apt">Entire place</option>
                    <option value="Private room">Private room</option>
                    <option value="Hotel room">Hotel Room</option>
                    <option value="Shared room">Shared room</option>
                </select>
            </div>}


            <div >
                <div className='amn-container'>
                    <div className="enity-filter">
                        <div className={getClass('Price')} onClick={() => onShown('Price')}>Price</div>
                    </div>
                    <div className="enity-filter">
                        <div className={getClass('Type of place')} onClick={() => onShown('Type of place')}>Type of place</div>
                    </div>
                    <span className="enity-filter separator">|</span>
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