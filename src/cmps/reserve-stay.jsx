import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { DateRangeSelector } from './date-picker'
import { GuestPicker } from "./guest-picker"



export function ReserveStay(props) {
    const [guestsQty, setGuestsQty] = useState(0)
    const [totalGuestsQty, setTotalGuestsQty] = useState(null)
    const [guestModalShown, setGuestModalShown] = useState({ display: 'none' })
    const [isTrue, setIstrue] = useState(false)
    const filterBy = useSelector((storeState) => storeState.stayModule.filterBy)
    const [from,setFrom] = useState(null)
    const [to,setTo] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setPrice(filterBy.from,filterBy.to)
    }, [])

    const onUpdateGuestsQty = (adults, childs) => {
        const guestsQty = [{ adults }, { childs }]
        setGuestsQty(guestsQty)
        setTotalGuestsQty(adults + childs)
    }

    const onShowGusts = (isTrue) => {
        if (isTrue === false) setGuestModalShown({ display: 'block' })
        else setGuestModalShown({ display: 'none' })
        setIstrue(!isTrue)
    }

    const setPrice = (from, to) => {
        if (from && to) {
            const dayDiff = (to - from) / 1000 / 60 / 60 / 24
            setTotalPrice(dayDiff * props.stay.price)
            setFrom(from._d)
            setTo(to._d)
        }
    }

    const reserveStay = () =>{
        const reservation = {
            from,
            to,
            totalGuestsQty,
            totalPrice
        }
        console.log(reservation)
    }

    return (
        <div className="reserve-stay-container">
            <div className="reserve-stay-header">
                <li>${props.stay.price} <span>night</span></li>
                <li>{props.stay.reviewScores.value / 2}<span className="material-icons red">star</span> · <span>{props.stay.reviews.length} reviews</span></li>
            </div>
            <div className="picker-container">
                <div className="range-date-selector">
                <DateRangeSelector place={'reserve'} startDate={filterBy.from} endDate={filterBy.to} setPrice={setPrice} />
                </div>
                <div className="guests-pick">
                    <div className="flex-col">
                        <div >guests</div>
                        {(totalGuestsQty < 1) && <div><h4>Add guests</h4></div>}
                        {(totalGuestsQty > 0) && <div><h4>{totalGuestsQty} guest{(totalGuestsQty > 1) && 's'}</h4> </div>}
                    </div>
                    <div><span onClick={() => onShowGusts(isTrue)} className="material-icons cursor">expand_more</span></div>
                </div>
                <div style={guestModalShown}>
                    <GuestPicker onUpdateGuestsQty={onUpdateGuestsQty} />
                </div>
                <hr/>
                <p>Total : {totalPrice}$</p>
                <button onClick={reserveStay}>reserve</button>
            </div>
        </div>
    )
}