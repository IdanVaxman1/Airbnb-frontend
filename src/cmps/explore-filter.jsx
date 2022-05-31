import React from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
import { useEffect, useRef, useState } from "react"
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import Checkbox from '@mui/material/Checkbox'

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
    const [pricesData, setPricesData] = useState(null)
    const amenities = ['Wifi', 'TV', 'Kitchen', 'Air conditioning']


    useEffect(() => {
        getPricesData()

    }, [props.stays])

    const onShown = (type) => {
        setPriceIsShown(false)
        setTypeIsShown(false)
        if (type === 'Price') {
            setPriceIsShown(!priceIsShown)
        }
        else {
            setTypeIsShown(!typeIsShown)
        }
    }

    const getPricesData = () => {
        const data = props.stays.map(stay => {
            return { price: stay.price }
        })
        data.sort(function (a, b) {
            return a.price - b.price;
        });
        setPricesData(data)
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
        let className = 'mini-filter'
        if (exploreFilterBy.amenities.includes(amenity)) className += ' small-border'
        return className
    }

    if (!pricesData) return <h1>loading</h1>
    return (
        <div className='secondary-filter'>
            {priceIsShown && <div className='slider'>
                <BarChart width={240} height={120} data={pricesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="price" fill="#82ca9d" />
                </BarChart>
                <Slider range allowCross={false} defaultValue={[0, 1200]} min={0} max={1200} onChange={handlePriceRange} />
                <div className='flex-row-space-btw'>
                    <li>
                        ${utilService.getUsPrice(exploreFilterBy.minPrice)}
                    </li>
                    <li>
                        -
                    </li>
                    <li>
                        ${utilService.getUsPrice(exploreFilterBy.maxPrice)}
                    </li>
                </div>
            </div>}

            {typeIsShown && <div className='room-type-filter center'>
                <Checkbox defaultChecked/> <p>lalala</p>
                <Checkbox defaultChecked color="secondary" />
                <Checkbox defaultChecked color="success" />
                <Checkbox defaultChecked color="default" />
            </div>}
            
            <div >
                <div className='amn-container noselect'>
                    <div className="enity-filter">
                        <div className={getClass('Price')} onClick={() => onShown('Price')}>Price</div>
                    </div>
                    <div className="enity-filter">
                        <div className={getClass('Type of place')} onClick={() => onShown('Type of place')}>Type of place</div>
                    </div>
                    <span className="enity-filter separator">|</span>
                    {amenities.map(amenity => <div className="enity-filter" key={amenity}>
                        <div className={getClass(amenity)} onClick={() => handleButtonChange(amenity)}>{amenity}</div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

