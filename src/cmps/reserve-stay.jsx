import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { DateRangeSelector } from './date-picker'
import { GuestPicker } from "./guest-picker"



export function ReserveStay(props) {
    const [startDate, setStartDate] = useState('2022-06-18')
    const [endDate, setEndtDate] = useState('2022-06-20')
    const [guestsQty, setGuestsQty] = useState(0)
    const [totalGuestsQty, setTotalGuestsQty] = useState(0)
    const [guestModalShown, setGuestModalShown] = useState({display: 'none'})
    const [isTrue, setIstrue] = useState(false)
    
    let filterBy = useSelector((storeState) => storeState.stayModule.filterBy)
    console.log(filterBy)
    
    const log = (val) => {
        console.log(val)
    }
    
    var isshown = false
    useEffect(() => {
        console.log('guestModalShown', guestModalShown)
    }, [])

    const onUpdateGuestsQty = (adults, childs) => {

        const guestsQty = [{ adults }, { childs }]
        setGuestsQty(guestsQty)
        setTotalGuestsQty(adults + childs)


    }

    const onShowGusts = (isTrue) => {

        
        if(isTrue === false ) setGuestModalShown( {display: 'block'})
        else setGuestModalShown( {display: 'none'})
        setIstrue(!isTrue)

        console.log('guestModalShown',guestModalShown)
      

    } 


    return (
        <div className="reserve-stay-container">
            <div className="reserve-stay-header">
                <li>${props.stay.price} <span>night</span></li>
                <li>{props.stay.reviewScores.value / 2}<span className="material-icons red">star</span> · <span>{props.stay.reviews.length} reviews</span></li>
            </div>
            <div className="picker-container">

                <div className="range-date-selector">
                    <DateRangeSelector />
                </div>
                <div className="guests-pick">
                    <div>guests: {totalGuestsQty}</div>
                    <div><span onClick={() => onShowGusts(isTrue)} class="material-icons">expand_more</span></div>
                </div>
                <div style={guestModalShown}>
                    <GuestPicker  onUpdateGuestsQty={onUpdateGuestsQty} />
                </div>

            </div>
        </div>
    )
}