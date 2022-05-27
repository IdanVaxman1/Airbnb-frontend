import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {DateRangeSelector} from './date-picker'


export function ReserveStay(props) {

    const [startDate,setStartDate] = useState('2022-06-18')
    const [endDate,setEndtDate] = useState('2022-06-20')

    let filterBy = useSelector((storeState) => storeState.stayModule.filterBy)
    console.log(filterBy)

    const log =(val)=>{
        console.log(val)
    }

    return (
        <div className="reserve-container">
            <div className="center-h-between" style={{ width: '310px' }}>
                <p><span>${props.stay.price} / night</span></p>
                <p>{props.stay.reviewScores.value / 2}<span className="material-icons red">star</span> · <span>{props.stay.reviews.length} reviews</span></p>
            </div>
            <DateRangeSelector/>
        </div>
    )
}