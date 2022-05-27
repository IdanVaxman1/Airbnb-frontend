import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {DateRangeSelector} from './date-picker'


export function ReserveStay(props) {

    const [startDate,setStartDate] = useState('2022-06-18')
    const [endDate,setEndtDate] = useState('2022-06-20')

    const filterBy = useSelector((storeState) => storeState.stayModule.filterBy)

    return (
        <div className="reserve-stay-container">
            <div className="reserve-stay-header">
                <li>${props.stay.price} <span>night</span></li>
                <li>{props.stay.reviewScores.value / 2}<span className="material-icons red">star</span> · <span>{props.stay.reviews.length} reviews</span></li>
            </div>
            <DateRangeSelector place={'reserve'} startDate={filterBy.from} endDate={filterBy.to}/>
        </div>
    )
}