import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { DateRangeSelector } from './date-picker'
import { GuestPicker } from "./guest-picker"
import { utilService } from "../services/util.service"

export function ReserveStay(props) {
    const [totalGuestsQty, setTotalGuestsQty] = useState(null)
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)

    const [showGuestsStyle, setShowGuestsStyle] = useState('expand_more')
    const [reservedBtnBc, setReservedBtnBc] = useState({ backgroundColor: `green` })
    const [guestModalShown, setGuestModalShown] = useState({ display: 'none' })
    const [isTrue, setIstrue] = useState(false)

    const filterBy = useSelector((storeState) => storeState.stayModule.filterBy)
    useEffect(() => {
        setPrice(filterBy.from, filterBy.to)
    }, [])

    const onMousMove = (e) => {  
        const x = e.clientX;
        const y = e.clientY;
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
        setReservedBtnBc({ '--mouse-y': y ,  '--mouse-x': x })
    }
    
    const onUpdateGuestsQty = (adults, childs) => {
        const guestsQty = [{ adults }, { childs }]
        setTotalGuestsQty(guestsQty)
        setTotalGuestsQty(adults + childs)
    }

    const onShowGusts = (isTrue) => {
        if (isTrue === false) {
            setGuestModalShown({ display: 'block' })
            setShowGuestsStyle('expand_less')
        }
        else {
            setShowGuestsStyle('expand_more')
            setGuestModalShown({ display: 'none' })
        }
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

    const reserveStay = () => {
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
                <li>${utilService.getUsPrice((props.stay.price))} <span>night</span></li>
                <li>{props.stay.reviewScores.value / 2}<span className="material-icons red">star</span> · <span>{props.stay.reviews.length} reviews</span></li>
            </div>
            <div className="picker-container">
                <div className="range-date-selector">
                    <DateRangeSelector place={'reserve'} startDate={filterBy.from} endDate={filterBy.to} setPrice={setPrice} />
                </div>
                <div onClick={() => onShowGusts(isTrue)} className="guests-pick">
                    <div className="flex-col">
                        <div >guests</div>
                        {(totalGuestsQty < 1) && <div><h4>Add guests</h4></div>}
                        {(totalGuestsQty > 0) && <div><h4>{totalGuestsQty} guest{(totalGuestsQty > 1) && 's'}</h4> </div>}
                    </div>
                    <div><span  className="material-icons cursor">{showGuestsStyle}</span></div>
                </div>
                <div style={guestModalShown}>
                    <GuestPicker className="guest-picker" onUpdateGuestsQty={onUpdateGuestsQty} />
                </div>
            </div>
            <button onClick={reserveStay} onMouseMove={(e) => onMousMove(e)}  style={reservedBtnBc} className='reserve-button'>reserve</button>
            <section className="price-section">
                {totalGuestsQty && from && to && <div>
                    <h4>You won't be charged yet</h4>
                    <div className="flex-row-space-btw price">
                        <h1>Price</h1>
                        <h1>${utilService.getUsPrice(totalPrice)}</h1>
                    </div>
                    <div className="flex-row-space-btw service-fee">
                        <h1>Service fee</h1>
                        <h1>$25</h1>
                    </div>
                    <div className="flex-row-space-btw total">
                        <h1>Total</h1>
                        <h1>${utilService.getUsPrice((totalPrice + 25))}</h1>
                    </div>
                </div>}
            </section>
        </div>
    )
}