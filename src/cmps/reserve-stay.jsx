import { useEffect, useRef, useState } from "react"


export function ReserveStay(props) {
    // useEffect(() => {
    //     console.log(props.stay)
    // }, [])
    return (
        <div className="reserve-container">
            <div className="center-h-between">
                <p><span>${props.stay.price} / night</span></p>
                <p><span className="material-icons">star</span>{props.stay.reviewScores.value / 2} · <span>{props.stay.reviews.length} reviews</span></p>
            </div>
        </div>
    )
}