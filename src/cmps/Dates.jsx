import 'react-dates/initialize'
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment"
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export const Ranged = () => {
    const [startDate, setStartDate] = useState(moment().subtract(2, "year"))
    const [endDate, setEndDate] = useState(moment())
    const [focusedInput, setFocusedInput] = useState(null)

    const setDates = (dates) => {
        setStartDate(dates.startDate)
        setEndDate(dates.endDate)
        console.log(dates)

    }


    return (
        <div>
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="start" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="end" // PropTypes.string.isRequired,
                onDatesChange={() => setDates({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setFocusedInput({ focusedInput })} // PropTypes.func.isRequired,
            />
        </div>
    )
}
