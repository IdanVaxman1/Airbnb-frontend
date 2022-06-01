import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { DateRangeSelector } from './date-picker'
import { GuestPicker } from "./guest-picker"
import { utilService } from "../services/util.service"
import { userService } from "../services/user.service"

export function ReserveStay(props) {
    const [reservation, setReservation] = useState({
        checkIn: null,
        checkOut: null,
        adults: 0,
        childrens: 0,
        totalPrice: 1000,
        user: userService.getLoggedinUser(),
        stay:{name:props.stay.name,_id:props.stay._id},
        host:{name:props.stay.host.fullname,_id:props.stay.host._id}
    })

    const [showGuestsStyle, setShowGuestsStyle] = useState('expand_more')
    const [reservedBtnBc, setReservedBtnBc] = useState({ backgroundColor: `green` })
    const [guestModalShown, setGuestModalShown] = useState({ display: 'none' })
    const [isTrue, setIstrue] = useState(false)

    const filterBy = useSelector((storeState) => storeState.stayModule.filterBy)
    useEffect(() => {
        setDatesAndPrice(filterBy.from, filterBy.to)
    }, [])

    const onUpdateGuestsQty = (adults, childrens) => {
        setReservation({ ...reservation, adults, childrens })
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

    const setDatesAndPrice = (from, to) => {
        if (from && to) {
            const dayDiff = (to - from) / 1000 / 60 / 60 / 24
            setReservation({ ...reservation, checkIn: from._d, checkOut: to._d, totalPrice: dayDiff * props.stay.price })
        }
    }

    const reserveStay = () => {
        if (!reservation.checkIn || !reservation.checkOut || (reservation.adults + reservation.childrens) ===0) console.log('fill all details')
        else if(!reservation.user) console.log('u have to be logged in')
        else console.log(reservation)
    }

    const onMousMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
        setReservedBtnBc({ '--mouse-y': y, '--mouse-x': x })
    }

    return (
        <div className="reserve-stay-container">
            <div className="reserve-stay-header">
                <li>${utilService.getUsPrice((props.stay.price))} <span>night</span></li>
                <li>{props.stay.reviewScores.value / 2}<span className="material-icons red">star</span> · <span>{props.stay.reviews.length} reviews</span></li>
            </div>
            <div className="picker-container">
                <div className="range-date-selector">
                    <DateRangeSelector place={'reserve'} startDate={filterBy.from} endDate={filterBy.to} setDatesAndPrice={setDatesAndPrice} />
                </div>
                <div onClick={() => onShowGusts(isTrue)} className="guests-pick clickable">
                    <div className="flex-col">
                        <div >guests</div>
                        {((reservation.adults + reservation.childrens) < 1) && <div><h4>Add guests</h4></div>}
                        {((reservation.adults + reservation.childrens) > 0) && <div><h4>{(reservation.adults + reservation.childrens)} guest{((reservation.adults + reservation.childrens) > 1) && 's'}</h4> </div>}
                    </div>
                    <div><span className="material-icons cursor">{showGuestsStyle}</span></div>
                </div>
                <div style={guestModalShown}>
                    <GuestPicker className="guest-picker" onUpdateGuestsQty={onUpdateGuestsQty} />
                </div>
            </div>
            <button onClick={reserveStay} onMouseMove={(e) => onMousMove(e)} style={reservedBtnBc} className='reserve-button'>Reserve</button>
            <section className="price-section">
                {(reservation.adults || reservation.childrens) && reservation.checkIn && reservation.checkOut && <div>
                    <h4>You won't be charged yet</h4>
                    <div className="flex-row-space-btw price">
                        <h1>Price</h1>
                        <h1>${utilService.getUsPrice(reservation.totalPrice)}</h1>
                    </div>
                    <div className="flex-row-space-btw service-fee">
                        <h1>Service fee</h1>
                        <h1>$25</h1>
                    </div>
                    <div className="flex-row-space-btw total">
                        <h1>Total</h1>
                        <h1>${utilService.getUsPrice((reservation.totalPrice + 25))}</h1>
                    </div>
                </div>}
            </section>
        </div>
    )
}